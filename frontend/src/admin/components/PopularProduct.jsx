import { PopularProducts } from '../contants/DataAdmin'

const PopularProduct = () => {
  return (
    <div className="w-full ">
        <h3 className="text-white font-semibold p-2">
            Popular Products   
        </h3>
        <div className="mt-4 flex flex-col gap-2 max-h-80 overflow-scroll no-scrollbar text-white">
            {
                PopularProducts.map((item,index)=>(
                    <div key={index} className='flex gap-2 max-h-30 justify-between p-2 py-2 border border-gray-600 rounded-lg'>
                        <img src={item.image} alt="image user" className='w-1/5 p-1 rounded-lg items-center  '/>
                        <div className='flex flex-col w-3/5 justify-center'>
                            <p className=' px-2 text-gray-300  rounded-lg text-sm'>{item.name}</p>
                        </div>
                        <span className='w-1/5 flex items-center justify-center'>${item.totalPrice}</span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default PopularProduct
