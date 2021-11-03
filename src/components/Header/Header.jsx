import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/logoBC.png';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
    </div>
  );
}

export default Header;
