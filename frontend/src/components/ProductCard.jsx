import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import ProductDetail from "./ProductDetail";
const ProductCard = (item) => {
    const [selected,setSelected] = useState(null)

    return (
    <div className='rounded-lg flex flex-col gap-2 p-2 shadow-lg hover:shadow-2xl  hover:translate-y-[-5px] transition-all duration-300'>
        <img src={item.item.image} alt="product image" className='cursor-pointer'/>
        <h2 className='font-bold text-xl py-2'>{item.item.name}</h2>
        <p className='text-gray-600 text-[15px] min-h-20'>{item.item.description}</p>
        <div className='flex'>
            <div className='flex flex-col w-1/3 gap-2'>
                <span className="">Size</span>
                <select name="size" className='w-1/2 outline-1 outline-gray-500 rounded-md bg-black text-white'>
                    {
                        item.item.sizes.map((item,index)=>(
                            <option value={item} key={index} className="text-center bg-black text-white curpo">{item}</option>
                        ))
                    }
                </select>
            </div>
            <div className='flex w-2/3 flex-col gap-2'>
                <span>Color</span>
                <div className='flex gap-2'>
                {
                    item.item.colors.map((item,index)=>(
                        <div onClick={() => setSelected(item)} className={`rounded-full w-5 h-5 cursor-pointer border-2 ${
                        selected === item ? "ring-2 ring-gray-600" : ""
                        }`} style={{ backgroundColor: item.toLowerCase() }}></div>
                    ))
                }
                </div>
            </div>
        </div>
        
        <div className='flex py-2 justify-between '>
            <span className='font-bold text-xl'>$ {item.item.price}</span>
            <div className="hover:bg-black hover:text-white transition-all duration-300 hover:cursor-pointer  flex gap-2 mr-4 border border-gray-400 shadow-md rounded-md px-4 items-center ">
                <IoCartOutline></IoCartOutline>
                <button className='font-semibold hover:cursor-pointer'>Add to Cart</button>
            </div>
        </div>
        
    </div>
  )
}

export default ProductCard
