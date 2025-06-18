import React from 'react';
import styles from '../styles/Header.module.css';

function Header({ activeSection }) {
  const navigationItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'experience', label: 'Experiência' },
    { id: 'education', label: 'Formação' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Projetos' },
    { id: 'certificates', label: 'Certificados' }
  ];

  return (
    <nav className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span>YGS</span>
        </div>
        <div className={styles.navigation}>
          {navigationItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`${styles.navLink} ${
                activeSection === item.id ? styles.active : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Header;