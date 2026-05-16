import { useEffect, useRef, useState } from "react";
import "./AudioControls.css";

interface AudioControlsProps {
  audioEnabled: boolean;
  setAudioEnabled: (value: boolean) => void;
}

const AudioControls = ({
  audioEnabled,
  setAudioEnabled
}: AudioControlsProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isMuted, setIsMuted] = useState(!audioEnabled);
  const [volume, setVolume] = useState(0.35);

  const isAudioMuted = isMuted || !audioEnabled;

  const toggleAudio = async () => {
    const nextMutedState = !isMuted;

    setIsMuted(nextMutedState);

    if (!nextMutedState) {
      setAudioEnabled(true);
      await audioRef.current?.play().catch(() => undefined);
    }
  };

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = volume;
    audioRef.current.muted = isAudioMuted;

    if (!isAudioMuted) {
      audioRef.current.play().catch(() => undefined);
    }
  }, [volume, isAudioMuted]);

  return (
    <>
      <div className="audio-controls">
        <button onClick={toggleAudio} className="audio-controls-toggle-button">
          {isAudioMuted ? "🔇" : "🔊"}
        </button>

        <input
          className="audio-controls-slider"
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(event) => setVolume(Number(event.target.value))}
        />

        <button
          onClick={() => audioRef.current?.play()}
          className="audio-controls-resume-button"
        >
          Resume audio
        </button>
      </div>

      <audio ref={audioRef} src="/audio/museumAmbient.mp3" loop />
    </>
  );
};

export default AudioControls;
