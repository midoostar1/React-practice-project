import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => handleChange(e.target.value, "name")}
          id="name"
          type="text"
          value={title}
        />
        <label htmlFor="date">Date</label>
        <input
          onChange={(e) => handleChange(e.target.value, "date")}
          id="date"
          type="date"
          value={date}
          min={getTodayString()}
        />
        <label htmlFor="number">Time</label>
        <input
          onChange={(e) => handleChange(e.target.value, "time")}
          id="time"
          type="time"
          value={time}
        />
        <ContactPicker
          contactsArray={contacts}
          handleChange={handleChange}
          value={contact}
          name="contact"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
