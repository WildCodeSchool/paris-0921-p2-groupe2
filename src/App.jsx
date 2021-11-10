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
  const [playerA, setPlayerA] = useState('');
  const [playerB, setPlayerB] = useState('');

  function resetPlayers() {
    setPlayerA('');
    setPlayerB('');
  }

  function updatePlayer(e) {
    if (playerA == '') {
      fetch(`https://cors-bypass.tkzprod.dev/superheroapi.com/api/408055134055673/${e.target.value}`)
        .then((res) => res.json())
        .then((data) => setPlayerA(data));
    } else if (playerB == '') {
      fetch(`https://cors-bypass.tkzprod.dev/superheroapi.com/api/408055134055673/${e.target.value}`)
        .then((res) => res.json())
        .then((data) => setPlayerB(data));
    }
  }

  return (
    <main className={styles.mainContainer}>
      <FighterContext.Provider
        value={{
          playerA: playerA,
          playerB: playerB,
          setPlayerA: setPlayerA,
          setPlayerB: setPlayerB,
          updatePlayer: updatePlayer,
          resetPlayers: resetPlayers,
        }}
      >
        <Header />
        <div className={styles.bodyContainer}>
          <Switch>
            <Route exact path="/" component={Button} />
            <Route path="/characterschoice">
              <SelectedCharacters />
              <CharactersChoice />
              {playerB && <LaunchFightButton />}
            </Route>
            <Route path="/fight">
              <DisplayFight />
            </Route>
          </Switch>
        </div>
      </FighterContext.Provider>
      <Footer />
    </main>
  );
}

export default App;
