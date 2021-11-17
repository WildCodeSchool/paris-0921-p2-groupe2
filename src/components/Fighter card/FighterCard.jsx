import React from 'react';

import defaultPicture from '../../../assets/HeroPic-default.png';

import styles from './FighterCard.module.css';

export default function FighterCard(hero) {
  return (
    <div className={styles.heroCard}>
      <img
        src={hero.picture}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultPicture;
        }}
        alt={hero.name}
        className={styles.heroPicture}
      />
    </div>
  );
}
