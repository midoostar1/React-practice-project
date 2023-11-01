import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

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
      <section>
        <h2>Add Appointment</h2>
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
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList objArray={appointments} />
      </section>
    </div>
  );
};
