import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import styles from '../styles/Education.module.css';

function Education() {
  const educationData = [
    {
      level: "Ensino Médio Técnico",
      course: "Desenvolvimento de Sistemas",
      institution: "E.E Manoel Ignácio da Silva",
      period: "Em andamento",
      status: "current"
    },
    {
      level: "Ensino Fundamental II",
      institution: "E.E Manoel Ignácio da Silva",
      period: "Concluído em Dez/2022",
      status: "completed"
    },
    {
      level: "Ensino Fundamental II",
      institution: "Colégio 1 Mundo",
      period: "Concluído em Dez/2021",
      status: "completed"
    },
    {
      level: "Ensino Fundamental I",
      institution: "Patricia Maria Capellato Basso",
      period: "Concluído em Dez/2018",
      status: "completed"
    }
  ];

  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <GraduationCap className={styles.titleIcon} />
            Formação Acadêmica
          </h2>
        </div>
        <div className={styles.content}>
          <div className={styles.timeline}>
            {educationData.map((item, index) => (
              <div key={index} className={`${styles.timelineItem} ${styles[item.status]}`}>
                <div className={styles.timelineMarker}>
                  <GraduationCap className={styles.markerIcon} />
                </div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.educationLevel}>
                    {item.level}
                    {item.course && <span className={styles.course}> - {item.course}</span>}
                  </h3>
                  <div className={styles.institution}>{item.institution}</div>
                  <div className={styles.period}>
                    <Calendar className={styles.periodIcon} />
                    <span>{item.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;