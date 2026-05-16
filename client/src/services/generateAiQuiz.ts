import { getAllArtworks } from "../utils/getAllArtworks";
import type { AiQuizQuestion } from "../utils/types/quizzTypes";
import { getVisitedArtworkIds } from "../utils/visitedArtworks";
import { apiRequest } from "./apiClient";

type GenerateAiQuizResponse = {
  questions: AiQuizQuestion[];
};

export const generateAiQuiz = async (): Promise<AiQuizQuestion[]> => {
  const visitedArtworkIds = getVisitedArtworkIds();
  const allArtworks = getAllArtworks();

  const visitedArtworks = allArtworks
    .filter((artwork) => visitedArtworkIds.includes(artwork.id))
    .filter((artwork) => artwork.description.trim().length > 0)
    .map((artwork) => ({
      id: artwork.id,
      title: artwork.title,
      subtitle: artwork.subtitle,
      description: artwork.description
    }));

  const data = await apiRequest<GenerateAiQuizResponse>("/api/generate-quiz", {
    method: "POST",
    body: { artworks: visitedArtworks }
  });

  return data.questions;
};
