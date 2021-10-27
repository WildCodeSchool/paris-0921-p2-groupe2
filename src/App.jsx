import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CharactersChoice from './components/CharactersChoice';

import styles from './App.css';

function App() {
  return (
    <main className={styles.rswContainer}>
      <Switch>
        <Route path="/characterschoice" component={CharactersChoice} />
      </Switch>
    </main>
  );
}

export default App;
