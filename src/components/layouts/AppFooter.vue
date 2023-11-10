<script setup lang="ts">
const props = defineProps<{
  lang: string;
}>();
</script>

<template>
  <div class="app" ref="footer">
    Patch Version: 1.11.1.2<br />
    Last Update Date: 2023.11.10<br />
    <hr />
    <div>Credits: iant</div>
  </div>
</template>
  
<style scoped>
.app {
  bottom: 0;
  width: 100%;
  min-height: 40px;
  border-top: 1px solid black;
  padding: 2rem 0.5rem;

  font-size: 0.95rem;
}
</style>