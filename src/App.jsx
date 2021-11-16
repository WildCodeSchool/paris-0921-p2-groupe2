import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import TeamChoice from './Screens/Team mode Choice/TeamChoice';
import TeamFight from './Screens/Team mode Fight/TeamFight';
import FighterContext from './contexts/FighterContext';
import Menu3Modes from './Screens/Menu/Menu3Modes';
import CharactersChoice from './Screens/Free Mode Choice/CharactersChoice';
import DisplayFight from './Screens/Free Mode Fight/DisplayFight';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LaunchFightButton from './components/Launch fight button/LaunchFightButton';
import SelectedCharacters from './components/Selected characters/SelectedCharacters';
import ChallengeMode from './Screens/Challenge mode Choice/ChallengeMode';
import Form from './Screens/Free Mode Options/OptionsForm';

import styles from './App.module.css';
function App() {
  const [playerA, setPlayerA] = useState('');
  const [playerB, setPlayerB] = useState('');
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);
  const [options, setOptions] = useState('');

  function resetGame() {
    setPlayerA('');
    setPlayerB('');
    setTeamA([]);
    setTeamB([]);
    setOptions('');
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
          teamA: teamA,
          teamB: teamB,
          options: options,
          setPlayerA: setPlayerA,
          setPlayerB: setPlayerB,
          setTeamA: setTeamA,
          setTeamB: setTeamB,
          setOptions: setOptions,
          updatePlayer: updatePlayer,
          resetGame: resetGame,
        }}
      >
        <Header />
        <div className={styles.bodyContainer}>
          <Switch>
            <Route exact path="/" component={Menu3Modes} />
            <Route path="/freemode">
              <SelectedCharacters />
              <CharactersChoice />
              {playerB && <LaunchFightButton />}
            </Route>
            <Route path="/fight">
              <DisplayFight />
            </Route>
            <Route path="/challenge">
              <ChallengeMode />
            </Route>
            <Route path="/team">
              <TeamChoice />
            </Route>
            <Route path="/teamfight">
              <TeamFight />
            </Route>
            <Route path="/options">
              <Form />
            </Route>
          </Switch>
        </div>
      </FighterContext.Provider>
      <Footer />
    </main>
  );
}

export default App;
