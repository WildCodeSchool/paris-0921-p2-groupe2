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
  // eslint-disable-next-line no-unused-vars
  const [selectedHandicap, setSelectedHandicap] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [selectedWeapon, setSelectedWeapon] = useState([]);
  // eslint-disable-next-line no-unused-vars
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
      <div className={styles.handicapChoice}>
        <button>Choose a handicap :</button>
        <div className={styles.choiceForm}>
          <div className={styles.firstFormLine}>
            <p></p>
            <p>Fighter A</p>
            <p>Fighter B</p>
          </div>
          <div className={styles.formLine}>
            <p className={styles.formFirstColumn}>No handicap</p>
            <div className={styles.formInput}>
              <input type="radio" name="handicapA" checked />
              <input type="radio" name="handicapB" checked />
            </div>
          </div>
          {handicapList &&
            handicapList.map((handicap, index) => {
              return (
                <div className={styles.formLine} key={index}>
                  <p className={styles.formFirstColumn}>{handicap.name}</p>
                  <div className={styles.formInput}>
                    <input type="radio" id={handicap.id} name="handicapA" value={handicap.id} />
                    <input type="radio" id={handicap.id} name="handicapB" value={handicap.id} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {/* <div className={styles.choiceForm}>
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
      </div> */}
      {/* <button onClick={handleSelectedOptions}>Test</button> */}
      <LaunchFightButton></LaunchFightButton>
    </div>
  );
}

export default Form;
