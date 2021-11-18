import React from 'react';

import logo from '../../../assets/GitHub.png';
import styles from './FlipCard.module.css';

export default function FlipCard(props) {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <img className={styles.flipCardImage} src={props.src} alt={props.name} />
        </div>
        <div className={styles.flipCardBack}>
          <h2>{props.name}</h2>
          <p>{props.contentSpec}</p>
          <p>{props.contentHero}</p>
          <p>{props.contentWeapon}</p>
          <a href={props.gitHubLink} target="_blank" rel="noreferrer">
            <img className={styles.flipCardLogo} src={logo} alt="GitHub logo" />
          </a>
        </div>
      </div>
    </div>
  );
}
