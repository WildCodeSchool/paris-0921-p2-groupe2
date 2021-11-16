import React, { useState } from 'react';
import imgMode from '../../../assets/Fight-Image2.jpg';
import styles from './Modes.module.css';

function Survie({ status }) {
  const [show, setShow] = useState(status);
  return (
    <div className={styles.menuChallenge}>
      <div className={styles.menuHeading}>
        <div className={styles.menuContainer}>
          <button className={styles.menuShort} onClick={() => setShow(!show)}>
            <h1>Survie</h1>
            <p>Survive as long as possible</p>
          </button>
          <button className={styles.launchButton}>Go !</button>
        </div>
      </div>
      {show && (
        <div className={styles.menuContent}>
          <img src={imgMode} alt="" />
          <p className={styles.innerMenuDesc}>try to resist as many enemies as possible</p>
        </div>
      )}
    </div>
  );
}

export default Survie;
