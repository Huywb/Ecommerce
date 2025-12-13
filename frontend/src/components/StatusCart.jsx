import React from 'react'
import { CartStatus } from '../contants/Data'

const StatusCart = ({status}) => {
  console.log(status)
  return (
    <div className='flex flex-col py-4 gap-6 w-full items-center justify-center'>
      <h1 className='text-xl font-bold'>Your Shopping Cart</h1>
      <div className='flex justify-between w-[60%]'>
        {
          CartStatus.map((item,index)=>(
            <div key={index} className={`${status == item.id ? "" : "opacity-60"} flex-col flex gap-2 items-center justify-center`}>
              <div className='flex gap-2 items-center justify-center'>
                <span className='p-4 rounded-full w-5 h-5 bg-black text-white flex items-center justify-center'>{item.id}</span>
                <p className='hidden md:block'>{item.name}</p>
              </div>
                <span className='w-full h-[2px] bg-black '></span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default StatusCart
