import type { Request, Response } from "express";
import { gemini, GEMINI_MODEL } from "../lib/gemini.js";
import { buildQuizPrompt } from "../prompts/quizPrompt.js";
import type { AiQuizQuestion, ArtworkInput } from "../types/ai.types.js";
import { cleanArtworks } from "../utils/cleanArtworks.js";
import { validateQuizQuestions } from "../utils/validateQuizQuestions.js";

export const generateQuiz = async (req: Request, res: Response) => {
  try {
    const artworks = req.body.artworks as ArtworkInput[] | undefined;
    const clean = cleanArtworks(artworks);

    if (!artworks || !Array.isArray(artworks) || artworks.length === 0) {
      return res.status(400).json({
        error: "No artworks provided.",
      });
    }

    if (clean.length === 0) {
      return res.status(400).json({
        error: "No artworks with descriptions provided.",
      });
    }

    const response = await gemini.models.generateContent({
      model: GEMINI_MODEL,
      contents: buildQuizPrompt(clean),
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

    const parsed = JSON.parse(text) as { questions?: AiQuizQuestion[] };
    const validQuestions = validateQuizQuestions(parsed.questions);

    return res.json({
      questions: validQuestions.slice(0, 15),
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Failed to generate AI quiz.",
    });
  }
};
