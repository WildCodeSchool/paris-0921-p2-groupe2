import React from 'react';

import styles from './ChallengeReport.module.css';

export default function ChallengeReport(props) {
  const { report } = props;

  const announcement = report.shift();
  const result = report.pop()[1];

  return (
    <div className={styles.reportContainer}>
      <div className={styles.fightingAnnouncement}>{announcement}</div>
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
