import './DisplayFight.css';
import React, { useEffect, useState } from 'react';

import CombatAlgorithm from '../algorithms/CombatAlgorithm';

import FighterCard from './FighterCard';
import FigthtingReport from './FightingReport';
import Fighter from '../algorithms/CharacterClass';

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
    <>
      <div className="heroes-display">
        {FighterA && <FighterCard {...FighterA} />}
        {FighterB && <FighterCard {...FighterB} />}
      </div>
      {report && <FigthtingReport report={report} />}
    </>
  );
}
