import React from 'react';

import defaultPicture from '../../../assets/HeroPic-default.png';

import styles from './TeamCard.module.css';

export default function TeamCard({ team }) {
  return (
    <div className={styles.teamContainer}>
      {team.map((x, i) => (
        <img
          src={x.image.url}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultPicture;
          }}
          alt={x.name}
          className={styles.heroPicture}
          key={i}
        />
      ))}
    </div>
  );
}
