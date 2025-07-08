import * as Yup from "yup"

const VALIDATION_MESSAGE = "validation.input.required.message"
const ONLY_NUMBERS_MESSAGE = "schema.validation.only.numbers"
const ONLY_TEXT_MESSAGE = "schema.validation.only.text"
const MIN_6_TEXT_MESSAGE = "schema.validation.min.6.text"
const MIN_6_NUMBERS_MESSAGE = "schema.validation.min.6.numbers"
const MAX_20_TEXT_MESSAGE = "schema.validation.max.20.text"
const MIN_3_TEXT_MESSAGE = "schema.validation.min.3.text"
const EMAIL_MESSAGE = "schema.validation.email"
const PHONE_MESSAGE = "schema.validation.phone"
const LENGTH_8_MESSAGE = "schema.validation.length.8.numbers"
const RUC_MESSAGE = "schema.validation.ruc"
const MAX_12_NUMBERS_MESSAGE = "schema.validation.max.12.numbers"
const NUMBERS_AND_LETTERS_MESSAGE = "schema.validation.numbers.and.letters"

const ONLY_NUMBERS_REGEX = /^\d+$/
const ONLY_TEXT_REGEX = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/
const NUMBERS_AND_LETTERS_REGEX = /^[A-Z0-9]+$/
const RUC_REGEX = /^\d{11}$/
const PHONE_REGEX = /^\d{7,15}$/

export const validationSchemas = [
	Yup.object({
		documentType: Yup.string().required(VALIDATION_MESSAGE),
		documentNumber: Yup.string()
			.required(VALIDATION_MESSAGE)
			.when(["documentType"], {
				is: "dni",
				// biome-ignore lint/suspicious/noThenProperty: Yup has a then property
				then: (scheme) =>
					scheme
						.matches(ONLY_NUMBERS_REGEX, ONLY_NUMBERS_MESSAGE)
						.length(8, LENGTH_8_MESSAGE),
			})
			.when(["documentType"], {
				is: "passport",
				// biome-ignore lint/suspicious/noThenProperty: Yup has a then property
				then: (scheme) =>
					scheme
						.matches(NUMBERS_AND_LETTERS_REGEX, NUMBERS_AND_LETTERS_MESSAGE)
						.min(6, MIN_6_NUMBERS_MESSAGE)
						.max(12, MAX_12_NUMBERS_MESSAGE),
			})
			.when(["documentType"], {
				is: "ruc",
				// biome-ignore lint/suspicious/noThenProperty: Yup has a then property
				then: (scheme) => scheme.matches(RUC_REGEX, RUC_MESSAGE),
			}),
		firstName: Yup.string()
			.required(VALIDATION_MESSAGE)
			.matches(ONLY_TEXT_REGEX, ONLY_TEXT_MESSAGE)
			.min(3, MIN_3_TEXT_MESSAGE)
			.max(20, MAX_20_TEXT_MESSAGE),
		lastName: Yup.string()
			.required(VALIDATION_MESSAGE)
			.matches(ONLY_TEXT_REGEX, ONLY_TEXT_MESSAGE)
			.min(3, MIN_3_TEXT_MESSAGE)
			.max(20, MAX_20_TEXT_MESSAGE),
		address: Yup.string().required(VALIDATION_MESSAGE),
		state: Yup.string().required(VALIDATION_MESSAGE),
		county: Yup.string().required(VALIDATION_MESSAGE),
		city: Yup.string().required(VALIDATION_MESSAGE),
		email: Yup.string().required(VALIDATION_MESSAGE).email(EMAIL_MESSAGE),
		phone: Yup.string()
			.required(VALIDATION_MESSAGE)
			.matches(PHONE_REGEX, PHONE_MESSAGE),
		isAccepted: Yup.boolean(),
	}),
	Yup.object({
		serviceType: Yup.string().required(VALIDATION_MESSAGE),
		amount: Yup.string().matches(ONLY_NUMBERS_REGEX, ONLY_NUMBERS_MESSAGE),
		description: Yup.string()
			.required(VALIDATION_MESSAGE)
			.min(6, MIN_6_TEXT_MESSAGE),
		typeOfRequest: Yup.string(),
		detailsOfTheRequest: Yup.string()
			.required(VALIDATION_MESSAGE)
			.min(6, MIN_6_TEXT_MESSAGE),
		attachedFile: Yup.mixed(),
		orderDetails: Yup.string()
			.required(VALIDATION_MESSAGE)
			.min(6, MIN_6_TEXT_MESSAGE),
	}),
	Yup.object({
		meansOfConfirmation: Yup.string(),
	}),
]
