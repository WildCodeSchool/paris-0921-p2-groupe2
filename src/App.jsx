import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Fight from './components/Fight';
import CharactersChoice from './components/CharactersChoice';

import styles from './App.css';

function App() {
  return (
    <main className={styles.rswContainer}>
      <Switch>
        <Route path="/characterschoice" component={CharactersChoice} />
        <Route path="/fight" component={Fight} />
      </Switch>
    </main>
  );
}

export default App;
