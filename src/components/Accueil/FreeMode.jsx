import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import imgMode from '../../../assets/Fight-Image3.jpg';
import styles from './Modes.module.css';

export default function FreeMode({ status }) {
  const [show, setShow] = useState(status);
  return (
    <div className={styles.menuChallenge}>
      <div className={styles.menuHeading}>
        <div className={styles.menuContainer}>
          <button className={styles.menuShort} onClick={() => setShow(!show)}>
            <h1>Free Mode</h1>
            <p>Your customized fight</p>
          </button>
          <Link to="/freemode">
            <button className={styles.launchButton}>Go !</button>
          </Link>
        </div>
      </div>
      {show && (
        <div className={styles.menuContent}>
          <img src={imgMode} alt="" />
          <p className={styles.innerMenuDesc}>Select all the parameters for a customized fight</p>
        </div>
      )}
    </div>
  );
}
