// import React, { useState } from 'react';
import React from 'react';
import './App.css';
import styles from './App.css';
import Button from './components/Button';
import DisplayFight from './components/DisplayFight';
import CharactersChoice from './components/CharactersChoice';
import { Switch, Route } from 'react-router-dom';

function App() {
  let heroA = 650;
  let heroB = 650;
  // const [heroA, setHeroA] = useState(650);
  // const [heroB, setHeroB] = useState(644);

  // // function updateFighters(e) {
  // //   setHeroA(70);
  // //   setHeroB(70);
  // // }

  return (
    <main className={styles.rswContainer}>
      <div className={styles.bodyContainer}>
        <Switch>
          <Route exact path="/" component={Button} />
          {/* <Route path="/characterschoice" component={CharactersChoice} handleChange={updateFighters} /> */}
          <Route path="/characterschoice" component={CharactersChoice} />
          <Route path="/fight">
            <DisplayFight heroA={heroA} heroB={heroB} />
          </Route>
        </Switch>
      </div>
    </main>
  );
}

export default App;
