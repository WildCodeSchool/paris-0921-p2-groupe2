import React, { useState } from 'react';
import imgMode from '../../../assets/Fight-Image2.jpg';
import styles from './modes.module.css';

function Survie() {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.menuChallenge}>
      <div className={styles.menuHeading}>
        <div className={styles.menuContainer}>
          <button className={styles.menuShort} onClick={() => setShow(!show)}>
            <h1>Survie</h1>
            <p>Survis le plus longtemps possible</p>
          </button>
          <button className={styles.launchButton}>Go !</button>
        </div>
      </div>
      {show && (
        <div className={styles.menuContent}>
          <img src={imgMode} alt="" />
          <p className={styles.innerMenuDesc}>Résiste au plus grand nombre d’adversaires possible</p>
        </div>
      )}
    </div>
  );
}

export default Survie;
