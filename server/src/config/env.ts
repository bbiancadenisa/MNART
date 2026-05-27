import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT ?? 5000;
export const CLIENT_URL = process.env.CLIENT_URL ?? "http://localhost:5173";
export const GEMINI_API_KEY = process.env.GEMINI_API_KEY ?? "";

if (!GEMINI_API_KEY) {
  console.warn("Missing GEMINI_API_KEY in environment variables.");
}
