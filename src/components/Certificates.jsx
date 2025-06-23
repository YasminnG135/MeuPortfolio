import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import styles from '../styles/Certificates.module.css';

function Certificates() {
  return (
    <section id="certificates" className={styles.certificates}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <Award className={styles.titleIcon} />
            Certificados
          </h2>
          <p className={styles.subtitle}>
            Certificações e cursos complementares à formação técnica
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.certificatesGrid}>
            <div className={styles.certificateCard}>
              <div className={styles.certificateImage}>
                <img
                  src="src\assets\certificado1.png"
                  alt="Certificado 1"
                  className={styles.certImage}
                />
              </div>
              <div className={styles.certificateOverlay}>
                <button className={styles.viewButton}>
                  <ExternalLink className={styles.viewIcon} />
                  Visualizar
                </button>
              </div>
            </div>
            <div className={styles.certificateCard}>
              <div className={styles.certificateImage}>
              <img
                  src="src\assets\certificado2.png"
                  alt="Certificado 2"
                  className={styles.certImage}
                />
              </div>
              <div className={styles.certificateOverlay}>
                <button className={styles.viewButton}>
                  <ExternalLink className={styles.viewIcon} />
                  Visualizar
                </button>
              </div>
            </div>
          </div>
          <div className={styles.certificateInfo}>
            <div className={styles.infoCard}>
              <h3>Certificações em Andamento</h3>
              <p>
                Atualmente cursando Ensino Médio Técnico em Desenvolvimento de Sistemas, onde estou adquirindo certificações em diversas tecnologias e metodologias de desenvolvimento.
              </p>
            </div>
            <div className={styles.infoCard}>
              <h3>Áreas de Interesse</h3>
              <ul className={styles.interestList}>
                <li>Desenvolvimento Web (Front-end e Back-end)</li>
                <li>Programação em Python</li>
                <li>Marketing Digital</li>
                <li>Administração e Gestão</li>
                <li>Análise de Sistemas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;