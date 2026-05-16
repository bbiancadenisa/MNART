export const parseGeminiJson = <T>(text: string): T => {
  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const firstBrace = cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");

  if (firstBrace === -1 || lastBrace === -1) {
    throw new Error("No valid JSON object found in Gemini response.");
  }

  const jsonOnly = cleaned.slice(firstBrace, lastBrace + 1);

  return JSON.parse(jsonOnly) as T;
};
