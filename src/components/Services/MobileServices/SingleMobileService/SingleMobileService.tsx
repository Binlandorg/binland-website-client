import useIntlMessages from "hooks/useIntlMessages"
import {
	ContentWrapper,
	MacroService,
	MacroServiceContent,
} from "./SingleMobileService.styles"

interface ITabProperties {
	label: string
	children: React.ReactNode
}

const SingleMobileService: React.FC<ITabProperties> = ({ label, children }) => {
	const intl = useIntlMessages()
	return (
		<ContentWrapper>
			<MacroService>{intl(label)}</MacroService>
			<MacroServiceContent>{children}</MacroServiceContent>
		</ContentWrapper>
	)
}

export default SingleMobileService
