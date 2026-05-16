import { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import EndTourScreen from "./pages/EndTourPage/EndTourPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import QuizPage from "./pages/QuizPage/QuizPage";
import TourPage from "./pages/TourPage/TourPage";

export default function App() {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [isEnteringTour, setIsEnteringTour] = useState(false);

  const navigate = useNavigate();

  const startTour = (allowAudio: boolean) => {
    setAudioEnabled(allowAudio);
    setIsEnteringTour(true);

    window.setTimeout(() => {
      navigate("/tour");
      setIsEnteringTour(false);
    }, 900);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage onStartTour={startTour} />} />

        <Route
          path="/tour"
          element={
            <TourPage
              onEndTour={() => navigate("/end")}
              audioEnabled={audioEnabled}
              setAudioEnabled={setAudioEnabled}
            />
          }
        />

        <Route path="/end" element={<EndTourScreen />} />

        <Route path="/quiz" element={<QuizPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <div
        style={{
          pointerEvents: "none",
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          background: "black",
          opacity: isEnteringTour ? 1 : 0,
          transition: "opacity 900ms ease"
        }}
      />
    </>
  );
}
