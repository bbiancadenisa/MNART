export type ArtworkInput = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
};

export type CleanArtworkInput = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
};

export type RoomNarrationInput = {
  roomId: string;
  roomTitle?: string;
  roomDescription?: string;
  artworks: ArtworkInput[];
};

export type AiQuizQuestion = {
  id: string;
  artworkId: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
};
