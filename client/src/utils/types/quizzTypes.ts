export type QuizQuestion = {
  id: string;
  artworkId?: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
};

export type AiQuizQuestion = {
  id: string;
  artworkId: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
};
