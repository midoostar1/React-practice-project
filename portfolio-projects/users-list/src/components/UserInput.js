import React, { useState } from "react";
import styles from "./userInput.module.css";

function UserInput() {
  const [userInfo, setUserInfo] = useState({});

  const inputChangeHandler = (id, value) => {
    setUserInfo((prev) =>{return {...prev,  [id]: value, [value]: value }});
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const newUser = {userName: userInfo.userName, age: userInfo.age}
    console.log(newUser);
  };

  return (
    <div className={styles["user-input"]}>
      <form onSubmit={formSubmitHandler} action="">
        <div>
          <label htmlFor="userName">Username</label>
          <input
            onChange={(e) => inputChangeHandler("userName", e.target.value)}
            type="text"
            id="userName"
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            onChange={(e) => inputChangeHandler("age", e.target.value)}
            type="number"
            id="age"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserInput;
