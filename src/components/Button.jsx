import React from 'react';
import { Link } from 'react-router-dom';

import styles from './button.module.css';

function Button() {
  return (
    <Link to="/fight">
      {/* <Link to="/characterschoice"> */}
      <button className={styles.gameLaunch}>Ready to fight ?</button>
    </Link>
  );
}

export default Button;
