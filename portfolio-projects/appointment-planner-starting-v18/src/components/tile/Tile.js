import React from "react";
import styles from "./tile.module.css";

export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      {"email" in description && (
        <div className={styles.card}>
          <p>{name}</p>
          <p>{description.email}</p>
          <p>{description.phone}</p>
        </div>
      )}
      {"date" in description && (
        <div className={styles.card}>
          <p>{name}</p>
          <p>{description.email}</p>
          <p>{description.phone}</p>
        </div>
      )}
    </div>
  );
};
