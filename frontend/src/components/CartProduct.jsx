import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { ProductCart } from '../contants/Data';
const CartProduct = () => {
  return (
    <div className='flex flex-col gap-10 w-full border border-gray-200  p-2'>
        {
            ProductCart.map((item,index)=>(
                <div key={index} className='w-full flex gap-10 justify-between shadow-xl'>
                    <img src={item.image} alt="product image" className='w-30 flex-1' />
                    <div className='flex flex-col gap-2 flex-3'>
                        <div className='flex flex-col gap-1'>
                            <h3 className='font-bold text-md'>{item.name}</h3>
                            <span className='text-gray-500 text-sm'>Quantity : {item.quantity}</span>
                            <span className='text-gray-500 text-sm'>Size : {item.size}</span>
                            <span className='text-gray-500 text-sm'>Color : {item.color}</span>
                        </div>
                        <span className='font-bold text-md'>${item.price}</span>
                    </div>

                    <button className='p-10 '>
                        <RiDeleteBin5Line className='bg-red-300 text-red-500 cursor-pointer hover:bg-red-400 hover:outline-red-400 hover:text-red-600 transition-all duration-300 outline-red-300 outline-10 rounded-full' />
                    </button>
                </div>
            ))
        }
        
    </div>
  )
}

export default CartProduct
