import { FaArrowRight } from "react-icons/fa";

const InfoCart = ({handleChangeStatus}) => {

 const handleContinue = ()=>{
        handleChangeStatus(3)
    }
  return (
    <div className='flex flex-col gap-2 w-full border border-gray-200  p-6'>
        <div className='flex flex-col gap-2'>
            <label>Name : </label>
            <input required placeholder='Pham Huy' type="text" className='outline-none border border-gray-300 rounded-md p-2' />
        </div>
        <div className='flex flex-col gap-2'>
            <label>Email : </label>
            <input required placeholder='Huypham@gmail.com' type="email" className='outline-none border border-gray-300 rounded-md p-2' />
        </div>
        <div className='flex flex-col gap-2'>
            <label>Phone : </label>
            <input required placeholder='123456789' type="number" className='outline-none border border-gray-300 rounded-md p-2' />
        </div>
        <div className='flex flex-col gap-2'>
            <label>Address : </label>
            <input required placeholder='123, Ngu Hanh Son' type="text" className='outline-none border border-gray-300 rounded-md p-2' />
        </div>
        <div className='flex flex-col gap-2'>
            <label>City : </label>
            <input required placeholder='Da nang' type="text" className='outline-none border border-gray-300 rounded-md p-2' />
        </div>
        <button onClick={handleContinue} className=' mt-2 w-full duration-300 transition-all cursor-pointer flex gap-2 items-center justify-center p-2 bg-gray-800 rounded-md hover:bg-gray-900 text-white'>
            Continue <FaArrowRight />
        </button>
    </div>
  )
}

export default InfoCart
