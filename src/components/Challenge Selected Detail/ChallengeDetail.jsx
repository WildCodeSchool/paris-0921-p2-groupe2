import React from 'react';

import defaultPicture from '../../../assets/HeroPic-default.png';

import styles from './ChallengeDetail.module.css';

export default function ChallengeDetail({ character }) {
  return (
    <div className={styles.charactersCard}>
      <img
        className={styles.detailImage}
        src={character.image.url}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultPicture;
        }}
        alt={character.name}
      />
      <h3 className={styles.characterName}>{character.name}</h3>
    </div>
  );
}
