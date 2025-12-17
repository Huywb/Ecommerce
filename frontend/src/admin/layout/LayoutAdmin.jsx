import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../components/HeaderAdmin'
import SiderBarAdmin from '../components/SiderBarAdmin'

const LayoutAdmin = () => {
    const [hideSiderBar,setHideSiderBar] = useState(false)
    const ToggleHideSiderBar = ()=>{
        setHideSiderBar(!hideSiderBar)
    }
    console.log(hideSiderBar)
  return (
    <div className='flex gap-4 bg-[#0b0b0b] h-screen'>
        <section className={`flex w-64 bg-[#171717] transition-all duration-300 ease-in-out ${hideSiderBar ? 'mx-4 w-[50px] overflow-hidden' : ''}`}>
            <SiderBarAdmin  hideSiderBar={hideSiderBar}/>
        </section>
        <section className={`flex w-5/6 p-4  ${hideSiderBar ? 'w-full' : ''}`}>
            <div className='flex flex-col w-full'>
                <HeaderAdmin ToggleHideSiderBar={ToggleHideSiderBar} hideSiderBar={hideSiderBar} />
                <Outlet></Outlet>
            </div>
        </section>
    </div>
  )
}

export default LayoutAdmin
