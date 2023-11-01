import React from "react";
import styles from "./contactForm.module.css";

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
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.itemsContainer}>
          <div className={styles.formItems}>
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => handleChange(e.target.value, "name")}
              id="name"
              type="text"
              value={name}
            />
          </div>
          <div className={styles.formItems}>
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => handleChange(e.target.value, "email")}
              id="email"
              type="email"
              value={email}
            />
          </div>
          <div className={styles.formItems}>
            <label htmlFor="number">Number</label>
            <input
              onChange={(e) => handleChange(e.target.value, "phone")}
              id="number"
              type="number"
              value={phone}
            />
          </div>
        </div>
        <div className={styles.btn}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};
