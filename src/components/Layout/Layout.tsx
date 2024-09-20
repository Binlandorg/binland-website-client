import { Suspense } from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"

import Footer from "components/Footer/Footer"
import Header from "components/Header/Header"
import SpinnerLoader from "ui/SpinnerLoader/SpinnerLoader"

const Layout: React.FC = () => (
	<>
		<Header />
		<ScrollRestoration />
		<Suspense fallback={<SpinnerLoader />}>
			<Outlet />
		</Suspense>
		<Footer />
	</>
)

export default Layout
