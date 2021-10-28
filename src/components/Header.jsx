import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logoBC.png';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
    </div>
  );
}

export default Header;
