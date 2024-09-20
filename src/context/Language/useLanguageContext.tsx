import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

export const useLanguageContext = () => {
	return useContext(LanguageContext)
}
