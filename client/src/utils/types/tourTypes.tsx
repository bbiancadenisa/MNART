import type * as THREE from "three";
import type { QuizQuestion } from "./quizzTypes";

export type LookControlsComponent = {
  pitchObject: THREE.Object3D;
  yawObject: THREE.Object3D;
};

export type CameraWithLookControls = HTMLElement & {
  components?: {
    ["look-controls"]?: LookControlsComponent;
  };
};

export type AFrameSceneElement = HTMLElement & {
  camera?: THREE.Camera;
};

export type RoomId =
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

export type Direction = "next" | "previous";

export type Hotspot = {
  targetRoom: RoomId;
  label: string;
  direction: Direction;
  position: THREE.Vector3;
};

export type RoomMapConfig = {
  x: number;
  y: number;
  northOffset: number;
};

export type RoomConfig = {
  image: string;
  rotation: string;
  fov: number;
  spawnYaw: number;
  map: RoomMapConfig;
  hotspots: Hotspot[];
  infoHotspots?: InfoHotspot[];
};

export type InfoHotspot = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  images?: string[];
  position: THREE.Vector3;
  quizQuestions?: QuizQuestion[];
};
