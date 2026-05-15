const room1Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837295/room1_sbjsmr.png";
const room2Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837298/room2_mlkosg.png";
const room3Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837300/room3_mduv2d.png";
const room4Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837302/room4_trbtqb.png";
const room5Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837304/room5_knpwrq.png";
const room6Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837306/room6_jgxctf.png";
const room7Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837309/room7_sqolcg.png";
const room8Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837311/room8_y6rvng.png";
const room9Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837313/room9_s0c7uw.png";
const room10Img =
  "https://res.cloudinary.com/do6eyrjis/image/upload/v1778837315/room10_cvqpct.png";
import { sphericalPosition } from "../sphericalPosition";
import type { RoomConfig, RoomId } from "../types/tourTypes";
import { room10Artworks } from "./artworks/room10Artworks";
import { room1Artworks } from "./artworks/room1Artworks";
import { room2Artworks } from "./artworks/room2Artworks";
import { room3Artworks } from "./artworks/room3Artworks";
import { room4Artworks } from "./artworks/room4Artworks";
import { room5Artworks } from "./artworks/room5Artworks";
import { room6Artworks } from "./artworks/room6Artworks";
import { room7Artworks } from "./artworks/room7Artworks";
import { room8Artworks } from "./artworks/room8Artworks";
import { room9Artworks } from "./artworks/room9Artworks";

export const rooms = {
  room1: {
    image: room1Img,
    rotation: "0 -90 0",
    fov: 80,
    spawnYaw: 0,
    map: { x: 222, y: 225, northOffset: 70 },
    hotspots: [
      {
        targetRoom: "room2",
        label: "Enter Room 2",
        direction: "next",
        position: sphericalPosition(152, 5)
      }
    ],
    infoHotspots: room1Artworks
  },

  room2: {
    image: room2Img,
    rotation: "0 -90 0",
    fov: 92,
    spawnYaw: 40,
    map: { x: 255, y: 165, northOffset: 140 },
    hotspots: [
      {
        targetRoom: "room1",
        label: "Back to Room 1",
        direction: "previous",
        position: sphericalPosition(160, -5)
      },
      {
        targetRoom: "room3",
        label: "Enter Room 3",
        direction: "next",
        position: sphericalPosition(55, -8)
      }
    ],
    infoHotspots: room2Artworks
  },

  room3: {
    image: room3Img,
    rotation: "0 -90 0",
    fov: 90,
    spawnYaw: 0,
    map: { x: 270, y: 115, northOffset: 93 },
    hotspots: [
      {
        targetRoom: "room2",
        label: "Back to Room 2",
        direction: "previous",
        position: sphericalPosition(265, -5)
      },
      {
        targetRoom: "room4",
        label: "Enter Room 4",
        direction: "next",
        position: sphericalPosition(105, 5)
      }
    ],
    infoHotspots: room3Artworks
  },

  room4: {
    image: room4Img,
    rotation: "0 -90 0",
    fov: 90,
    spawnYaw: 15,
    map: { x: 230, y: 30, northOffset: 150 },
    hotspots: [
      {
        targetRoom: "room3",
        label: "Back to Room 3",
        direction: "previous",
        position: sphericalPosition(172, 10)
      },
      {
        targetRoom: "room5",
        label: "Enter Room 5",
        direction: "next",
        position: sphericalPosition(240, 10)
      }
    ],
    infoHotspots: room4Artworks
  },

  room5: {
    image: room5Img,
    rotation: "0 -90 0",
    fov: 90,
    spawnYaw: 280,
    map: { x: 125, y: 120, northOffset: 190 },
    hotspots: [
      {
        targetRoom: "room4",
        label: "Back to Room 4",
        direction: "previous",
        position: sphericalPosition(360, 10)
      },
      {
        targetRoom: "room6",
        label: "Enter Room 6",
        direction: "next",
        position: sphericalPosition(155, 10)
      }
    ],
    infoHotspots: room5Artworks
  },

  room6: {
    image: room6Img,
    rotation: "0 -90 0",
    fov: 90,
    spawnYaw: 50,
    map: { x: 155, y: 220, northOffset: -60 },
    hotspots: [
      {
        targetRoom: "room5",
        label: "Back to Room 5",
        direction: "previous",
        position: sphericalPosition(210, 10)
      },
      {
        targetRoom: "room7",
        label: "Enter Room 7",
        direction: "next",
        position: sphericalPosition(67, 10)
      }
    ],
    infoHotspots: room6Artworks
  },

  room7: {
    image: room7Img,
    rotation: "0 -90 0",
    fov: 90,
    spawnYaw: 80,
    map: { x: 145, y: 265, northOffset: 305 },
    hotspots: [
      {
        targetRoom: "room6",
        label: "Back to Room 6",
        direction: "previous",
        position: sphericalPosition(210, 12)
      },
      {
        targetRoom: "room8",
        label: "Enter Room 8",
        direction: "next",
        position: sphericalPosition(350, 10)
      }
    ],
    infoHotspots: room7Artworks
  },

  room8: {
    image: room8Img,
    rotation: "0 -90 0",
    fov: 90,
    spawnYaw: 0,
    map: { x: 190, y: 290, northOffset: 205 },
    hotspots: [
      {
        targetRoom: "room7",
        label: "Back to Room 7",
        direction: "previous",
        position: sphericalPosition(210, 10)
      },
      {
        targetRoom: "room9",
        label: "Enter Room 9",
        direction: "next",
        position: sphericalPosition(87, 10)
      }
    ],
    infoHotspots: room8Artworks
  },

  room9: {
    image: room9Img,
    rotation: "0 -90 0",
    fov: 90,
    spawnYaw: 50,
    map: { x: 290, y: 290, northOffset: 215 },
    hotspots: [
      {
        targetRoom: "room8",
        label: "Back to Room 8",
        direction: "previous",
        position: sphericalPosition(212, 10)
      },
      {
        targetRoom: "room10",
        label: "Enter Room 10",
        direction: "next",
        position: sphericalPosition(81, 10)
      }
    ],
    infoHotspots: room9Artworks
  },

  room10: {
    image: room10Img,
    rotation: "0 -90 0",
    fov: 90,
    spawnYaw: -50,
    map: { x: 450, y: 315, northOffset: 210 },
    hotspots: [
      {
        targetRoom: "room9",
        label: "Back to Room 9",
        direction: "previous",
        position: sphericalPosition(215, 15)
      }
    ],
    infoHotspots: room10Artworks
  }
} satisfies Record<RoomId, RoomConfig>;
