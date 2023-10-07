import React from "react";
import styles from "./userList.module.css";
import Card from './ui/Card'

function UserList({ users }) {
  return (
    <Card className = {styles.users}>
    <ul className={styles['display-users']}>
      {users &&
        users.map((user) => (
          <li key={user.id}>
            {user["user-name"]}  ({user['user-age']} years old)
          </li>
        ))}
       
    </ul>
    </Card>
  );
}

export default UserList;
