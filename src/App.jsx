import React from 'react';

import CharactersChoice from './components/CharactersChoice';
import Fight from './components/Fight';
import Footer from './components/Footer';
import Header from './components/Header';

import styles from './App.css';

function App() {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <div className="bodyContainer">
        <Switch>
        <Route path="/characterschoice" component={CharactersChoice} />
        <Route path="/fight" component={Fight} />
        </Switch>
      </div>
      <Footer />
    </main>
  );
}

export default App;
