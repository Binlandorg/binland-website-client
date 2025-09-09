import type { ITeamData } from "types/components/aboutus"
import diegoImageURL from "../../../assets/images/binland/team/diego-profile.webp"
import jonathanImageURL from "../../../assets/images/binland/team/jonathan-profile.webp"
import diegoImageURLMobile from "../../../assets/images/binland/team/mobile/diego-profile.webp"
import jonathanImageURLMobile from "../../../assets/images/binland/team/mobile/jonathan-profile.webp"
import patyImageURLMobile from "../../../assets/images/binland/team/mobile/paty-profile.webp"
import ricardoImageURLMobile from "../../../assets/images/binland/team/mobile/ricardo-profile.webp"
import patyImageURL from "../../../assets/images/binland/team/paty-profile.webp"
import ricardoImageURL from "../../../assets/images/binland/team/ricardo-profile.webp"

const teamData: ITeamData[] = [
	{
		id: "jhon",
		image: {
			url: jonathanImageURL,
			urlMobile: jonathanImageURLMobile,
			alt: "image.profile.alt.jonathan.cervantes.alarcon",
		},
		fullName: "Jonathan M. Alarcón",
		position: "about.us.position.software.developer",
		quote: "about.us.quote.jonathan.cervantes.alarcon",
		// networks: [
		// 	{
		// 		name: "github",
		// 		url: "https://github.com/mardecera",
		// 		ariaLabel:
		// 			"about.us.jonathan.cervantes.alarcon.social.media.github.aria.label",
		// 	},
		// 	{
		// 		name: "LinkedIn",
		// 		url: "https://www.linkedin.com/in/mardecerax/",
		// 		ariaLabel:
		// 			"about.us.jonathan.cervantes.alarcon.social.media.linkedin.aria.label",
		// 	},
		// 	{
		// 		name: "personalpage",
		// 		url: "https://mardecera.com",
		// 		ariaLabel: "about.us.jonathan.cervantes.alarcon.web.site.aria.label",
		// 	},
		// ],
	},
	{
		id: "1",
		image: {
			url: patyImageURL,
			urlMobile: patyImageURLMobile,
			alt: "image.profile.alt.paty.apaestegui.rodriguez",
		},
		fullName: "Paty Apaestegui Rodríguez",
		position: "about.us.position.trainee",
		quote: "about.us.quote.paty.apaestegui.rodriguez",
		networks: [
			// {
			// 	name: "GitHub",
			// 	url: "https://github.com/patyapaestegui",
			// 	ariaLabel:
			// 		"about.us.paty.apaestegui.rodriguez.social.media.github.aria.label",
			// },
			// {
			// 	name: "LinkedIn",
			// 	url: "https://www.linkedin.com/in/patyapaestegui/",
			// 	ariaLabel:
			// 		"about.us.paty.apaestegui.rodriguez.social.media.linkedin.aria.label",
			// },
		],
	},
	{
		id: "2",
		image: {
			url: diegoImageURL,
			urlMobile: diegoImageURLMobile,
			alt: "image.profile.alt.diego.lopez.vega",
		},
		fullName: "Diego López Vega",
		position: "about.us.position.trainee",
		quote: "about.us.quote.diego.lopez.vega",
		networks: [
			// {
			// 	name: "GitHub",
			// 	url: "https://github.com/diegolopex",
			// 	ariaLabel: "about.us.diego.lopez.vega.social.media.github.aria.label",
			// },
			// {
			// 	name: "LinkedIn",
			// 	url: "https://www.linkedin.com/in/diegolopex/",
			// 	ariaLabel: "about.us.diego.lopez.vega.social.media.linkedin.aria.label",
			// },
		],
	},
	{
		id: "3",
		image: {
			url: ricardoImageURL,
			urlMobile: ricardoImageURLMobile,
			alt: "image.profile.alt.ricardo.mamani.calcina",
		},
		fullName: "Ricardo Mamani Calcina",
		position: "about.us.position.trainee",
		quote: "about.us.quote.ricardo.mamani.calcina",
		networks: [
			// {
			// 	name: "github",
			// 	url: "https://github.com/RicardoC23",
			// 	ariaLabel: "about.us.ricardo.mamani.calcina.social.media.github.aria.label",
			// },
			// {
			// 	name: "LinkedIn",
			// 	url: "https://www.linkedin.com/in/ricardoc23-developer/",
			// 	ariaLabel:
			// 		"about.us.ricardo.mamani.calcina.social.media.linkedin.aria.label",
			// },
		],
	},
]

export default teamData
