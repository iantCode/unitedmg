export const usePokemon = () => {
  return new Pokemon();
}

export class Pokemon {
    stat: Stat;

    constructor() {
      this.stat = new Stat();
    }
}

class Stat { 
  hp: number;
  attack: number;
  defense: number;
  defenseEHP: number;
  sp_attack: number;
  sp_defense: number;
  sp_defenseEHP: number;
  crit: number;
  cdr: number;
  attack_speed: number;

  constructor() {
    this.hp = 0;
    this.attack = 0;
    this.defense = 0;
    this.defenseEHP = 0;
    this.sp_attack = 0;
    this.sp_defense = 0;
    this.sp_defenseEHP = 0;
    this.crit = 0;
    this.cdr = 0;
    this.attack_speed = 0;
  }
}