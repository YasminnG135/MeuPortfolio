import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import styles from '../styles/Projects.module.css';

function Projects() {
  const projects = [
    {
      title: "Simulador de Bomba de Gasolina",
      description: "Aplicação desenvolvida em Python com PyQt5 que simula o abastecimento de combustível, calculando valores finais com diferentes tipos de combustível. O projeto demonstra conhecimentos em programação orientada a objetos e desenvolvimento de interfaces gráficas.",
      tech: ["Python", "PyQt5", "POO"],
      github: "https://github.com/hincaluan/trabalho_ds.git",
      icon: "⛽",
      features: [
        "Interface gráfica intuitiva",
        "Simulação de diferentes combustíveis",
        "Cálculo automático de valores",
        "Sistema de abastecimento realista"
      ]
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <Code className={styles.titleIcon} />
            Projetos
          </h2>
          <p className={styles.subtitle}>
            Projetos desenvolvidos durante minha formação técnica
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.projectIcon}>
                    <span>{project.icon}</span>
                  </div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                  <div className={styles.features}>
                    <h4>Características:</h4>
                    <ul>
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.techStack}>
                    <h4>Tecnologias utilizadas:</h4>
                    <div className={styles.techTags}>
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.cardFooter}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    <Github className={styles.linkIcon} />
                    Ver no GitHub
                    <ExternalLink className={styles.externalIcon} />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.moreProjects}>
            <p className={styles.moreText}>
              Mais projetos em desenvolvimento durante o curso técnico...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;