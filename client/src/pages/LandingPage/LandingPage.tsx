import { useEffect, useRef, useState } from "react";
import "./LandingPage.css";

interface LandingPageProps {
  onStartTour: (audioEnabled: boolean) => void;
}

const LandingPage = ({ onStartTour }: LandingPageProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [showVideo, setShowVideo] = useState(false);
  const [audioChoice, setAudioChoice] = useState<boolean | null>(null);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setShowVideo(true);
    }, 10 * 1000);

    return () => window.clearTimeout(timeout);
  }, []);

  const handleAllowSound = async () => {
    setAudioChoice(true);
    setShowVideo(true);

    if (videoRef.current) {
      videoRef.current.muted = false;
      await videoRef.current.play().catch(() => undefined);
    }
  };

  const handleDeclineSound = () => {
    setAudioChoice(false);
    setShowVideo(true);
  };

  const handleStartTour = () => {
    onStartTour(audioChoice === true);
  };

  return (
    <main className="landing-page">
      <img
        className={`landing-cover ${showVideo ? "landing-cover-hidden" : ""}`}
        src="/landing/landing-cover.jpg"
        alt="Museum background"
      />
      {showVideo && (
        <video
          ref={videoRef}
          className="landing-video"
          src="/landing/landing-video.mp4"
          autoPlay
          muted={audioChoice !== true}
          loop
          playsInline
        />
      )}

      <div className="landing-overlay" />

      <section className="landing-content">
        <p className="landing-kicker">MNART Virtual Exhibition</p>
        <h1 className="landing-title">
          Explore the museum through an immersive virtual tour
        </h1>
        <p className="landing-subtitle">
          Navigate between rooms, discover artworks, and interact with the
          exhibition.
        </p>

        {audioChoice === null && (
          <div className="landing-sound-box">
            <p>Allow sound during the experience?</p>

            <div>
              <button onClick={handleAllowSound}>Allow Sound</button>
              <button onClick={handleDeclineSound}>Continue Muted</button>
            </div>
          </div>
        )}

        {audioChoice !== null && (
          <button
            className={`landing-start-button ${
              showVideo ? "landing-start-button-idle" : ""
            }`}
            onClick={() => handleStartTour()}
          >
            Start Tour
          </button>
        )}
      </section>
    </main>
  );
};

export default LandingPage;
