import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import styles from './App.module.css';

import Button from './components/Button';
import CharactersChoice from './components/CharactersChoice';
import DisplayFight from './components/DisplayFight';
// import Footer from './components/Footer';
import Header from './components/Header';
import LaunchFightButton from './components/LaunchFightButton';

function App() {
  const [heroA, setHeroA] = useState('');
  const [heroB, setHeroB] = useState('');

  function selectFighter(e) {
    // console.log('Selecting fighter');
    // console.log(e.target.value);
    if (heroA == '') {
      setHeroA(e.target.value);
    } else if (heroB == '') {
      setHeroB(e.target.value);
    }
  }

  return (
    <main className={styles.mainContainer}>
      <Header />
      <div className={styles.bodyContainer}>
        <Switch>
          <Route exact path="/" component={Button} />
          <Route path="/characterschoice">
            <CharactersChoice handleChange={selectFighter} />
            {heroB && <LaunchFightButton />}
          </Route>
          <Route path="/fight">
            <DisplayFight heroA={heroA} heroB={heroB} />
          </Route>
        </Switch>
      </div>
      {/* <Footer /> */}
    </main>
  );
}

export default App;
