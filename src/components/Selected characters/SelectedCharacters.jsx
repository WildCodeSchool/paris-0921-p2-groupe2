import React, { useEffect, useState } from 'react';

import styles from './SelectedCharacters.module.css';

export default function SelectedCharacters(props) {
  const { heroA, heroB } = props;

  const [characterA, setCharacterA] = useState('');
  const [characterB, setCharacterB] = useState('');
  const [messageA, setMessageA] = useState('?');
  const [messageB, setMessageB] = useState('?');

  useEffect(() => {
    fetch('../../fakeApi.json')
      .then((res) => res.json())
      .then((data) => setCharacterA(data[heroA]));
  }, [heroA]);

  useEffect(() => {
    fetch('../../fakeApi.json')
      .then((res) => res.json())
      .then((data) => setCharacterB(data[heroB]));
  }, [heroB]);

  useEffect(() => {
    if (characterA) {
      setMessageA(characterA.name);
    }
  }, [characterA]);

  useEffect(() => {
    if (characterB) {
      setMessageB(characterB.name);
    }
  }, [characterB]);

  return (
    <div className={styles.moduleDisplay}>
      <h3 className={styles.character}>{messageA}</h3>
      <h3 className={styles.vs}>VS</h3>
      <h3 className={styles.character}>{messageB}</h3>
    </div>
  );
}
