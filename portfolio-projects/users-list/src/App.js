import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import UserList from "./components/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  

  const displayUser = (newUser) => {
   

    const userName = newUser.userName;
    const age = newUser.age;
const id = Math.random().toString + "-" + Math.random().toString
    
    const user = { "user-name": userName, "user-age": +age, 'id': id };
console.log(user);
   
    setUserList((prev)=>[...prev, user]);
    
  };
  

  return (
    <div>
      <Header />
      <UserInput onCreateUser={displayUser} />
       <UserList users = {userList}/>
    
    </div>
  );
}

export default App;
