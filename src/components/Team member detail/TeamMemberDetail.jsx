import React, { useContext } from 'react';

import FighterContext from '../../contexts/FighterContext';

import styles from './TeamMemberDetail.module.css';

export default function TeamMemberDetail({ character }) {
  const { teamA, teamB, setTeamA, setTeamB } = useContext(FighterContext);

  function assignTeamA() {
    setTeamA([...teamA, character]);
  }

  function assignTeamB() {
    setTeamB([...teamB, character]);
  }

  return (
    <div className={styles.charactersCard}>
      <img className={styles.detailImage} src={character.image.url} alt={character.name} />
      <div className={styles.details}>
        <h2 className={styles.name}>{character.name}</h2>
        <button className={styles.button} onClick={assignTeamA} value={character}>
          To Team A
        </button>
        <button className={styles.button} onClick={assignTeamB} value={character}>
          To Team B
        </button>
      </div>
    </div>
  );
}
