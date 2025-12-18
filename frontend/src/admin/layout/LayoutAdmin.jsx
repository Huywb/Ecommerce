import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../components/HeaderAdmin'
import SiderBarAdmin from '../components/SiderBarAdmin'

const LayoutAdmin = () => {
  const [hideSiderBar, setHideSiderBar] = useState(false)

  const ToggleHideSiderBar = () => {
    setHideSiderBar(!hideSiderBar)
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <section
        className={`fixed top-0 left-0 h-screen bg-[#171717] transition-all duration-300 ease-in-out z-50
          ${hideSiderBar ? 'w-[50px]' : 'w-64'}
        `}
      >
        <SiderBarAdmin hideSiderBar={hideSiderBar} />
      </section>

      <section
        className={`transition-all duration-300
          ${hideSiderBar ? 'ml-[50px]' : 'ml-64'}
        `}
      >
        <div className="flex flex-col min-h-screen p-4">
            <HeaderAdmin
            ToggleHideSiderBar={ToggleHideSiderBar}
            hideSiderBar={hideSiderBar}
          />
          <Outlet />
        </div>
      </section>
    </div>
  )
}

export default LayoutAdmin
