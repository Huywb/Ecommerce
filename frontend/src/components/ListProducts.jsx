import { useEffect, useState } from 'react'
import { ProductList } from '../contants/Data'
import ProductCard from './ProductCard'
import { useLocation } from 'react-router-dom'

const ListProducts = ({productList}) => {
  const pathname = useLocation()

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4'>
        {
            productList.map((item,index)=>( 
                <ProductCard item={item}/>
            ))
        }
    </div>
  )
}

export default ListProducts
