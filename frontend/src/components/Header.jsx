import logo from '../../public/logo.png'
import { IoHomeOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { ProductCart } from '../contants/Data';
import { useDispatch, useSelector } from 'react-redux';
import { CgProfile } from "react-icons/cg";
import { useState } from 'react';
import { ImProfile } from "react-icons/im";
import { GrUnorderedList } from "react-icons/gr";
import { CiLogout } from "react-icons/ci";
import { logout } from '../redux-toolkit/userSlice';
const Header = () => {
    const [showProfile, setShowProfile] = useState(false)
    const selected = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleLogout = async()=>{
        dispatch(logout())
    }
    return (
        <header className='flex items-center justify-between w-full'>
            <Link to={'/'} className='flex items-center justify-center py-4 '>
                <img src={logo} alt="logo image" className='w-10' />
                <h2 className='text-xl font-bold'> TrendShop</h2>
            </Link>
            <div className='flex items-center gap-10 justify-between'>
                <div className='flex items-center gap-8'>
                    <Link to={'/'}>
                        <IoHomeOutline size={25} className="transition-all duration-300  hover:cursor-pointer hover:translate-y-[-3px]" />
                    </Link>
                    <IoNotificationsOutline size={25} className="transition-all duration-300  hover:cursor-pointer hover:translate-y-[-3px]" />
                    <Link to={'/cart'} className='relative transition-all duration-300  hover:cursor-pointer hover:translate-y-[-3px]'>
                        <IoCartOutline size={25} />
                        <span className='rounded-full bg-red-600 absolute px-2 top-[-20px] right-[-10px] text-white'>{ProductCart.length}</span>
                    </Link>
                </div>
                {
                    selected.name ? 
                        <div className='relative'>
                            <div onClick={() => setShowProfile(!showProfile)} className='flex gap-2 items-center bg-yellow-400 p-2 rounded-lg cursor-pointer hover:bg-yellow-200 duration-300 transition-all'>
                                <h2 className='text-base'>{selected.name}</h2>
                                <CgProfile size={25} />
                            </div>
                            {
                                showProfile && 
                                <div className='absolute mt-2 flex flex-col gap-2 min-w-[140px] z-30 bg-gray-300'>
                                    <Link to={'/profile'} className='hover:bg-gray-100 flex gap-2 items-center p-2 transition-all duration-300'>
                                        <ImProfile />
                                        Profile
                                    </Link>
                                    <Link to={'/order'} className='hover:bg-gray-100 flex gap-2 items-center p-2 transition-all duration-300' >
                                        <GrUnorderedList />
                                        Order History
                                    </Link>
                                    <Link to={'/'} onClick={()=>handleLogout()} className='hover:bg-gray-100 flex gap-2 items-center p-2 transition-all duration-300'>
                                        <CiLogout />
                                        Logout
                                    </Link>
                                </div>
                            }
                            
                        </div> :
                        <Link to={'/login'} className='p-2 bg-yellow-300 cursor-pointer hover:bg-yellow-400 duration-300 transition-all rounded-md px-2'>Sign in</Link>
                }

            </div>
        </header>
    )
}

export default Header
