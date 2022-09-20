import React from 'react';
import { getAllCountries } from '../services/fetchCountries';

export default function Main() {
  getAllCountries();
}