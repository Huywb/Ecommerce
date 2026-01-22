import { useState } from 'react';
import { ProductsAdmin, UsersAdmin } from '../contants/DataAdmin'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import { AxiosHttp } from '../../libs/BaseAxios';
import { toast } from 'react-toastify';
const AdminCategories = () => {
  const [page, setPage] = useState(1);
  const [category,setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await AxiosHttp.get("/category/all")
      const data = await res.data
      setCategory(data.data)
    }
    fetchCategory()
  }, [])


  const handleDeleteProduct =async (index) => {
    const isConfirm = window.confirm("Are you sure deleted this product?")
    if (!isConfirm) return
    try {
      const res = await AxiosHttp.delete(`/category/delete/${index}`)
      if (res.data.status) {
        toast.success("Delete product successfully")
        window.location.reload()
      } else {
        toast.error("Delete product failed")
      }
    } catch (error) {
      console.log(error)
      toast.error("Delete product failed")
    }

  }


  let productPerPage = 6
  let totalPage = Math.ceil(category.length / productPerPage)
  let start = (page - 1) * productPerPage;
  let end = start + productPerPage;
  let currentProducts = category.slice(start, end);
  return (
    <div className='flex flex-col px-6  gap-2 text-white mt-4 text-xs md:text-sm'>
      <h1 className='text-xl font-semibold bg-[#262626] rounded-lg p-2'>All Categories</h1>
      <div className='flex flex-col gap-2 border rounded-lg border-gray-800'>
        <div className='flex w-full  p-2 font-semibold'>
          <div className='w-1/8 '>
            <h2>ID</h2>
          </div>
          <div className='w-6/8 '>
            <h2>Name</h2>
          </div>
          <div className='w-1/8 '>
            <h2>Actions</h2>
          </div>
        </div>
        {
          currentProducts?.map((item, index) => (
            <div key={index} className='flex gap-4 w-full border-t border-gray-800 p-2 items-center justify-center'>
              <div className='w-1/8 '>
                <span>{index + 1}</span>
              </div>
              <div className='w-6/8 '>
                <h2>{item.name}</h2>
              </div>
              <div className='w-1/8 flex '>
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

export default AdminCategories
