import { useEffect, useState } from "react";
import { generateRoomNarration } from "../../services/generateRoomNarration";
import type { RoomId } from "../../utils/types/tourTypes";
import "./RoomNarration.css";

type RoomNarrationBoxProps = {
  currentRoom: RoomId;
  audioEnabled: boolean;
};

const RoomNarrationBox = ({
  currentRoom,
  audioEnabled
}: RoomNarrationBoxProps) => {
  const [narration, setNarration] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const getNarrationStorageKey = (roomId: RoomId) => {
    return `mnart-room-narration-${roomId}`;
  };

  const stopNarration = () => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const speakNarration = (text: string) => {
    if (!audioEnabled) return;
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = "en-US";
    utterance.rate = 0.92;
    utterance.pitch = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    let isCancelled = false;

    const loadNarration = async () => {
      const storageKey = getNarrationStorageKey(currentRoom);
      const cachedNarration = localStorage.getItem(storageKey);
      stopNarration();
      setError(null);

      if (cachedNarration) {
        setNarration(cachedNarration);
        if (audioEnabled) {
          window.setTimeout(() => {
            speakNarration(cachedNarration);
          }, 300);
        }
        return;
      }

      try {
        setIsLoading(true);
        setNarration("");
        const generatedNarration = await generateRoomNarration(currentRoom);
        if (isCancelled) return;
        localStorage.setItem(storageKey, generatedNarration);
        setNarration(generatedNarration);
        if (audioEnabled) {
          window.setTimeout(() => {
            speakNarration(generatedNarration);
          }, 300);
        }
      } catch {
        if (isCancelled) return;
        setError("The AI guide could not generate narration right now.");
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    loadNarration();
    return () => {
      isCancelled = true;
      stopNarration();
    };
  }, [currentRoom, audioEnabled]);

  return (
    <div className="room-narration-box">
      <p className="room-narration-kicker">AI Museum Guide</p>
      {isLoading && (
        <p className="room-narration-loading">Preparing room narration...</p>
      )}
      {error && <p className="room-narration-error">{error}</p>}
      {!isLoading && !error && (
        <>
          <p className="room-narration-text">{narration}</p>
          {narration && (
            <div className="room-narration-actions">
              <button
                className="room-narration-button"
                onClick={() => speakNarration(narration)}
              >
                Replay
              </button>
              {isSpeaking && (
                <button
                  className="room-narration-button"
                  onClick={stopNarration}
                >
                  Stop
                </button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RoomNarrationBox;
