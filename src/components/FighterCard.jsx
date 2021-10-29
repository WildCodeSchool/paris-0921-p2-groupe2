import './FighterCard.css';

import React from 'react';

export default function FighterCard(hero) {
  return (
    <div className="hero-card">
      <img src={hero.picture} alt={hero.name} className="hero-picture" />
    </div>
  );
}
