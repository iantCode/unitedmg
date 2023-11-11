<script setup lang="ts">
import type { UniteDmg } from '@/classes/UniteDmg';
import { computed, type ComputedRef } from 'vue';
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

const props = defineProps<{
  uniteDmg: UniteDmg;
  myOrOppo: 'my' | 'oppo';
}>();

const currentHP = computed({
  get() {
    return props.uniteDmg.pokemon[props.myOrOppo].value.currentStat.currentHP!;
  },

  set(newHP: number) {
    props.uniteDmg.updateCurrentHP(props.myOrOppo, newHP);
  }
})

const calculateHPPercentage: ComputedRef<number> = computed(() => {
  return Math.floor(props.uniteDmg.pokemon[props.myOrOppo].value.currentStat.currentHP! /
    props.uniteDmg.pokemon[props.myOrOppo].value.currentStat.hp * 100)
})
</script>

<template>
  <div class="hp-percent">
    <p>HP : {{ calculateHPPercentage }}%</p>

    <vue-slider v-model="currentHP" :min="0" :max="props.uniteDmg.pokemon[props.myOrOppo].value.currentStat.hp" :marks="false"
      tooltip="always"></vue-slider>
  </div>
</template>

  
<style>
.hp-percent {
  margin: 1rem 0 1.5rem 0;
}
</style>@/classes/Pokemon