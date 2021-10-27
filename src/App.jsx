import React from 'react';

import './App.css';

import DisplayFight from './components/DisplayFight';

function App() {
  const heroA = '18';
  const heroB = '309';

  return (
    <>
      <DisplayFight heroA={heroA} heroB={heroB} />
    </>
  );
}

export default App;
