import React from 'react';

import styles from './ChallengeDetail.module.css';

export default function ChallengeDetail({ character }) {
  return (
    <div className={styles.charactersCard}>
      <img className={styles.detailImage} src={character.image.url} alt={character.name} />
      <h3 className={styles.characterName}>{character.name}</h3>
    </div>
  );
}
