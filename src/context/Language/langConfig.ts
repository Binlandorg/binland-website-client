import { ENGLISH, ESPANOL } from './constants'

export interface ILanguagaConfiguration {
  id: string
  value: string
  name: string
}

export const languageOptions: ILanguagaConfiguration[] = [
  {
    id: 'en',
    value: ENGLISH,
    name: 'EN - English',
  },
  {
    id: 'es',
    value: ESPANOL,
    name: 'ES - Español',
  },
  // {
  //   id: 'pt',
  //   value: PORTUGUES,
  //   name: 'Português',
  // },
  // {
  //   id: "fr",
  //   value: FRANCAIS,
  //   name: "Français",
  // },
]
