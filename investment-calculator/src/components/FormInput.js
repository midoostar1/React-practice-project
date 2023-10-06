import React, { useState } from "react";
import styles from "./formInput.module.css";

function InputForm(props) {
  const [currentSavings, setCurrentSaving] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");

  const [expectedReturn, setExpectedReturn] = useState("");

  const [duration, setDuration] = useState("");
  const [validInput, setValidInput] = useState(true);

  const currentSavingsHandler = (e) => {
    if (e.target.value.trim().length !== 0) {
      setCurrentSaving(e.target.value);
    }
  
  };
  const yearlyContributionHandler = (e) => {

    if (e.target.value.trim().length !== 0) {
      setYearlyContribution(e.target.value);
    }
   
  };
  const expectedReturnHandler = (e) => {
    if (e.target.value.trim().length !== 0) {
      setExpectedReturn(e.target.value);
    }
   
  };
  const durationHandler = (e) => {

    if (e.target.value.trim().length !== 0) {
      setDuration(e.target.value);
    }
    
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    const newInput = {};
    newInput["current-savings"] = currentSavings;
    newInput["yearly-contribution"] = yearlyContribution;
    newInput["expected-return"] = expectedReturn;
    newInput["duration"] = duration;

    props.onFormSubmit(newInput)
  };

  const resetHandler =() => {

  }

  return (
    <div>
      <form className={styles.form} onSubmit={formSubmissionHandler}>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={currentSavingsHandler}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={yearlyContributionHandler}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={expectedReturnHandler}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={durationHandler} />
          </p>
        </div>
        <p className={styles.actions}>
          <button onClick={resetHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}

export default InputForm;
