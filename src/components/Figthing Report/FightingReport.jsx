import React from 'react';

import styles from './FightingReport.module.css';

export default function FigthtingReport(props) {
  const { report } = props;

  const announcement = report.shift();
  const result = report.pop();

  // console.log(report);

  return (
    <div className={styles.reportContainer}>
      <div className={styles.fightingAnnouncement}>{announcement}</div>
      {report.map((x, i) => {
        return (
          <div className={styles.fightingAction} key={i}>
            {x[0]}
          </div>
        );
      })}
      <div className={styles.fightingResult}>{result}</div>
    </div>
  );
}
