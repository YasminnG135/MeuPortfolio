import { useState } from 'react';
import styles from '../styles/Overlay.module.css';

function Overlay({ rating, setRating, showOverlay, setShowOverlay }) {
  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    showOverlay && (
      <div className={styles.overlay}>
        <div className={styles.overlayContent}>
          <p>{rating}</p>
          <p className={styles.starsDisplay}>{'⭐'.repeat(rating)}</p>
          <button className={styles.closeBtn} onClick={closeOverlay}>
            Fechar
          </button>
        </div>
      </div>
    )
  );
}

export default Overlay;