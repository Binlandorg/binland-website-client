import { PropsWithChildren } from 'react'

export interface ILanguage {
  id: string
  value: string
  name: string
}

export interface ILanguageDefinition {
  locale: string
  messages: { [key: string]: string }
}

export interface ILanguageContextProps {
  language: ILanguageDefinition
  handleLanguage: (value: string) => void
}

export interface ILanguageProviderProps extends PropsWithChildren {}
