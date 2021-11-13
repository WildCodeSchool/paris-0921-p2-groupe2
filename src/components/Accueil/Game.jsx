import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import imgMode from '../../../assets/Fight-Image1.jpg';
import styles from './modes.module.css';

function Game() {
  const [show, setShow] = useState(true);
  return (
    <div className={styles.menuChallenge}>
      <div className={styles.menuHeading}>
        <div className={styles.menuContainer}>
          <button className={styles.menuShort} onClick={() => setShow(!show)}>
            <h1>Challenge</h1>
            <p>Be the winner in the proposed scenario</p>
          </button>
          <Link to="/characterschoice">
            <button className={styles.launchButton}>Go !</button>
          </Link>
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

export default Game;
