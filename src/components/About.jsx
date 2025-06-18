import React from 'react';
import { User, Calendar, Mail, Phone, MapPin } from 'lucide-react';
import styles from '../styles/About.module.css';

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Informações Pessoais</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <User className={styles.cardIcon} />
              Dados Pessoais
            </h3>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <Calendar className={styles.infoIcon} />
                <span>21/02/2008 (17 anos)</span>
              </div>
              <div className={styles.infoItem}>
                <Mail className={styles.infoIcon} />
                <span>yasmingoncalvessantos8@gmail.com</span>
              </div>
              <div className={styles.infoItem}>
                <Phone className={styles.infoIcon} />
                <span>(19) 98705-2274</span>
              </div>
              <div className={styles.infoItem}>
                <MapPin className={styles.infoIcon} />
                <span>Jardim Novo Cambuí, Hortolândia-SP</span>
              </div>
            </div>
          </div>
          <div className={styles.objectiveCard}>
            <h3 className={styles.cardTitle}>Objetivo Profissional</h3>
            <p className={styles.objectiveText}>
              Jovem aprendiz com foco em desenvolvimento de sistemas, administração e marketing. Busco crescer profissionalmente em ambiente que valorize inovação, aprendizado contínuo e excelência no atendimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;