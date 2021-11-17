import React from 'react';

import styles from './TeamCard.module.css';

export default function TeamCard({ team }) {
  return (
    <div className={styles.teamContainer}>
      {team.map((x, i) => (
        <img src={x.image.url} alt={x.name} className={styles.heroPicture} key={i} />
      ))}
    </div>
  );
}
