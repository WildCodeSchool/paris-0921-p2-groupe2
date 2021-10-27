import './DisplayFight.css';
import React from 'react';

import FighterCard from './FighterCard';

export default function DisplayFight() {
  return (
    <>
      <h2 className="fight-title">FIGHT!</h2>
      <div className="heroes-display">
        <FighterCard />
        <FighterCard />
      </div>
    </>
  );
}
