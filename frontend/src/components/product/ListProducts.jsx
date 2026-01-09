import { useEffect, useState } from 'react'
import { ProductList } from '../../contants/Data'
import ProductCard from './ProductCard'
import { Link, useLocation } from 'react-router-dom'

const ListProducts = ({productList}) => {

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4'>
        {
            productList.map((item,index)=>( 
                  <div key={index}>
                  <ProductCard item={item}/>
                  </div>
            ))
        }
    </div>
  )
}

export default ListProducts
