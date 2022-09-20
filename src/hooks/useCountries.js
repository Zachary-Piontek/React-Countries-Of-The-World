import { useEffect, useState } from 'react';
import { getAllCountries } from '../services/fetchCountries';


export default function useCountry() {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const getCountries = async () => {
      const resp = await getAllCountries();
      setCountry(resp);
    };
    
    getCountries();
  }, []);
    
  return country;
}