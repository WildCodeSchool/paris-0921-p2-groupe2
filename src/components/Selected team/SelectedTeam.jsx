import React from 'react';

import styles from './SelectedTeam.module.css';

export default function SelectedTeam({ team, title }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {team.length != 0 ? (
        team.map((x, i) => (
          <div key={i} className={styles.member}>
            {x.name}
          </div>
        ))
      ) : (
        <div className={styles.member}>?</div>
      )}
    </div>
  );
}
