import React from 'react';
import imgSurvie from '../img/marvelAllSuper.jpg';
function Survie() {
  return (
    <div className="menu-challenge">
      <div className="Menu-Heading">
        <div className="container">
          <h1 className="menu-title">Mode Survie</h1>
          <p className="menu-desc">Survis le plus longtemps possible</p>
        </div>
      </div>

      <div clasName="menu-content">
        <h1 className="inner-menu-title">Mode Survie</h1>
        <img src={imgSurvie} clasName="Menu-img" alt="ModeSurvie" />
        <p className="inner-menu-desc">Survis le plus longtemps possible</p>
      </div>
    </div>
  );
}

export default Survie;
