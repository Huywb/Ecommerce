import { FaArrowRight } from "react-icons/fa";
import { ProductCart } from "../../contants/Data";
import { useState } from "react";
             
const CartDetails = ({handleChangeStatus}) => {
    let discount = -10
    let fee = 10
    let Subtotal = ProductCart.reduce((sum,item)=>(sum += item.price * item.quantity),0)

    const [hideButton,setHideButton] = useState(true)

    const handleContinue = ()=>{
        handleChangeStatus(2)
        setHideButton(false)
    }

  return (
    <div className='flex flex-col gap-2 border border-gray-200 shadow-xl w-full p-4 pl-8'>
        <h1 className="font-bold text-xl">Cart Details</h1>
        <div className='flex flex-col gap-2 pt-4'>
            <div className='flex gap-4 justify-between' >
                <span className="text-gray-600">Subtotal</span>
                <p className="font-bold">${Subtotal}</p>
            </div>
            <div className='flex gap-2 justify-between'>
                <span className="text-gray-600">Discount</span>
                <p className="font-bold">${discount}</p>
            </div>
            <div className='flex gap-2 justify-between '>
                <span className="text-gray-600">Shipping Fee</span>
                <p className="font-bold">${fee}</p>
            </div>
        </div>

        <span className="border-b-2 border-gray-200 pt-2"></span>
        
        <div className='flex gap-2 py-4 justify-between font-bold'>
            <span>Total</span>
            <p>{Subtotal + fee + discount}</p>
        </div>

        {
            
        hideButton && (       
            <button onClick={handleContinue} className='w-full duration-300 transition-all cursor-pointer flex gap-2 items-center justify-center p-2 bg-gray-800 rounded-md hover:bg-gray-900 text-white'>
                Continue <FaArrowRight />
            </button>
            )
        }
    </div>
  )
}

export default CartDetails
