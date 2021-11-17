import React, { useContext } from 'react';

import FighterContext from '../../contexts/FighterContext';

import defaultPicture from '../../../assets/HeroPic-default.png';

import styles from './CharacterDetail.module.css';

export default function CharacterDetail({ character }) {
  const { updatePlayer } = useContext(FighterContext);

  return (
    <div className={styles.charactersCard}>
      <img
        className={styles.detailImage}
        src={character.image.url}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultPicture;
        }}
        alt={character.name}
      />
      <div className={styles.detailStats}>
        <div>
          <h2>{character.name}</h2>
          <h3>Power stats</h3>
          <p>Intelligence : {character.powerstats.intelligence != 'null' ? character.powerstats.intelligence : 15}</p>
          <p>Strength : {character.powerstats.strength != 'null' ? character.powerstats.strength : 15}</p>
          <p>Speed : {character.powerstats.speed != 'null' ? character.powerstats.speed : 15}</p>
          <p>Durability : {character.powerstats.durability != 'null' ? character.powerstats.durability : 15}</p>
          <p>Power : {character.powerstats.power != 'null' ? character.powerstats.power : 15}</p>
          <p>Combat : {character.powerstats.combat != 'null' ? character.powerstats.combat : 15}</p>
          <h3>Other facts</h3>
          {character.appearance.race != 'null' && <p>{character.appearance.race}</p>}
          <p>Alignement : {character.biography.alignment}</p>
          {character.appearance.height[1][0] != 0 && <p>Height : {character.appearance.height[1]}</p>}
          {character.appearance.weight[1][0] != 0 && <p>Weight : {character.appearance.weight[1]}</p>}
        </div>
        <button onClick={updatePlayer} value={character.id}>
          Choose
        </button>
      </div>
    </div>
  );
}
