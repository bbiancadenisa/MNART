import type { AiQuizQuestion } from "../types/ai.types.js";

export const validateQuizQuestions = (
  questions: AiQuizQuestion[] | undefined,
): AiQuizQuestion[] => {
  if (!Array.isArray(questions)) return [];

  return questions.filter((question) => {
    return (
      typeof question.id === "string" &&
      typeof question.artworkId === "string" &&
      typeof question.question === "string" &&
      Array.isArray(question.options) &&
      question.options.length === 4 &&
      typeof question.correctAnswerIndex === "number" &&
      question.correctAnswerIndex >= 0 &&
      question.correctAnswerIndex <= 3
    );
  });
};
