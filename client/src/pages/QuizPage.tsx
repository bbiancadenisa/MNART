import { useState } from "react";
import { getAllArtworks } from "../utils/getAllArtworks";
import { getVisitedArtworkIds } from "../utils/visitedArtworks";
import "./QuizPage.css";

const MIN_QUESTIONS = 5;
const MAX_QUESTIONS = 15;

type QuizPageProps = {
  onReturnHome: () => void;
  onReturnToTour: () => void;
};

type QuizQuestion = {
  id: string;
  artworkId: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
};

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const buildQuizQuestions = (): QuizQuestion[] => {
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

export default function QuizPage({
  onReturnHome,
  onReturnToTour
}: QuizPageProps) {
  const [questions] = useState<QuizQuestion[]>(() => buildQuizQuestions());

  const allArtworks = getAllArtworks();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

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

  if (questions.length < MIN_QUESTIONS) {
    return (
      <main className="quiz-page">
        <section className="quiz-card">
          <p className="quiz-kicker">Quiz unavailable</p>
          <h1>Not enough visited artworks found.</h1>
          <p>
            You need to visit artworks that provide at least {MIN_QUESTIONS}{" "}
            quiz questions before starting the quiz.
          </p>

          <div className="quiz-actions">
            <div className="quiz-actions">
              <button onClick={onReturnToTour}>Return to Tour</button>
              <button onClick={onReturnHome}>Return Home</button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (isCompleted) {
    return (
      <main className="quiz-page">
        <section className="quiz-card">
          <p className="quiz-kicker">Quiz completed</p>
          <h1>
            Your score: {score} / {questions.length}
          </h1>
          <p>
            This quiz was generated from the artworks you opened during the
            virtual tour.
          </p>

          <div className="quiz-actions">
            <button onClick={onReturnHome}>Return Home</button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="quiz-page">
      <section className="quiz-panel">
        <div className="quiz-image-side">
          {currentImage && (
            <img src={currentImage} alt={currentArtwork?.title ?? "Artwork"} />
          )}
        </div>

        <div className="quiz-content-side">
          <p className="quiz-kicker">
            Question {currentQuestionIndex + 1} / {questions.length}
          </p>

          <h1>{currentQuestion.question}</h1>

          <div className="quiz-options">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswerIndex === index;
              const isCorrect = index === currentQuestion.correctAnswerIndex;

              return (
                <button
                  key={`${currentQuestion.id}-${index}`}
                  onClick={() => answerQuestion(index)}
                  disabled={selectedAnswerIndex !== null}
                  className={[
                    "quiz-option",
                    selectedAnswerIndex !== null && isCorrect
                      ? "quiz-option-correct"
                      : "",
                    selectedAnswerIndex !== null && isSelected && !isCorrect
                      ? "quiz-option-wrong"
                      : ""
                  ].join(" ")}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {selectedAnswerIndex !== null && (
            <button className="quiz-next-button" onClick={goNext}>
              {currentQuestionIndex === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </button>
          )}
        </div>
      </section>
    </main>
  );
}
