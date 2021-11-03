import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CombatAlgorithm from '../../algorithms/CombatAlgorithm';

import styles from './DisplayFight.module.css';
import FighterCard from '../../components/Fighter card/FighterCard';
import FigthtingReport from '../../components/Figthing Report/FightingReport';
import Fighter from '../../algorithms/CharacterClass';

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
  let modifA = [];
  const objectA = {
    intelligence: 0,
    strength: -10,
    speed: +20,
    durability: 0,
    power: 0,
    combat: 0,
  };
  const objectB = {
    intelligence: 0,
    strength: 5,
    speed: +30,
    durability: 0,
    power: 0,
    combat: 0,
  };
  modifA.push(objectA);
  modifA.push(objectB);

  if (characterA != '' && characterB != '') {
    FighterA = new Fighter(characterA);
    FighterB = new Fighter(characterB);
    // console.log(FighterA);
    // console.log('Initial strength : ' + FighterA.strength);
    // console.log('Initial speed : ' + FighterA.speed);
    // console.log(FighterB);
    FighterA.updateGear(modifA);
    // console.log('New strength : ' + FighterA.strength);
    // console.log('New speed : ' + FighterA.speed);

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
