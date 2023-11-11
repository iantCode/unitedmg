<script setup lang="ts">
import type { UniteDmg } from '@/classes/UniteDmg';
import { localeForPokemon } from '@/locale/pokemon';

const props = defineProps<{
  lang: 'en' | 'ko' | 'jp';
  myOrOppo: 'my' | 'oppo';
  uniteDmg: UniteDmg
}>();
type TypeOfStats = 'hp' | 'attack' | 'defense' | 'defenseEHP' | 'sp_attack' | 'sp_defense' | 'sp_defenseEHP' | 'crit' | 'cdr';

const locale = localeForPokemon;
</script>

<template>
  <div class="stat-info">
    <span
      v-for="stats in ['hp', 'attack', 'defense', 'defenseEHP', 'sp_attack', 'sp_defense', 'sp_defenseEHP', 'crit', 'cdr']"
      :key="stats">
      {{ locale[stats as TypeOfStats][props.lang] }}:
      {{ props.uniteDmg.pokemon[props.myOrOppo].value.currentStat[stats as TypeOfStats] }}
    </span>
  </div>
</template>

  
<style>
.stat-info {
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
}
</style>@/classes/Pokemon