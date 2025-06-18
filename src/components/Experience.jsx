import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import styles from '../styles/Experience.module.css';

function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <Briefcase className={styles.titleIcon} />
            Experiência Profissional
          </h2>
        </div>
        <div className={styles.content}>
          <div className={styles.experienceCard}>
            <div className={styles.cardHeader}>
              <h3 className={styles.position}>Aprendiz - Auxiliar Administrativa</h3>
              <div className={styles.period}>
                <Calendar className={styles.periodIcon} />
                <span>Dez/2024 - Em andamento</span>
              </div>
            </div>
            <div className={styles.company}>
              <span>Medicar emergências médicas</span>
            </div>
            <div className={styles.description}>
              <p>
                Atuando como aprendiz na área administrativa, desenvolvendo competências em:
              </p>
              <ul className={styles.responsibilities}>
                <li>Organização e gestão de documentos</li>
                <li>Atendimento ao cliente e suporte administrativo</li>
                <li>Utilização de ferramentas Microsoft Office</li>
                <li>Apoio em processos operacionais da empresa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;