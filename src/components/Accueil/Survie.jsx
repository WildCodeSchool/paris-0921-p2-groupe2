import React, { useState } from 'react';
import imgMode from '../../../assets/Fight-Image2.jpg';
import styles from './modes.module.css';
function Survie() {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.menuChallenge}>
      <div className={styles.menuHeading}>
        <div className={styles.menuContainer}>
          <button onClick={() => setShow(!show)}>
            <h1>Survie</h1>
            <p>Résist le plus longtemps possible</p>
          </button>
        </div>
      </div>
      {show && (
        <div className={styles.menuContent}>
          <img src={imgMode} alt="" />
          <p className={styles.innerMenuDesc}>Tu peux choisir tois les paramètres du combat pour une experience personnalisée</p>
        </div>
      )}
    </div>
  );
}

export default Survie;
