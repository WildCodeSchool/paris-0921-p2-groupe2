import React from 'react';

import CharacterCard from '../Character card/CharacterCard';

import styles from './CharactersList.module.css';

export default function CharactersList({ heroesList, selected }) {
  let basicRoster = [];

  for (let key in heroesList) {
    basicRoster.push(heroesList[key]);
  }

  return (
    <div className={styles.charactersList}>
      <ul className={styles.cards} style={{ width: `${basicRoster.length * 112}px` }}>
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
