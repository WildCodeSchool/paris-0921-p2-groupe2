import React from 'react';
import Challenge from './Challenge';
import Survie from './Survie';
import ModeLibre from './ModeLibre';
import './MenuModes.css';

function MenuModes() {
  return (
    <div className="menuMode-container">
      <button>Challenge</button>
      <Challenge />
      <button>Survie</button>
      <Survie />
      <button>Mode Libre</button>
      <ModeLibre />
    </div>
  );
}
export default MenuModes;
