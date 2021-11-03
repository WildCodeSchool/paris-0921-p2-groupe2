import React, { useState, useEffect } from 'react';
import CharacterDetail from '../../components/Character detail/CharacterDetail';
import CharactersList from '../../components/Characters list/CharactersList';

import styles from './CharactersChoice.module.css';

const defaultCharacter = {
  name: 'Black Widow',
  id: '107',
  powerstats: {
    intelligence: 75,
    strength: 13,
    speed: 33,
    durability: 30,
    power: 36,
    combat: 100,
  },
  biography: {
    placeofbirth: '-',
    alignment: 'good',
  },
  appearance: {
    height: ["5'7", '170 cm'],
    weight: ['131 lb', '59 kg'],
  },
  image: {
    url: 'https://www.superherodb.com/pictures2/portraits/10/100/248.jpg',
  },
};

function CharactersChoice({ handleChange }) {
  const [selectedCharacter, setSelectedCharacter] = useState(defaultCharacter);
  const [heroesList, setHeroesList] = useState('');

  useEffect(() => {
    fetch('../../fakeApi.json')
      .then((res) => res.json())
      .then((data) => setHeroesList(data));
  }, []);

  return (
    <div className={styles.choiceContener}>
      {selectedCharacter && <CharacterDetail character={selectedCharacter} handleChange={handleChange} />}
      {heroesList && <CharactersList heroesList={heroesList} selected={setSelectedCharacter} />}
    </div>
  );
}

export default CharactersChoice;
