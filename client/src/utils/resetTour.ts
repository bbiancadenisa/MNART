import { clearVisitedArtworks } from "./visitedArtworks";

export const resetTour = () => {
  localStorage.removeItem("mnart-current-room");
  localStorage.removeItem("mnart-ai-quiz-generation-count");
  clearVisitedArtworks();
};
