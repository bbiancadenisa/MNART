import room1Img from "../../assets/panoramas/room1.png";
import room10Img from "../../assets/panoramas/room10.png";
import room2Img from "../../assets/panoramas/room2.png";
import room3Img from "../../assets/panoramas/room3.png";
import room4Img from "../../assets/panoramas/room4.png";
import room5Img from "../../assets/panoramas/room5.png";
import room6Img from "../../assets/panoramas/room6.png";
import room7Img from "../../assets/panoramas/room7.png";
import room8Img from "../../assets/panoramas/room8.png";
import room9Img from "../../assets/panoramas/room9.png";
import { sphericalPosition } from "../sphericalPosition";
import type { RoomConfig, RoomId } from "../types/tourTypes";

export const rooms = {
  room1: {
    image: room1Img,
    rotation: "0 -90 0",
    fov: 80,
    spawnYaw: 0,
    map: { x: 230, y: 250, northOffset: -110 },
    hotspots: [
      {
        targetRoom: "room2",
        label: "Enter Room 2",
        direction: "next",
        position: sphericalPosition(152, 5)
      }
    ]
  },

  room2: {
    image: room2Img,
    rotation: "0 -90 0",
    fov: 92,
    spawnYaw: 40,
    map: { x: 255, y: 165, northOffset: -120 },
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
    ]
  },

  room3: {
    image: room3Img,
    rotation: "0 -90 0",
    fov: 90,
    spawnYaw: 0,
    map: { x: 255, y: 115, northOffset: -70 },
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
    ]
  },

  room4: {
    image: room4Img,
    rotation: "0 -90 0",
    fov: 90,
    spawnYaw: 15,
    map: { x: 255, y: 50, northOffset: 0 },
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
    ]
  },

  room5: {
    image: room5Img,
    rotation: "0 -90 0",
    fov: 90,
    spawnYaw: 280,
    map: { x: 120, y: 120, northOffset: 180 },
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
    ]
  },

  room6: {
    image: room6Img,
    rotation: "0 -90 0",
    fov: 90,
    spawnYaw: 50,
    map: { x: 100, y: 210, northOffset: 0 },
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
    ]
  },

  room7: {
    image: room7Img,
    rotation: "0 -90 0",
    fov: 90,
    spawnYaw: 80,
    map: { x: 120, y: 260, northOffset: -20 },
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
    ]
  },

  room8: {
    image: room8Img,
    rotation: "0 -90 0",
    fov: 90,
    spawnYaw: 0,
    map: { x: 200, y: 310, northOffset: 0 },
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
    ]
  },

  room9: {
    image: room9Img,
    rotation: "0 -90 0",
    fov: 90,
    spawnYaw: 50,
    map: { x: 270, y: 310, northOffset: 80 },
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
    ]
  },

  room10: {
    image: room10Img,
    rotation: "0 -90 0",
    fov: 90,
    spawnYaw: -50,
    map: { x: 430, y: 320, northOffset: 90 },
    hotspots: [
      {
        targetRoom: "room9",
        label: "Back to Room 9",
        direction: "previous",
        position: sphericalPosition(215, 15)
      }
    ]
  }
} satisfies Record<RoomId, RoomConfig>;
