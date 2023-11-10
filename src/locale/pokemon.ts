import type { LocaleTable } from '.'

export const localeForPokemon: TypeOfLocaleForPokemon = {
  my: {
    ko: '내 포켓몬',
    en: 'My Pokemon',
    jp: '私のポケモン'
  },
  oppo: {
    ko: '상대 포켓몬',
    en: 'Opponent Pokemon',
    jp: '相手のポケモン'
  },
  wild: {
    ko: '야생 포켓몬',
    en: 'Wild Pokemon',
    jp: '野生のポケモン'
  },
  save: {
    ko: '저장/불러오기',
    en: 'Save/Load',
    jp: 'セーブ/ロード'
  },
  outdated: {
    ko: '최신 업데이트로 저장 구조가 달라져 이 포켓몬을 다시 저장해야 합니다. 이를 위해 당신의 저장한 포켓몬이 삭제되었습니다. 불편하시겠지만, 다시 저장해주세요.',
    en: 'You need to re-save this pokemon because we changed how Pokemon are saved. So, your stored pokemon is removed. Please save it again. Sorry for your inconvinence.',
    jp: 'ポケモンの保存方法を変更したので、このポケモンを再保存する必要があります。 だから、あなたの保存されたポケモンは削除されます。 もう一度保存してください。 ご不便をおかけして申し訳ありません。'
  },
  danger: {
    ko: '알림',
    en: 'Notice',
    jp: 'お知らせ'
  },
  hp: {
    ko: 'HP',
    en: 'HP',
    jp: 'HP'
  },
  attack: {
    ko: '공격',
    en: 'Attack',
    jp: '攻撃'
  },
  defense: {
    ko: '방어',
    en: 'Defense',
    jp: '防御'
  },
  defenseEHP: {
    ko: '방어 EHP',
    en: 'Defense EHP',
    jp: '防御 EHP'
  },
  sp_attack: {
    ko: '특수공격',
    en: 'Sp. Attack',
    jp: '特攻'
  },
  sp_defense: {
    ko: '특수방어',
    en: 'Sp. Defense',
    jp: '特防'
  },
  sp_defenseEHP: {
    ko: '특수방어 EHP',
    en: 'Sp. Defense EHP',
    jp: '特防 EHP'
  },
  crit: {
    ko: '크리티컬 확률',
    en: 'Crit Rate',
    jp: '急所率'
  },
  cdr: {
    ko: '쿨타임 감소',
    en: 'CDR',
    jp: 'CDR'
  }
}

export interface TypeOfLocaleForPokemon {
  my: LocaleTable
  oppo: LocaleTable
  wild: LocaleTable
  save: LocaleTable
  outdated: LocaleTable
  danger: LocaleTable
  hp: LocaleTable
  attack: LocaleTable
  defense: LocaleTable
  defenseEHP: LocaleTable
  sp_attack: LocaleTable
  sp_defense: LocaleTable
  sp_defenseEHP: LocaleTable
  crit: LocaleTable
  cdr: LocaleTable
}
