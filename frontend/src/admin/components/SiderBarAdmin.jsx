import { Link } from 'react-router-dom'
import logo from '../../../public/register.png'
import { Application, Image, Order, Product, User } from '../contants/DataAdmin'
import { FaPlus } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";

const SiderBarAdmin = ({hideSiderBar,ToggleShowAddProductForm,ToggleShowAddUserForm, ToggleShowAddForm}) => {
    
    const SiderBarToggleShowAddProductForm = (value) => {
        ToggleShowAddProductForm(value)
    }
    const SiderBarToggleShowAddUserForm = (value) => {
        ToggleShowAddUserForm(value)
    }
  
    return (
    <div className={`h-full flex flex-col p-4 gap-5  w-full text-white justify-between text-sm `}>
        <div className={`flex flex-col gap-2 ${hideSiderBar ? 'gap-5 text-xl' : ''}`}>
            <div className='flex gap-2 items-center'>
                <img src={logo} alt="logo user" className='rounded-full w-8' />
                {hideSiderBar ? '' : <h2>Name</h2>}
                
            </div>
            <span className='border border-gray-700'></span>

            <div className='flex flex-col gap-1 '>
                {hideSiderBar ? '' : <span className='text-[#959595]'>Application</span>}
                
                {
                    Application.map((item,index)=>(
                        <Link to={item.url} key={index} className='flex py-2 hover:bg-[#262626] duration-300 transition-all rounded-lg items-center gap-2'>
                            {item.icon}
                            {hideSiderBar ? '' : <span>{item.name}</span>}
                        </Link>
                    ))
                }
            </div>

            <div className='flex flex-col gap-1 '>
                    
                <div className='flex justify-between items-center'>
                {hideSiderBar ? '' : <>
                <span className='text-[#959595]'>Products</span>
                <FaPlus className='cursor-pointer'></FaPlus>
                </>
                }
                </div>
                {
                    Product.map((item,index)=>(
                        <Link to={item.url} key={index} onClick={() => SiderBarToggleShowAddProductForm(item.type)} className='flex py-2 hover:bg-[#262626] duration-300 transition-all rounded-lg items-center gap-2'>
                            {item.icon}
                            {hideSiderBar ? '' : <span>{item.name}</span>}
                        </Link>
                    ))
                }
            </div>
            

            <div className='flex flex-col gap-1 '>
                <div className='flex justify-between items-center'>
                {hideSiderBar ? '' : <>
                <span className='text-[#959595]'>Users</span>
                <FaPlus className='cursor-pointer'></FaPlus>
                </>
                }
                </div>
                {
                    User.map((item,index)=>(
                        <Link to={item.url} key={index} onClick={()=>SiderBarToggleShowAddUserForm(item.type)} className='flex py-2 hover:bg-[#262626] duration-300 transition-all rounded-lg items-center gap-2'>
                            {item.icon}
                            {hideSiderBar ? '' : <span>{item.name}</span>}
                        </Link>
                    ))
                }
            </div>

            <div className='flex flex-col gap-1 '>
                <div className='flex justify-between items-center'>
                {hideSiderBar ? '' : <>
                <span className='text-[#959595]'>Orders / Payment</span>
                <FaPlus className='cursor-pointer'></FaPlus>
                </>
                }
                </div>
                {
                    Order.map((item,index)=>(
                        <Link to={item.url} key={index} className='flex py-2 hover:bg-[#262626] duration-300 transition-all rounded-lg items-center gap-2'>
                            {item.icon}
                            {hideSiderBar ? '' : <span>{item.name}</span>}
                        </Link>
                    ))
                }
            </div>

            <div className='flex flex-col gap-1 '>
                <div className='flex justify-between items-center'>
                {hideSiderBar ? '' : <>
                <span className='text-[#959595]'>Banner / Logo</span>
                <FaPlus className='cursor-pointer'></FaPlus>
                </>
                }
                </div>
                {
                    Image.map((item,index)=>(
                        <Link to={item.url} key={index} onClick={()=>ToggleShowAddForm(item.type)} className='flex py-2 hover:bg-[#262626] duration-300 transition-all rounded-lg items-center gap-2'>
                            {item.icon}
                            {hideSiderBar ? '' : <span>{item.name}</span>}
                        </Link>
                    ))
                }
            </div>
        </div>
        <div className='flex justify-between items-center'>
            {hideSiderBar ? '' :
            <div className='flex gap-2'>
                <GoPerson size={20}/>
                <h2>HuyPham@gmail.com</h2>
            </div>
            }
            <IoIosLogOut size={20} className='cursor-pointer hover:translate-y-[-5px] duration-300 transition-all'/>
        </div>
    </div>
  )
}

export default SiderBarAdmin
