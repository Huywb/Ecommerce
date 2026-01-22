import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../components/HeaderAdmin'
import SiderBarAdmin from '../components/SiderBarAdmin'
import AddProductForm from '../components/products/AddProductForm'
import AddCategory from '../components/products/AddCategory'
import AddUserForm from '../components/users/AddUserForm'
import AddLogoForm from '../components/logo/AddLogoForm'
import AddBannerForm from '../components/banners/AddBannerForm'

const LayoutAdmin = () => {
  const [hideSiderBar, setHideSiderBar] = useState(false)
  const [showAddProductForm, setShowAddProductForm] = useState(false)
  const [showAddCategoryForm, setShowAddCategoryForm] = useState(false)
  const [showAddUserForm, setShowAddUserForm] = useState(false)
  const [showAddLogoForm, setShowAddLogoForm] = useState(false)
  const [showAddBannerForm, setShowAddBannerForm] = useState(false)

  const [categoryInfo, setCategoryInfo] = useState(null)
  const [productInfo, setProductInfo] = useState(null)
  const [userInfo, setUserInfo] = useState(null)

  const EditProductById = (item)=>{
    setProductInfo(item)
    setShowAddProductForm(true)
  }

  const EditCategoryById = (item)=>{
    setCategoryInfo(item)
    setShowAddCategoryForm(true)
  }

  const EditUserById = (item)=>{
    console.log(item)
    setUserInfo(item)
    setShowAddUserForm(true)
  }


  const ToggleShowAddProductForm = (value) => {
    if(value == 'product'){
      setShowAddProductForm(true)
    }else if(value == 'category'){
      setShowAddCategoryForm(true)
    }else{
      setShowAddProductForm(false)
      setShowAddCategoryForm(false)
      setCategoryInfo(null)
      setProductInfo(null)
    }
  }

  const ToggleShowAddUserForm = (value) => {
    if(value == 'user'){
      setShowAddUserForm(true)
    }else{
      setShowAddUserForm(false)
      setUserInfo(null)
    }
  }

  const ToggleHideSiderBar = () => {
    setHideSiderBar(!hideSiderBar)
  }

  const ToggleShowAddForm = (value) => {
    if(value == 'banner'){
      setShowAddBannerForm(true)
    }else if(value == 'logo'){
      setShowAddLogoForm(true)
    }else{
      setShowAddBannerForm(false)
      setShowAddLogoForm(false)
      setUserInfo(null)
    }
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <section
        className={`fixed top-0 left-0 h-screen overflow-y-auto no-scrollbar bg-[#171717] transition-all duration-300 ease-in-out z-30
          ${hideSiderBar ? 'w-[50px]' : 'w-64'}
        `}
      >
        <SiderBarAdmin hideSiderBar={hideSiderBar} ToggleShowAddForm={ToggleShowAddForm} ToggleShowAddProductForm={ToggleShowAddProductForm} ToggleShowAddUserForm={ToggleShowAddUserForm} />
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
          <Outlet context={{EditCategoryById,EditProductById,EditUserById}} />

          <AddProductForm productInfo={productInfo} showAddProductForm={showAddProductForm} ToggleShowAddProductForm={ToggleShowAddProductForm} />
          <AddCategory showAddCategoryForm={showAddCategoryForm} ToggleShowAddProductForm={ToggleShowAddProductForm} />
          <AddUserForm InfoUser={userInfo} showAddUserForm={showAddUserForm} ToggleShowAddUserForm={ToggleShowAddUserForm} />
          <AddLogoForm showAddLogoForm={showAddLogoForm} ToggleShowAddLogoForm={ToggleShowAddForm} />
          <AddBannerForm showAddBannerForm={showAddBannerForm} ToggleShowAddBannerForm={ToggleShowAddForm} />
        </div>
      </section>
    </div>
  )
}

export default LayoutAdmin
