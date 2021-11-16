import React from 'react';

import styles from './FightingReport.module.css';

export default function TeamFightReport(props) {
  const { report } = props;

  return (
    <div className={styles.reportContainer}>
      {report.map((x, i) => {
        return (
          <div className={styles.fightingAction} key={i}>
            {x}
          </div>
        );
      })}
    </div>
  );
}
