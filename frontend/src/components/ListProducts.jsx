import { ProductList } from '../contants/Data'
import ProductCard from './ProductCard'

const ListProducts = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-4'>
        {
            ProductList.map((item,index)=>(
                <ProductCard item={item}/>
            ))
        }
    </div>
  )
}

export default ListProducts
