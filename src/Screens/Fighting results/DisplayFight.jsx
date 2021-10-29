import './DisplayFight.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CombatAlgorithm from '../../algorithms/CombatAlgorithm';

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
  if (characterA != '' && characterB != '') {
    FighterA = new Fighter(characterA);
    FighterB = new Fighter(characterB);
    report = CombatAlgorithm(FighterA, FighterB);
  }

  return (
    <div className="fighting-component">
      <div className="heroes-display">
        {FighterA && <FighterCard {...FighterA} />}
        {FighterB && <FighterCard {...FighterB} />}
      </div>
      {report && <FigthtingReport report={report} />}

      <div className="endgame-choice">
        <Link to="/characterschoice">
          <button className="endgame-choice-button">Another battle</button>
        </Link>
        <Link to="/">
          <button className="endgame-choice-button">Main menu</button>
        </Link>
      </div>
    </div>
  );
}
