import type * as THREE from "three";

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
};

export type AFrameSceneElement = HTMLElement & {
  camera?: THREE.Camera;
};
