import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import imgMode from '../../../assets/Fight-Image1.jpg';
import styles from './Modes.module.css';

export default function Challenge() {
  const [show, setShow] = useState(true);
  return (
    <div className={styles.menuChallenge}>
      <div className={styles.menuHeading}>
        <div className={styles.menuContainer}>
          <button className={styles.menuShort} onClick={() => setShow(!show)}>
            <h1>Challenge</h1>
            <p>Be the winner in the suggested scenario</p>
          </button>
          <Link to="/challenge">
            <button className={styles.launchButton}>Go !</button>
          </Link>
        </div>
      </div>
      {show && (
        <div className={styles.menuContent}>
          <img src={imgMode} alt="" />
          <p className={styles.innerMenuDesc}>Be the winner in the suggested scenario</p>
        </div>
      )}
    </div>
  );
}
