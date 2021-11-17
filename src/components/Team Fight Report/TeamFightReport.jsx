import React from 'react';

import styles from './TeamFightReport.module.css';

export default function TeamFightReport(props) {
  const { report } = props;

  const result = report.pop();

  return (
    <div className={styles.reportContainer}>
      {report.map((x, i) => {
        return (
          <div className={styles.fightingAction} key={i}>
            {x}
          </div>
        );
      })}
      <div className={styles.fightingResult}>{result}</div>
    </div>
  );
}
