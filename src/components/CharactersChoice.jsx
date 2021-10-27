import React from 'react';
import CharacterDetail from './CharacterDetail';
import CharactersList from './CharactersList';

import styles from './CharactersChoice.module.css';

function CharactersChoice() {
  return (
    <div className={styles.choiceContener}>
      <CharacterDetail />
      <CharactersList />
    </div>
  );
}

export default CharactersChoice;
