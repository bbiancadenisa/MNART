import { useEffect, useState } from "react";
import type { InfoHotspot } from "../../utils/types/tourTypes";

type ArtworkInfoModalProps = {
  artwork: InfoHotspot | null;
  onClose: () => void;
};

export default function ArtworkInfoModal({
  artwork,
  onClose
}: ArtworkInfoModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const artworkId = artwork?.id ?? null;

  useEffect(() => {
    if (!artworkId) return;
    queueMicrotask(() => setCurrentImageIndex(0));
  }, [artworkId]);

  if (!artwork) return null;

  const images = artwork.images ?? (artwork.image ? [artwork.image] : []);
  const currentImage = images[currentImageIndex];
  const hasMultipleImages = images.length > 1;

  const goPrevious = () => {
    setCurrentImageIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const goNext = () => {
    setCurrentImageIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 3000,
        background: "rgba(0,0,0,0.72)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 32
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          width: "min(1120px, 92vw)",
          height: "min(720px, 86vh)",
          background: "rgba(18,18,18,0.96)",
          border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: 24,
          overflow: "hidden",
          display: "flex",
          boxShadow: "0 30px 90px rgba(0,0,0,0.65)"
        }}
      >
        <div
          style={{
            position: "relative",
            flex: "0 0 62%",
            height: "100%",
            background: "#050505",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 28,
            boxSizing: "border-box",
            overflow: "hidden"
          }}
        >
          {currentImage && (
            <img
              src={currentImage}
              alt={artwork.title}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                borderRadius: 12,
                display: "block"
              }}
            />
          )}

          {hasMultipleImages && (
            <>
              <button
                onClick={goPrevious}
                style={{
                  position: "absolute",
                  left: 18,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.5)",
                  background: "rgba(0,0,0,0.5)",
                  color: "white",
                  fontSize: 24,
                  cursor: "pointer"
                }}
              >
                ‹
              </button>

              <button
                onClick={goNext}
                style={{
                  position: "absolute",
                  right: 18,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.5)",
                  background: "rgba(0,0,0,0.5)",
                  color: "white",
                  fontSize: 24,
                  cursor: "pointer"
                }}
              >
                ›
              </button>
            </>
          )}
        </div>

        <div
          style={{
            flex: "1 1 38%",
            minWidth: 0,
            height: "100%",
            padding: 32,
            boxSizing: "border-box",
            color: "white",
            overflowY: "auto"
          }}
        >
          <button
            onClick={onClose}
            style={{
              float: "right",
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.08)",
              color: "white",
              cursor: "pointer",
              fontSize: 20
            }}
          >
            ×
          </button>

          <h2 style={{ marginTop: 0, marginBottom: 8 }}>{artwork.title}</h2>

          {artwork.subtitle && (
            <p style={{ opacity: 0.7, marginTop: 0 }}>{artwork.subtitle}</p>
          )}

          <p
            style={{
              lineHeight: 1.65,
              fontSize: 16,
              color: "rgba(255,255,255,0.86)",
              whiteSpace: "pre-line"
            }}
          >
            {artwork.description}
          </p>
        </div>
      </div>
    </div>
  );
}
