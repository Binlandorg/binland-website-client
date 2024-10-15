interface IFooterLinks {
	id: string
	to: string
	name: string
}

export const legalLinks: IFooterLinks[] = [
	{ id: "1", to: "/terms-of-service", name: "footer.terms.of.service" },
	{ id: "2", to: "/privacy-policy", name: "footer.privacy.policy" },
]

export const enterpriseLinks: IFooterLinks[] = [
	// { id: "1", to: "/about-us", name: "footer.about.us" },
	{ id: "2", to: "/contact-us", name: "footer.contact.us" },
	{ id: "3", to: "/frequently-asked-question", name: "footer.FAQ" },
]
