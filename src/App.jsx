import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Button from './Screens/Home/Button';
import CharactersChoice from './Screens/Character Choice/CharactersChoice';
import DisplayFight from './Screens/Fighting results/DisplayFight';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LaunchFightButton from './components/Launch fight button/LaunchFightButton';
import SelectedCharacters from './components/Selected characters/SelectedCharacters';
import FighterContext from './contexts/FighterContext';

import styles from './App.module.css';

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

  const [playerA, setPlayerA] = useState('');
  const [playerB, setPlayerB] = useState('');

  // eslint-disable-next-line no-unused-vars
  function updatePlayer(e) {
    // console.log('Update Player Function');
    // console.log('Player A : ' + playerA);
    // console.log('Player B : ' + playerB);
    // console.log(e.target.value);
  }

  return (
    <main className={styles.mainContainer}>
      <Header />
      <div className={styles.bodyContainer}>
        <FighterContext.Provider
          value={{ playerA: playerA, setPlayerA: setPlayerA, playerB: playerB, setPlayerB: setPlayerB, updatePlayer: updatePlayer }}
        >
          <Switch>
            <Route exact path="/" component={Button} />
            <Route path="/characterschoice">
              <SelectedCharacters heroA={heroA} heroB={heroB} />
              <CharactersChoice handleChange={selectFighter} />
              {heroB && <LaunchFightButton />}
            </Route>
            <Route path="/fight">
              <DisplayFight heroA={heroA} heroB={heroB} />
            </Route>
          </Switch>
        </FighterContext.Provider>
      </div>
      <Footer />
    </main>
  );
}

export default App;
