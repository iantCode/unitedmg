<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import { ref, onBeforeMount, type Ref } from 'vue';
import AppFooter from './components/layouts/AppFooter.vue';
import AppHeader from './components/layouts/AppHeader.vue';

const lang: Ref<'en' | 'ko' | 'jp'> = ref('ko');
onBeforeMount(() => {
  const locale: string = navigator.language;
  const convertedLocale = locale.substring(0, 2);
  if (!['ko', 'en', 'jp'].includes(convertedLocale)) {
    lang.value = 'en';
  } else {
    lang.value = convertedLocale as 'en' | 'ko' | 'jp';
  }
})

</script>

<template>
  <AppHeader :lang="lang" />
  <RouterView v-slot="{ Component }">
    <component :is="Component" :lang="lang" />
  </RouterView>
  <AppFooter :lang="lang" />
</template>

<style scoped>

</style>
