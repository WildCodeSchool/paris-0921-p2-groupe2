/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import generateTeams from '../../algorithms/GenerateTeams';
import teamAlgorithm from '../../algorithms/TeamAlgorithm';

import FighterContext from '../../contexts/FighterContext';

import styles from './TeamFight.module.css';

export default function TeamFight() {
  const { resetGame, teamA, teamB } = useContext(FighterContext);
  let groupA, groupB;
  let report = [];

  useEffect(() => {
    // console.log(teamA);
    // console.log(teamB);
    let groups = generateTeams(teamA, teamB);
    groupA = groups[0];
    groupB = groups[1];
  }, []);

  //   useEffect(() => {
  //     console.log(groupA);
  //   }, [groupA]);

  useEffect(() => {
    if (groupA.length == 3 && groupB.length == 3) {
      report = teamAlgorithm(groupA, groupB);
    }
  }, [groupA, groupB]);

  // useEffect(() => {
  //   if (report.length) {
  //     console.log(report);
  //   }
  // }, [report]);

  return (
    <div className={styles.fightingComponent}>
      <div className={styles.endgameChoice}>
        <Link to="/team">
          <button onClick={resetGame}>Another battle</button>
        </Link>
        <Link to="/">
          <button onClick={resetGame}>Main menu</button>
        </Link>
      </div>
    </div>
  );
}
