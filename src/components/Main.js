import React from 'react';
import useCountry from '../hooks/useCountries';
import CountryDisplay from './useCountries';
import './main.css';

export default function Main() {
  const { filterCountries, area, setArea } = useCountry();

  return ( 
    <>
      <div className='main-page'>
        <div className='header'>
          <h1>Countries of the World</h1>
        </div>
        <select value={area} onChange={(event) => {
          setArea(event.target.value);
        }}>
          <option value='all'>All</option>
          <option value='Africa'>Africa</option>
          <option value='Antarctica'>Antarctica</option>
          <option value='Asia'>Asia</option>
          <option value='Oceania'>Oceania</option>
          <option value="Europe">Europe</option>
          <option value='North America'>North America</option>
          <option value='South America'>South America</option>
        </select>
        <section className='display-card'>
          {filterCountries().map((country) => (
            <CountryDisplay {...country} key={country.id} />
          ))}
        </section>
      </div>
    </>
  );
}