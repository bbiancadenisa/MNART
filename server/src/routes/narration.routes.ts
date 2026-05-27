import { Router } from "express";
import { generateRoomNarration } from "../controllers/narration.controller.js";

export const narrationRouter = Router();

narrationRouter.post("/generate-room-narration", generateRoomNarration);
