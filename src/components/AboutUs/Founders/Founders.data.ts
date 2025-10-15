import type { IFoundersData } from "types/components/aboutus"
import crhisImageURL from "../../../assets/images/binland/team/chris-profile.webp"
import gustavoImageURL from "../../../assets/images/binland/team/gustavo-profile.webp"
import crhisImageURLMobile from "../../../assets/images/binland/team/mobile/chris-profile.webp"
import gustavoImageURLMobile from "../../../assets/images/binland/team/mobile/gustavo-profile.webp"

const founderData: IFoundersData[] = [
	{
		id: "2",
		image: {
			url: crhisImageURL,
			urlMobile: crhisImageURLMobile,
			alt: "image.profile.alt.crhistian.turpo.apaza",
		},
		fullName: "Crhistian A. Turpo",
		position: "about.us.position.ceo",
		quote: "about.us.quote.christian.turpo.apaza",
		networks: [
			// {
			// 	name: "github",
			// 	url: "https://github.com/CrhistianT7",
			// 	ariaLabel: "about.us.christian.turpo.apaza.social.media.github.aria.label",
			// },
			// {
			// 	name: "LinkedIn",
			// 	url: "https://www.linkedin.com/in/crhistianturpo/",
			// 	ariaLabel:
			// 		"about.us.christian.turpo.apaza.social.media.linkedin.aria.label",
			// },
			// {
			// 	name: "PersonalWebSite",
			// 	url: "https://www.andrewturpo.com/",
			// 	ariaLabel: "about.us.christian.turpo.apaza.web.site.aria.label",
			// },
		],
	},
	{
		id: "3",
		image: {
			url: gustavoImageURL,
			urlMobile: gustavoImageURLMobile,
			alt: "image.profile.alt.gustavo.ugarte",
		},
		fullName: "Gustavo Ugarte",
		position: "about.us.position.software.developer",
		quote: "about.us.quote.gustavo.ugarte",
		networks: [
			// {
			// 	name: "github",
			// 	url: "https://github.com/GustavoUT22",
			// 	ariaLabel: "about.us.gustavo.ugarte.social.media.github.aria.label",
			// },
			// {
			// 	name: "LinkedIn",
			// 	url: "https://www.linkedin.com/in/gustavougartetorres/",
			// 	ariaLabel: "about.us.gustavo.ugarte.social.media.linkedin.aria.label",
			// },
		],
	},
]

export default founderData
