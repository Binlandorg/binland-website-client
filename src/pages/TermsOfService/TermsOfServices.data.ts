import type { IItems } from "types/components/tableofcontent"
import type { ISection } from "types/components/termsofservices"

const sectionsData: ISection[] = [
	{
		id: "acceptance-of-terms",
		title: "terms.of.service.acceptance.of.terms.title",
		content: "terms.of.service.acceptance.of.terms.content",
	},
	{
		id: "services",
		title: "terms.of.service.services.title",
		content: "terms.of.service.services.content",
	},
	{
		id: "use-of-services",
		title: "terms.of.service.use.of.services.title",
		content: "terms.of.service.use.of.services.content",
	},
	{
		id: "intellectual-property",
		title: "terms.of.service.intellectual.property.title",
		content: "terms.of.service.intellectual.property.content",
	},
	{
		id: "payments",
		title: "terms.of.service.payments.title",
		content: "terms.of.service.payments.content",
	},
	{
		id: "modifications",
		title: "terms.of.service.modifications.title",
		content: "terms.of.service.modifications.content",
	},
	{
		id: "limitation-of-liability",
		title: "terms.of.service.limitation.of.liability.title",
		content: "terms.of.service.limitation.of.liability.content",
	},
	{
		id: "applicable-law",
		title: "terms.of.service.applicable.law.title",
		content: "terms.of.service.applicable.law.content",
	},
	{
		id: "contact",
		title: "terms.of.service.contact.title",
		content: "terms.of.service.contact.content",
	},
]

const tableOfContentData: IItems[] = [
	{
		id: "acceptance-of-terms",
		title: "terms.of.service.acceptance.of.terms.title",
	},
	{ id: "services", title: "terms.of.service.services.title" },
	{ id: "use-of-services", title: "terms.of.service.use.of.services.title" },
	{
		id: "intellectual-property",
		title: "terms.of.service.intellectual.property.title",
	},
	{ id: "payments", title: "terms.of.service.payments.title" },
	{ id: "modifications", title: "terms.of.service.modifications.title" },
	{
		id: "limitation-of-liability",
		title: "terms.of.service.limitation.of.liability.title",
	},
	{ id: "applicable-law", title: "terms.of.service.applicable.law.title" },
	{ id: "contact", title: "terms.of.service.contact.title" },
]

const data = {
	sectionsData,
	tableOfContentData,
}

export default data
