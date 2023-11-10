<script setup lang="ts">
import PokemonMain from "../components/pokemon/PokemonMain.vue"
// import Result from '../components/Result.vue'

const props = defineProps<{
  lang: 'en' | 'ko' | 'jp';
}>();
</script>

<template>
  <div class="pokemon">
    <PokemonMain class="my-pokemon" :myOrOppo="'my'" :lang="props.lang" />
    <!-- <Result class="result"></Result> -->
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
    width: 40%!important;
    margin: 5rem auto 0 auto;
  }
}
</style>