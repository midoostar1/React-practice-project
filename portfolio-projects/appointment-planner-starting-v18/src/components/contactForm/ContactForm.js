import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
 
}) => {

  const handleChange = (value, id) => {
    if (id === "name") {
      setName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "phone") {
      setPhone(value);
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
          value={name}
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => handleChange(e.target.value, "email")}
          id="email"
          type="email"
          value={email}
        />
        <label htmlFor="number">Number</label>
        <input
          onChange={(e) => handleChange(e.target.value, "phone")}
          id="number"
          type="number"
          value={phone}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
