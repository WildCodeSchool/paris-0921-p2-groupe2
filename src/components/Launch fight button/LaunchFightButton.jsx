import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LaunchFightButton.module.css';

export default function LaunchFightButton() {
  return (
    <>
      <Link to="/fight">
        <button className={styles.launchFightButton}>FIGHT</button>
      </Link>
    </>
  );
}
