import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import { Outlet, ScrollRestoration } from 'react-router-dom'

const Layout: React.FC = () => (
  <>
    <Header />
    <ScrollRestoration />
    <Outlet />
    <Footer />
  </>
)

export default Layout
