import type { CleanArtworkInput } from "../types/ai.types.js";

export const buildQuizPrompt = (artworks: CleanArtworkInput[]) => {
  return `
Generate a museum quiz based ONLY on the artworks below.

Rules:
- Return ONLY valid JSON.
- Generate 2 to 3 questions for each visited artwork.
- If there are many artworks, still generate questions for all of them; the frontend will later choose a maximum of 15.
- Use only information from the provided artwork descriptions.
- Do not invent facts.
- Each question must have exactly 4 options.
- correctAnswerIndex must be 0, 1, 2, or 3.
- Do not always place the correct answer at the same index.
- Questions must be in English.
- Do not repeat questions.
- Make the questions more thoughtful than simple "which artwork did you visit" questions.
- Use this exact JSON structure:

{
  "questions": [
    {
      "id": "ai-question-1",
      "artworkId": "room1-artwork-1",
      "question": "...",
      "options": ["...", "...", "...", "..."],
      "correctAnswerIndex": 0
    }
  ]
}

Artworks:
${JSON.stringify(artworks, null, 2)}
`;
};
