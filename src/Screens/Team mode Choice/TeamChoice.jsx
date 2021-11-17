import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import FighterContext from '../../contexts/FighterContext';

import SelectedTeam from '../../components/Selected team/SelectedTeam';
import TeamMemberDetail from '../../components/Team member detail/TeamMemberDetail';
import CharactersList from '../../components/Characters list/CharactersList';

import styles from './TeamChoice.module.css';

export default function TeamChoice() {
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [heroesList, setHeroesList] = useState('');
  const [query, setQuery] = useState('');
  const { teamA, teamB } = useContext(FighterContext);

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
    fetch('../../fakeApi.json')
      .then((res) => res.json())
      .then((data) => setHeroesList(data));
  }, []);

  return (
    <div>
      <h2 className={styles.teamTitle}>TEAM FIGHT</h2>
      <div className={styles.teamsContainer}>
        {teamA && <SelectedTeam team={teamA} title={'Team A'} />}
        {teamB && <SelectedTeam team={teamB} title={'Team B'} />}
      </div>

      {selectedCharacter && <TeamMemberDetail character={selectedCharacter} />}
      <div className={styles.container}>
        <div className={styles.choiceContener}>
          <form onSubmit={searchCharacters}>
            <label>
              <input className={styles.searchText} type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
              <input className={styles.searchButton} type="submit" value="Search" />
            </label>
          </form>
          {heroesList && <CharactersList heroesList={heroesList} selected={setSelectedCharacter} />}
        </div>
        <Link to="/teamfight">
          <button className={styles.launchfightbutton}>FIGHT</button>
        </Link>
      </div>
    </div>
  );
}
