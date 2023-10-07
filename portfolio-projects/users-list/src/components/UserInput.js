import React, { useState } from "react";
import styles from "./userInput.module.css";
import Card from "./ui/Card";
import Button from "./ui/Button";
import ErrorModal from "./ui/ErrorModal";

function UserInput(props) {
  const [userInfo, setUserInfo] = useState({ userName: "", age: "" });
  const [error, setError] = useState()

  const inputChangeHandler = (id, value) => {
    setUserInfo((prev) => {
      return { ...prev, [id]: value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const userName = userInfo.userName
    const age =  userInfo.age
if(userName.trim().length === 0 || age.trim().length === 0) {
  setError({title:'Invalid input', message:'Please enter a valid name and age (non-empty values)' });
return
}

if(+age < 1){
  setError({title:'Invalid age', message:'Please enter a valid age (>0)' });

return
}


    const newUser = { 'userName': userName, 'age': age };
    console.log(newUser);
    props.onCreateUser(newUser);
    setUserInfo({ userName: "", age: "" });
  };

  const errorHandler = () => {
    setError(null)
  }

  return (
    <>
 {error && <ErrorModal title ={error.title} message={error.message} confirm={errorHandler} />}
    <Card className = {styles.input}>
      <h3 className={styles['form-heading']}>Add new user</h3>
      <hr />
      <form onSubmit={formSubmitHandler} action="">
        <label htmlFor="userName">Username</label>
        <input
          value={userInfo.userName}
          onChange={(e) => inputChangeHandler("userName", e.target.value)}
          type="text"
          id="userName"
        />

        <label htmlFor="age">Age</label>
        <input
          value={userInfo.age}
          onChange={(e) => inputChangeHandler("age", e.target.value)}
          type="number"
          id="age"
        />

        <Button type="submit">Submit</Button>
      </form>
    </Card>
    </>
  );
}

export default UserInput;
