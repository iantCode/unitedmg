import type { Type } from "typescript";
import { type LocaleTable } from "."

export const localeForMenu: TypeOfLocaleForMenu = {
  menu: {
    ko: '메뉴',
    en: 'Menu',
    jp: 'メニュー'
  },
  wildCalc: {
    ko: '야생 데미지',
    en: 'Wild Damage',
    jp: '野生のダメージ'
  },
  substituteCalc: {
    ko: '인형 데미지',
    en: 'Substitute Damage',
    jp: 'Substitute Damage'
  },
  opponentCalc: {
    ko: '상대 데미지',
    en: 'Opponent Damage',
    jp: '相手のダメージ'
  },
  teamRandomizer: {
    ko: '랜덤 팀',
    en: 'Team Randomizer',
    jp: 'チームランダマイザー'
  },
  emblemCompare: {
    ko: '메달 분석',
    en: 'Emblem Compare',
    jp: 'メダル比較'
  },
  attackSpeed: {
    ko: '공격 속도 (알파)',
    en: 'Attack Speed (Alpha)',
    jp: '攻撃速度 (Alpha)'
  }
}

export interface TypeOfLocaleForMenu {
  menu: LocaleTable;
  wildCalc: LocaleTable;
  substituteCalc: LocaleTable;
  opponentCalc: LocaleTable;
  teamRandomizer: LocaleTable;
  emblemCompare: LocaleTable;
  attackSpeed: LocaleTable;
}