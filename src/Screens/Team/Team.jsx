import React from 'react';

import FlipCard from '../../components/Flip card/FlipCard';

import styles from './Team.module.css';

export default function Team() {
  return (
    <div>
      <p className={styles.teamTitle}>Who is behin this wonderderful app ?</p>
      <div className={styles.Team}>
        <FlipCard
          name="Vincent"
          src="../../assets/Avatar3.png"
          contentSpec="Algorithm master"
          contentHero="Favorite Fighter:Batman"
          contentWeapon="Favorite Weapon:Tank"
        />
        <FlipCard
          name="Charlotte"
          src="../../assets/Avatar4.png"
          contentSpec="Style Tammer"
          contentHero="Favorite Fighter:Harley Queen"
          contentWeapon="Favorite Weapon:Everybody is everywhere"
        />
        <FlipCard
          name="Philippe"
          src="../../assets/Avatar2.png"
          contentSpec="Welcoming chief"
          contentHero="Favorite Fighter: Sauron"
          contentWeapon="Favorite Weapon: The Delorean"
        />
        <FlipCard
          name="Isabelle"
          src="../../assets/Avatar1.png"
          contentSpec="Personnal brander"
          contentHero="Favorite Fighter:Black widow"
          contentWeapon="Favorite Weapon:Panoramix potion"
        />
      </div>
    </div>
  );
}
