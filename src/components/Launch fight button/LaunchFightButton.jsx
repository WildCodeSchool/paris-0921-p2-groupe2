import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import FighterContext from '../../contexts/FighterContext';

import styles from './LaunchFightButton.module.css';

export default function LaunchFightButton() {
  const { resetPlayers } = useContext(FighterContext);

  return (
    <div className={styles.buttonsContainer}>
      <Link to="/fight">
        <button className={styles.launchFightButton}>FIGHT</button>
      </Link>
      <Link to="/options">
        <button className={styles.launchFightButton}>OPTIONS</button>
      </Link>
      <button className={styles.launchFightButton} onClick={resetPlayers}>
        RESET
      </button>
    </div>
  );
}
