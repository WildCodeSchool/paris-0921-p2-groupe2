import React from 'react';
import { Link } from 'react-router-dom';

export default function LaunchFightButton(props) {
  const { heroA, heroB } = props;
  // console.log(heroA);
  // console.log(heroB);

  return (
    <>
      <p>{heroA}</p>
      <p>{heroB}</p>
      <Link to="/fight">
        <button>Launch fight</button>
      </Link>
    </>
  );
}

// {secondSelectedFighter && <DisplayFight heroA={firstSelectedFighter} heroB={secondSelectedFighter} />}
