<script setup lang="ts">
// import Skill from './Skill.vue'
import PokemonSelect from './left/PokemonSelect.vue'
import PokemonStatInfo from './left/PokemonStatInfo.vue';
import PokemonLevel from './left/PokemonLevel.vue'
import PokemonHP from './left/PokemonHP.vue';
import PokemonSkill from './right/PokemonSkill.vue';
// import Buffs from '../buffs/Buffs.vue'
// import LoadPokemon from './button/LoadPokemon.vue'
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { localeForPokemon, type TypeOfLocaleForPokemon } from '../../locale/pokemon';
import type { UniteDmg } from '@/classes/UniteDmg';

const props = defineProps<{
  lang: 'en' | 'ko' | 'jp';
  myOrOppo: 'my' | 'oppo';
  uniteDmg: UniteDmg;
}>();

const isDetailWrapped = ref(false);
const locale: TypeOfLocaleForPokemon = localeForPokemon;
const route = useRoute()

const swapPokemon = () => { };
const turnWrap = (bool: boolean) => {
  isDetailWrapped.value = bool
}
</script>

<template>
  <div class="app">
    <h5 class="title">
      <span>{{ locale.my[props.lang] }}</span>
      <!-- <LoadPokemon :myOppo="myOrOppo" @turnWrap="turnWrap"></LoadPokemon> -->
      <BButton variant="primary" v-show="route.name === 'more' && props.myOrOppo === 'my'" @click="swapPokemon()">Swap
      </BButton>
    </h5>

    <!-- <b-modal size="lg" ref="outdated" hide-footer :title="locale.danger.ko">
      <p>{{ locale.outdated[props.lang] }}</p>
      <BButton style="margin-top: 1rem;" variant="danger" block @click="ref['outdated'].hide()">OK</BButton>
    </b-modal> -->

    <div id="main-container">
      <div id="left" ref="left">
        <div class="pokemon-info">
          <PokemonSelect :wrap="isDetailWrapped" v-on:turnWrap="turnWrap" />
          <PokemonStatInfo :uniteDmg="props.uniteDmg" :lang="props.lang" :myOrOppo="props.myOrOppo" />
        </div>
        <PokemonLevel :uniteDmg="props.uniteDmg" :lang="props.lang" :myOrOppo="props.myOrOppo" />
        <PokemonHP :uniteDmg="props.uniteDmg" :lang="props.lang" :myOrOppo="props.myOrOppo" />
      </div>
      <div id="right">
        <PokemonSkill :uniteDmg="props.uniteDmg" :myOrOppo="props.myOrOppo" :lang="props.lang" />
      </div>
    </div>
    <!-- <Buffs ref="buff" :wrap="isDetailWrapped" v-on:turnWrap="turnWrap"></Buffs> -->
  </div>
</template>
  
<style scoped>
.app {
  display: flex;
  margin: 2rem 1rem 1rem 1rem;

  border: 1px solid gray;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
}

.title {
  margin: 0.5rem 1rem;

  display: flex;
  justify-content: space-between;
}

#main-container {
  margin: 0.2rem;
}

#left {
  display: flex;
  flex-direction: column;
  margin: 1rem;
}

#right {
  margin: 1rem;
}

.pokemon-info {
  display: flex;
}

@media only screen and (min-width: 900px) {
  .app {
    display: flex;
    margin: 2rem 1rem 1rem 1rem;

    border: 1px solid gray;
    border-radius: 10px;

    flex-direction: column;
  }

  .title {
    margin: 0.5rem 1rem;
  }

  #main-container {
    display: flex;
    flex-wrap: wrap;
    margin: 0.2rem;
  }

  #left {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    width: 40%;
  }

  #right {
    margin: 1rem;
    width: 40%;
  }
}
</style>@/classes/Pokemon