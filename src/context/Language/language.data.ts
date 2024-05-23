import { ENGLISH, ESPANOL } from './constants'
import { ILanguage } from 'types/context/languageContext'

export const languageOptions: ILanguage[] = [
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
