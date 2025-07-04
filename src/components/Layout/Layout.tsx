import { Suspense } from "react"
import { Outlet, ScrollRestoration } from "react-router-dom"

import Footer from "components/Footer/Footer"
import Header from "components/Header/Header"
import SpinnerLoader from "ui/SpinnerLoader/SpinnerLoader"
import { LayoutWrapper, Main } from "./Layout.styles"

const Layout: React.FC = () => (
	<LayoutWrapper>
		<Header />
		<ScrollRestoration />
		<Main>
			<Suspense fallback={<SpinnerLoader />}>
				<Outlet />
			</Suspense>
		</Main>
		<Footer />
	</LayoutWrapper>
)

export default Layout
