import cors from "cors";
import express from "express";
import { CLIENT_URL } from "./config/env.js";
import { narrationRouter } from "./routes/narration.routes.js";
import { quizRouter } from "./routes/quiz.routes.js";

export const app = express();

app.use(cors({ origin: CLIENT_URL }));
app.use(express.json({ limit: "1mb" }));

app.use("/api", quizRouter);
app.use("/api", narrationRouter);
