export default function initiativeCheck(initiativeA, initiativeB) {
  let initiativeRoll = (Math.ceil(Math.random() * 20) - 10) * 10;
  if (initiativeRoll + initiativeA - initiativeB > 0) {
    return 'A';
  } else {
    return 'B';
  }
}
