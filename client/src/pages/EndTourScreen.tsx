import "./EndTourScreen.css";

type EndTourScreenProps = {
  onReturnHome: () => void;
  onTakeQuiz: () => void;
};

export default function EndTourScreen({
  onReturnHome,
  onTakeQuiz
}: EndTourScreenProps) {
  return (
    <main className="end-tour-screen">
      <div className="end-tour-card">
        <p className="end-tour-kicker">Tour completed</p>

        <h1>You have reached the end of the tour.</h1>

        <p>What would you like to do next?</p>

        <div className="end-tour-actions">
          <button className="end-tour-primary" onClick={onTakeQuiz}>
            Take Quiz
          </button>

          <button className="end-tour-secondary" onClick={onReturnHome}>
            Return to Homepage
          </button>
        </div>
      </div>
    </main>
  );
}
