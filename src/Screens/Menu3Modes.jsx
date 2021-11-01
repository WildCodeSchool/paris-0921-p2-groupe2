import React from 'react';
import Challenge from '../components/Accueil/Challenge';
import Survie from '../components/Accueil/Survie';
import ModeLibre from '../components/Accueil/ModeLibre';
import styles from '../components/Accueil/modes.module.css';

function Menu3Modes() {
  return (
    <div className={styles.menuContainer}>
      <p className={styles.menuHeaderDesk}>La première règle du Bagarre C.L.U.B. est : il est interdit de ne pas parler du Bagarre C.L.U.B. </p>
      <div className={styles.menuModesContainer}>
        <Challenge />
        <Survie />
        <ModeLibre />
      </div>
    </div>
  );
}

export default Menu3Modes;
