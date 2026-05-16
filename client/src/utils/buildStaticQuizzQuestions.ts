import { getAllArtworks } from "./getAllArtworks";
import { MAX_QUESTIONS } from "./quizConstants";
import { shuffleArray } from "./shuffleArray";
import type { QuizQuestion } from "./types/quizzTypes";
import { getVisitedArtworkIds } from "./visitedArtworks";

export const buildStaticQuizQuestions = (): QuizQuestion[] => {
  const visitedArtworkIds = getVisitedArtworkIds();
  const allArtworks = getAllArtworks();

  const visitedArtworks = allArtworks.filter((artwork) =>
    visitedArtworkIds.includes(artwork.id)
  );

  const availableQuestions = visitedArtworks.flatMap((artwork) =>
    (artwork.quizQuestions ?? []).map((question) => ({
      ...question,
      artworkId: artwork.id
    }))
  );

  const uniqueQuestions = Array.from(
    new Map(
      availableQuestions.map((question) => [question.id, question])
    ).values()
  );

  return shuffleArray(uniqueQuestions).slice(0, MAX_QUESTIONS);
};
