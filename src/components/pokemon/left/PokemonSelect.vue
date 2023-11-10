<script setup lang="ts">
// import PokemonSelection from './PokemonSelection.vue'
</script>

<template>
  <div class="pokemon">
    <img class="pokemon-img"
      :src="`src/assets/pokemon/0.png`"
      @click="showSelectImage" alt="">
    <!-- <b-modal size="lg" ref="selectImage" hide-footer>
      <PokemonSelection :myOppo="myOppo" v-on:closeSelection="closeSelection"></PokemonSelection>
    </b-modal> -->
  </div>
</template>
  
<style scoped>
.pokemon-img {
  width: 7.5rem;
  cursor: pointer;
  display: inline;
  margin-right: 2rem;
}
</style>