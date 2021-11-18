import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import FighterContext from '../../contexts/FighterContext';

import styles from './LaunchFightButton.module.css';

export default function LaunchFightButton() {
  const { resetGame } = useContext(FighterContext);

  return (
    <div className={styles.buttonsContainer}>
      <Link to="/options">
        <button className={styles.launchFightButtonDark}>OPTIONS</button>
      </Link>
      <Link to="/fight">
        <button className={styles.launchFightButton}>FIGHT</button>
      </Link>
      <button className={styles.launchFightButtonDark} onClick={resetGame}>
        RESET
      </button>
    </div>
  );
}
