<script setup lang="ts">
import type { UniteDmg } from '@/classes/UniteDmg';
import { type Ref, onDeactivated, onMounted, ref } from 'vue';
// import { Lang_Result } from '../utils/lang'

let resizeEvent: ResizeObserver | undefined = undefined;
const root: Ref<HTMLInputElement | null> = ref(null);
const props = defineProps<{
  uniteDmg: UniteDmg
  lang: 'en' | 'ko' | 'jp';
}>();

onMounted(() => {
  document.addEventListener('scroll', scrollChange);
  resizeEvent = new ResizeObserver(() =>
    scrollChange()
  )
  // start observing a DOM node
  resizeEvent.observe(document.body)

  if (root.value) {
    scrollChange();
  }
})

const scrollChange = () => {
  if (root.value) {
    const rect = root.value!.getBoundingClientRect();
    const targetSize = toPixel(9) > rect.height ? rect.height : toPixel(9);
    if (window.innerHeight - rect.top < targetSize + toPixel(2.1)) {
      root.value!.style.position = '-webkit-sticky';
      root.value!.style.position = 'sticky';
      root.value!.style.bottom = '2rem';
      root.value!.style.padding = '1rem';
      root.value!.style.left = '0';
      root.value!.style.zIndex = "999";
      root.value!.style.backgroundColor = "#F5F5FA";
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.value!.style.backgroundColor = "#3F3F3F";
      }
      root.value!.style.maxHeight = '9rem';
      root.value!.style.overflow = "scroll";
      root.value!.style.borderRadius = "1rem";
      root.value!.style.boxShadow = "0.3rem 0.3rem 0.3rem 0 gray"
    } else if (window.innerHeight - rect.top > targetSize + toPixel(2.1)) {
      root.value!.style.position = 'static';
      root.value!.style.maxHeight = '999rem';
      root.value!.style.overflow = "scroll";
      root.value!.style.borderRadius = "";
      root.value!.style.boxShadow = ""
    }
  }
}

const toPixel = (rem: number) => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
}

onDeactivated(() => {
  document.removeEventListener('scroll', scrollChange);
  resizeEvent!.disconnect();
})
</script>

<template>
  <div ref="root" class="sticky">
    <div class="damage" :key="damage.name[props.lang]" v-for="damage in props.uniteDmg.damage.value">
      <b-progress :value="damage.damage" :max="props.uniteDmg.pokemon.oppo.value.currentStat.hp" show-progress animated></b-progress>
      <div>{{ damage.name[lang] }} 데미지: {{ damage.damage }}</div>
    </div>

  </div>
</template>
  
<style scoped>
.damage,
.sum {
  margin: 1rem 2rem;
  width: auto;
}

.heal-bar>.progress-bar {
  background-color: green;
}

.recoil-bar>.progress-bar {
  background-color: red;
}

.flex {
  display: flex;
  align-items: flex-end;
}

.sticky {
  display: block !important;
  width: 95% !important;
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.sticky::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, Opera*/
}

@media (prefers-color-scheme: dark) {
  .skicky {
    background-color: #3F3F3F;
  }

  .progress {
    background-color: rgba(255, 255, 255, 0.05) !important;
  }
}
</style>@/classes/Pokemon