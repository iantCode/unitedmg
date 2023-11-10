import { defaultStat, type Stat } from './Stat'
import { Skill } from './Skill'
import type { LocaleTable } from '@/locale'

export class Pokemon {
  level: number
  bonusStat: Stat
  currentStat: Stat
  baseData: BasePokemon
  usingSkill: number;

  constructor(data?: any) {
    this.level = 1
    this.usingSkill = 0;
    if (data) {
      this.baseData = new BasePokemon(data)
      this.currentStat = this.baseData.stats[this.level - 1]
      this.currentStat.currentHP = this.currentStat.hp
      this.bonusStat = defaultStat
      this.calculateEHP();
    } else {
      this.currentStat = defaultStat
      this.bonusStat = defaultStat
      this.baseData = {
        name: {
          ko: '대타출동인형',
          en: 'Dummy',
          jp: 'Dummy'
        },
        stats: [defaultStat]
      }
    }
  }

  updateLevel(newLevel: number) {
    if (this.level == newLevel) {
      return
    } else {
      this.level = newLevel
      this.calculateStat()
    }
  }

  updateCurrentHP(newHP: number) {
    if (newHP > this.currentStat.hp) {
      return
    } else {
      this.currentStat.currentHP = newHP
      this.calculateStat()
    }
  }

  calculateStat() {
    return
  }

  calculateEHP() {
    this.currentStat.defenseEHP = Math.floor(this.currentStat.hp * (1 + (this.currentStat.defense / 600)))
    this.currentStat.sp_defenseEHP = Math.floor(this.currentStat.hp * (1 + (this.currentStat.sp_defense / 600)))
  }

  updateCurrentSkill(newSkill: number) {
    this.usingSkill = newSkill;
  }
}

class BasePokemon {
  name: LocaleTable
  buffs?: any[]
  debuffs?: any[]
  skill?: Skill[]
  stats: Stat[]

  constructor(jsonData: any) {
    this.name = jsonData.name
    this.buffs = jsonData.buffs
    this.debuffs = jsonData.debuffs
    this.skill = jsonData.skill.map((v: any) => new Skill(v))
    this.stats = jsonData.stats
  }
}
