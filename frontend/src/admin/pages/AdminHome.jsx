import React from 'react'
import TotalChart from '../components/charts/TotalChart'
import CircleChart from '../components/charts/CircleChart'
import { TopOrderData } from '../contants/DataAdmin'
import TodoList from '../components/TodoList'
import AreaChart from '../components/charts/AreaChart'
import PopularProduct from '../components/PopularProduct'

const AdminHome = () => {
  return (
    <div className='mt-2 flex flex-col gap-4' >
      <div className='flex gap-4 w-full flex-col lg:flex-row '>
        <section className='p-2 rounded-md bg-[#171717] w-full lg:w-4/6 '>
          <TotalChart />
        </section>
        <section className='p-2 rounded-md bg-[#171717] w-full lg:w-2/6'>
          <div className='w-full flex flex-col gap-2 text-white p-2 pb-2'>
            <h3>Latest Transactions</h3>
            {
              TopOrderData.map((item,index)=>(
                <div key={index} className='flex gap-2 max-h-30 justify-between p-2 py-2 border border-gray-600 rounded-lg'>
                  <img src={item.image} alt="image user" className='w-1/5 p-1 rounded-lg items-center  '/>
                  <div className='flex flex-col w-3/5 justify-center'>
                    <span className='font-semibold'>Order Payment</span>
                    <p className='bg-gray-600 w-fit px-2 text-gray-300  rounded-lg text-sm'>{item.name}</p>
                  </div>
                  <span className='w-1/5 flex items-center justify-center'>${item.totalPrice}</span>
                </div>
              ))
            }
          </div>
        </section>
        <section className='p-2 rounded-md bg-[#171717] w-full lg:w-2/6'>
          <CircleChart />
        </section>
      </div>

      <div className='flex gap-4 w-full flex-col lg:flex-row '>
        <section className='p-2 rounded-md bg-[#171717] w-full lg:w-2/6 '>
            <TodoList />
        </section>
        <section className='p-2 rounded-md bg-[#171717] w-full lg:w-4/6 '>
          <AreaChart />
        </section>
        <section className='p-2 rounded-md bg-[#171717] w-full lg:w-2/6 '>
          <PopularProduct />
        </section>
      </div>
    </div>
  )
}

export default AdminHome
