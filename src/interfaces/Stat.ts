export interface Stat {
  hp: number
  currentHP?: number
  attack: number
  defense: number
  defenseEHP: number
  sp_attack: number
  sp_defense: number
  sp_defenseEHP: number
  crit: number
  cdr: number
  attack_speed: number
}

export const defaultStat: Stat = {
  hp: 0,
  currentHP: 0,
  attack: 0,
  defense: 0,
  defenseEHP: 0,
  sp_attack: 0,
  sp_defense: 0,
  sp_defenseEHP: 0,
  crit: 0,
  cdr: 0,
  attack_speed: 0
}
