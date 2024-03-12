import React from "react";
// import styles from "../../src/styles.module.css";

const Countrycard = ({ country ,key}) => {
  return (
    <div key={key} className="countryCard">
      <img src={country.flags.svg} alt={`${country.name.common} flag`} />
      <p>{country.name.common}</p>
    </div>
  );
};

export default Countrycard;
