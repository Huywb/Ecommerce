import React from 'react'
import Banner from '../components/Banner'
import MenuItem from '../components/MenuItem'
import ListProducts from '../components/ListProducts'

const Home = () => {
  return (
    <main className='flex flex-col gap-10'>
        <section>
          <Banner/>
        </section>
        <section>
          <MenuItem />
        </section>
        <section>
          <ListProducts />
        </section>
    </main>
  )
}

export default Home
