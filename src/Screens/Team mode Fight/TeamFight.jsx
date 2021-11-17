import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import generateTeams from '../../algorithms/GenerateTeams';
import teamAlgorithm from '../../algorithms/TeamAlgorithm';

import TeamCard from '../../components/Team card/TeamCard';
import FighterContext from '../../contexts/FighterContext';
import TeamFightReport from '../../components/Team Fight Report/TeamFightReport';

import styles from './TeamFight.module.css';

export default function TeamFight() {
  const { resetGame, teamA, teamB } = useContext(FighterContext);

  let groups = generateTeams(teamA, teamB);
  let groupA = groups[0];
  let groupB = groups[1];
  let report = teamAlgorithm(groupA, groupB);

  return (
    <div className={styles.fightingComponent}>
      <div className={styles.teamsDisplay}>
        <TeamCard team={teamA} />
        <TeamCard team={teamB} />
      </div>
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
