import { useState } from 'react'
import Banner from '../components/Banner'
import MenuItem from '../components/MenuItem'
import ListProducts from '../components/product/ListProducts'
import { ProductList } from '../contants/Data'

const Home = () => {

  const productList = ProductList.filter(item=>item.id<9)
  return (
    <main className='flex flex-col gap-10'>
        <section>
          <Banner/>
        </section>
        <section>
          <MenuItem />
        </section>
        <section>
          <ListProducts productList={productList} />
        </section>
    </main>
  )
}

export default Home
