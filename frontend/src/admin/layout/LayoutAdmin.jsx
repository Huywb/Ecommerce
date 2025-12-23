import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../components/HeaderAdmin'
import SiderBarAdmin from '../components/SiderBarAdmin'
import AddProductForm from '../components/products/AddProductForm'
import AddCategory from '../components/products/AddCategory'
import AddUserForm from '../components/users/AddUserForm'

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

  const ToggleShowAddUserForm = (value) => {
    if(value == 'user'){
      setShowAddUserForm(!showAddUserForm)
    }else{
      setShowAddUserForm(false)
    }
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

          <AddProductForm showAddProductForm={showAddProductForm} ToggleShowAddProductForm={ToggleShowAddProductForm} />
          <AddCategory showAddCategoryForm={showAddCategoryForm} ToggleShowAddProductForm={ToggleShowAddProductForm} />
          <AddUserForm showAddUserForm={showAddUserForm} ToggleShowAddUserForm={ToggleShowAddUserForm} />
        </div>
      </section>
    </div>
  )
}

export default LayoutAdmin
