import React from "react";
import styles from "../styles/modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  imageUrl: string;
}

const PortfolioModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  imageUrl,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_left}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.description_container}>
          <p className={styles.description_text}>{description}</p>
        </div>
      </div>
      <div className={styles.modal_right}>
        <img src={imageUrl} alt={title} />
      </div>
      <button className={styles.close_button} onClick={onClose}>
        X
      </button>
    </div>
  );
};

export default PortfolioModal;
