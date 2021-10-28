import React from 'react';
import logo from '../assets/logoBC.png';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
}

export default Header;
