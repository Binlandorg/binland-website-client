import { useIntl } from "react-intl"

const useIntlMessages = () => {
	const intl = useIntl()
	return (id: string) => (intl.messages[id] ? intl.formatMessage({ id }) : id)
}

export default useIntlMessages
