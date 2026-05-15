import { useState } from "react";
import EndTourScreen from "./pages/EndTourScreen";
import LandingPage from "./pages/LandingPage";
import TourPage from "./pages/TourPage";

type AppScreen = "landing" | "tour" | "end";

const getInitialScreen = (): AppScreen => {
  const savedScreen = localStorage.getItem("mnart-current-screen");

  if (
    savedScreen === "landing" ||
    savedScreen === "tour" ||
    savedScreen === "end"
  ) {
    return savedScreen;
  }

  return "landing";
};

export default function App() {
  const [screen, setScreen] = useState<AppScreen>(getInitialScreen);
  const [audioEnabled, setAudioEnabled] = useState(
    localStorage.getItem("tour-sound-enabled") === "true"
  );
  const [isEnteringTour, setIsEnteringTour] = useState(false);

  const goToScreen = (nextScreen: AppScreen) => {
    localStorage.setItem("mnart-current-screen", nextScreen);
    setScreen(nextScreen);
  };

  const startTour = (allowAudio: boolean) => {
    setAudioEnabled(allowAudio);
    localStorage.setItem("tour-sound-enabled", String(allowAudio));

    setIsEnteringTour(true);

    setTimeout(() => {
      goToScreen("tour");
      setIsEnteringTour(false);
    }, 900);
  };

  return (
    <>
      {screen === "landing" && <LandingPage onStartTour={startTour} />}

      {screen === "tour" && (
        <TourPage
          onEndTour={() => goToScreen("end")}
          audioEnabled={audioEnabled}
          setAudioEnabled={setAudioEnabled}
        />
      )}

      {screen === "end" && (
        <EndTourScreen
          onReturnHome={() => {
            localStorage.setItem("mnart-current-room", "room1");
            goToScreen("landing");
          }}
          onTakeQuiz={() => alert("Quiz functionality coming next.")}
        />
      )}

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
