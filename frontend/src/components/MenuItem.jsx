import React from 'react'
import { MenuList } from '../contants/Data'
import { Link, useLocation } from 'react-router-dom'

const MenuItem = ({changeCategory}) => {
    const pathname = useLocation()
    console.log(pathname.pathname.includes())
  return (
    <div className='bg-gray-300 p-2 grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 w-full place-items-center'>
      {
        MenuList.map((item,index)=>(
            <Link onClick={()=>changeCategory(item.name)} to={`/products/${item.name}`} key={index} className={` flex gap-2 items-center w-full  justify-center ${pathname.pathname.includes(item.name)  ? 'font-semibold bg-gray-100' : ''}`}>
                    {item.icon}
                    <span >{item.name}</span>
            </Link>
            
        ))
      }
    </div>
  )
}

export default MenuItem
