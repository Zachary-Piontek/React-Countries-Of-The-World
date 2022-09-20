import React from 'react';

export default function CountryDisplay({ name, iso2 }) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={`https://flagcdn.com/16x12/${iso2.toLowerCase()}.png`} />
    </div>
  );
}