import { useNavigate } from "react-router-dom";
import InfoModal from "../../components/info-modal/InfoModal";
import { useQuiz } from "../../hooks/useQuiz";
import { MIN_QUESTIONS } from "../../utils/quizConstants";
import { resetTour } from "../../utils/resetTour";
import "./QuizPage.css";

const QuizPage = () => {
  const navigate = useNavigate();

  const {
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
  } = useQuiz();

  const returnHome = () => {
    resetTour();
    navigate("/");
  };

  if (isLoadingAiQuiz) {
    return (
      <InfoModal
        title="Preparing your AI quiz..."
        subtitle="Generating quiz"
        description="Please wait while the quiz is generated from the artworks you visited."
      />
    );
  }

  if (questions.length < MIN_QUESTIONS) {
    return (
      <InfoModal
        title="Not enough visited artworks found."
        subtitle="Quiz unavailable"
        description={`You need to visit artworks that provide at least ${MIN_QUESTIONS} quiz questions before starting the quiz.`}
        showActions
        onCancel={returnHome}
        onConfirm={() => navigate("/tour")}
        okButtonText="Return to Tour"
        cancelButtonText="Return Home"
      />
    );
  }

  if (isCompleted) {
    return (
      <InfoModal
        title={`Your score: ${score} / ${questions.length}`}
        subtitle={
          quizSource === "ai" ? "AI quiz completed" : "Static quiz completed"
        }
        description="This quiz was based on the artworks you opened during the virtual tour."
        showActions
        cancelButtonText="Return Home"
        onCancel={returnHome}
      />
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

          <p className="quiz-kicker">
            {quizSource === "ai" ? "AI-generated quiz" : "Static quiz"}
          </p>

          {aiError && <p className="quiz-error">{aiError}</p>}

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
};

export default QuizPage;
