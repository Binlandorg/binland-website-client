export interface IPrivacyPolicySection {
	id: string
	title: string
	content:
		| {
				subContent: string
				subContentList: string[]
		  }
		| string
}
