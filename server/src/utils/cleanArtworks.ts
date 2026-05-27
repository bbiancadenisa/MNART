import type { ArtworkInput, CleanArtworkInput } from "../types/ai.types.js";

export const cleanArtworks = (
  artworks: ArtworkInput[] | undefined,
): CleanArtworkInput[] => {
  if (!Array.isArray(artworks)) return [];

  return artworks
    .filter((artwork) => artwork.description?.trim())
    .map((artwork) => ({
      id: artwork.id,
      title: artwork.title || "Untitled artwork",
      subtitle: artwork.subtitle || "",
      description: artwork.description.trim(),
    }));
};
