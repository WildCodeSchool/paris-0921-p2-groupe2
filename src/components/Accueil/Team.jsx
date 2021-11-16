import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import imgMode from '../../../assets/Fight-Image2.jpg';
import styles from './Modes.module.css';

export default function Team({ status }) {
  const [show, setShow] = useState(status);
  return (
    <div className={styles.menuChallenge}>
      <div className={styles.menuHeading}>
        <div className={styles.menuContainer}>
          <button className={styles.menuShort} onClick={() => setShow(!show)}>
            <h1>Team Fight</h1>
            <p>Make a squad with up to 5 heroes to face another team</p>
          </button>
          <Link to="/team">
            <button className={styles.launchButton}>Go !</button>
          </Link>
        </div>
      </div>
      {show && (
        <div className={styles.menuContent}>
          <img src={imgMode} alt="" />
          <p className={styles.innerMenuDesc}>Make a squad with up to 5 heroes to face another team</p>
        </div>
      )}
    </div>
  );
}
