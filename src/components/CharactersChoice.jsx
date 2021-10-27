import React, { useState } from 'react';
import CharacterDetail from './CharacterDetail';
import CharactersList from './CharactersList';

import styles from './CharactersChoice.module.css';

const basicRoster = [
  {
    name: 'Alien',
    powerstats: {
      intelligence: 50,
      strength: 28,
      speed: 42,
      durability: 90,
      power: 57,
      combat: 60,
    },
    biography: {
      placeofbirth: 'Your chest :)',
      alignment: 'bad',
    },
    appearance: {
      height: ["8'0", '244 cm'],
      weight: ['375 lb', '169 kg'],
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/10449.jpg',
    },
  },
  {
    name: 'Batman',
    powerstats: {
      intelligence: 100,
      strength: 26,
      speed: 27,
      durability: 50,
      power: 47,
      combat: 100,
    },
    biography: {
      placeofbirth: 'Crest Hill, Bristol Township; Gotham County',
      alignment: 'good',
    },
    appearance: {
      height: ["6'2", '188 cm'],
      weight: ['210 lb', '95 kg'],
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
    },
  },
  {
    name: 'Black Widow',
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
  },
];

function CharactersChoice() {
  const [selectedCharacter, setSelectedCharacter] = useState(basicRoster[1]);
  return (
    <div className={styles.choiceContener}>
      {selectedCharacter && <CharacterDetail character={selectedCharacter} />}
      <CharactersList basicRoster={basicRoster} selected={setSelectedCharacter} />
    </div>
  );
}

export default CharactersChoice;
