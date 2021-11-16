import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import FighterContext from '../../contexts/FighterContext';

import styles from './TeamChoice.module.css';

export default function TeamChoice() {
  const { setTeamA, setTeamB } = useContext(FighterContext);
  let defaultA = [70, 106, 107];
  let defaultB = [127, 228, 236];
  let tempA = [];
  let tempB = [];

  useEffect(() => {
    for (let index of defaultA) {
      fetch(`https://cors-bypass.tkzprod.dev/superheroapi.com/api/408055134055673/${index}`)
        .then((res) => res.json())
        .then((data) => tempA.push(data));
    }
    setTeamA(tempA);
    for (let index of defaultB) {
      fetch(`https://cors-bypass.tkzprod.dev/superheroapi.com/api/408055134055673/${index}`)
        .then((res) => res.json())
        .then((data) => tempB.push(data));
    }
    setTeamB(tempB);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.teamTitle}>Choose your teams !</h2>
      <Link to="/teamfight">
        <button className={styles.bigbutton}>LESSGO</button>
      </Link>
    </div>
  );
}
