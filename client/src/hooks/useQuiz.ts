import { useEffect, useMemo, useState } from "react";
import { generateAiQuiz } from "../services/generateAiQuiz";
import { buildStaticQuizQuestions } from "../utils/buildStaticQuizzQuestions";
import { getAllArtworks } from "../utils/getAllArtworks";
import {
  AI_GENERATION_COUNT_KEY,
  MAX_AI_GENERATIONS_PER_SESSION,
  MAX_QUESTIONS,
  MIN_QUESTIONS
} from "../utils/quizConstants";
import { shuffleArray } from "../utils/shuffleArray";
import type { QuizQuestion } from "../utils/types/quizzTypes";

const getAiGenerationCount = () => {
  return Number(localStorage.getItem(AI_GENERATION_COUNT_KEY) ?? 0);
};

const increaseAiGenerationCount = () => {
  const current = getAiGenerationCount();
  localStorage.setItem(AI_GENERATION_COUNT_KEY, String(current + 1));
};

const isValidQuizQuestion = (question: QuizQuestion) => {
  return (
    question.id &&
    question.artworkId &&
    question.question &&
    Array.isArray(question.options) &&
    question.options.length === 4 &&
    question.correctAnswerIndex >= 0 &&
    question.correctAnswerIndex <= 3
  );
};

export const useQuiz = () => {
  const allArtworks = useMemo(() => getAllArtworks(), []);

  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [isLoadingAiQuiz, setIsLoadingAiQuiz] = useState(true);
  const [quizSource, setQuizSource] = useState<"ai" | "static">("static");
  const [aiError, setAiError] = useState<string | null>(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const loadQuiz = async () => {
      const staticQuestions = buildStaticQuizQuestions();

      const canGenerateAi =
        getAiGenerationCount() < MAX_AI_GENERATIONS_PER_SESSION;

      if (!canGenerateAi) {
        setQuestions(staticQuestions);
        setQuizSource("static");
        setIsLoadingAiQuiz(false);
        return;
      }

      try {
        setIsLoadingAiQuiz(true);

        const aiQuestions = await generateAiQuiz();

        const validAiQuestions = shuffleArray(
          aiQuestions.filter(isValidQuizQuestion)
        ).slice(0, MAX_QUESTIONS);

        if (validAiQuestions.length >= MIN_QUESTIONS) {
          increaseAiGenerationCount();
          setQuestions(validAiQuestions);
          setQuizSource("ai");
        } else {
          setQuestions(staticQuestions);
          setQuizSource("static");
        }
      } catch {
        setAiError(
          "AI quiz generation failed. Static quiz was loaded instead."
        );
        setQuestions(staticQuestions);
        setQuizSource("static");
      } finally {
        setIsLoadingAiQuiz(false);
      }
    };

    loadQuiz();
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  const currentArtwork = allArtworks.find(
    (artwork) => artwork.id === currentQuestion?.artworkId
  );

  const currentImage =
    currentArtwork?.images?.[0] ?? currentArtwork?.image ?? undefined;

  const answerQuestion = (answerIndex: number) => {
    if (!currentQuestion) return;
    if (selectedAnswerIndex !== null) return;

    setSelectedAnswerIndex(answerIndex);

    if (answerIndex === currentQuestion.correctAnswerIndex) {
      setScore((current) => current + 1);
    }
  };

  const goNext = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setIsCompleted(true);
      return;
    }

    setCurrentQuestionIndex((current) => current + 1);
    setSelectedAnswerIndex(null);
  };

  return {
    questions,
    currentQuestion,
    currentArtwork,
    currentImage,
    currentQuestionIndex,
    selectedAnswerIndex,
    score,
    isCompleted,
    isLoadingAiQuiz,
    quizSource,
    aiError,
    answerQuestion,
    goNext
  };
};
