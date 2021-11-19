/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import FighterContext from '../../contexts/FighterContext';
import styles from './Header.module.css';
import logo from '../../../assets/logoBC.png';

export default function Header() {
  const { resetGame } = useContext(FighterContext);

  return (
    <div className={styles.header}>
      <Link to="/">
        <img onClick={resetGame} className={styles.logo} src={logo} alt="logo" />
      </Link>
    </div>
  );
}
