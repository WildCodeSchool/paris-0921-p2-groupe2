import React from 'react';

import styles from './CharacterDetail.module.css';

function CharacterDetail({ character }) {
  return (
    <div className={styles.charactersCard}>
      <img className={styles.detailImage} src={character.image.url} alt={character.name} />
      <div className={styles.detailStats}>
        <div>
          <h2>{character.name}</h2>
          <h3>Power stats</h3>
          <p>intelligence : {character.powerstats.intelligence}</p>
          <p>strength : {character.powerstats.strength}</p>
          <p>speed : {character.powerstats.speed}</p>
          <p>durability : {character.powerstats.durability}</p>
          <p>power : {character.powerstats.power}</p>
          <p>combat : {character.powerstats.combat}</p>
          <h3>Other facts</h3>
          {/* <p>Born in : {character.biography.placeofbirth}</p> */}
          <p>Alignement : {character.biography.alignment}</p>
          {/* <p>Height : {character.appearance.height[2]}</p>
          <p>Weight : {character.appearance.weight[2]}</p> */}
        </div>
        <button>Fight !</button>
      </div>
    </div>
  );
}

export default CharacterDetail;
