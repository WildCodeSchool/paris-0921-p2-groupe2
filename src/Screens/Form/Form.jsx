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

  let selectedOptionsA = [];
  // eslint-disable-next-line no-unused-vars
  function handleSelectedOptionsA() {
    selectedHandicapA && selectedOptionsA.push(selectedHandicapA);
    selectedOptionsA.push(selectedWeaponA);
    selectedOptionsA.push(selectedField);
    // console.log(selectedHandicap);
  }

  let selectedOptionsB = [];
  // eslint-disable-next-line no-unused-vars
  function handleSelectedOptionsB() {
    selectedHandicapB && selectedOptionsB.push(selectedHandicapB);
    selectedOptionsB.push(selectedWeaponB);
    selectedOptionsB.push(selectedField);
    // console.log(selectedHandicap);
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
                    <input
                      type="radio"
                      id={handicap.id}
                      name="handicapA"
                      value={handicap.id}
                      onChange={(e) => setSelectedHandicapA(e.target.value)}
                    />
                    <input
                      type="radio"
                      id={handicap.id}
                      name="handicapB"
                      value={handicap.id}
                      onChange={(e) => setSelectedHandicapB(e.target.value)}
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
          <div className={styles.formLine}>
            <p className={styles.formFirstColumn}>No weapon</p>
            <div className={styles.formInput}>
              <input type="radio" name="weaponA" checked />
              <input type="radio" name="weaponB" checked />
            </div>
          </div>
          {weaponList &&
            weaponList.map((weapon, index) => {
              return (
                <div className={styles.formLine} key={index}>
                  <p className={styles.formFirstColumn}>{weapon.name}</p>
                  <div className={styles.formInput}>
                    <input type="radio" id={weapon.id} name="weaponA" value={weapon.id} onSelect={(e) => setSelectedWeaponA(e.target.value)} />
                    <input type="radio" id={weapon.id} name="weaponB" value={weapon.id} onSelect={(e) => setSelectedWeaponB(e.target.value)} />
                  </div>
                </div>
              );
            })}
        </div>
        <div className={styles.choiceForm}>
          <h2>Where do you want to fight ?</h2>
          <div className={styles.formLine}>
            <p className={styles.formFirstColumn}>Nowhere</p>
            <div className={styles.formInput}>
              <input type="radio" name="field" checked />
            </div>
          </div>
          {fieldList &&
            fieldList.map((field, index) => {
              return (
                <div className={styles.formLine} key={index}>
                  <p className={styles.formFirstColumn}>{field.name}</p>
                  <div className={styles.formInput}>
                    <input type="radio" id={field.id} name="field" value={field.id} onSelect={(e) => setSelectedField(e.target.value)} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Link to="/fight">
        <button className={styles.launchFightButton} onClick={(handleSelectedOptionsA, handleSelectedOptionsB)}>
          FIGHT
        </button>
      </Link>
    </div>
  );
}

export default Form;
