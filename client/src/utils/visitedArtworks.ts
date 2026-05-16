const VISITED_ARTWORKS_KEY = "mnart-visited-artworks";

export const getVisitedArtworkIds = (): string[] => {
  const stored = localStorage.getItem(VISITED_ARTWORKS_KEY);

  if (!stored) return [];

  try {
    const parsed = JSON.parse(stored);

    if (Array.isArray(parsed)) {
      return parsed.filter((item) => typeof item === "string");
    }

    return [];
  } catch {
    return [];
  }
};

export const markArtworkAsVisited = (artworkId: string) => {
  const currentIds = getVisitedArtworkIds();

  if (currentIds.includes(artworkId)) return;

  const nextIds = [...currentIds, artworkId];

  localStorage.setItem(VISITED_ARTWORKS_KEY, JSON.stringify(nextIds));
};

export const clearVisitedArtworks = () => {
  localStorage.removeItem(VISITED_ARTWORKS_KEY);
};
