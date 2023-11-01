import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, onAddContact }) => {
  /*
  Define state variables for 
   contact info and duplicate check
 
  */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [isDuplicate, setIsduplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name: name,
      email: email,
      phone: phone,
    };
    console.log(newContact);
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (
      contacts.length > 0 &&
      contacts.filter((contact) => contact.name === name).length > 0
    ) {
      setIsduplicate(true);
      return;
    }
    onAddContact(newContact);
    setName("");
    setEmail("");
    setPhone("");
  };
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objArray={contacts} />
      </section>
    </div>
  );
};
