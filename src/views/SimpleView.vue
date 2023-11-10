<script setup lang="ts">
import type { Ref } from "vue";
import PokemonMain from "../components/pokemon/PokemonMain.vue"
import { usePokemon } from '../composables/pokemon'
import { Pokemon } from "@/interfaces/Pokemon";
import CalculationResult from '../components/common/CalculationResult.vue'

const props = defineProps<{
  lang: 'en' | 'ko' | 'jp';
}>();
const myPokemon: Ref<Pokemon> = usePokemon();
</script>

<template>
  <div class="pokemon">
    <PokemonMain v-if="myPokemon" class="my-pokemon" :myOrOppo="'my'" :lang="props.lang" :pokemon="myPokemon" />
    <CalculationResult class="result" />
  </div>
</template>

<style scoped>
.pokemon {
  width: 100%;
}

.my-pokemon {
  width: 90%;
  margin: 1rem auto;
}

.result {
  -webkit-overflow-scrolling: auto;
  width: 95%;
  margin: 1rem auto;
}

@media only screen and (min-width: 1300px) {
  .pokemon {
    display: flex;
  }

  .my-pokemon {
    width: 55%;
    margin: 1rem auto;
  }

  .result {
    -webkit-overflow-scrolling: auto;
    width: 40% !important;
    margin: 5rem auto 0 auto;
  }
}
</style>