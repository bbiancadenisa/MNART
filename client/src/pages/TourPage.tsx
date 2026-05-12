import "aframe";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import MiniMap from "../components/mini-map/MiniMap";
import { rooms } from "../utils/constants/rooms";
import type {
  AFrameSceneElement,
  Hotspot,
  RoomId
} from "../utils/types/tourTypes";

export default function TourPage() {
  const sceneRef = useRef<AFrameSceneElement | null>(null);

  const [currentRoom, setCurrentRoom] = useState<RoomId>("room1");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [viewerAngle, setViewerAngle] = useState(0);
  const cameraRef = useRef<HTMLElement | null>(null);
  const room = rooms[currentRoom];

  const [visibleHotspots, setVisibleHotspots] = useState<
    Array<{ hotspot: Hotspot; x: number; y: number; visible: boolean }>
  >([]);

  const goToRoom = (targetRoom: RoomId) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentRoom(targetRoom);
    }, 450);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 900);
  };

  useEffect(() => {
    const cameraEl = cameraRef.current;

    if (!cameraEl) return;

    cameraEl.setAttribute("rotation", `0 ${room.spawnYaw} 0`);

    type LookControlsComponent = {
      pitchObject: THREE.Object3D;
      yawObject: THREE.Object3D;
    };

    type CameraWithLookControls = HTMLElement & {
      components?: {
        ["look-controls"]?: LookControlsComponent;
      };
    };

    const typedCameraEl = cameraEl as CameraWithLookControls;

    const lookControls = typedCameraEl.components?.["look-controls"];

    if (lookControls) {
      lookControls.pitchObject.rotation.x = 0;

      lookControls.yawObject.rotation.y = THREE.MathUtils.degToRad(
        room.spawnYaw
      );
    }
  }, [currentRoom, room.spawnYaw]);

  useEffect(() => {
    let animationFrame: number;

    const updateHotspots = () => {
      const sceneEl = sceneRef.current;
      const camera = sceneEl?.camera;

      if (camera) {
        const direction = new THREE.Vector3();
        camera.getWorldDirection(direction);

        const angle = Math.atan2(direction.x, -direction.z) * (180 / Math.PI);
        setViewerAngle(angle);
      }

      if (!camera) {
        animationFrame = requestAnimationFrame(updateHotspots);
        return;
      }

      const width = window.innerWidth;
      const height = window.innerHeight;
      const centerX = width / 2;
      const centerY = height / 2;

      const projectedHotspots = room.hotspots.map((hotspot) => {
        const projected = hotspot.position.clone();
        projected.project(camera);

        const x = (projected.x * 0.5 + 0.5) * width;
        const y = (-projected.y * 0.5 + 0.5) * height;

        const distanceFromCenter = Math.sqrt(
          Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
        );

        return {
          hotspot,
          x,
          y,
          visible:
            projected.z < 1 && distanceFromCenter <= 500 && !isTransitioning
        };
      });

      setVisibleHotspots(projectedHotspots);
      animationFrame = requestAnimationFrame(updateHotspots);
    };

    updateHotspots();
    return () => cancelAnimationFrame(animationFrame);
  }, [currentRoom, isTransitioning, room.hotspots]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        background: "black"
      }}
    >
      <a-scene
        ref={sceneRef}
        vr-mode-ui="enabled: true"
        renderer="antialias: true; colorManagement: true;"
        style={{
          transform: isTransitioning ? "scale(1.12)" : "scale(1)",
          transition: "transform 700ms ease-in-out",
          transformOrigin: "center center"
        }}
      >
        <a-assets>
          {Object.entries(rooms).map(([id, config]) => (
            <img key={id} id={id} src={config.image} alt="" />
          ))}
        </a-assets>

        <a-sky src={`#${currentRoom}`} rotation={room.rotation}></a-sky>

        <a-camera ref={cameraRef} fov={room.fov} position="0 1.6 0">
          <a-cursor visible="false"></a-cursor>
        </a-camera>
      </a-scene>

      {visibleHotspots.map(
        ({ hotspot, x, y, visible }) =>
          visible && (
            <button
              key={`${currentRoom}-${hotspot.targetRoom}`}
              onClick={() => goToRoom(hotspot.targetRoom)}
              style={{
                position: "fixed",
                left: x,
                top: y,
                transform: "translate(-50%, -50%)",
                zIndex: 50,
                width: 64,
                height: 64,
                borderRadius: "50%",
                border: "2px solid white",
                background:
                  hotspot.direction === "next"
                    ? "rgba(0, 180, 80, 0.65)"
                    : "rgba(220, 40, 40, 0.65)",
                color: "white",
                fontSize: 30,
                cursor: "pointer",
                backdropFilter: "blur(6px)",
                boxShadow:
                  hotspot.direction === "next"
                    ? "0 0 20px rgba(0,255,120,0.85)"
                    : "0 0 20px rgba(255,70,70,0.85)"
              }}
              title={hotspot.label}
            >
              {"↑"}
            </button>
          )
      )}
      <MiniMap
        currentRoom={currentRoom}
        viewerAngle={viewerAngle}
        onRoomClick={goToRoom}
      />

      <div
        style={{
          pointerEvents: "none",
          position: "fixed",
          inset: 0,
          background: "black",
          opacity: isTransitioning ? 0.25 : 0,
          transition: "opacity 450ms ease-in-out",
          zIndex: 999
        }}
      />
    </div>
  );
}
