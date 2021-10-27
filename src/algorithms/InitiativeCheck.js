const dice = (faces = 20) => {
  return Math.ceil(Math.random() * faces);
};

export default function initiativeCheck(initiativeA, initiativeB) {
  let initiativeRoll = (dice() - 10) * 10;
  if (initiativeRoll + initiativeA - initiativeB > 0) {
    return 'A';
  } else {
    return 'B';
  }
}
