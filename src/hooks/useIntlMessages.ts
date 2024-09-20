import { useIntl } from "react-intl"

const useIntlMessages = () => {
	const intl = useIntl()
	const formatMessage = (id: string) => intl.formatMessage({ id })
	return formatMessage
}

export default useIntlMessages
