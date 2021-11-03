import React from 'react';

import styles from './FighterCard.module.css';

export default function FighterCard(hero) {
  return (
    <div className={styles.heroCard}>
      <img src={hero.picture} alt={hero.name} className={styles.heroPicture} />
    </div>
  );
}
