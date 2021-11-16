/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { handicaps, weapons, fields } from '../../algorithms/bonusmalus/BonusMalus';
import CombatAlgorithm from '../../algorithms/CombatAlgorithm';
import Fighter from '../../algorithms/CharacterClass';

import FighterContext from '../../contexts/FighterContext';
import FighterCard from '../../components/Fighter card/FighterCard';
import FigthtingReport from '../../components/Figthing Report/FightingReport';

import styles from './TeamFight.module.css';

export default function TeamFight() {
  const { playerA, playerB, resetGame, options } = useContext(FighterContext);

  //   const FighterA = new Fighter(playerA);
  //   const FighterB = new Fighter(playerB);

  // let report = CombatAlgorithm(FighterA, FighterB);

  return (
    <div className={styles.fightingComponent}>
      {/* {report && <FigthtingReport report={report} />} */}

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
