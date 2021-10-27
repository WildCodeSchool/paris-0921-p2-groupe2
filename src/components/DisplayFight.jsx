import './DisplayFight.css';
import React, { useEffect, useState } from 'react';

import FighterCard from './FighterCard';
import Fighter from '../algorithms/CharacterClass';

export default function DisplayFight(props) {
  const [characterA, setCharacterA] = useState('');
  const [characterB, setCharacterB] = useState('');

  // eslint-disable-next-line react/prop-types
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

  let FighterA, FighterB;
  if (characterA != '') {
    FighterA = new Fighter(characterA);
  }
  if (characterB != '') {
    FighterB = new Fighter(characterB);
  }

  return (
    <>
      <h2 className="fight-title">FIGHT!</h2>
      <div className="heroes-display">
        {FighterA && <FighterCard {...FighterA} />}
        {FighterB && <FighterCard {...FighterB} />}
      </div>
    </>
  );
}
