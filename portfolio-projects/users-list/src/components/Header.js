import React from 'react'
import logo from '../assets/img-user.png'
import styles from './header.module.css'

function Header() {
  return (
    <div className={styles.header}>
        <img src={logo} alt="logo" />
      <h1>User Management App</h1>
    </div>
  )
}

export default Header
