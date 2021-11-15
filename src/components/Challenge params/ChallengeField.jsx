import React from 'react';

import { fields } from '../../algorithms/bonusmalus/BonusMalus';

import styles from './ChallengeParams.module.css';

export default function ChallengeField({ options }) {
  const field = fields[options].name;

  return (
    <div className={styles.fieldOptions}>
      <p>
        <b>Field</b> {field}
      </p>
    </div>
  );
}
