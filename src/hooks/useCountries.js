import { useEffect, useState } from 'react';
import { getAllCountries } from '../services/fetchCountries';


export default function useCountry() {
  const [country, setCountry] = useState([]);
  const [area, setArea] = useState('all');

  useEffect(() => {
    const getCountries = async () => {
      const resp = await getAllCountries();
      setCountry(resp);
    };
    
    getCountries();
  }, []);

  const filterCountries = () => {
    if (area === 'all') return country;
    return country.filter((C) => C.area === area);
  };
    
  return { country, filterCountries, area, setArea };
}