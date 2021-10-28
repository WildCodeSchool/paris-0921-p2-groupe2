import React from 'react';
import imgModeLibre from '../img/modeLibre.jpg';

function ModeLibre() {
  return (
    <div className="menu-challenge">
      <div className="Menu-Heading">
        <div className="container">
          <h1 className="menu-title">Mode Libre</h1>
          <p className="menu-desc">Le combat sur mesure</p>
        </div>
      </div>

      <div clasName="menu-content">
        <h1 className="inner-menu-title">Mode Libre</h1>
        <img src={imgModeLibre} clasName="Menu-img" alt="ModeLibre" />
        <p className="inner-menu-desc">Le combat sur mesure</p>
      </div>
    </div>
  );
}

export default ModeLibre;
