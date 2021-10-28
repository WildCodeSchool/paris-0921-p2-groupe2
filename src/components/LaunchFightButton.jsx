import React from 'react';
import { Link } from 'react-router-dom';
import './LaunchFightButton.css';

export default function LaunchFightButton() {
  return (
    <>
      <Link to="/fight">
        <button className="launch-fight-button">FIGHT</button>
      </Link>
    </>
  );
}
