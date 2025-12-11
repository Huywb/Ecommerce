import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className='container mx-auto lg:w-[1200px] '>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout
