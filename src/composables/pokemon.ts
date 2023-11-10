import { getPokemonData } from '@/api'
import { Pokemon } from '@/interfaces/Pokemon'
import { ref, type Ref } from 'vue'

export const usePokemon = () => {
  const myPokemon: Ref<Pokemon> = ref(new Pokemon());
  getPokemonData().then((data: any) => {
    myPokemon.value = new Pokemon(data);
  })
  return myPokemon;
}