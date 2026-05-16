import { useEffect, useState } from "react";
import * as THREE from "three";
import type {
  AFrameSceneElement,
  Hotspot,
  InfoHotspot
} from "../utils/types/tourTypes";

type UseProjectedHotspotsProps = {
  sceneRef: React.RefObject<AFrameSceneElement | null>;
  hotspots: Hotspot[];
  infoHotspots?: InfoHotspot[];
  isTransitioning: boolean;
  selectedArtwork: InfoHotspot | null;
};

export const useProjectedHotspots = ({
  sceneRef,
  hotspots,
  infoHotspots = [],
  isTransitioning,
  selectedArtwork
}: UseProjectedHotspotsProps) => {
  const [viewerAngle, setViewerAngle] = useState(0);
  const [visibleHotspots, setVisibleHotspots] = useState<
    Array<{ hotspot: Hotspot; x: number; y: number; visible: boolean }>
  >([]);
  const [visibleInfoHotspots, setVisibleInfoHotspots] = useState<
    Array<{ hotspot: InfoHotspot; x: number; y: number; visible: boolean }>
  >([]);

  useEffect(() => {
    let animationFrame: number;

    const updateHotspots = () => {
      const camera = sceneRef.current?.camera;

      if (!camera) {
        animationFrame = requestAnimationFrame(updateHotspots);
        return;
      }

      const direction = new THREE.Vector3();
      camera.getWorldDirection(direction);
      setViewerAngle(Math.atan2(direction.x, -direction.z) * (180 / Math.PI));
      const width = window.innerWidth;
      const height = window.innerHeight;

      setVisibleHotspots(
        hotspots.map((hotspot) => {
          const projected = hotspot.position.clone();
          projected.project(camera);
          return {
            hotspot,
            x: (projected.x * 0.5 + 0.5) * width,
            y: (-projected.y * 0.5 + 0.5) * height,
            visible: projected.z < 1 && !isTransitioning
          };
        })
      );

      setVisibleInfoHotspots(
        infoHotspots.map((hotspot) => {
          const projected = hotspot.position.clone();
          projected.project(camera);
          return {
            hotspot,
            x: (projected.x * 0.5 + 0.5) * width,
            y: (-projected.y * 0.5 + 0.5) * height,
            visible: projected.z < 1 && !isTransitioning && !selectedArtwork
          };
        })
      );

      animationFrame = requestAnimationFrame(updateHotspots);
    };

    updateHotspots();
    return () => cancelAnimationFrame(animationFrame);
  }, [sceneRef, hotspots, infoHotspots, isTransitioning, selectedArtwork]);
  return {
    viewerAngle,
    visibleHotspots,
    visibleInfoHotspots
  };
};
