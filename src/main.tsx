import { LanguageProvider } from "context/Language/LanguageContext"
import * as React from "react"
import ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import App from "./App"

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
