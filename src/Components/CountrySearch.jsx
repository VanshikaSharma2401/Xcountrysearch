import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../../src/styles.module.css";
import Countrycard from './Countrycard';
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
          <Countrycard country={country} key={country.name.common}/>
        ))}
      </div>
    </div>
  );
}

export default CountrySearch;
