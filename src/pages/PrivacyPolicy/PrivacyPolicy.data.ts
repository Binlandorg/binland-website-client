import type { IPrivacyPolicySection } from "types/components/privacypolicy"
import type { IItems } from "types/components/tableofcontent"

const sectionsData: IPrivacyPolicySection[] = [
	{
		id: "information-we-collect",
		title: "privacy.policy.information.we.collect.title",
		content: {
			subContent: "privacy.policy.information.we.collect.content",
			subContentList: [
				"privacy.policy.information.we.collect.content.1",
				"privacy.policy.information.we.collect.content.2",
				"privacy.policy.information.we.collect.content.3",
			],
		},
	},
	{
		id: "use-of-information",
		title: "privacy.policy.use.of.information.title",
		content: {
			subContent: "privacy.policy.use.of.information.content",
			subContentList: [
				"privacy.policy.use.of.information.content.1",
				"privacy.policy.use.of.information.content.2",
				"privacy.policy.use.of.information.content.3",
				"privacy.policy.use.of.information.content.4",
			],
		},
	},
	{
		id: "information-sharing",
		title: "privacy.policy.information.sharing.title",
		content: {
			subContent: "privacy.policy.information.sharing.content",
			subContentList: [
				"privacy.policy.information.sharing.content.1",
				"privacy.policy.information.sharing.content.2",
				"privacy.policy.information.sharing.content.3",
			],
		},
	},
	{
		id: "data-security",
		title: "privacy.policy.data.security.title",
		content: "privacy.policy.data.security.content",
	},
	{
		id: "your-rights",
		title: "privacy.policy.your.rights.title",
		content: "privacy.policy.your.rights.content",
	},
	{
		id: "changes-to-this-policy",
		title: "privacy.policy.changes.to.this.policy.title",
		content: "privacy.policy.changes.to.this.policy.content",
	},
	{
		id: "contact",
		title: "privacy.policy.contact.title",
		content: "privacy.policy.contact.content",
	},
]

const tableOfContentData: IItems[] = [
	{
		id: "information-we-collect",
		title: "privacy.policy.information.we.collect.title",
	},
	{
		id: "use-of-information",
		title: "privacy.policy.use.of.information.title",
	},
	{
		id: "information-sharing",
		title: "privacy.policy.information.sharing.title",
	},
	{
		id: "data-security",
		title: "privacy.policy.data.security.title",
	},
	{
		id: "your-rights",
		title: "privacy.policy.your.rights.title",
	},
	{
		id: "changes-to-this-policy",
		title: "privacy.policy.changes.to.this.policy.title",
	},
	{
		id: "contact",
		title: "privacy.policy.contact.title",
	},
]

const data = {
	sectionsData,
	tableOfContentData,
}

export default data
