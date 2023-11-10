<script setup lang="ts">
// import Setting from "./Setting.vue"
import { localeForMenu, type TypeOfLocaleForMenu } from '../../locale/menu';

const props = defineProps<{
  lang: 'en' | 'ko' | 'jp';
}>();
const locale: TypeOfLocaleForMenu = localeForMenu;
</script>

<template>
  <div>
    <div class="app">
      <router-link to="/"><img src="@/assets/main.png" alt="unite-dmg.com" srcset="" class="logo"></router-link>
      <div>
        <BDropdown :right="true" id="dropdown-1" :text="locale.menu[props.lang]" class="dropdown">
          <BDropdownItem to="/">{{ locale.substituteCalc[props.lang] }}</BDropdownItem>
          <!-- <BDropdownItem to="/more">{{ locale.opponentCalc[props.lang] }}</BDropdownItem>
          <BDropdownItem to="/wild">{{ locale.wildCalc[props.lang] }}</BDropdownItem>
          <BDropdownItem to="/random">{{ locale.teamRandomizer[props.lang] }}</BDropdownItem>
          <BDropdownItem to="/compare">{{ locale.wildCalc[props.lang] }}</BDropdownItem> -->
          <!-- <BDropdownItem to="/aspeed">{{ locale.attackSpeed[props.lang] }}</BDropdownItem> -->
        </BDropdown>
      </div>
    </div>
    <div class="announce">
      <!-- <div v-html="this.$store.state.announce[this.$store.state.lang]"></div> -->
    </div>
    <!-- <Setting /> -->
  </div>
</template>
  
<style scoped>
.app {
  width: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
}

.dropdown {
  margin-right: 2rem;
}

.logo {
  height: 60px;
}

.title-container {
  margin: 0.3rem 0 0.3rem 1.5rem;
  font-size: 1.1rem;
}

.nav {
  margin: 0.3rem 0;
}

.nav-link {
  font-size: 0.95rem;
  margin-right: 0.2rem;
  display: inline;
}

.small {
  display: none;
}

.big {
  display: block;
}

.announce {
  margin: 1rem;
}

@media only screen and (max-width: 500px) {
  .big {
    display: none;
  }
  
  .small {
    display: block;
  }
}
</style>