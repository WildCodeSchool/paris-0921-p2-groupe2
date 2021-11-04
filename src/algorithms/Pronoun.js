export default function pronoun(character, upperCase = true) {
  if (character.gender == 'Female') {
    return upperCase ? 'She' : 'she';
  } else if (character.gender == 'Male') {
    return upperCase ? 'He' : 'he';
  } else {
    return upperCase ? 'It' : 'it';
  }
}
