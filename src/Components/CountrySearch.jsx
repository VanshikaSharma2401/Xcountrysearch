import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../../src/styles.module.css";
function CountrySearch() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search country..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className={styles.countrygrid}>
        {filteredCountries.map(country => (
          <div key={country.name.common} className={styles.countryCard}>
            <img src={country.flags.svg} alt={`${country.name.common} flag`} />
            <p>{country.name.common}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountrySearch;
