import React from 'react';
import { Code, Monitor, Settings, Palette, TrendingUp } from 'lucide-react';
import styles from '../styles/Skills.module.css';

function Skills() {
  const skillsData = [
    {
      category: "Front-end",
      icon: <Code className={styles.categoryIcon} />,
      skills: ["React", "HTML5", "CSS3", "JavaScript", "Responsive Design"],
      color: "blue"
    },
    {
      category: "Back-end",
      icon: <Monitor className={styles.categoryIcon} />,
      skills: ["Python", "PyQt5"],
      color: "green"
    },
    {
      category: "Sistemas",
      icon: <Settings className={styles.categoryIcon} />,
      skills: ["Windows", "Linux", "Hardware", "Software"],
      color: "purple"
    },
    {
      category: "Ferramentas",
      icon: <Palette className={styles.categoryIcon} />,
      skills: ["Microsoft Office", "Canva", "Git/GitHub"],
      color: "orange"
    },
    {
      category: "Marketing",
      icon: <TrendingUp className={styles.categoryIcon} />,
      skills: ["Marketing Digital", "Análise de Mercado", "Campanhas"],
      color: "pink"
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Habilidades e Competências</h2>
          <p className={styles.subtitle}>
            Conhecimentos técnicos e competências desenvolvidas através de estudos e experiência prática
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.skillsGrid}>
            {skillsData.map((category, index) => (
              <div key={index} className={`${styles.skillCard} ${styles[category.color]}`}>
                <div className={styles.cardHeader}>
                  {category.icon}
                  <h3 className={styles.categoryTitle}>{category.category}</h3>
                </div>
                <div className={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.detailedSkills}>
            <div className={styles.skillDetail}>
              <h4>💻 Informática</h4>
              <p>
                Conhecimento em Front-end, programação básica em Python, sistemas operacionais Windows e Linux, e capacidade para diagnosticar e resolver problemas técnicos de hardware e software.
              </p>
            </div>
            <div className={styles.skillDetail}>
              <h4>📊 Administração</h4>
              <p>
                Domínio avançado de ferramentas como Microsoft Office, aliado à organização de processos que asseguram eficiência operacional.
              </p>
            </div>
            <div className={styles.skillDetail}>
              <h4>📈 Marketing</h4>
              <p>
                Habilidade em criar e gerenciar campanhas de marketing digital (Canva) e análise de mercado para aumentar o engajamento e a visibilidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;