import React from 'react';
import useCountry from '../hooks/useCountries';
import CountryDisplay from './useCountries';

export default function Main() {
  const allCountries = useCountry();

  return ( 
    <section>
      {allCountries.map((country) => (
        <CountryDisplay {...country} key={country.id} />
      ))}
    </section>
  );
}