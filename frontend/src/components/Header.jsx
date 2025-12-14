import logo from '../../public/logo.png'
import Search from './Search'
import { IoHomeOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { ProductCart } from '../contants/Data';
const Header = () => {
  return (
    <header className='flex items-center justify-between w-full'>
        <Link to={'/'} className='flex items-center justify-center py-4 '>
            <img src={logo} alt="logo image" className='w-10' />
            <h2 className='text-xl font-bold'> TrendShop</h2>
        </Link>
        <div className='flex items-center gap-10 justify-between'>
            <div className='flex items-center gap-8'>
                <Link to={'/'}>
                  <IoHomeOutline size={25} className="transition-all duration-300  hover:cursor-pointer hover:translate-y-[-3px]"/>
                </Link>
                <IoNotificationsOutline size={25} className="transition-all duration-300  hover:cursor-pointer hover:translate-y-[-3px]"/>
                <Link to={'/cart'} className='relative transition-all duration-300  hover:cursor-pointer hover:translate-y-[-3px]'>
                  <IoCartOutline size={25} />
                  <span className='rounded-full bg-red-600 absolute px-2 top-[-20px] right-[-10px] text-white'>{ProductCart.length}</span>
                </Link>
            </div>
            <Link to={'/login'} className='p-2 bg-yellow-300 cursor-pointer hover:bg-yellow-400 duration-300 transition-all rounded-md px-2'>Sign in</Link>
        </div>
    </header>
  )
}

export default Header
