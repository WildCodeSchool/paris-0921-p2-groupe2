/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import CharacterDetail from '../../components/Character detail/CharacterDetail';
import CharactersList from '../../components/Characters list/CharactersList';

import styles from './TeamChoice.module.css';

export default function TeamChoice() {
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [heroesList, setHeroesList] = useState('');
  const [query, setQuery] = useState('');

  return (
    <div className={styles.container}>
      <h2 className={styles.teamTitle}>Choose your teams !</h2>
      <Link to="/teamfight">
        <button className={styles.bigbutton}>LESSGO</button>
      </Link>
    </div>
  );
}
