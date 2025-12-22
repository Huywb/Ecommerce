import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../components/HeaderAdmin'
import SiderBarAdmin from '../components/SiderBarAdmin'

const LayoutAdmin = () => {
  const [hideSiderBar, setHideSiderBar] = useState(false)
  const [showAddProductForm, setShowAddProductForm] = useState(false)
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false)
  const [showAddUserForm, setShowAddUserForm] = useState(false)

  const ToggleShowAddProductForm = (value) => {
    if(value == 'product'){
      setShowAddProductForm(!showAddProductForm)
    }else if(value == 'category'){
      setShowAddCategoryForm(!showAddCategoryForm)
    }else{
      setShowAddProductForm(false)
      setShowAddCategoryForm(false)
    }
  }

  const ToggleShowAddUserForm = () => {
    setShowAddUserForm(!showAddUserForm)
  }

  const ToggleHideSiderBar = () => {
    setHideSiderBar(!hideSiderBar)
  }

  console.log(showAddProductForm);
  console.log(showAddCategoryForm);
  console.log(showAddUserForm);

  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <section
        className={`fixed top-0 left-0 h-screen bg-[#171717] transition-all duration-300 ease-in-out z-50
          ${hideSiderBar ? 'w-[50px]' : 'w-64'}
        `}
      >
        <SiderBarAdmin hideSiderBar={hideSiderBar} ToggleShowAddProductForm={ToggleShowAddProductForm} ToggleShowAddUserForm={ToggleShowAddUserForm} />
      </section>

      <section
        className={`transition-all duration-300
          ${hideSiderBar ? 'ml-[50px]' : 'ml-64'}
        `}
      >
        <div className="relative flex flex-col min-h-screen p-4">
          <HeaderAdmin
            ToggleHideSiderBar={ToggleHideSiderBar}
            hideSiderBar={hideSiderBar}
          />
          <Outlet />
          {
            <div className={`fixed inset-0 z-50 flex text-white transition-opacity duration-300 ${showAddProductForm ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <div onClick={ToggleShowAddProductForm} className="absolute inset-0 bg-black/50"/>
              <div className={`ml-auto h-full w-[400px] bg-[#0b0b0b] border-l border-gray-800 transform transition-transform duration-300 ease-in-out
                ${showAddProductForm ? 'translate-x-0' : 'translate-x-full'}`}
              >
                <div className="flex justify-between items-center p-4">
                  <h2 className="text-xl font-semibold">Add Category</h2>
                  <button
                    className="p-2 bg-red-500 text-white rounded-lg"
                    onClick={() => ToggleShowAddProductForm('')}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      </section>
    </div>
  )
}

export default LayoutAdmin
