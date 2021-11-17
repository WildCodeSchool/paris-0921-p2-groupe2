import React from 'react';

import styles from './CharacterCard.module.css';

export default function CharacterCard({ handleSelected, character }) {
  const handleClick = () => {
    handleSelected(character);
  };

  return (
    <li className={styles.charactersCard}>
      <div role="button" tabIndex={0} onClick={handleClick} onKeyDown={handleClick}>
        <img src={character.image.url} alt={character.name} className={styles.cardImage} />
      </div>
    </li>
  );
}
