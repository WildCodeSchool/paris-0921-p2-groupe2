import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';

import Challenge from '../../components/Accueil/Challenge';
import FreeMode from '../../components/Accueil/FreeMode';
import Team from '../../components/Accueil/Team';

import styles from './Menu3Modes.module.css';

export default function Menu3Modes() {
  return (
    <div className={styles.menuContainer}>
      <p className={styles.menuHeaderDesk}>The first rule of Bagarre C.L.U.B. : It is forbidden not to speak about Bagarre C.L.U.B.</p>
      <div className={styles.menuModesContainer}>
        <BrowserView className={styles.browser}>
          <Challenge />
          <Team status />
          <FreeMode status />
        </BrowserView>
        <MobileView>
          <Challenge />
          <Team />
          <FreeMode />
        </MobileView>
      </div>
    </div>
  );
}
