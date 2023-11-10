<script setup lang="ts">
import type { Pokemon } from '@/composables/pokemon';
import { computed, type ComputedRef } from 'vue';
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

const props = defineProps<{
    pokemon: Pokemon
}>();

const currentHP = computed({
    get() {
        return props.pokemon.stat.currentHP;
    },

    set(newHP: number) {
        props.pokemon.updateCurrentHP(newHP);
    }
})

const calculateHPPercentage: ComputedRef<number> = computed(() => {
    return Math.floor(props.pokemon.stat.currentHP / props.pokemon.stat.hp * 100)
})
</script>

<template>
    <div class="level">
        <p>HP : {{ calculateHPPercentage }}%</p>

        <vue-slider v-model="currentHP" :min="1" :max="props.pokemon.stat.hp" :marks="false"
            tooltip="always"></vue-slider>
    </div>
</template>

  
<style scoped>
.level {
    margin: 1rem 0 1.5rem 0;
}
</style>