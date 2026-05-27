import { rooms } from "../utils/constants/rooms";
import type { RoomId } from "../utils/types/tourTypes";
import { apiRequest } from "./apiClient";

type GenerateRoomNarrationResponse = {
  narration: string;
};

export const generateRoomNarration = async (
  roomId: RoomId
): Promise<string> => {
  const room = rooms[roomId];

  const artworks = (room.infoHotspots ?? []).map((artwork) => ({
    id: artwork.id,
    title: artwork.title,
    subtitle: artwork.subtitle,
    description: artwork.description
  }));

  const data = await apiRequest<GenerateRoomNarrationResponse>(
    "/api/generate-room-narration",
    {
      method: "POST",
      body: {
        roomId,
        roomTitle: roomId,
        roomDescription: "",
        artworks
      }
    }
  );

  return data.narration;
};
