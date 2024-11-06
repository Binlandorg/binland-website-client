import ReactGA from "react-ga4"

import { LanguageProvider } from "context/Language/LanguageContext"
import * as React from "react"
import ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import App from "./App"

const GA_MEASUREMENT_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID
ReactGA.initialize(GA_MEASUREMENT_ID)

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<LanguageProvider>
			<HelmetProvider>
				<App />
			</HelmetProvider>
		</LanguageProvider>
	</React.StrictMode>,
)
