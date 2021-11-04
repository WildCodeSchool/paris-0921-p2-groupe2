import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CombatAlgorithm from '../../algorithms/CombatAlgorithm';
import Fighter from '../../algorithms/CharacterClass';

import FighterCard from '../../components/Fighter card/FighterCard';
import FigthtingReport from '../../components/Figthing Report/FightingReport';

import styles from './DisplayFight.module.css';

export default function DisplayFight(props) {
  const [characterA, setCharacterA] = useState('');
  const [characterB, setCharacterB] = useState('');

  const { heroA, heroB } = props;

  useEffect(() => {
    fetch('../../fakeApi.json')
      .then((res) => res.json())
      .then((data) => setCharacterA(data[heroA]));
  }, []);

  useEffect(() => {
    fetch('../../fakeApi.json')
      .then((res) => res.json())
      .then((data) => setCharacterB(data[heroB]));
  }, []);

  let FighterA, FighterB, report;
  if (characterA != '' && characterB != '') {
    FighterA = new Fighter(characterA);
    FighterB = new Fighter(characterB);
    report = CombatAlgorithm(FighterA, FighterB);
  }

  return (
    <div className={styles.fightingComponent}>
      <div className={styles.heroesDisplay}>
        {FighterA && <FighterCard {...FighterA} />}
        {FighterB && <FighterCard {...FighterB} />}
      </div>
      {report && <FigthtingReport report={report} />}

      <div className={styles.endgameChoice}>
        <Link to="/characterschoice">
          <button>Another battle</button>
        </Link>
        <Link to="/">
          <button>Main menu</button>
        </Link>
      </div>
    </div>
  );
}
