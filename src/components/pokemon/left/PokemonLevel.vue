<script setup lang="ts">
import { Pokemon } from "@/composables/pokemon";
import { computed } from "vue";
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

const props = defineProps<{
    lang: 'en' | 'ko' | 'jp';
    pokemon: Pokemon
}>();
const level = computed({
    get() {
        return props.pokemon.level;
    },
    // setter
    set(newLevel: number) {
        props.pokemon.updateLevel(newLevel);
    }
})
</script>

<template>
    <div class="level">
        <p v-if="props.lang === 'ko'">레벨 : {{ level }}</p>
        <p v-else>Level : {{ level }}</p>

        <VueSlider v-model="level" :data="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]" :tooltip="'none'"
            :marks="true" />
    </div>
</template>
  

  
<style scoped>
.level {
    margin: 1rem 0 1.5rem 0;
}
</style>