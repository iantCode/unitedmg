import type { LocaleTable } from '@/locale'

export class Skill {
  name: LocaleTable
  htmlClass: string
  isBase: boolean
  skillInfo: SkillInfo[]

  constructor(jsonData: any) {
    this.name = jsonData.name
    this.htmlClass = jsonData.htmlClass
    this.isBase = jsonData.isBase
    this.skillInfo = jsonData.skillInfo.map((v: any) => new SkillInfo(v))
  }
}

class SkillInfo {
  canCrit: boolean
  isHeal: boolean
  noDefense: boolean
  maxDmgToUser?: number
  maxDmgToWild?: number
  rsb: RSB[];

  constructor(jsonData: any) {
    this.canCrit = jsonData.canCrit;
    this.isHeal = jsonData.isHeal;
    this.noDefense = jsonData.noDefense;
    this.rsb = jsonData.rsb.map((v: any) => new RSB(v));
    if (jsonData.maxDmgToUser) {
      this.maxDmgToUser = jsonData.maxDmgToUser;
    }
    if (jsonData.maxDmgToWild) {
      this.maxDmgToWild = jsonData.maxDmgToWild;
    }
  }
}

class RSB {
  attackRatio?: number
  sp_attackRatio?: number

  HPRatioType?: 'max' | 'remaining' | 'lost'
  HPRatio?: number
  
  bonus: number
  levelRatio: number
  usingDefense: 'defense' | 'sp_defense'
  tick: number

  constructor(jsonData: any) {
    if (jsonData.HPRatioType) {
      this.HPRatioType = jsonData.HPRatioType;
      this.HPRatio = jsonData.HPRatio;
    } else {
      this.attackRatio = jsonData.attackRatio;
      this.sp_attackRatio = jsonData.sp_attackRatio;
    }
    this.bonus = jsonData.bonus;
    this.levelRatio = jsonData.levelRatio;
    this.usingDefense = jsonData.usingDefense;
    this.tick = jsonData.tick;
  }
}
