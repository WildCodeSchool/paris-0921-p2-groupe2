import React, { useState } from 'react';

import styles from './modes.module.css';
import imgMode from '../../../assets/Fight-Image1.jpg';

function Challenge() {
  const [show, setShow] = useState(true);
  return (
    <div className={styles.menuChallenge}>
      <div className={styles.menuHeading}>
        <div className={styles.menuContainer}>
          <button onClick={() => setShow(!show)}>
            <h1>Challenge</h1>
            <p>Choisis ton champion pour réussir le scénario proposé</p>
          </button>
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
