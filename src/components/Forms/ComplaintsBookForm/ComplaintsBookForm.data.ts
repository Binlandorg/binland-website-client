import { serviceContentData } from "components/Services/Services.data"
import type { ContactDataFieldsType } from "./ComplaintsBookForm.types"
import type { ContactDataFormType } from "./ComplaintsBookForm.types"
import type { DetailsDataFieldsType } from "./ComplaintsBookForm.types"
import type { DetailsFormType } from "./ComplaintsBookForm.types"
import type { InformationFormType } from "./ComplaintsBookForm.types"
import type { InitialValuesType } from "./ComplaintsBookForm.types"

export const ContactDataForm: ContactDataFormType = {
	documentType: "",
	documentNumber: "",
	firstName: "",
	lastName: "",
	address: "",
	state: "",
	county: "",
	city: "",
	email: "",
	phone: "",
	isAccepted: false,
}

export const DetailsForm: DetailsFormType = {
	serviceType: "",
	amount: "",
	description: "",
	typeOfRequest: "claim",
	detailsOfTheRequest: "",
	attachedFile: null,
	orderDetails: "",
}

export const InformationForm: InformationFormType = {
	meansOfConfirmation: "email",
}

export const initialValues: InitialValuesType = {
	...ContactDataForm,
	...DetailsForm,
	...InformationForm,
}

export const fieldsByGroup: (keyof InitialValuesType)[][] = [
	Object.keys(ContactDataForm).map((key) => key as keyof InitialValuesType),
	Object.keys(DetailsForm).map((key) => key as keyof InitialValuesType),
	Object.keys(InformationForm).map((key) => key as keyof InitialValuesType),
]

export const ownerData: ContactDataFieldsType[] = [
	{
		label: "complaints.book.form.document.number.input.label",
		name: "documentNumber",
	},
	{
		label: "complaints.book.form.first.name.input.label",
		name: "firstName",
	},
	{
		label: "complaints.book.form.last.name.input.label",
		name: "lastName",
	},
]

export const contactDetails: ContactDataFieldsType[] = [
	{
		label: "complaints.book.form.email.input.label",
		name: "email",
	},
	{
		label: "complaints.book.form.phone.input.label",
		name: "phone",
	},
]

export const requestDetails: DetailsDataFieldsType[] = [
	{
		label: "complaints.book.form.input.amount.claimed",
		name: "amount",
	},
	{
		label: "complaints.book.form.input.description",
		name: "description",
	},
]

export const services = Object.keys(serviceContentData).map((key) => ({
	title: serviceContentData[key].title,
	id: key,
}))
