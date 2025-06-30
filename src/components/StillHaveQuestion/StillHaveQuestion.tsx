import { TbSend } from "react-icons/tb"

import useIntlMessages from "hooks/useIntlMessages"
import ButtonLink from "ui/ButtonLink/ButtonLink"
import {
	ContainerHaveQuestion,
	HaveQuestion,
	SupportChat,
} from "./StillHaveQuestion.styles"

const StillHaveQuestion: React.FC = () => {
	const intl = useIntlMessages()

	return (
		<ContainerHaveQuestion>
			<HaveQuestion>
				<SupportChat>
					{intl("frequently.asked.questions.still.have.questions.description")}
				</SupportChat>
			</HaveQuestion>
			<ButtonLink to="/contact-us" className="faq-button-contact-us">
				{intl("home.navbar.button.contact.us")}
				<span className="icon-send">
					<TbSend />
				</span>
			</ButtonLink>
		</ContainerHaveQuestion>
	)
}

export default StillHaveQuestion
