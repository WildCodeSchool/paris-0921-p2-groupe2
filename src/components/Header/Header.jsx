import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import logo from '../../../assets/logoBC.png';

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
