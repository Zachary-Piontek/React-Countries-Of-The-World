import React from 'react';
import useCountry from '../hooks/useCountries';
import CountryDisplay from './useCountries';

export default function Main() {
  const { filterCountries } = useCountry();

  return ( 
    <section>
      {filterCountries().map((country) => (
        <CountryDisplay {...country} key={country.id} />
      ))}
    </section>
  );
}