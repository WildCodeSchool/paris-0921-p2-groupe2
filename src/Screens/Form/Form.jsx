/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

  const [selectedHandicapA, setSelectedHandicapA] = useState([]);
  const [selectedHandicapB, setSelectedHandicapB] = useState([]);
  const [selectedWeaponA, setSelectedWeaponA] = useState([]);
  const [selectedWeaponB, setSelectedWeaponB] = useState([]);
  const [selectedField, setSelectedField] = useState([]);

  // eslint-disable-next-line
  const [options, setOptions] = useState();

  function handleSelectedOptions() {
    const option = {
      optionA: [selectedHandicapA, selectedWeaponA],
      optionB: [selectedHandicapB, selectedWeaponB],
      field: selectedField,
    };
    setOptions(option);
    // console.log(option);
  }

  return (
    <div className={styles.optionChoice}>
      <h1>Things can get trickier</h1>
      <div className={styles.optionsContainer}>
        <div className={styles.choiceForm}>
          <h2>Choose a handicap :</h2>
          <div className={styles.firstFormLine}>
            <p></p>
            <p>Fighter A</p>
            <p>Fighter B</p>
          </div>
          {handicapList &&
            handicapList.map((handicap, index) => {
              return (
                <div className={styles.formLine} key={index}>
                  <p className={styles.formFirstColumn}>{handicap.name}</p>
                  <div className={styles.formInput}>
                    <input
                      type="radio"
                      id={handicap.id}
                      name="handicapA"
                      value={handicap.id}
                      onClick={(e) => setSelectedHandicapA(e.target.value)}
                      defaultChecked={handicap.id === 0 ? true : false}
                    />
                    <input
                      type="radio"
                      id={handicap.id}
                      name="handicapB"
                      value={handicap.id}
                      onClick={(e) => setSelectedHandicapB(e.target.value)}
                      defaultChecked={handicap.id === 0 ? true : false}
                    />
                  </div>
                </div>
              );
            })}
        </div>
        <div className={styles.choiceForm}>
          <h2>Choose a weapon :</h2>
          <div className={styles.firstFormLine}>
            <p></p>
            <p>Fighter A</p>
            <p>Fighter B</p>
          </div>
          {weaponList &&
            weaponList.map((weapon, index) => {
              return (
                <div className={styles.formLine} key={index}>
                  <p className={styles.formFirstColumn}>{weapon.name}</p>
                  <div className={styles.formInput}>
                    <input
                      type="radio"
                      id={weapon.id}
                      name="weaponA"
                      value={weapon.id}
                      onClick={(e) => setSelectedWeaponA(e.target.value)}
                      defaultChecked={weapon.id === 0 ? true : false}
                    />
                    <input
                      type="radio"
                      id={weapon.id}
                      name="weaponB"
                      value={weapon.id}
                      onClick={(e) => setSelectedWeaponB(e.target.value)}
                      defaultChecked={weapon.id === 0 ? true : false}
                    />
                  </div>
                </div>
              );
            })}
        </div>
        <div className={styles.choiceForm}>
          <h2>Where do you want to fight ?</h2>
          {fieldList &&
            fieldList.map((field, index) => {
              return (
                <div className={styles.formLine} key={index}>
                  <p className={styles.formFirstColumn}>{field.name}</p>
                  <div className={styles.formInput}>
                    <input
                      type="radio"
                      id={field.id}
                      name="field"
                      value={field.id}
                      onClick={(e) => setSelectedField(e.target.value)}
                      defaultChecked={field.id === 0 ? true : false}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Link to="/fight">
        <button className={styles.launchFightButton} onClick={handleSelectedOptions}>
          FIGHT
        </button>
      </Link>
    </div>
  );
}

export default Form;
