/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import generateTeams from '../../algorithms/GenerateTeams';
import teamAlgorithm from '../../algorithms/TeamAlgorithm';

import FighterContext from '../../contexts/FighterContext';
import TeamFightReport from '../../components/Team Fight Report/TeamFightReport';

import styles from './TeamFight.module.css';

export default function TeamFight() {
  const { resetGame, teamA, teamB } = useContext(FighterContext);

  // console.log(teamA);
  // console.log(teamB);
  let groups = generateTeams(teamA, teamB);
  let groupA = groups[0];
  let groupB = groups[1];
  // console.log(groupA);
  // console.log(groupB);
  let report = teamAlgorithm(groupA, groupB);
  // console.log(report);

  return (
    <div className={styles.fightingComponent}>
      {report && <TeamFightReport report={report} />}
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
