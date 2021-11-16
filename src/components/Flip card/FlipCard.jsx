import React from 'react';
import styles from './FlipCard.module.css';

function FlipCard(props) {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <img className={styles.flipCardImage} src={props.src} alt={props.name} />
        </div>
        <div className={styles.flipCardBack}>
          <h2>{props.name}</h2>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;