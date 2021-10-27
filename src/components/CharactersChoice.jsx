import React, { useState, useEffect } from 'react';
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
  {
    name: 'Wonder Woman',
    powerstats: {
      intelligence: '88',
      strength: '100',
      speed: '79',
      durability: '100',
      power: '100',
      combat: '100',
    },
    biography: {
      placeofbirth: 'Themyscira',
      alignment: 'good',
    },
    appearance: {
      height: ['6', '183 cm'],
      weight: ['165 lb', '74 kg'],
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/807.jpg',
    },
  },
  {
    name: 'Storm',
    powerstats: {
      intelligence: '75',
      strength: '10',
      speed: '47',
      durability: '30',
      power: '88',
      combat: '75',
    },
    biography: {
      placeofbirth: 'New York, New York',
      alignment: 'good',
    },
    appearance: {
      height: ['5.11', '180 cm'],
      weight: ['127 lb', '57 kg'],
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/135.jpg',
    },
  },
];

// const heroes = [
//   18, 70, 78, 106, 107, 127, 140, 165, 208, 213, 228, 236, 238, 287, 289, 303, 309, 310, 341, 346, 381, 485, 540, 555, 574, 627, 638, 644, 650, 720,
// ];

function CharactersChoice() {
  const [selectedCharacter, setSelectedCharacter] = useState(basicRoster[2]);
  const [heroesList, setHeroesList] = useState('');

  useEffect(() => {
    fetch('../../fakeApi.json')
      .then((res) => res.json())
      .then((data) => setHeroesList(data));
  }, []);

  return (
    <div className={styles.choiceContener}>
      {selectedCharacter && <CharacterDetail character={selectedCharacter} />}
      {heroesList && <CharactersList heroesList={heroesList} selected={setSelectedCharacter} />}
    </div>
  );
}

export default CharactersChoice;
