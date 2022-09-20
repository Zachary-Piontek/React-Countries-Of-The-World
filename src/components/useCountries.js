import React from 'react';
import './useCountries.css';

export default function CountryDisplay({ name, iso2 }) {
  return (
    <div className='country-display'>
      <h3>{name}</h3>
      <img src={`https://flagcdn.com/48x36/${iso2.toLowerCase()}.png`} />
    </div>
  );
}