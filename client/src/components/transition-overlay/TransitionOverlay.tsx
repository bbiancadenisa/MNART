import "./TransitionOverlay.css";

interface TransitionOverlayProps {
  isTransitioning: boolean;
}

const TransitionOverlay = ({ isTransitioning }: TransitionOverlayProps) => {
  return (
    <div
      className="transition-overlay"
      style={{
        opacity: isTransitioning ? 0.25 : 0
      }}
    />
  );
};

export default TransitionOverlay;
