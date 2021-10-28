import React from 'react';
import { Switch, Route } from 'react-router-dom';

import styles from './App.module.css';

import Button from './components/Button';
import CharactersChoice from './components/CharactersChoice';
// import DisplayFight from './components/DisplayFight';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  // let heroA = 650;
  // let heroB = 650;
  // const [heroA, setHeroA] = useState(650);
  // const [heroB, setHeroB] = useState(644);

  // // function updateFighters(e) {
  // //   setHeroA(70);
  // //   setHeroB(70);
  // // }

  return (
    <main className={styles.mainContainer}>
      <Header />
      <div className={styles.bodyContainer}>
        <Switch>
          <Route exact path="/" component={Button} />
          <Route path="/characterschoice" component={CharactersChoice} />
          {/* <Route path="/fight" component={Fight} /> */}
        </Switch>
      </div>
      <Footer />
    </main>
  );
}

export default App;
