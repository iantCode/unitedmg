<script setup lang="ts">
import type { UniteDmg } from "@/classes/UniteDmg";
import { computed } from "vue";
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

const props = defineProps<{
  lang: 'en' | 'ko' | 'jp';
  myOrOppo: 'my' | 'oppo';
  uniteDmg: UniteDmg;
}>();
const level = computed({
  get() {
    return props.uniteDmg.pokemon[props.myOrOppo].value.level;
  },
  set(newLevel: number) {
    props.uniteDmg.updateLevel(props.myOrOppo, newLevel);
  }
})
</script>

<template>
  <div class="level">
    <p v-if="props.lang === 'ko'">레벨 : {{ level }}</p>
    <p v-else>Level : {{ level }}</p>

    <VueSlider v-model="level" :min="1" :max="15" :tooltip="'none'"
      :marks="true" />
  </div>
</template>
  

  
<style scoped>
.level {
  margin: 1rem 0 1.5rem 0;
}
</style>@/classes/Pokemon