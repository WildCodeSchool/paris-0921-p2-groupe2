export default function attackCheck(attacker, defender) {
  let result = Math.ceil(Math.random() * 20);
  if (result === 1) {
    return -100;
  } else if (result === 20) {
    return 100;
  } else {
    return (result - 10) * 5 + attacker.combat - defender.combat;
  }
}
