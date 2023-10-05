import React from "react";
import styles from "./investmentTable.module.css";

/* Todo: Show below table conditionally (only once result data is available) */
/* Show fallback text if no data is available */

function InvestmentTable({ data, initialInvestment }) {
  console.log(data);
  console.log(initialInvestment);
  console.log(data[1]);

  return (
    <div>
      <table className={styles.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dat, i) => (
            <tr>
              <td>{dat.year}</td>
              <td>{dat.savingsEndOfYear}</td>
              <td>{dat.yearlyInterest}</td>

              <td>
                {dat.savingsEndOfYear -
                  initialInvestment -
                  dat.yearlyContribution * dat.year}
              </td>
              <td>{initialInvestment + dat.yearlyContribution * dat.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InvestmentTable;
