import type { Request, Response } from "express";
import { gemini, GEMINI_MODEL } from "../lib/gemini.js";
import { buildRoomNarrationPrompt } from "../prompts/roomNarrationPrompt.js";
import type { RoomNarrationInput } from "../types/ai.types.js";
import { cleanArtworks } from "../utils/cleanArtworks.js";

export const generateRoomNarration = async (req: Request, res: Response) => {
  try {
    const { roomId, roomTitle, roomDescription, artworks } =
      req.body as RoomNarrationInput;

    if (!roomId || !Array.isArray(artworks)) {
      return res.status(400).json({
        error: "Invalid room narration payload.",
      });
    }

    const clean = cleanArtworks(artworks);

    if (clean.length === 0) {
      return res.status(400).json({
        error: "No artworks with descriptions provided.",
      });
    }

    const response = await gemini.models.generateContent({
      model: GEMINI_MODEL,
      contents: buildRoomNarrationPrompt({
        roomId,
        roomTitle,
        roomDescription,
        artworks: clean,
      }),
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text;

    if (!text) {
      return res.status(500).json({
        error: "Empty response from Gemini.",
      });
    }

    const parsed = JSON.parse(text) as { narration?: string };

    if (!parsed.narration) {
      return res.status(500).json({
        error: "Invalid narration response.",
      });
    }

    return res.json({
      narration: parsed.narration,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Failed to generate room narration.",
    });
  }
};
