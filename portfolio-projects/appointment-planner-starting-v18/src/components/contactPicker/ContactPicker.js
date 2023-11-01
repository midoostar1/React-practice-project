import React from "react";

export const ContactPicker = ({ contactsArray, handleChange, value, name, className }) => {
  return (
    <div  className={className}>
      <label htmlFor="contact">Select Contact</label>
      <select
        id="contact"
        onChange={(e) => handleChange(e.target.value, "contact")}
        name={name}
        value={value}
       
      
      >
        <option value="" defaultValue>
          No Contact Selected
        </option>
        {contactsArray.map((contact) => (
          <option value={contact.name}>{contact.name}</option>
        ))}
      </select>
    </div>
  );
};
