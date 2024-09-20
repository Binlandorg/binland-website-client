import type { IFoundersData } from "types/components/aboutus"
import crhisImageURL from "../../../assets/images/binland/team/chris-profile.webp"
import gustavoImageURL from "../../../assets/images/binland/team/gustavo-profile.webp"
import jonathanImageURL from "../../../assets/images/binland/team/jonathan-profile.webp"
import crhisImageURLMobile from "../../../assets/images/binland/team/mobile/chris-profile.webp"
import gustavoImageURLMobile from "../../../assets/images/binland/team/mobile/gustavo-profile.webp"
import jonathanImageURLMobile from "../../../assets/images/binland/team/mobile/jonathan-profile.webp"

const founderData: IFoundersData[] = [
	{
		id: "1",
		image: {
			url: crhisImageURL,
			urlMobile: crhisImageURLMobile,
			alt: "image.profile.alt.crhistian.turpo.apaza",
		},
		fullName: "Crhistian Turpo Apaza",
		position: "about.us.position.ceo",
		quote: "about.us.quote.christian.turpo.apaza",
		networks: [
			{
				name: "github",
				url: "https://github.com/CrhistianT7",
				ariaLabel:
					"about.us.christian.turpo.apaza.social.media.github.aria.label",
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/crhistianturpo/",
				ariaLabel:
					"about.us.christian.turpo.apaza.social.media.linkedin.aria.label",
			},
			{
				name: "PersonalWebSite",
				url: "https://www.andrewturpo.com/",
				ariaLabel: "about.us.christian.turpo.apaza.web.site.aria.label",
			},
		],
	},
	{
		id: "2",
		image: {
			url: jonathanImageURL,
			urlMobile: jonathanImageURLMobile,
			alt: "image.profile.alt.jonathan.cervantes.alarcon",
		},
		fullName: "Jonathan M. Alarcón",
		position: "about.us.position.full.stack.developer",
		quote: "about.us.quote.jonathan.cervantes.alarcon",
		networks: [
			{
				name: "github",
				url: "https://github.com/mardecera",
				ariaLabel:
					"about.us.jonathan.cervantes.alarcon.social.media.github.aria.label",
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/mardecerax/",
				ariaLabel:
					"about.us.jonathan.cervantes.alarcon.social.media.linkedin.aria.label",
			},
			{
				name: "personalpage",
				url: "https://mardecera.com",
				ariaLabel: "about.us.jonathan.cervantes.alarcon.web.site.aria.label",
			},
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
		position: "about.us.position.full.stack.developer",
		quote: "about.us.quote.gustavo.ugarte",
		networks: [
			{
				name: "github",
				url: "https://github.com/GustavoUT22",
				ariaLabel: "about.us.gustavo.ugarte.social.media.github.aria.label",
			},
			{
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/gustavougartetorres/",
				ariaLabel: "about.us.gustavo.ugarte.social.media.linkedin.aria.label",
			},
		],
	},
]

export default founderData
