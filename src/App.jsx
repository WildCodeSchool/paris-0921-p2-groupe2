import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import styles from './App.module.css';
import Menu3Modes from './Screens/Menu/Menu3Modes';
import CharactersChoice from './Screens/Character Choice/CharactersChoice';
import DisplayFight from './Screens/Fighting results/DisplayFight';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LaunchFightButton from './components/Launch fight button/LaunchFightButton';

function App() {
  const [heroA, setHeroA] = useState('');
  const [heroB, setHeroB] = useState('');

  function selectFighter(e) {
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
          <Route exact path="/" component={Menu3Modes} />
          <Route path="/characterschoice">
            <CharactersChoice handleChange={selectFighter} />
            {heroB && <LaunchFightButton />}
          </Route>
          <Route path="/fight">
            <DisplayFight heroA={heroA} heroB={heroB} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </main>
  );
}

export default App;
