import { useEffect, useState } from "react";
import type { InfoHotspot } from "../../utils/types/tourTypes";
import "./ArtworkInfoModal.css";

type ArtworkInfoModalProps = {
  artwork: InfoHotspot | null;
  onClose: () => void;
};

const ArtworkInfoModal = ({ artwork, onClose }: ArtworkInfoModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const artworkId = artwork?.id ?? null;

  useEffect(() => {
    if (!artworkId) return;
    queueMicrotask(() => setCurrentImageIndex(0));
  }, [artworkId]);

  if (!artwork) return null;

  const images = artwork.images ?? (artwork.image ? [artwork.image] : []);
  const currentImage = images[currentImageIndex];

  const goPrevious = () => {
    const newIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const goNext = () => {
    const newIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="artwork-modal-overlay" onClick={onClose}>
      <div
        className="artwork-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="artwork-modal-image-section">
          {currentImage && (
            <img
              className="artwork-modal-image"
              src={currentImage}
              alt={artwork.title}
            />
          )}

          {images.length > 1 && (
            <>
              <button
                className="artwork-modal-nav-button artwork-modal-nav-button-left"
                onClick={goPrevious}
              >
                {"<"}
              </button>
              <button
                className="artwork-modal-nav-button artwork-modal-nav-button-right"
                onClick={goNext}
              >
                {">"}
              </button>
            </>
          )}
        </div>

        <div className="artwork-modal-content">
          <button className="artwork-modal-close-button" onClick={onClose}>
            {"x"}
          </button>

          <h2 className="artwork-modal-title">{artwork.title}</h2>
          {artwork.subtitle && (
            <p className="artwork-modal-subtitle">{artwork.subtitle}</p>
          )}
          <p className="artwork-modal-description">{artwork.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtworkInfoModal;
