import "aframe";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type RoomId = "room1" | "room2" | "room3";

type Hotspot = {
  targetRoom: RoomId;
  label: string;
  position: THREE.Vector3;
};

type RoomConfig = {
  image: string;
  rotation: string;
  fov: number;
  hotspots: Hotspot[];
};

type AFrameSceneElement = HTMLElement & {
  camera?: THREE.Camera;
};

const rooms = {
  room1: {
    image: "/panoramas/room1.png",
    rotation: "0 -90 0",
    fov: 80,
    hotspots: [
      {
        targetRoom: "room2",
        label: "Enter Room 2",
        position: new THREE.Vector3(0, 1.45, -3.5)
      }
    ]
  },

  room2: {
    image: "/panoramas/room2.png",
    rotation: "0 -90 0",
    fov: 92,
    hotspots: [
      {
        targetRoom: "room1",
        label: "Back to Room 1",
        position: new THREE.Vector3(-2.5, 1.45, -3.5)
      },
      {
        targetRoom: "room3",
        label: "Enter Room 3",
        position: new THREE.Vector3(2.5, 1.45, -3.5)
      }
    ]
  },

  room3: {
    image: "/panoramas/room3.png",
    rotation: "0 -90 0",
    fov: 90,
    hotspots: [
      {
        targetRoom: "room2",
        label: "Back to Room 2",
        position: new THREE.Vector3(0, 1.45, -3.5)
      }
    ]
  }
} satisfies Record<RoomId, RoomConfig>;

export default function TourPage() {
  const sceneRef = useRef<AFrameSceneElement | null>(null);

  const [currentRoom, setCurrentRoom] = useState<RoomId>("room1");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [visibleHotspots, setVisibleHotspots] = useState<
    Array<{
      hotspot: Hotspot;
      x: number;
      y: number;
      visible: boolean;
    }>
  >([]);

  const room = rooms[currentRoom];

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
    let animationFrame: number;

    const updateHotspots = () => {
      const sceneEl = sceneRef.current;
      const camera = sceneEl?.camera;

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

        const isInFront = projected.z < 1;
        const isWithinRange = distanceFromCenter <= 500;

        return {
          hotspot,
          x,
          y,
          visible: isInFront && isWithinRange && !isTransitioning
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
      >
        <a-assets>
          <img id="room1" src="/panoramas/room1.png" alt="" />
          <img id="room2" src="/panoramas/room2.png" alt="" />
          <img id="room3" src="/panoramas/room31.png" alt="" />
        </a-assets>

        <a-sky src={`#${currentRoom}`} rotation={room.rotation}></a-sky>

        <a-camera fov={room.fov} position="0 1.6 0">
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
                background: "rgba(255, 255, 255, 0.25)",
                color: "white",
                fontSize: 30,
                cursor: "pointer",
                backdropFilter: "blur(6px)",
                boxShadow: "0 0 20px rgba(255,255,255,0.8)"
              }}
              title={hotspot.label}
            >
              →
            </button>
          )
      )}

      <div
        style={{
          pointerEvents: "none",
          position: "fixed",
          inset: 0,
          background: "black",
          opacity: isTransitioning ? 1 : 0,
          transition: "opacity 450ms ease-in-out",
          zIndex: 999
        }}
      />
    </div>
  );
}
