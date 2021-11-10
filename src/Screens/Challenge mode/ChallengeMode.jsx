import React, { useEffect, useState } from 'react';

import ChallengeDetail from '../../components/Challenge Selected Detail/ChallengeDetail';
import styles from './ChallengeMode.module.css';
import CharactersList from '../../components/Characters list/CharactersList';

export default function ChallengeMode() {
  const preCharacterSelection = {
    image: {
      url: '../../../assets/question.png',
    },
    name: 'Choose a fighter',
  };

  const [opponent, setOpponent] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(preCharacterSelection);
  const [heroesList, setHeroesList] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const characterIndex = Math.round(Math.random() * 731);
    fetch(`https://cors-bypass.tkzprod.dev/superheroapi.com/api/408055134055673/${characterIndex}`)
      .then((res) => res.json())
      .then((data) => setOpponent(data));
  }, []);

  const searchCharacters = (e) => {
    e.preventDefault();
    if (query.length < 2) {
      alert('Please write at least 2 characters to search');
    } else {
      setQuery('');
      fetch(`https://cors-bypass.tkzprod.dev/superheroapi.com/api/408055134055673/search/${query}`)
        .then((res) => res.json())
        .then((data) => setHeroesList(data.results));
    }
  };

  return (
    <div>
      <h2 className={styles.challengeTitle}>CHALLENGE</h2>
      <div className={styles.charactersContainer}>
        <div className={styles.challengeCharacter}>
          <h3 className={styles.characterIntro}>Your opponent</h3>
          {opponent && <ChallengeDetail character={opponent} />}
        </div>
        <div className={styles.challengeCharacter}>
          <h3 className={styles.characterIntro}>Your choice</h3>
          {opponent && <ChallengeDetail character={selectedCharacter} />}
        </div>
      </div>
      <form className={styles.searchItem} onSubmit={searchCharacters}>
        <label>
          <input className={styles.searchText} type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
          <input className={styles.searchButton} type="submit" value="Search" />
        </label>
      </form>
      <div className={styles.challengeContainer}>{heroesList && <CharactersList heroesList={heroesList} selected={setSelectedCharacter} />}</div>
    </div>
  );
}
