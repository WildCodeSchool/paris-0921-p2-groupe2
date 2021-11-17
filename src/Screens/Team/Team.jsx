import React from 'react';

import FlipCard from '../../components/Flip card/FlipCard';

import styles from './Team.module.css';

export default function Team() {
  return (
    <div>
      <p className={styles.teamTitle}>Team Presentation</p>
      <div className={styles.Team}>
        <FlipCard name="Vincent" src="../../assets/Avatar3.png" content="Algorithm master" />
        <FlipCard name="Charlotte" src="../../assets/Avatar4.png" content="Style Tammer " />
        <FlipCard name="Philippe" src="../../assets/Avatar2.png" content="Welcoming chief" />
        <FlipCard name="Isabelle" src="../../assets/Avatar1.png" content="Personnal brander" />
      </div>
    </div>
  );
}
