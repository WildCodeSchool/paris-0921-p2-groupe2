import React from 'react';
import Challenge from '../../components/Accueil/Challenge';
import Survie from '../../components/Accueil/Survie';
import FreeMode from '../../components/Accueil/FreeMode';
import styles from './Menu3Modes.module.css';
import { BrowserView, MobileView } from 'react-device-detect';

export default function Menu3Modes() {
  return (
    <div className={styles.menuContainer}>
      <p className={styles.menuHeaderDesk}>The first rule of Bagarre C.L.U.B. : It is forbidden not to speak about Bagarre C.L.U.B.</p>
      <div className={styles.menuModesContainer}>
        <BrowserView className={styles.browser}>
          <Challenge />
          <Survie status />
          <FreeMode status />
        </BrowserView>
        <MobileView>
          <Challenge />
          <Survie />
          <FreeMode />
        </MobileView>
      </div>
    </div>
  );
}
