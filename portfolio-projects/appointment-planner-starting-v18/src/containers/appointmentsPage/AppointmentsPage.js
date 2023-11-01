import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import styles from './appointmentPage.module.css'

export const AppointmentsPage = ({
  contacts,
  appointments,
  addAppointments,
}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [contact, setContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      name: name,
      date: date,
      time: time,
      contact: contact,
    };
    /*
    Add contact info and clear data  
    */
    addAppointments(newAppointment);
    setName("");
    setDate("");
    setTime("");
  };

  return (
    <div>
      <section className={styles.appointments}>
        <h2 className={styles.addHeader}>Add Appointment</h2>
        <AppointmentForm
          title={name}
          setTitle={setName}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          contact={contact}
          setContact={setContact}
          handleSubmit={handleSubmit}
          contacts={contacts}
        />
      </section>
      <hr className={styles.line}/>
      <section>
        <h2>Appointments</h2>
        <div className={styles['tile-container']}>
        <TileList objArray={appointments} />
        </div>
      </section>
    </div>
  );
};
