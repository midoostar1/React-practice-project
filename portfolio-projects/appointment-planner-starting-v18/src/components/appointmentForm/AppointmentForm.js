import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
import styles from "./appointmentForm.module.css";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const handleChange = (value, id) => {
    if (id === "name") {
      setTitle(value);
    }
    if (id === "date") {
      setDate(value);
    }
    if (id === "time") {
      setTime(value);
    }

    if (id === "contact") {
      setContact(value);
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.items}>
          <div className={styles.formItems}>
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => handleChange(e.target.value, "name")}
              id="name"
              type="text"
              value={title}
            />
          </div>
          <div className={styles.formItems}>
            <label htmlFor="date">Date</label>
            <input
              onChange={(e) => handleChange(e.target.value, "date")}
              id="date"
              type="date"
              value={date}
              min={getTodayString()}
            />
          </div>
          <div className={styles.formItems}>
            <label htmlFor="number">Time</label>
            <input
              onChange={(e) => handleChange(e.target.value, "time")}
              id="time"
              type="time"
              value={time}
            />
          </div>

          <ContactPicker
            contactsArray={contacts}
            handleChange={handleChange}
            value={contact}
            name="contact"
            className={styles.formItems}
          />
        </div>
<div className={styles.btn}>
<button type="submit">Submit</button>
</div>
       
      </form>
    </>
  );
};
