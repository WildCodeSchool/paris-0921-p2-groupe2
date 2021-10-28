import React from 'react';
import imgChallenge from '../img/fight.jpg';
import './MenuModes.css';

function Challenge() {
  return (
    <div className="menu-challenge">
      <div className="Menu-Heading">
        <div className="container">
          <h1 className="menu-title">Challenge</h1>
          <p className="menu-desc">Choisis ton champion pour réussir le scénario proposé</p>
        </div>
      </div>

      <div clasName="menu-content">
        <h1 className="inner-menu-title">Challenge</h1>
        <img src={imgChallenge} clasName="Menu-img" alt="challenge" />
        <p className="inner-menu-desc">Choisis ton champion pour réussir le scénario proposé</p>
      </div>
    </div>
  );
}

export default Challenge;
