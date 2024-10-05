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
		ariaLabel: "terms.of.service.acceptance.of.terms.aria.label",
	},
	{
		id: "services",
		title: "terms.of.service.services.title",
		ariaLabel: "terms.of.service.services.aria.label",
	},
	{
		id: "use-of-services",
		title: "terms.of.service.use.of.services.title",
		ariaLabel: "terms.of.service.use.of.services.aria.label",
	},
	{
		id: "intellectual-property",
		title: "terms.of.service.intellectual.property.title",
		ariaLabel: "terms.of.service.intellectual.property.aria.label",
	},
	{
		id: "payments",
		title: "terms.of.service.payments.title",
		ariaLabel: "terms.of.service.payments.aria.label",
	},
	{
		id: "modifications",
		title: "terms.of.service.modifications.title",
		ariaLabel: "terms.of.service.modifications.aria.label",
	},
	{
		id: "limitation-of-liability",
		title: "terms.of.service.limitation.of.liability.title",
		ariaLabel: "terms.of.service.limitation.of.liability.aria.label",
	},
	{
		id: "applicable-law",
		title: "terms.of.service.applicable.law.title",
		ariaLabel: "terms.of.service.applicable.law.aria.label",
	},
	{
		id: "contact",
		title: "terms.of.service.contact.title",
		ariaLabel: "terms.of.service.contact.aria.label",
	},
]

const data = {
	sectionsData,
	tableOfContentData,
}

export default data
