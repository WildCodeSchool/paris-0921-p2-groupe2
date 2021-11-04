import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './modes.module.css';
import imgMode from '../../../assets/Fight-Image1.jpg';

function Challenge() {
  const [show, setShow] = useState(true);
  return (
    <div className={styles.menuChallenge}>
      <div className={styles.menuHeading}>
        <div className={styles.menuContainer}>
          <button className={styles.menuShort} onClick={() => setShow(!show)}>
            <h1>Challenge</h1>
            <p>Sois victorieux dans le scénario proposé</p>
          </button>
          <Link to="/characterschoice">
            <button className={styles.launchButton}>Go !</button>
          </Link>
        </div>
      </div>
      {show && (
        <div className={styles.menuContent}>
          <img src={imgMode} alt="" />
          <p className={styles.innerMenuDesc}>Choisis ton champion pour réussir le scénario proposé</p>
        </div>
      )}
    </div>
  );
}

export default Challenge;
