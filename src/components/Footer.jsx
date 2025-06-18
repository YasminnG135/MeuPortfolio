import React, { useState } from 'react';
import { Star, Heart, Github, Linkedin, Mail } from 'lucide-react';
import styles from '../styles/Footer.module.css';

function Footer() {
  const [rating, setRating] = useState(0);
  const [showRatingModal, setShowRatingModal] = useState(false);

  const handleStarClick = (value) => {
    setRating(value);
    setShowRatingModal(true);
  };

  const closeModal = () => {
    setShowRatingModal(false);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Yasmin Gonçalves Santos</h3>
            <p className={styles.sectionText}>
              Aprendiz em Desenvolvimento de Sistemas, Administração e Marketing
            </p>
            <div className={styles.socialLinks}>
              <a href="mailto:yasmingoncalvessantos8@gmail.com" className={styles.socialLink}>
                <Mail className={styles.socialIcon} />
              </a>
              <a href="https://github.com" className={styles.socialLink}>
                <Github className={styles.socialIcon} />
              </a>
              <a href="https://linkedin.com" className={styles.socialLink}>
                <Linkedin className={styles.socialIcon} />
              </a>
            </div>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Contato</h3>
            <div className={styles.contactInfo}>
              <p>📧 yasmingoncalvessantos8@gmail.com</p>
              <p>📱 (19) 98705-2274</p>
              <p>📍 Hortolândia-SP</p>
            </div>
          </div>
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Avalie este portfólio</h3>
            <div className={styles.rating}>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    className={`${styles.star} ${rating >= value ? styles.active : ''}`}
                    onClick={() => handleStarClick(value)}
                  >
                    <Star className={styles.starIcon} />
                  </button>
                ))}
              </div>
              <p className={styles.ratingText}>Clique nas estrelas para avaliar</p>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>
              © 2025 Yasmin Gonçalves Santos. Feito com <Heart className={styles.heartIcon} /> e React
            </p>
          </div>
        </div>
      </div>
      {showRatingModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>Obrigada pela avaliação!</h3>
            <div className={styles.modalRating}>
              <span className={styles.ratingNumber}>{rating}</span>
              <div className={styles.modalStars}>
                {'⭐'.repeat(rating)}
              </div>
            </div>
            <p>Sua opinião é muito importante para mim!</p>
            <button className={styles.closeButton} onClick={closeModal}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;