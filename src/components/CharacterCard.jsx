import React from 'react';

import styles from './CharacterCard.module.css';

function CharacterCard({ handleSelected, character }) {
  const handleClick = () => {
    handleSelected(character);
  };

  return (
    <li className={styles.charactersCard}>
      <img src={character.image.url} alt={character.name} className={styles.cardImage} />
      <button className={styles.button} onClick={handleClick}>
        {character.name}
      </button>
    </li>
  );
}

export default CharacterCard;
