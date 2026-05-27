import type { CleanArtworkInput } from "../types/ai.types.js";

type BuildRoomNarrationPromptParams = {
  roomId: string;
  roomTitle?: string;
  roomDescription?: string;
  previousRoomId?: string;
  previousNarration?: string;
  artworks: CleanArtworkInput[];
};

export const buildRoomNarrationPrompt = ({
  roomId,
  roomTitle,
  roomDescription,
  previousRoomId,
  previousNarration,
  artworks,
}: BuildRoomNarrationPromptParams) => {
  return `
You are an AI museum guide.

Generate a short room narration for a virtual museum room.

Rules:
- Write in English.
- Use only the provided room and artwork information.
- Do not invent facts.
- Tone: elegant, clear, museum-like, immersive.
- Length: 120-170 words.
- This is part of a continuous guided tour.
- Do not start every narration with "Welcome".
- If previous narration is provided, create a smooth transition from the previous room to the current room.
- If previous narration is not provided, introduce the room naturally without sounding repetitive.
- Do not repeat the previous narration.
- The narration should introduce the room as a whole, not describe every artwork mechanically.
- Mention the main themes connecting the artworks.
- Return ONLY valid JSON using this structure:

{
  "narration": "..."
}

Previous room context:
${JSON.stringify(
  {
    previousRoomId: previousRoomId || "",
    previousNarration: previousNarration || "",
  },
  null,
  2,
)}

Current room:
${JSON.stringify(
  {
    roomId,
    roomTitle: roomTitle || "",
    roomDescription: roomDescription || "",
  },
  null,
  2,
)}

Current room artworks:
${JSON.stringify(artworks, null, 2)}
`;
};
