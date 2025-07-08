import * as Yup from "yup"

const VALIDATION_MESSAGE = "validation.input.required.message"
const ONLY_NUMBERS = /^\d+$/
const ONLY_NUMBERS_MESSAGE = "schema.validation.only.numbers"
const ONLY_TEXT = "schema.validation.only.text"
const MIN_6 = "schema.validation.min.6.numbers"
const MIN_6_STR_MESSAGE = "schema.validation.min.6.text"
const MAX_20 = "schema.validation.max.20"
const MIN_3 = "schema.validation.min.3"
const NAME_REGEX = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/
const EMAIL_MESSAGE = "schema.validation.email"
const EMAIL_REGEX = /^[a-zA-Z0-9_.]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/
const PHONE_REGEX = /^\d{7,15}$/
const PHONE_MESSAGE = "schema.validation.phone"

export const validationSchemas = [
	Yup.object({
		documentType: Yup.string().required(VALIDATION_MESSAGE),
		documentNumber: Yup.string()
			.required(VALIDATION_MESSAGE)
			.matches(ONLY_NUMBERS, ONLY_NUMBERS_MESSAGE)
			.min(6, MIN_6)
			.max(20, MAX_20),
		firstName: Yup.string()
			.required(VALIDATION_MESSAGE)
			.matches(NAME_REGEX, ONLY_TEXT)
			.min(3, MIN_3)
			.max(20, MAX_20),
		lastName: Yup.string()
			.required(VALIDATION_MESSAGE)
			.matches(NAME_REGEX, ONLY_TEXT)
			.min(3, MIN_3)
			.max(20, MAX_20),
		address: Yup.string().required(VALIDATION_MESSAGE),
		state: Yup.string().required(VALIDATION_MESSAGE),
		county: Yup.string().required(VALIDATION_MESSAGE),
		city: Yup.string().required(VALIDATION_MESSAGE),
		email: Yup.string()
			.required(VALIDATION_MESSAGE)
			.matches(EMAIL_REGEX, EMAIL_MESSAGE),
		phone: Yup.string()
			.required(VALIDATION_MESSAGE)
			.matches(PHONE_REGEX, PHONE_MESSAGE),
		isAccepted: Yup.boolean(),
	}),
	Yup.object({
		serviceType: Yup.string().required(VALIDATION_MESSAGE),
		amount: Yup.string().matches(ONLY_NUMBERS, ONLY_NUMBERS_MESSAGE),
		description: Yup.string()
			.required(VALIDATION_MESSAGE)
			.min(6, MIN_6_STR_MESSAGE),
		typeOfRequest: Yup.string(),
		detailsOfTheRequest: Yup.string()
			.required(VALIDATION_MESSAGE)
			.min(6, MIN_6_STR_MESSAGE),
		attachedFile: Yup.mixed().nullable(),
		orderDetails: Yup.string()
			.required(VALIDATION_MESSAGE)
			.min(6, MIN_6_STR_MESSAGE),
	}),
	Yup.object({
		meansOfConfirmation: Yup.string(),
	}),
]
