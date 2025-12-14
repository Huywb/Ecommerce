import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ProductList } from '../../contants/Data'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import stripe from '../../../public/stripe.png'
import klarna from '../../../public/klarna.png'
import cards from '../../../public/cards.png'

const ProductDetail = () => {
  const {id} = useParams()
  const [product,setProduct] = useState()

  const [productInfo,setProductInfo] = useState()

  
  const handleSubmit = ()=>{
    if(!productInfo.size || !productInfo.color ){
      alert("All filed are required")
    }else{
      alert("Add to cart success")
    }
  }

  useEffect(()=>{
    
    let data = ProductList.find(item=>item.id == id)
    setProduct(data)
    if(data){
      setProductInfo({
        id: id,
        name: data.name,
        description: data.description,
        price: data.price,
        size: '',
        color: '',
        quantity: 1,
      })
    }
  },[])
  if(!product){
    return
  }
  return (
    <div className='flex items-center justify-center w-full'>
        <div className='w-[90%] mt-10 flex  '>
          <div className='flex w-1/2'>
            <img src={product.image} alt="product image"  className='w-full h-full '/>
          </div>
          <div className='flex w-1/2 pl-10 flex-col gap-4'>
            <h2 className='font-bold text-2xl'>{product.name}</h2>
            <p className='text-gray-500 min-h-10 overflow-hidden'>{product.description}</p>
            <span className='font-bold text-xl'>${product.price}</span>
            <div className='flex flex-col gap-2'>
              <p className='text-gray-500'>Size :</p>
              <div className='flex gap-2'>
                {
                  product.sizes.map((item,index)=>(
                    <div onClick={()=>setProductInfo((prev)=>({...prev,size: item}))} key={index} className={`cursor-pointer w-8 h-8 flex items-center justify-center border border-gray-600 ${productInfo.size == item ? 'bg-black text-white' : ''}`}>
                      {item}
                    </div>
                  ))
                }
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <p>Color : </p>
              <div className='flex gap-2'>
                {
                  product.colors.map((item,index)=>(
                    <div key={index} onClick={()=>setProductInfo((prev)=>({...prev,color: item}))} className={`w-7 h-7 cursor-pointer ${productInfo.color == item ? 'ring-2 ring-gray-800' : ''}`} style={{ backgroundColor: item.toLowerCase() }}>

                    </div>
                  ))
                }
              </div>
            </div>

            <div className='flex flex-col gap-2'>
                <p>Quantity : </p>
                <div className='flex gap-4 items-center'>
                  <FaMinus onClick={()=>setProductInfo((prev)=>({...prev,quantity: productInfo.quantity-1}))} className={`cursor-pointer `}/>
                  <p>{productInfo.quantity}</p>
                  <FaPlus onClick={()=>setProductInfo((prev)=>({...prev,quantity: productInfo.quantity+1}))} className='cursor-pointer'/>
                </div>
            </div>

            <button onClick={handleSubmit} className='py-2 flex gap-2 items-center bg-gray-800 text-white hover:bg-gray-700 transition-all duration-300 rounded-md justify-center cursor-pointer'>
              <FaPlus /> 
              <span>Add to cart</span>
            </button>

            <button className='py-2 flex gap-2 items-center   hover:bg-gray-600 hover:text-white transition-all duration-300 rounded-md justify-center cursor-pointer'>
              <IoCartOutline /> 
              <span>Buy this item</span>
            </button>

            <div className='flex gap-2'>
                <img src={stripe} alt="card payment" className='w-18 h-8 rounded-md' />
                <img src={klarna} alt="card payment" className='w-18 h-8 rounded-md'/>
                <img src={cards} alt="card payment" className='w-18 h-8 rounded-md'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductDetail
