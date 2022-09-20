import React from 'react';

export default function CountryDisplay({ id, name }) {
  return (
    <div>
      <h3>{name} {id}</h3>
    </div>
  );
}