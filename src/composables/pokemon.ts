import { ref } from 'vue'

export const usePokemon = () => {
  return ref(new Pokemon())
}

export class Pokemon {
  level: number
  stat: Stat

  constructor() {
    this.level = 1
    this.stat = new Stat()
  }

  updateLevel(newLevel: number) {
    if (this.level == newLevel) {
      return
    } else {
      this.level = newLevel
      this.calculateStat()
    }
  }

  calculateStat() {
    return
  }
}

class Stat {
  hp: number
  attack: number
  defense: number
  defenseEHP: number
  sp_attack: number
  sp_defense: number
  sp_defenseEHP: number
  crit: number
  cdr: number
  attack_speed: number

  constructor() {
    this.hp = 0
    this.attack = 0
    this.defense = 0
    this.defenseEHP = 0
    this.sp_attack = 0
    this.sp_defense = 0
    this.sp_defenseEHP = 0
    this.crit = 0
    this.cdr = 0
    this.attack_speed = 0
  }
}
