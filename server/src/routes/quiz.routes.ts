import { Router } from "express";
import { generateQuiz } from "../controllers/quiz.controller.js";

export const quizRouter = Router();

quizRouter.post("/generate-quiz", generateQuiz);
