import type { ILanguage } from "types/context/languageContext"
import { ENGLISH, ESPANOL } from "./constants"

export const languageOptions: ILanguage[] = [
	{
		id: "en",
		value: ENGLISH,
		name: "EN - English",
	},
	{
		id: "es",
		value: ESPANOL,
		name: "ES - Español",
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
