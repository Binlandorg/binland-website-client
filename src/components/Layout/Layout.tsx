import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import { Suspense } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'

const Layout: React.FC = () => (
  <>
    <Header />
    <ScrollRestoration />
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
    <Footer />
  </>
)

export default Layout
