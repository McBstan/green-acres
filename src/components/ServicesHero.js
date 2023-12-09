import React from 'react';
import styles from './ServicesHero.module.css';

function ServicesHero() {
  return (
    <>
    <video playsInline src='/videos/Grass.mp4' autoPlay loop muted />
    <div className={styles.servicesHeroContainer}>
      <h1>Services</h1>
      <div className={`${styles.arrow} ${styles.bounce}`}></div>
    </div>
    </>
  );
}

export default ServicesHero;