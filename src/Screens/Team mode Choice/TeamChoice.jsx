import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import FighterContext from '../../contexts/FighterContext';

import CharacterDetail from '../../components/Character detail/CharacterDetail';
import CharactersList from '../../components/Characters list/CharactersList';

import styles from './TeamChoice.module.css';

export default function TeamChoice({ handleChange }) {
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [heroesList, setHeroesList] = useState('');
  const [query, setQuery] = useState('');
  // eslint-disable-next-line no-unused-vars
  const { teamA, teamB, setTeamA, setTeamB } = useContext(FighterContext);
  let defaultA = [70, 106, 107];
  let defaultB = [127, 228, 236];
  let tempA = [];
  let tempB = [];

  useEffect(() => {
    for (let index of defaultA) {
      fetch(`https://cors-bypass.tkzprod.dev/superheroapi.com/api/408055134055673/${index}`)
        .then((res) => res.json())
        .then((data) => tempA.push(data));
    }
    setTeamA(tempA);
    for (let index of defaultB) {
      fetch(`https://cors-bypass.tkzprod.dev/superheroapi.com/api/408055134055673/${index}`)
        .then((res) => res.json())
        .then((data) => tempB.push(data));
    }
    setTeamB(tempB);
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

  useEffect(() => {
    const characterIndex = Math.round(Math.random() * 731);
    fetch(`https://cors-bypass.tkzprod.dev/superheroapi.com/api/408055134055673/${characterIndex}`)
      .then((res) => res.json())
      .then((data) => setSelectedCharacter(data));

    fetch('../../fakeApi.json')
      .then((res) => res.json())
      .then((data) => setHeroesList(data));
  }, []);

  return (
    <div>
      <h2 className={styles.teamTitle}>TEAM FIGHT</h2>
      <div className={styles.teamsContainer}></div>
      <div className={styles.container}>
        <div className={styles.choiceContener}>
          {selectedCharacter && <CharacterDetail character={selectedCharacter} handleChange={handleChange} />}
          <form onSubmit={searchCharacters}>
            <label>
              <input className={styles.searchText} type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
              <input className={styles.searchButton} type="submit" value="Search" />
            </label>
          </form>
          {heroesList && <CharactersList heroesList={heroesList} selected={setSelectedCharacter} />}
        </div>
        <Link to="/teamfight">
          <button className={styles.bigbutton}>LESSGO</button>
        </Link>
      </div>
    </div>
  );
}
