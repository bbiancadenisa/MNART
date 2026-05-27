import { rooms } from "./constants/rooms";
import type { InfoHotspot } from "./types/tourTypes";

export const getAllArtworks = (): InfoHotspot[] => {
  return Object.values(rooms).flatMap((room) => room.infoHotspots ?? []);
};

export const getArtworkById = (artworkId: string): InfoHotspot | undefined => {
  return getAllArtworks().find((artwork) => artwork.id === artworkId);
};
