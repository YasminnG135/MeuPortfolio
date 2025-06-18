import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from '../styles/Hero.module.css';
import ProfileImage from '../assets/yasmin.png';
import BandeiraBrasil from '../assets/brasil.png';

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.profileSection}>
            <div className={styles.profilePicContainer}>
              <div className={styles.profilePic}>
                <img 
                  src={ProfileImage} 
                  alt="Foto do Perfil" 
                  className={styles.profileImage} 
                />
              </div>
              <div className={styles.statusBadge}>
                Disponível
              </div>
            </div>
            <h1 className={styles.name}>
              Yasmin Gonçalves Santos
            </h1>
            <div className={styles.skills}>
              <span className={styles.skillsText}>
                TI | ADM | MKT
              </span>
            </div>
            <p className={styles.objective}>
              Busco uma oportunidade para aplicar meus conhecimentos, desenvolver habilidades e contribuir para os resultados da empresa com responsabilidade e comprometimento.
            </p>
            <div className={styles.contactButtons}>
              <a href="mailto:yasmingoncalvessantos8@gmail.com" className={styles.primaryButton}>
                <Mail className={styles.buttonIcon} />
                Contato
              </a>
              <a href="tel:+5519987052274" className={styles.secondaryButton}>
                <Phone className={styles.buttonIcon} />
                Telefone
              </a>
            </div>
            <div className={styles.location}>
              <MapPin className={styles.locationIcon} />
              <span>Jardim Novo Cambuí, Hortolândia-SP</span>
              <img
                src={BandeiraBrasil}
                alt="Bandeira do Brasil"
                className={styles.bandeiraBrasil}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;