import React, { useState } from 'react';
import imgMode from '../../assets/ModeLibre.jpg';
import styles from './modes.module.css';
function ModeLibre() {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.menuChallenge}>
      <div className={styles.menuHeading}>
        <div className={styles.menuContainer}>
          <button onClick={() => setShow(!show)}>
            <h1>Mode Libre</h1>
            <p>Choisis tous les paramètres pour un combat sur mesure</p>
          </button>
        </div>
      </div>
      {show && (
        <div className={styles.menuContent}>
          <img src={imgMode} alt="" />
          <p className={styles.innerMenuDesc}>Tu peux choisir tous les paramètres du combat pour une experience personnalisée</p>
        </div>
      )}
    </div>
  );
}

export default ModeLibre;
