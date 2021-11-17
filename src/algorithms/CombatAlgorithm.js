import attackCheck from './AttackCheck';
import initiativeCheck from './InitiativeCheck';
import pronoun from './Pronoun';

export default function fight(fighterA, fighterB) {
  let rapport = [];

  let damageA = fighterA.strength + fighterA.power;
  let damageB = fighterB.strength + fighterB.power;
  let initiativeA = fighterA.speed;
  let initiativeB = fighterB.speed;
  let lifeA = fighterA.durability;
  let lifeB = fighterB.durability;
  const initialLifeA = lifeA;
  const initialLifeB = lifeB;

  let initiative;
  let first;
  let turns = 0;

  rapport.push(`${fighterA.name} VS ${fighterB.name}`);

  while (lifeB > 0 && lifeA > 0 && turns <= 15) {
    initiative = initiativeCheck(initiativeA, initiativeB);
    turns++;

    if (initiative == 'A') {
      first = initiativeA == fighterA.speed;

      initiativeA /= 2;
      initiativeB = fighterB.speed;

      let damage = attackCheck(fighterA, fighterB);

      if (damage <= -100) {
        initiativeA = -100;
        lifeA -= 3;
        rapport.push([`EPIC FAIL : ${fighterA.name} trips.`, Math.ceil((lifeA / initialLifeA) * 100), Math.ceil((lifeB / initialLifeB) * 100)]);
      } else if (damage < -50) {
        initiativeA /= 2;
        rapport.push([`${fighterB.name} dodges.`, Math.ceil((lifeA / initialLifeA) * 100), Math.ceil((lifeB / initialLifeB) * 100)]);
      } else if (damage < 0) {
        let punch = Math.floor(damageA * 0.1);
        lifeB -= punch;
        rapport.push([
          `${first ? fighterA.name : pronoun(fighterA)} is blocked.`,
          Math.ceil((lifeA / initialLifeA) * 100),
          Math.ceil((lifeB / initialLifeB) * 100),
        ]);
      } else if (damage < 50) {
        let punch = Math.floor(damageA * 0.2);
        lifeB -= punch;
        rapport.push([
          `${first ? fighterA.name : pronoun(fighterA)} hits.`,
          Math.ceil((lifeA / initialLifeA) * 100),
          Math.ceil((lifeB / initialLifeB) * 100),
        ]);
      } else if (damage < 100) {
        let punch = Math.floor(damageA * 0.3);
        lifeB -= punch;
        rapport.push([
          `${first ? fighterA.name : pronoun(fighterA)} strikes !`,
          Math.ceil((lifeA / initialLifeA) * 100),
          Math.ceil((lifeB / initialLifeB) * 100),
        ]);
      } else {
        initiativeA = fighterA.speed - 1;
        let punch = Math.floor(damageA * 0.5);
        lifeB -= punch;
        rapport.push([`CRITICAL : ${fighterB.name} stumbles.`, Math.ceil((lifeA / initialLifeA) * 100), Math.ceil((lifeB / initialLifeB) * 100)]);
      }
    } else if (initiative == 'B') {
      first = initiativeB == fighterB.speed;

      initiativeB /= 2;
      initiativeA = fighterA.speed;

      let damage = attackCheck(fighterB, fighterA);

      if (damage <= -100) {
        initiativeB = -100;
        lifeB -= 3;
        rapport.push([`EPIC FAIL : ${fighterB.name} trips.`, Math.ceil((lifeA / initialLifeA) * 100), Math.ceil((lifeB / initialLifeB) * 100)]);
      } else if (damage < -33) {
        initiativeB /= 2;
        rapport.push([`${fighterA.name} dodges.`, Math.ceil((lifeA / initialLifeA) * 100), Math.ceil((lifeB / initialLifeB) * 100)]);
      } else if (damage < 0) {
        let punch = Math.floor(damageB * 0.1);
        lifeA -= punch;
        rapport.push([
          `${first ? fighterB.name : pronoun(fighterB)} is blocked.`,
          Math.ceil((lifeA / initialLifeA) * 100),
          Math.ceil((lifeB / initialLifeB) * 100),
        ]);
      } else if (damage < 33) {
        let punch = Math.floor(damageB * 0.2);
        lifeA -= punch;
        rapport.push([
          `${first ? fighterB.name : pronoun(fighterB)} hits.`,
          Math.ceil((lifeA / initialLifeA) * 100),
          Math.ceil((lifeB / initialLifeB) * 100),
        ]);
      } else if (damage < 100) {
        let punch = Math.floor(damageB * 0.3);
        lifeA -= punch;
        rapport.push([
          `${first ? fighterB.name : pronoun(fighterB)} strikes !`,
          Math.ceil((lifeA / initialLifeA) * 100),
          Math.ceil((lifeB / initialLifeB) * 100),
        ]);
      } else {
        initiativeB = fighterB.speed - 1;
        let punch = Math.floor(damageB * 0.5);
        lifeA -= punch;
        rapport.push([`CRITICAL : ${fighterA.name} stumbles.`, Math.ceil((lifeA / initialLifeA) * 100), Math.ceil((lifeB / initialLifeB) * 100)]);
      }
    }
  }
  if (lifeA <= 0) {
    rapport.push([`${fighterA.name} falls on the ground...`, Math.ceil((lifeA / initialLifeA) * 100), Math.ceil((lifeB / initialLifeB) * 100)]);
    rapport.push([`${fighterB.name} wins !`, 'You win']);
    return rapport;
  } else if (lifeB <= 0) {
    rapport.push([`${fighterB.name} falls on the ground...`, Math.ceil((lifeA / initialLifeA) * 100), Math.ceil((lifeB / initialLifeB) * 100)]);
    rapport.push([`${fighterA.name} wins !`, 'You lose']);
    return rapport;
  } else if (lifeA / initialLifeA > lifeB / initialLifeB) {
    rapport.push([`Time out : ${fighterB.name} has less health.`, Math.ceil((lifeA / initialLifeA) * 100), Math.ceil((lifeB / initialLifeB) * 100)]);
    rapport.push([`${fighterA.name} wins !`, 'You lose']);
    return rapport;
  } else if (lifeA / initialLifeA < lifeB / initialLifeB) {
    rapport.push([`Time out : ${fighterA.name} has less health.`, Math.ceil((lifeA / initialLifeA) * 100), Math.ceil((lifeB / initialLifeB) * 100)]);
    rapport.push([`${fighterB.name} wins !`, 'You lose']);
    return rapport;
  } else {
    rapport.push(['Draw', 'Draw']);
    return rapport;
  }
}
