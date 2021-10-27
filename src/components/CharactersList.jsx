import React from 'react';

import CharacterCard from './CharacterCard';

import styles from './CharactersList.module.css';

function CharactersList({ basicRoster, selected }) {
  return (
    <div className={styles.charactersList}>
      <ul className={styles.cards}>
        {basicRoster &&
          basicRoster.map((character, index) => {
            return <CharacterCard key={index} character={character} handleSelected={selected} />;
          })}
      </ul>
      <div className={styles.actions}>
        <button className={styles.prev}>Prev</button>
        <button className={styles.next}>Next</button>
      </div>
    </div>
  );
}

export default CharactersList;
