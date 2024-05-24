import { createContext, useState } from 'react'

import useLocalStorage from 'hooks/useLocalStorage'
import en from 'lang/en.json'
import es from 'lang/es.json'
// import fr from 'lang/fr.json'
// import pt from 'lang/pt.json'
import { LANGUAGE_LOCAL_STORAGE_KEY } from './constants'
import {
  ILanguageDefinition,
  ILangaugeContextProps,
  ILanguageProviderProps,
} from 'types/context/languageContext'

const getLanguageData = (key: string): ILanguageDefinition => {
  switch (key) {
    case 'es':
      return { locale: 'es', messages: es }
    case 'en':
      return { locale: 'en', messages: en }
    default:
      return { locale: 'en', messages: en }
  }
}

const LanguageContext = createContext<ILangaugeContextProps>(
  {} as ILangaugeContextProps
)

const LanguageProvider: React.FC<ILanguageProviderProps> = ({ children }) => {
  const [storageValue, setStorageValue] = useLocalStorage<string>(
    LANGUAGE_LOCAL_STORAGE_KEY,
    'en'
  )
  const [language, setLanguage] = useState<ILanguageDefinition>(() =>
    getLanguageData(storageValue)
  )
  const handleLanguage = (value: string) => {
    const lang = value.toLowerCase()
    setStorageValue(lang)
    setLanguage(getLanguageData(lang))
  }

  return (
    <LanguageContext.Provider value={{ language, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export { LanguageContext, LanguageProvider }
