import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import CharactersList from './CharactersList';
// import DisplayFight from './DisplayFight';

import styles from './CharactersChoice.module.css';
import LaunchFightButton from './LaunchFightButton';

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

function CharactersChoice() {
  const [selectedCharacter, setSelectedCharacter] = useState(defaultCharacter);
  const [heroesList, setHeroesList] = useState('');
  const [firstSelectedFighter, setFirstSelectedFighter] = useState('');
  const [secondSelectedFighter, setSecondSelectedFighter] = useState('');

  function selectFighter(e) {
    // console.log('Selecting fighter')
    if (firstSelectedFighter == '') {
      setFirstSelectedFighter(e.target.value);
    } else if (secondSelectedFighter == '') {
      setSecondSelectedFighter(e.target.value);
    }
  }
  // console.log('First fighter :', firstSelectedFighter);
  // console.log('Second fighter :', secondSelectedFighter);

  useEffect(() => {
    fetch('../../fakeApi.json')
      .then((res) => res.json())
      .then((data) => setHeroesList(data));
  }, []);

  return (
    <div className={styles.choiceContener}>
      {selectedCharacter && <CharacterDetail character={selectedCharacter} handleChange={selectFighter} />}
      {heroesList && <CharactersList heroesList={heroesList} selected={setSelectedCharacter} />}
      {secondSelectedFighter && <LaunchFightButton heroA={firstSelectedFighter} heroB={secondSelectedFighter} />}
      {/* {secondSelectedFighter && <DisplayFight heroA={firstSelectedFighter} heroB={secondSelectedFighter} />} */}
    </div>
  );
}

export default CharactersChoice;
