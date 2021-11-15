import React from 'react';

import { handicaps, weapons } from '../../algorithms/bonusmalus/BonusMalus';

import styles from './ChallengeParams.module.css';

export default function ChallengeParams({ options }) {
  const handicap = handicaps[options[0]].name;
  const weapon = weapons[options[1]].name;

  return (
    <div className={styles.challengeOptions}>
      <p>Handicap : {handicap}</p>
      <p>Weapon : {weapon}</p>
    </div>
  );
}