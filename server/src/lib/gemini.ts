import { GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from "../config/env.js";

export const gemini = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
});

export const GEMINI_MODEL = "gemini-3.1-flash-lite";
