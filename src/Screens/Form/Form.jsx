import React, { useState } from 'react';

import LaunchFightButton from '../../components/Launch fight button/LaunchFightButton';

import styles from './Form.module.css';

function Form({ handicaps, weapons, fields }) {
  let handicapList = [];
  for (let key in handicaps) {
    handicapList.push(handicaps[key]);
  }
  let weaponList = [];
  for (let key in weapons) {
    weaponList.push(weapons[key]);
  }
  let fieldList = [];
  for (let key in fields) {
    fieldList.push(fields[key]);
  }

  const [selectedHandicap, setSelectedHandicap] = useState([]);
  const [selectedWeapon, setSelectedWeapon] = useState([]);
  const [selectedField, setSelectedField] = useState([]);

  let selectedOptions = [];
  // eslint-disable-next-line no-unused-vars
  function handleSelectedOptions() {
    selectedHandicap && selectedOptions.push(selectedHandicap);
    selectedOptions.push(selectedWeapon);
    selectedOptions.push(selectedField);
    // console.log(selectedHandicap);
  }

  return (
    <div className={styles.optionChoice}>
      <h1>Things can get tricky</h1>
      <div className={styles.choiceForm}>
        <label htmlFor="handicap-select">Choose a handicap :</label>
        <select name="handicap">
          <option value="">No handicap</option>
          {handicapList &&
            handicapList.map((handicap, index) => {
              return (
                <option key={index} value={handicap} onSelect={setSelectedHandicap}>
                  {handicap.name}
                </option>
              );
            })}
        </select>
      </div>
      <div className={styles.choiceForm}>
        <label htmlFor="weapon-select">Choose a weapon :</label>
        <select name="weapon">
          <option value="">No weapon</option>
          {weaponList &&
            weaponList.map((weapon, index) => {
              return (
                <option key={index} value={weapon} onSelect={setSelectedWeapon}>
                  {weapon.name}
                </option>
              );
            })}
        </select>
      </div>
      <div className={styles.choiceForm}>
        <label htmlFor="field-select">Choose a field :</label>
        <select name="field">
          <option value="">No field</option>
          {fieldList &&
            fieldList.map((field, index) => {
              return (
                <option key={index} value={field} onSelect={setSelectedField}>
                  {field.name}
                </option>
              );
            })}
        </select>
      </div>
      {/* <button onClick={handleSelectedOptions}>Test</button> */}
      <LaunchFightButton></LaunchFightButton>
    </div>
  );
}

export default Form;
