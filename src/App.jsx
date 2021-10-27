import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import DisplayFight from './components/DisplayFight';

function App() {
  const heroA = '18';
  const heroB = '309';

  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/characterschoice" component={CharactersChoice} /> */}
          <Route path="/fight">
            <DisplayFight heroA={heroA} heroB={heroB} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
