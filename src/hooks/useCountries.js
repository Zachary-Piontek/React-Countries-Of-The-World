import { useEffect, useState } from 'react';
import { getAllCountries } from '../services/fetchCountries';


export default function useCountry() {
  const [country, setCountry] = useState([]);
  const [area, setArea] = useState('all');
  const [error, setError] = useState('');

  useEffect(() => {
    async function getCountries() {
      try {
        const resp = await getAllCountries();
        setCountry(resp);
      } catch (e) {
        setError(e.message);
      }
    }
    
    getCountries();
  }, []);

  const filterCountries = () => {
    if (area === 'all') return country;
    return country.filter((C) => C.continent === area);
  };
    
  return { country, filterCountries, area, setArea, error };
}