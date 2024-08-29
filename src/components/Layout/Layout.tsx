import { Suspense } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'

import SpinnerLoader from 'ui/SpinnerLoader/SpinnerLoader'
import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'

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
