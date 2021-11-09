import React, { useState, useEffect } from 'react';

import CharacterDetail from '../../components/Character detail/CharacterDetail';
import CharactersList from '../../components/Characters list/CharactersList';

import styles from './CharactersChoice.module.css';

function CharactersChoice({ handleChange }) {
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [heroesList, setHeroesList] = useState('');
  const [query, setQuery] = useState('');

  const searchCharacters = (e) => {
    e.preventDefault();
    // console.log('I am working !');
    // console.log(query);
    setQuery('');
    fetch(`https://cors-bypass.tkzprod.dev/superheroapi.com/api/408055134055673/search/${query}`)
      .then((res) => res.json())
      .then((data) => setHeroesList(data.results));
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
    <div className={styles.choiceContener}>
      {selectedCharacter && <CharacterDetail character={selectedCharacter} handleChange={handleChange} />}
      <form className={styles.searchContainer} onSubmit={searchCharacters}>
        <label>
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
          <input type="submit" value="Search" />
        </label>
      </form>
      {heroesList && <CharactersList heroesList={heroesList} selected={setSelectedCharacter} />}
    </div>
  );
}

export default CharactersChoice;
