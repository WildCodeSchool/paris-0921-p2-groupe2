/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import { handicaps, weapons, fields } from '../../algorithms/bonusmalus/BonusMalus';
import CombatAlgorithm from '../../algorithms/CombatAlgorithm';
import Fighter from '../../algorithms/CharacterClass';

import FighterContext from '../../contexts/FighterContext';
import FighterCard from '../../components/Fighter card/FighterCard';
import FigthtingReport from '../../components/Figthing Report/FightingReport';

import styles from './DisplayFight.module.css';

export default function DisplayFight() {
  // const { playerA, playerB, resetPlayers } = useContext(FighterContext);
  const { resetPlayers } = useContext(FighterContext);
  const playerA = {
    response: 'success',
    id: '70',
    name: 'Batman',
    powerstats: {
      intelligence: '100',
      strength: '26',
      speed: '27',
      durability: '50',
      power: '47',
      combat: '100',
    },
    biography: {
      'full-name': 'Bruce Wayne',
      'alter-egos': 'No alter egos found.',
      aliases: ['Insider', 'Matches Malone'],
      'place-of-birth': 'Crest Hill, Bristol Township; Gotham County',
      'first-appearance': 'Detective Comics #27',
      publisher: 'DC Comics',
      alignment: 'good',
    },
    appearance: {
      gender: 'Male',
      race: 'Human',
      height: ["6'2", '188 cm'],
      weight: ['210 lb', '95 kg'],
      'eye-color': 'blue',
      'hair-color': 'black',
    },
    work: {
      occupation: 'Businessman',
      base: 'Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower',
    },
    connections: {
      'group-affiliation':
        'Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps',
      relatives:
        'Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg',
    },
  };

  const playerB = {
    response: 'success',
    id: '309',
    name: 'Harley Quinn',
    powerstats: {
      intelligence: '88',
      strength: '12',
      speed: '33',
      durability: '65',
      power: '55',
      combat: '80',
    },
    biography: {
      'full-name': 'Harley Quinn',
      'alter-egos': 'No alter egos found.',
      aliases: ['Harleen Quinzel', 'Harl', 'Cupid of Crime', 'Jane Wisakedjak', 'Elise Archer', 'Pumpkin Pooh'],
      'place-of-birth': '-',
      'first-appearance': 'Batman: Harley Quinn (October, 1999)',
      publisher: 'DC Comics',
      alignment: 'bad',
    },
    appearance: {
      gender: 'Female',
      race: 'Human',
      height: ["5'7", '170 cm'],
      weight: ['140 lb', '63 kg'],
      'eye-color': 'Blue',
      'hair-color': 'Blond',
    },
    work: {
      occupation: 'Psychiatrist',
      base: 'Gotham City',
    },
    connections: {
      'group-affiliation': 'Formerly The Quintets, The Joker, Poison Ivy, Secret Six',
      relatives: 'Barry Quinzel (brother), Sharon Quinzel (mother), Nick Quinzel (father), Jenny Quinzel (niece), Nicky Quinzel (nephew)',
    },
    image: {
      url: 'https://www.superherodb.com/pictures2/portraits/10/100/701.jpg',
    },
  };

  // { handicaps, weapons, fields }
  // console.log(handicaps)
  // console.log(weapons)
  // console.log(fields)

  const options = {
    optionA: ['3', '16'],
    optionB: ['4', '17'],
    field: '1',
  };

  let modifA = [];
  let modifB = [];
  let handicapA = handicaps.filter((x) => x.id == Number(options.optionA[0]))[0];
  let handicapB = handicaps.filter((x) => x.id == Number(options.optionB[0]))[0];
  let weaponA = weapons.filter((x) => x.id == Number(options.optionA[1]))[0];
  let weaponB = weapons.filter((x) => x.id == Number(options.optionB[1]))[0];
  // let field = fields.filter(x => x.id == Number(options.field))[0]

  // console.log(handicapA.name)
  // console.log(handicapB.name)
  // console.log(weaponA.name)
  // console.log(weaponB.name)
  // console.log(field.name)
  // console.log(handicapA)

  modifA.push(handicapA);
  modifA.push(weaponA);
  // modifA.push(field)
  modifB.push(handicapB);
  modifB.push(weaponB);
  // modifB.push(field)

  const FighterA = new Fighter(playerA);
  const FighterB = new Fighter(playerB);
  // console.log('Stats pre modifs')
  // console.log(FighterA)
  // console.log(FighterB)

  FighterA.updateGear(modifA);
  FighterB.updateGear(modifB);

  // console.log('Stats post modifs')
  // console.log(FighterA)
  // console.log(FighterB)

  let report = CombatAlgorithm(FighterA, FighterB);

  return (
    <div className={styles.fightingComponent}>
      <div className={styles.heroesDisplay}>
        {FighterA && <FighterCard {...FighterA} />}
        {FighterB && <FighterCard {...FighterB} />}
      </div>
      {report && <FigthtingReport report={report} />}

      <div className={styles.endgameChoice}>
        <Link to="/characterschoice">
          <button onClick={resetPlayers}>Another battle</button>
        </Link>
        <Link to="/">
          <button onClick={resetPlayers}>Main menu</button>
        </Link>
      </div>
    </div>
  );
}
