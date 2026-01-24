import { useState } from 'react';
import { ProductsAdmin, UsersAdmin } from '../contants/DataAdmin'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import { AxiosHttp } from '../../libs/BaseAxios';
import { toast } from 'react-toastify';
const AdminBanner = () => {
  const [page, setPage] = useState(1);
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    const fetchBanner = async () => {
      const res = await AxiosHttp.get("/banner/all")
      const data = await res.data
      setBanner(data.data)
    }
    fetchBanner()
  }, [])

  const handleDeleteProduct = async (index) => {
    const isConfirm = window.confirm("Are you sure deleted this product?")
    if (!isConfirm) return
    try {
      const res = await AxiosHttp.delete(`/banner/delete/${index}`, {})
      if (res.data.status) {
        toast.success("Delete product successfully")
        setBanner(prev => prev.filter(item => item._id !== index))
      } else {
        toast.error("Delete product failed")
      }
    } catch (error) {
      console.log(error)
      toast.error("Delete product failed")
    }

  }

  const handleActiveBanner = async (index, status) => {
    setBanner(prev =>
      prev.map(item =>
        item._id === index
          ? { ...item, active: !status }
          : item
      )
    )
    try {
      const res = await AxiosHttp.patch(`/banner/active/${index}`, { active: !status })

      if (res.data.status) {
        toast.success("Update banner successfully")
      } else {
        toast.error("Update banner failed")
      }
    } catch (error) {
      setBanner(prev =>
        prev.map(item =>
          item._id !== index
            ? { ...item, active: !status }
            : item
        )
      )
      console.log(error)
      toast.error("Update banner failed")
    }
  }

  let productPerPage = 4
  let totalPage = Math.ceil(banner.length / productPerPage)
  let start = (page - 1) * productPerPage;
  let end = start + productPerPage;
  let currentProducts = banner.slice(start, end);
  return (
    <div className='flex flex-col px-6  gap-2 text-white mt-4 text-xs md:text-sm'>
      <h1 className='text-xl font-semibold bg-[#262626] rounded-lg p-2'>All Banners</h1>
      <div className='flex flex-col gap-2 border rounded-lg border-gray-800'>
        <div className='flex w-full  p-2 font-semibold'>
          <div className='w-1/6 ml-10 '>
            <h2>ID</h2>
          </div>
          <div className='w-2/6 '>
            <h2>Image</h2>
          </div>
          <div className='w-2/6 '>
            <h2>Active</h2>
          </div>
          <div className='w-1/6 '>
            <h2>Actions</h2>
          </div>
        </div>
        {
          currentProducts?.map((item, index) => (
            <div key={item._id} className='flex gap-4 w-full border-t border-gray-800 p-2 items-center justify-center'>
              <div className='w-1/6 ml-10'>
                <span>{index + 1}</span>
              </div>
              <div className='w-2/6 '>
                <img src={item.image?.url} alt="banner" className="max-w-40 max-h-30 object-cover" />
              </div>
              <div className='w-2/6 cursor-pointer' onClick={() => handleActiveBanner(item._id, item.active)} >
                <div className={`relative w-[60px] h-8 ring-2 ring-blue-600 transition-colors duration-300 rounded-full ${item.active ? 'bg-green-500' : 'bg-red-500'}`}>
                  <span className={`absolute top-0 left-0 w-8 h-8 bg-black rounded-full cursor-pointer transition-transform duration-300 ease-out ${item.active ? 'translate-x-[28px]' : 'translate-x-0'}`}></span>
                </div>
              </div>
              <div className='w-1/6 '>
                <MdDeleteForever onClick={() => handleDeleteProduct(item._id)} size={24} className='text-red-500 transition-all duration-300 opacity-50 cursor-pointer hover:opacity-95 ' />
              </div>
            </div>
          ))
        }
      </div>

      <div className='flex w-full mt-2 justify-center gap-2'>
        {
          page > 1 &&
          <button onClick={() => setPage(page - 1)} className={`px-2 border rounded-md cursor-pointer ${page == page - 1 ? 'bg-[#262626] text-white' : ''}`}>{page - 1}</button>
        }
        <button onClick={() => setPage(page)} className={`px-2 border rounded-md cursor-pointer ${page == page ? 'bg-[#262626] text-white' : ''}`}>{page}</button>
        {
          page < totalPage &&
          <button onClick={() => setPage(page + 1)} className={`px-2 border rounded-md cursor-pointer ${page == page + 1 ? 'bg-[#262626] text-white' : ''}`}>{page + 1}</button>
        }
      </div>
    </div>
  )
}

export default AdminBanner
