import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import CombatAlgorithm from '../../algorithms/CombatAlgorithm';
import Fighter from '../../algorithms/CharacterClass';

import FighterContext from '../../contexts/FighterContext';
import FighterCard from '../../components/Fighter card/FighterCard';
import FigthtingReport from '../../components/Figthing Report/FightingReport';

import styles from './DisplayFight.module.css';

export default function DisplayFight() {
  const { playerA, playerB, resetPlayers } = useContext(FighterContext);

  const FighterA = new Fighter(playerA);
  const FighterB = new Fighter(playerB);
  let report = CombatAlgorithm(FighterA, FighterB);

  return (
    <div className={styles.fightingComponent}>
      <div className={styles.heroesDisplay}>
        {FighterA && <FighterCard {...FighterA} />}
        {FighterB && <FighterCard {...FighterB} />}
      </div>
      {report && <FigthtingReport report={report} />}

      <div className={styles.endgameChoice}>
        <Link to="/characterschoice">
          <button onClick={resetPlayers}>Another battle</button>
        </Link>
        <Link to="/">
          <button onClick={resetPlayers}>Main menu</button>
        </Link>
      </div>
    </div>
  );
}
