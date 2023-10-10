import React, { useState, useRef } from "react";
import styles from "./userInput.module.css";
import Card from "./ui/Card";
import Button from "./ui/Button";
import ErrorModal from "./ui/ErrorModal";

function UserInput(props) {
  const [userInfo, setUserInfo] = useState({ userName: "", age: "" });
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const userName = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });

      return;
    }
    const newUser = { userName: userName, age: age };
    console.log(newUser);
    props.onCreateUser(newUser);
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <h3 className={styles["form-heading"]}>Add new user</h3>
        <hr />
        <form onSubmit={formSubmitHandler} action="">
          <label htmlFor="userName">Username</label>
          <input type="text" id="userName" ref={nameInputRef} />

          <label htmlFor="age">Age</label>
          <input type="number" id="age" ref={ageInputRef} />

          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
}

export default UserInput;
