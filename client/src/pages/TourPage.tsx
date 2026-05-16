import "aframe";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import ArtworkInfoModal from "../components/artwork-info-modal/ArtworkInfoModal";
import MiniMap from "../components/mini-map/MiniMap";
import { rooms } from "../utils/constants/rooms";
import type {
  AFrameSceneElement,
  Hotspot,
  InfoHotspot,
  RoomId
} from "../utils/types/tourTypes";
import { markArtworkAsVisited } from "../utils/visitedArtworks";

type LookControlsComponent = {
  pitchObject: THREE.Object3D;
  yawObject: THREE.Object3D;
};

type CameraWithLookControls = HTMLElement & {
  components?: {
    ["look-controls"]?: LookControlsComponent;
  };
};

type TourPageProps = {
  onEndTour: () => void;
  audioEnabled: boolean;
  setAudioEnabled: (value: boolean) => void;
};

export default function TourPage({
  onEndTour,
  audioEnabled,
  setAudioEnabled
}: TourPageProps) {
  const sceneRef = useRef<AFrameSceneElement | null>(null);
  const cameraRef = useRef<HTMLElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const getInitialRoom = (): RoomId => {
    const savedRoom = localStorage.getItem("mnart-current-room");

    if (
      savedRoom === "room1" ||
      savedRoom === "room2" ||
      savedRoom === "room3" ||
      savedRoom === "room4" ||
      savedRoom === "room5" ||
      savedRoom === "room6" ||
      savedRoom === "room7" ||
      savedRoom === "room8" ||
      savedRoom === "room9" ||
      savedRoom === "room10"
    ) {
      return savedRoom;
    }

    return "room1";
  };

  const [currentRoom, setCurrentRoom] = useState<RoomId>(getInitialRoom);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [viewerAngle, setViewerAngle] = useState(0);
  const [selectedArtwork, setSelectedArtwork] = useState<InfoHotspot | null>(
    null
  );

  const [isMuted, setIsMuted] = useState(!audioEnabled);
  const [volume, setVolume] = useState(0.35);

  const [visibleHotspots, setVisibleHotspots] = useState<
    Array<{ hotspot: Hotspot; x: number; y: number; visible: boolean }>
  >([]);

  const [visibleInfoHotspots, setVisibleInfoHotspots] = useState<
    Array<{ hotspot: InfoHotspot; x: number; y: number; visible: boolean }>
  >([]);

  const room = rooms[currentRoom];
  const isAudioMuted = isMuted || !audioEnabled;

  const goToRoom = (targetRoom: RoomId) => {
    if (isTransitioning) return;

    setSelectedArtwork(null);
    setIsTransitioning(true);

    window.setTimeout(() => {
      localStorage.setItem("mnart-current-room", targetRoom);
      setCurrentRoom(targetRoom);
    }, 450);

    window.setTimeout(() => {
      setIsTransitioning(false);
    }, 900);
  };

  const toggleAudio = async () => {
    const nextMutedState = !isMuted;

    setIsMuted(nextMutedState);

    if (!nextMutedState) {
      setAudioEnabled(true);
      localStorage.setItem("tour-sound-enabled", "true");
      await audioRef.current?.play().catch(() => undefined);
    } else {
      localStorage.setItem("tour-sound-enabled", "false");
    }
  };

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = volume;
    audioRef.current.muted = isAudioMuted;

    if (!isAudioMuted) {
      audioRef.current.play().catch(() => undefined);
    }
  }, [volume, isAudioMuted]);

  useEffect(() => {
    const cameraEl = cameraRef.current;
    if (!cameraEl) return;

    cameraEl.setAttribute("rotation", `0 ${room.spawnYaw} 0`);

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

      if (!camera) {
        animationFrame = requestAnimationFrame(updateHotspots);
        return;
      }

      const direction = new THREE.Vector3();
      camera.getWorldDirection(direction);

      const angle = Math.atan2(direction.x, -direction.z) * (180 / Math.PI);
      setViewerAngle(angle);

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

      const projectedInfoHotspots = (room.infoHotspots ?? []).map((hotspot) => {
        const projected = hotspot.position.clone();
        projected.project(camera);

        const x = (projected.x * 0.5 + 0.5) * width;
        const y = (-projected.y * 0.5 + 0.5) * height;

        return {
          hotspot,
          x,
          y,
          visible: projected.z < 1 && !isTransitioning && !selectedArtwork
        };
      });

      setVisibleHotspots(projectedHotspots);
      setVisibleInfoHotspots(projectedInfoHotspots);

      animationFrame = requestAnimationFrame(updateHotspots);
    };

    updateHotspots();

    return () => cancelAnimationFrame(animationFrame);
  }, [
    currentRoom,
    isTransitioning,
    room.hotspots,
    room.infoHotspots,
    selectedArtwork
  ]);

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
              {hotspot.direction === "next" ? "↑" : "↓"}
            </button>
          )
      )}

      {visibleInfoHotspots.map(
        ({ hotspot, x, y, visible }) =>
          visible && (
            <button
              key={`${currentRoom}-${hotspot.id}`}
              onClick={() => {
                markArtworkAsVisited(hotspot.id);
                setSelectedArtwork(hotspot);
              }}
              style={{
                position: "fixed",
                left: x,
                top: y,
                transform: "translate(-50%, -50%)",
                zIndex: 60,
                width: 46,
                height: 46,
                borderRadius: "50%",
                border: "2px solid white",
                background: "rgba(30,144,255,0.75)",
                color: "white",
                fontSize: 24,
                fontWeight: 700,
                cursor: "pointer",
                backdropFilter: "blur(6px)",
                boxShadow: "0 0 18px rgba(30,144,255,0.9)"
              }}
              title={hotspot.title}
            >
              i
            </button>
          )
      )}

      {currentRoom === "room10" && (
        <button
          onClick={onEndTour}
          style={{
            position: "fixed",
            left: "50%",
            bottom: 42,
            transform: "translateX(-50%)",
            zIndex: 90,
            padding: "18px 42px",
            borderRadius: 999,
            border: "2px solid rgba(255,255,255,0.85)",
            background: "rgba(180, 40, 40, 0.82)",
            color: "white",
            fontSize: 18,
            fontWeight: 800,
            cursor: "pointer",
            backdropFilter: "blur(12px)",
            boxShadow: "0 0 34px rgba(255,80,80,0.65)"
          }}
        >
          Finish Tour
        </button>
      )}

      <MiniMap
        currentRoom={currentRoom}
        viewerAngle={viewerAngle}
        onRoomClick={goToRoom}
      />

      <div
        style={{
          position: "fixed",
          top: 420,
          left: 20,
          zIndex: 2000,
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 18,
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          gap: 12
        }}
      >
        <button
          onClick={toggleAudio}
          style={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.25)",
            background: "rgba(255,255,255,0.08)",
            color: "white",
            cursor: "pointer",
            fontSize: 18
          }}
        >
          {isAudioMuted ? "🔇" : "🔊"}
        </button>

        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(event) => setVolume(Number(event.target.value))}
          style={{
            width: 120
          }}
        />
        <button
          onClick={() => audioRef.current?.play()}
          style={{
            border: "1px solid rgba(255,255,255,0.25)",
            background: "rgba(255,255,255,0.08)",
            color: "white",
            borderRadius: 999,
            padding: "8px 12px",
            cursor: "pointer"
          }}
        >
          Resume audio
        </button>
      </div>

      <ArtworkInfoModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />

      <audio ref={audioRef} src="/audio/museumAmbient.mp3" loop />

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
