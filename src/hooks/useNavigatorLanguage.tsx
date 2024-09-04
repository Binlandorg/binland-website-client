import { useSyncExternalStore } from 'react'

const langSubscribe = (callback: () => void) => {
  window.addEventListener('languagechange', callback)
  return () => window.removeEventListener('languagechange', callback)
}

const getLang = () => navigator.language.split('-')[0]

/**
 * Hook that gets the current language used by the browser.
 * 
 * @returns string Language: 2-letter format without its regional variations.
 * 
 * @example
 * ```ts
 * import useNavigatorLanguage from '@/hooks/useNavigatorLanguage';
 * 
 * const navLanguage = useNavigatorLanguage()
 * console.log(navLanguage)
 * ```
 */

export const useNavigatorLanguage = (): string =>
  useSyncExternalStore(langSubscribe, getLang)

export default useNavigatorLanguage
