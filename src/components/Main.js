import React from 'react';
import useCountry from '../hooks/useCountries';
import CountryDisplay from './useCountries';

export default function Main() {
  const { filterCountries, area, setArea } = useCountry();

  return ( 
    <>
      <select value={area} onChange={(event) => {
        setArea(event.target.value);
      }}>
        <option value='all'>All</option>
        <option value='Africa'>Africa</option>
        <option value='Antarctica'>Antarctica</option>
        <option value='Asia'>Asia</option>
        <option value='Austrailia'>Austrailia</option>
        <option value="Europe">Europe</option>
        <option value='North America'>North America</option>
        <option value='South America'>South America</option>
      </select>
      <section>
        {filterCountries().map((country) => (
          <CountryDisplay {...country} key={country.id} />
        ))}
      </section>
    </>
  );
}