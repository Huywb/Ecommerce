import React from 'react'
import TotalChart from '../components/charts/TotalChart'
import CircleChart from '../components/charts/CircleChart'

const AdminHome = () => {
  return (
    <div className='mt-2' >
      <div className='flex gap-4 w-full '>
        <section className=' p-2 rounded-md bg-[#171717] w-full '>
          <TotalChart />
        </section>
        <section className=' p-2 rounded-md bg-[#171717] w-full'>
          <CircleChart />
        </section>
      </div>
    </div>
  )
}

export default AdminHome
