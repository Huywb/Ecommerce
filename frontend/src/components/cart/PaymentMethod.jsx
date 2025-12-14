import { FaArrowRight } from "react-icons/fa";
import stripe from '../../../public/stripe.png'
import klarna from '../../../public/klarna.png'
import cards from '../../../public/cards.png'

const PaymentMethod = () => {
  return (
    <div className='flex flex-col gap-2 w-full border border-gray-200  p-6'>
        <div className='flex flex-col gap-2'>
            <label>Name on Card : </label>
            <input required placeholder='Pham Huy' type="text" className='outline-none border border-gray-300 rounded-md p-2' />
        </div>
        <div className='flex flex-col gap-2'>
            <label>Card Number : </label>
            <input required placeholder='Pham Huy' type="phone" className='outline-none border border-gray-300 rounded-md p-2' />
        </div>
        <div className='flex justify-between'>
            <div className='flex flex-col gap-2'>
                <label>Expiration Date : </label>
                <input required placeholder='Pham Huy' type="date" className='outline-none border border-gray-300 rounded-md p-2' />
            </div>

            <div className='flex flex-col gap-2'>
                <label>CVV : </label>
                <input required placeholder='4444' type="phone" className='outline-none border border-gray-300 rounded-md p-2' />
            </div>
        </div>

        <div className='flex gap-2 py-4'>
            <img src={stripe} alt="card payment" className='w-18 h-8 rounded-md' />
            <img src={klarna} alt="card payment" className='w-18 h-8 rounded-md'/>
            <img src={cards} alt="card payment" className='w-18 h-8 rounded-md'/>
        </div>

        <button  className=' mt-2 w-full duration-300 transition-all cursor-pointer flex gap-2 items-center justify-center p-2 bg-gray-800 rounded-md hover:bg-gray-900 text-white'>
            Checkout <FaArrowRight />
        </button>
        
    </div>
  )
}

export default PaymentMethod
