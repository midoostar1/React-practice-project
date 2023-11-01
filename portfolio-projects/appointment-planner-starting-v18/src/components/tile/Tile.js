import React from "react";
import styles from "./tile.module.css";

export const Tile = ({ name, description }) => {
  return (
    <div>

      {"email" in description && (
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <p className={styles.name}>{name}</p>
          
          </div>
          <hr />
          <div className={styles.cardBody}>
            <p>
              <span className={styles.info}>Email: </span>
              {description.email}
            </p>
            <p>
              <span className={styles.info}>Phone: </span>
              {description.phone}
            </p>
          </div>
        </div>
      )}
      {"date" in description && (
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <p className={styles.name}>{name}</p>
           
          </div>
          <hr />
          <div className={styles.cardBody}>
            <p>
              <span className={styles.info}>Date: </span>
              {description.date}
            </p>
            <p>
              <span className={styles.info}>Time: </span>
              {description.time}
            </p>
            <p>
              <span className={styles.info}>contact: </span>
              {description.contact}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
