import React from 'react';
import Challenge from '../../components/Accueil/Challenge';
import Survie from '../../components/Accueil/Survie';
import ModeLibre from '../../components/Accueil/ModeLibre';
import styles from './Menu3Modes.module.css';
import { BrowserView, MobileView } from 'react-device-detect';

function Menu3Modes() {
  return (
    <div className={styles.menuContainer}>
      <p className={styles.menuHeaderDesk}>The first rule of Bagarre C.L.U.B. : It is forbidden not to speak about Bagarre C.L.U.B.</p>
      <div className={styles.menuModesContainer}>
        <BrowserView className={styles.browser}>
          <Challenge />
          <Survie status />
          <ModeLibre status />
        </BrowserView>
        <MobileView>
          <Challenge />
          <Survie />
          <ModeLibre />
        </MobileView>
      </div>
    </div>
  );
}

export default Menu3Modes;
