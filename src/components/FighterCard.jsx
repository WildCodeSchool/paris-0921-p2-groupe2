import './FighterCard.css';

import React from 'react';

export default function FighterCard(hero) {
  return (
    <div className="hero-card">
      <h3 className="hero-name">{hero.name}</h3>
      <img src={hero.picture} alt={hero.name} className="hero-picture" />
    </div>
  );
}
