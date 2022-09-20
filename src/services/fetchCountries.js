import { client, checkError } from './client';

export async function getAllCountries() {
  const resp = await client
    .from('countries')
    .select('*');

  return checkError(resp);
}