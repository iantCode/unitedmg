<script setup lang="ts">
import { localeForMenu, type TypeOfLocaleForMenu } from '../../../locale/menu';
import { computed } from 'vue';
import type { UniteDmg } from '@/classes/UniteDmg';

const props = defineProps<{
  uniteDmg: UniteDmg;
  myOrOppo: 'my' | 'oppo';
  lang: 'en' | 'ko' | 'jp';
}>();
const locale: TypeOfLocaleForMenu = localeForMenu;

const currentSkillId = computed({
  get() {
    return props.uniteDmg.pokemon[props.myOrOppo].value.usingSkill;
  },

  set(newSkill: number) {
    props.uniteDmg.updateCurrentSkill(props.myOrOppo, newSkill);
  }
})

const changeSkill = () => {

}
</script>

<template>
  <div class="skills">
    <BFormRadioGroup label="기술" v-slot="{ ariaDescribedby }" v-model="currentSkillId" @change="changeSkill" selected="0">
      <div :key="index" v-for="(skill, index) in props.uniteDmg.pokemon[props.myOrOppo].value.baseData.skill">
        <BFormRadio :id="skill.htmlClass" :aria-describedby="ariaDescribedby" name="skills" :value="index">
          {{ skill.name[props.lang] }}
        </BFormRadio>
      </div>
    </BFormRadioGroup>
  </div>
</template>
  
<style scoped>
.skills {
  display: flex;
  flex-direction: column;
}

@media (prefers-color-scheme: dark) {
  .skills>div>div>div>input {
    background-color: rgba(255, 255, 255, 0.05) !important;
  }
}
</style>@/classes/Pokemon