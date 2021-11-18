import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import FighterContext from '../../contexts/FighterContext';

import styles from './LaunchTeamFightButton.module.css';

export default function LaunchTeamFightButton() {
  const { resetGame } = useContext(FighterContext);

  return (
    <div className={styles.buttonsContainer}>
      <Link to="/teamfight">
        <button className={styles.launchFightButton}>FIGHT</button>
      </Link>
      <button className={styles.launchFightButtonDark} onClick={resetGame}>
        RESET
      </button>
    </div>
  );
}
