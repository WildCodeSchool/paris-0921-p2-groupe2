import React from 'react';
import Challenge from './Challenge';
import Survie from './Survie';
import ModeLibre from './ModeLibre';

import './MenuModes.css';

function MenuModes() {
  return (
    <div>
      <Challenge />
      <Survie />
      <ModeLibre />
    </div>
  );
}
export default MenuModes;
