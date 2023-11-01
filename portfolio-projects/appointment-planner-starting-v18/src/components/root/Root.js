import {  Outlet, NavLink } from "react-router-dom";
import styles from './root.module.css'

export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

function Root() {
    return (
        <>
            <nav className={styles.nav}>
                <NavLink to={ROUTES.CONTACTS} className={styles.navItems}>
                Contacts
                </NavLink>
                <NavLink to={ROUTES.APPOINTMENTS}  className={styles.navItems}>
                Appointments
                </NavLink>
            </nav>
            <Outlet/>
      </>
    );

}

export default Root;