import type { LocaleTable } from '@/locale'
import { ref, type Ref } from 'vue'
import { Pokemon } from './Pokemon'
import { getPokemonData } from '@/api'

export class UniteDmg {
  pokemon: MyOppoPokemon
  damage: Ref<Damage[]>

  constructor() {
    this.pokemon = {
      my: ref(new Pokemon(false)),
      oppo: ref(new Pokemon(true))
    }

    getPokemonData().then((e) => {
      this.pokemon.my.value = new Pokemon(false, e)
      this.calculateDamage()
    })
    this.damage = ref([])
  }

  updateLevel(myOrOppo: 'my' | 'oppo', newLevel: number) {
    this.pokemon[myOrOppo].value.updateLevel(newLevel)

    this.calculateDamage()
  }

  updateCurrentHP(myOrOppo: 'my' | 'oppo', newHP: number) {
    this.pokemon[myOrOppo].value.updateCurrentHP(newHP)

    this.calculateDamage()
  }

  updateCurrentSkill(myOrOppo: 'my' | 'oppo', newSkill: number) {
    this.pokemon[myOrOppo].value.updateCurrentSkill(newSkill)

    this.calculateDamage()
  }

  calculateDamage() {
    const mySkillList = this.pokemon.my.value.baseData.skill
    if (mySkillList) {
      const usingSkill = this.pokemon.my.value.baseData.skill![this.pokemon.my.value.usingSkill]
      this.damage.value = []

      usingSkill.skillInfo.map((skillInfo) => {
        let damage = 0
        skillInfo.rsb.map((rsb) => {
          if (!rsb.HPRatio) {
            damage += Math.floor(rsb.attackRatio! * this.pokemon.my.value.currentStat.attack)
            damage += Math.floor(rsb.sp_attackRatio! * this.pokemon.my.value.currentStat.sp_attack)
            damage += rsb.levelRatio * (this.pokemon.my.value.level - 1)
            damage += rsb.bonus
          }
        })
        this.damage.value.push({
          name: skillInfo.name,
          isHeal: skillInfo.isHeal,
          damage
        })
      })
    }
  }
}

interface MyOppoPokemon {
  my: Ref<Pokemon>
  oppo: Ref<Pokemon>
}

interface Damage {
  name: LocaleTable
  isHeal: boolean
  damage: number
}
