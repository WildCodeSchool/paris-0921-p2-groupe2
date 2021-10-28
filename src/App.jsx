import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <main className="mainContainer">
      <Header />
      <div className="bodyContainer"></div>
      <Footer />
    </main>
  );
}

export default App;
