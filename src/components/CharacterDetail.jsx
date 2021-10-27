import React from 'react';

import styles from './CharacterDetail.module.css';

function CharacterDetail() {
  return (
    <div className={styles.charactersCard}>
      <img className={styles.detailImage} src="https://www.superherodb.com/pictures2/portraits/10/100/10449.jpg" alt="Superhero" />
      <div className={styles.detailStats}>
        <h2>Character</h2>
        <h3>Power stats</h3>
        <p>intelligence : 50</p>
        <p>strength : 28</p>
        <p>speed : 42</p>
        <p>durability : 90</p>
        <p>power : 57</p>
        <p>combat : 60</p>
        <h3>Other facts</h3>
        <p>Place of birth : </p>
        <p>Alignement : </p>
        <p>Height : </p>
        <p>Weight : </p>
      </div>
    </div>
  );
}

export default CharacterDetail;
