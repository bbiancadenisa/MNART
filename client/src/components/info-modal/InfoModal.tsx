import "./InfoModal.css";

interface InfoModalProps {
  title: string;
  subtitle: string;
  description: string;
  showActions?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  okButtonText?: string;
  cancelButtonText?: string;
}
const InfoModal = ({
  title,
  subtitle,
  description,
  showActions = false,
  onConfirm,
  onCancel,
  okButtonText,
  cancelButtonText
}: InfoModalProps) => {
  return (
    <div className="info-modal-container">
      <div className="info-modal-card">
        <p className="info-modal-subtitle">{subtitle}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        {showActions && (
          <div className="info-modal-actions">
            {okButtonText && (
              <button onClick={() => onConfirm?.()}>{okButtonText}</button>
            )}
            {cancelButtonText && (
              <button onClick={() => onCancel?.()}>{cancelButtonText}</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoModal;
