import logo from '../../public/logo.png'
import Search from './Search'
import { IoHomeOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
const Header = () => {
  return (
    <header className='flex items-center justify-between w-full'>
        <div className='flex items-center justify-center py-4 '>
            <img src={logo} alt="logo image" className='w-10' />
            <h2 className='text-xl font-bold'> TrendShop</h2>
        </div>
        <div className='flex items-center gap-4 justify-between'>
            <Search />
            <div className='flex items-center gap-4'>
                <IoHomeOutline size={20} className="transition-all duration-300  hover:cursor-pointer hover:translate-y-[-3px]"/>
                <IoNotificationsOutline size={20} className="transition-all duration-300  hover:cursor-pointer hover:translate-y-[-3px]"/>
                <div className='relative transition-all duration-300  hover:cursor-pointer hover:translate-y-[-3px]'>
                  <IoCartOutline size={20} />
                  <span className='rounded-full bg-red-600 absolute px-2 top-[-20px] right-[-10px]'>0</span>
                </div>
            </div>
            <button>Sign in</button>
        </div>
    </header>
  )
}

export default Header
