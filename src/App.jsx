import React from 'react';
import { Switch, Route } from 'react-router';

import Button from './components/Button';
import CharactersChoice from './components/CharactersChoice';
import Fight from './components/Fight';
import Footer from './components/Footer';
import Header from './components/Header';

import styles from './App.module.css';

function App() {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <div className={styles.bodyContainer}>
        <Switch>
          <Route exact path="/" component={Button} />
          <Route path="/characterschoice" component={CharactersChoice} />
          <Route path="/fight" component={Fight} />
        </Switch>
      </div>
      <Footer />
    </main>
  );
}

export default App;
