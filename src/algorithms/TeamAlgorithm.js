import teamAlgorithmAttack from './TeamAlgorithmAttack';

export default function teamAlgorithm(groupA, groupB) {
  let teamA, teamB;
  let report = [];
  const hasGroupAInitiative = groupA.reduce((x, y) => x + y.speed, 0) >= groupB.reduce((x, y) => x + y.speed, 0);

  if (hasGroupAInitiative) {
    teamA = groupA;
    teamB = groupB;
    report.push('The first team has the initiative !');
  } else {
    teamA = groupB;
    teamB = groupA;
    report.push('The second team has the initiative !');
  }
  teamA = teamA.sort((x, y) => y.speed - x.speed);
  teamB = teamB.sort((x, y) => y.speed - x.speed);

  let orderA = teamA.map((x) => x.name);
  let orderB = teamB.map((x) => x.name);
  report.push('Attacking order of first team : ');
  for (let i of orderA) {
    report.push(i);
  }
  report.push('Attacking order of second team : ');
  for (let i of orderB) {
    report.push(i);
  }

  while (teamA.length && teamB.length) {
    for (let i = 0; i < Math.max(teamA.length, teamB.length); i++) {
      if (i < teamA.length) {
        let targetIndex = Math.floor(Math.random() * teamB.length);
        let attack = teamAlgorithmAttack(teamA[i], teamB[targetIndex]);
        teamB[targetIndex].durability -= attack[0];
        report.push(`${teamA[i].name} ${attack[1]} ${teamB[targetIndex].name} (HP :${teamB[targetIndex].durability})`);
        if (teamB[targetIndex].durability <= 0) {
          report.push(`${teamB[targetIndex].name} falls !`);
          if (teamB.length == 1) {
            report.push('And nobody is left standing !');
            if (hasGroupAInitiative) {
              report.push('The first team won !');
            } else report.push('The second team won !');
            return report;
          } else teamB.splice(targetIndex, 1);
        }
      }

      if (i < teamB.length) {
        let targetIndex = Math.floor(Math.random() * teamB.length);
        teamAlgorithmAttack(teamA[i], teamB[targetIndex]);
        let attack = teamAlgorithmAttack(teamB[i], teamA[targetIndex]);
        teamA[targetIndex].durability -= attack[0];
        report.push(`${teamB[i].name} ${attack[1]} ${teamA[targetIndex].name} (HP :${teamA[targetIndex].durability})`);
        if (teamA[targetIndex].durability <= 0) {
          report.push(`${teamA[targetIndex].name} falls !`);
          if (teamA.length == 1) {
            report.push('And nobody is left standing !');
            if (hasGroupAInitiative) {
              report.push('The second team won !');
            } else report.push('The first team won !');
            return report;
          } else teamA.splice(targetIndex, 1);
        }
      }
    }
  }

  return report;
}
