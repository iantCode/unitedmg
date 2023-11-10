export const defaultHeader = {
  'Cache-Control': 'no-store',
  Pragma: 'no-store',
  Expires: '0'
}

import axios from 'axios'
export const host = import.meta.env.VITE_API_ENDPOINT

export interface UpdateList {
  date: string
  content: string
}

export const getPokemonData = async (): Promise<any> => {
  const pokemon = await axios.get(`${host}/pokemon/0`)
  return pokemon.data
}
