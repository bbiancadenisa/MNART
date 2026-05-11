import "aframe";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type RoomId =
  | "room1"
  | "room2"
  | "room3"
  | "room4"
  | "room5"
  | "room6"
  | "room7"
  | "room8"
  | "room9"
  | "room10";

type Direction = "next" | "previous";

type Hotspot = {
  targetRoom: RoomId;
  label: string;
  direction: Direction;
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
        direction: "next",
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
        direction: "previous",
        position: new THREE.Vector3(-2.5, 1.45, -3.5)
      },
      {
        targetRoom: "room3",
        label: "Enter Room 3",
        direction: "next",
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
        direction: "previous",
        position: new THREE.Vector3(-2.5, 1.45, -3.5)
      },
      {
        targetRoom: "room4",
        label: "Enter Room 4",
        direction: "next",
        position: new THREE.Vector3(2.5, 1.45, -3.5)
      }
    ]
  },
  room4: {
    image: "/panoramas/room4.png",
    rotation: "0 -90 0",
    fov: 90,
    hotspots: [
      {
        targetRoom: "room3",
        label: "Back to Room 3",
        direction: "previous",
        position: new THREE.Vector3(-2.5, 1.45, -3.5)
      },
      {
        targetRoom: "room5",
        label: "Enter Room 5",
        direction: "next",
        position: new THREE.Vector3(2.5, 1.45, -3.5)
      }
    ]
  },
  room5: {
    image: "/panoramas/room5.png",
    rotation: "0 -90 0",
    fov: 90,
    hotspots: [
      {
        targetRoom: "room4",
        label: "Back to Room 4",
        direction: "previous",
        position: new THREE.Vector3(-2.5, 1.45, -3.5)
      },
      {
        targetRoom: "room6",
        label: "Enter Room 6",
        direction: "next",
        position: new THREE.Vector3(2.5, 1.45, -3.5)
      }
    ]
  },
  room6: {
    image: "/panoramas/room6.png",
    rotation: "0 -90 0",
    fov: 90,
    hotspots: [
      {
        targetRoom: "room5",
        label: "Back to Room 5",
        direction: "previous",
        position: new THREE.Vector3(-2.5, 1.45, -3.5)
      },
      {
        targetRoom: "room7",
        label: "Enter Room 7",
        direction: "next",
        position: new THREE.Vector3(2.5, 1.45, -3.5)
      }
    ]
  },
  room7: {
    image: "/panoramas/room7.png",
    rotation: "0 -90 0",
    fov: 90,
    hotspots: [
      {
        targetRoom: "room6",
        label: "Back to Room 6",
        direction: "previous",
        position: new THREE.Vector3(-2.5, 1.45, -3.5)
      },
      {
        targetRoom: "room8",
        label: "Enter Room 8",
        direction: "next",
        position: new THREE.Vector3(2.5, 1.45, -3.5)
      }
    ]
  },
  room8: {
    image: "/panoramas/room8.png",
    rotation: "0 -90 0",
    fov: 90,
    hotspots: [
      {
        targetRoom: "room7",
        label: "Back to Room 7",
        direction: "previous",
        position: new THREE.Vector3(-2.5, 1.45, -3.5)
      },
      {
        targetRoom: "room9",
        label: "Enter Room 9",
        direction: "next",
        position: new THREE.Vector3(2.5, 1.45, -3.5)
      }
    ]
  },
  room9: {
    image: "/panoramas/room9.png",
    rotation: "0 -90 0",
    fov: 90,
    hotspots: [
      {
        targetRoom: "room8",
        label: "Back to Room 8",
        direction: "previous",
        position: new THREE.Vector3(-2.5, 1.45, -3.5)
      },
      {
        targetRoom: "room10",
        label: "Enter Room 10",
        direction: "next",
        position: new THREE.Vector3(2.5, 1.45, -3.5)
      }
    ]
  },
  room10: {
    image: "/panoramas/room10.png",
    rotation: "0 -90 0",
    fov: 90,
    hotspots: [
      {
        targetRoom: "room9",
        label: "Back to Room 9",
        direction: "previous",
        position: new THREE.Vector3(-2.5, 1.45, -3.5)
      }
    ]
  }
} satisfies Record<RoomId, RoomConfig>;

export default function TourPage() {
  const sceneRef = useRef<AFrameSceneElement | null>(null);

  const [currentRoom, setCurrentRoom] = useState<RoomId>("room1");
  const [isTransitioning, setIsTransitioning] = useState(false);
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
              {hotspot.direction === "next" ? "→" : "←"}
            </button>
          )
      )}

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
