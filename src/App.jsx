import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import styles from './App.module.css';

import Button from './Screens/Home/Button';
import CharactersChoice from './Screens/Character Choice/CharactersChoice';
import DisplayFight from './Screens/Fighting results/DisplayFight';
import Form from './Screens/Form/Form';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LaunchFightButton from './components/Launch fight button/LaunchFightButton';
import { handicaps, weapons, fields } from './algorithms/bonusmalus/BonusMalus';

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
          <Route exact path="/" component={Button} />
          <Route path="/characterschoice">
            <CharactersChoice handleChange={selectFighter} />
            {heroB && <LaunchFightButton />}
          </Route>
          <Route path="/fight">
            <DisplayFight heroA={heroA} heroB={heroB} />
          </Route>
          <Route path="/options">
            <Form handicaps={handicaps} weapons={weapons} fields={fields} />
          </Route>
        </Switch>
      </div>
      <Footer />
    </main>
  );
}

export default App;
