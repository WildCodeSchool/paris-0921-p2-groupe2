import React from 'react';

import styles from './CharacterCard.module.css';

function CharacterCard(props) {
  return (
    <li className={styles.charactersCard}>
      <img src={props.image.url} alt={props.name} className={styles.cardImage} />
      <p className={styles.cardName}>{props.name}</p>
    </li>
  );
}

export default CharacterCard;
