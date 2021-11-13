import React from 'react';
import Challenge from '../../components/Accueil/Challenge';
import Survie from '../../components/Accueil/Survie';
import ModeLibre from '../../components/Accueil/ModeLibre';
import styles from './Menu3Modes.module.css';

function Menu3Modes() {
  return (
    <div className={styles.menuContainer}>
      <p className={styles.menuHeaderDesk}>The first rule of Bagarre C.L.U.B. : It is forbidden not to speak about Bagarre C.L.U.B.</p>
      <div className={styles.menuModesContainer}>
        <Challenge />
        <Survie />
        <ModeLibre />
      </div>
    </div>
  );
}

export default Menu3Modes;
