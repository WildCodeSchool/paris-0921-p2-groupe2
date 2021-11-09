import React, { useContext, useEffect, useState } from 'react';

import FighterContext from '../../contexts/FighterContext';

import styles from './SelectedCharacters.module.css';

export default function SelectedCharacters() {
  const { playerA, playerB } = useContext(FighterContext);

  const [messageA, setMessageA] = useState('?');
  const [messageB, setMessageB] = useState('?');

  useEffect(() => {
    if (playerA) {
      setMessageA(playerA.name);
    }
  }, [playerA]);

  useEffect(() => {
    if (playerB) {
      setMessageB(playerB.name);
    }
  }, [playerB]);

  return (
    <div className={styles.moduleDisplay}>
      <h3 className={styles.character}>{messageA}</h3>
      <h3 className={styles.vs}>VS</h3>
      <h3 className={styles.character}>{messageB}</h3>
    </div>
  );
}
