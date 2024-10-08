import { IntlProvider } from "react-intl"
import { RouterProvider } from "react-router-dom"

import { useLanguageContext } from "context/Language/useLanguageContext"
import router from "routes/router"
import { GlobalStyle } from "./styles/global"

const App = () => {
	const { language } = useLanguageContext()

	return (
		<>
			<GlobalStyle />
			<IntlProvider locale={language.locale} messages={language.messages}>
				<RouterProvider router={router} />
			</IntlProvider>
		</>
	)
}

export default App
