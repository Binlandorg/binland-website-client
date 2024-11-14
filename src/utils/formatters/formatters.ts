export const phoneNumberFormatter = (
	countryCode: string,
	phoneNumber: string,
): string => {
	const groupsOfThree = phoneNumber.match(/.{1,3}/g)
	const formattedPhoneNumber = groupsOfThree?.join(" ")
	return `${countryCode} ${formattedPhoneNumber}`
}

export const linkWhatsappFormatter = (
	phoneCode: string,
	phoneNumber: string,
	text: string,
): string => {
	return `https://wa.me/${phoneCode}${phoneNumber}?text=${encodeURIComponent(text)}`
}
