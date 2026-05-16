import "aframe";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import ArtworkInfoModal from "../../components/artwork-info-modal/ArtworkInfoModal";
import AudioControls from "../../components/audio-toggle/AudioControls";
import MiniMap from "../../components/mini-map/MiniMap";
import RoomNarrationBox from "../../components/room-narration/RoomNarration";
import TransitionOverlay from "../../components/transition-overlay/TransitionOverlay";
import { useProjectedHotspots } from "../../hooks/useProjectedHotspots";
import { rooms } from "../../utils/constants/rooms";
import type {
  AFrameSceneElement,
  CameraWithLookControls,
  InfoHotspot,
  RoomId
} from "../../utils/types/tourTypes";
import { markArtworkAsVisited } from "../../utils/visitedArtworks";
import "./TourPage.css";

interface TourPageProps {
  onEndTour: () => void;
  audioEnabled: boolean;
  setAudioEnabled: (value: boolean) => void;
}

const TourPage = ({
  onEndTour,
  audioEnabled,
  setAudioEnabled
}: TourPageProps) => {
  const sceneRef = useRef<AFrameSceneElement | null>(null);
  const cameraRef = useRef<HTMLElement | null>(null);

  const getInitialRoom = (): RoomId => {
    const savedRoom = localStorage.getItem("mnart-current-room");
    if (savedRoom && savedRoom in rooms) {
      return savedRoom as RoomId;
    }
    return "room1";
  };

  const [currentRoom, setCurrentRoom] = useState<RoomId>(getInitialRoom);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<InfoHotspot | null>(
    null
  );
  const room = rooms[currentRoom];

  const { viewerAngle, visibleHotspots, visibleInfoHotspots } =
    useProjectedHotspots({
      sceneRef,
      hotspots: room.hotspots,
      infoHotspots: room.infoHotspots,
      isTransitioning,
      selectedArtwork
    });

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

  return (
    <div className="tour-container">
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
              className={`hotspot-button ${
                hotspot.direction === "next"
                  ? "hotspot-button-next"
                  : "hotspot-button-prev"
              }`}
              style={{
                left: x,
                top: y
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
              className="info-hotspot-button"
              style={{
                left: x,
                top: y
              }}
              title={hotspot.title}
            >
              i
            </button>
          )
      )}

      {currentRoom === "room10" && (
        <button className="finish-tour-button" onClick={onEndTour} style={{}}>
          Finish Tour
        </button>
      )}
      <MiniMap
        currentRoom={currentRoom}
        viewerAngle={viewerAngle}
        onRoomClick={goToRoom}
      />
      <AudioControls
        audioEnabled={audioEnabled}
        setAudioEnabled={setAudioEnabled}
      />
      <RoomNarrationBox currentRoom={currentRoom} audioEnabled={audioEnabled} />
      <ArtworkInfoModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
      <TransitionOverlay isTransitioning={isTransitioning} />
    </div>
  );
};

export default TourPage;
