import { useState } from 'react';
import { ProductsAdmin, UsersAdmin } from '../contants/DataAdmin'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useOutletContext } from 'react-router-dom';
import { useEffect } from 'react';
import { AxiosHttp } from '../../libs/BaseAxios';
import { toast } from 'react-toastify';
const AdminProducts = () => {

  const { EditProductById } = useOutletContext();
  const [productAdmin, setProductAdmin] = useState([])


  const totalStocks = (variants = []) => {
    return variants.reduce((sum, item) => {
      return sum + (item.stock || 0)
    }, 0)
  }

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await AxiosHttp.get("/product/all")
      const data = await res.data
      setProductAdmin(data.data)
    }
    fetchProduct()
  }, [])

  const handleEditProduct = (index) => {
    const data = productAdmin.filter(item=>item._id == index)
    console.log("Edit product data:", data);
    EditProductById(data);
  }
  const [page, setPage] = useState(1);

  const handleDeleteProduct =async (index) => {
    try {
      const res = await AxiosHttp.delete(`/product/delete/${index}`)
      if (res.data.status) {
        alert("You have deleted this product")
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
  let totalPage = Math.ceil(productAdmin.length / productPerPage)
  let start = (page - 1) * productPerPage;
  let end = start + productPerPage;
  let currentProducts = productAdmin.slice(start, end);
  return (
    <div className='flex flex-col px-6  gap-2 text-white mt-4 text-xs md:text-sm'>
      <h1 className='text-xl font-semibold bg-[#262626] rounded-lg p-2'>All Products</h1>
      <div className='flex flex-col gap-2 border rounded-lg border-gray-800'>
        <div className='flex w-full  p-2 font-semibold'>
          <div className='w-1/8 '>
            <h2>Image</h2>
          </div>
          <div className='w-2/8 '>
            <h2>Name</h2>
          </div>
          <div className='w-2/8 '>
            <h2>Description</h2>
          </div>
          <div className='w-1/8 -translate-x-[15px] text-center '>
            <h2>Price</h2>
          </div>
          <div className='w-1/8 text-center'>
            <h2>NewArrival</h2>
          </div>
          <div className='w-1/8 text-center'>
            <h2>Category</h2>
          </div>
          <div className='w-1/8 text-center'>
            <h2>Stocks</h2>
          </div>
          <div className='w-1/8 text-center'>
            <h2>Discount (%)</h2>
          </div>
          <div className='w-1/8 text-center'>
            <h2>Actions</h2>
          </div>
        </div>
        {
          currentProducts?.map((item, index) => (
            <div key={index} className='flex gap-4 w-full border-t border-gray-800 p-2 items-center justify-center'>
              <div className='w-1/8 '>
                <img src={item.variants[0].image[0]?.url} alt="user image" className='w-10 h-10 rounded-lg' />
              </div>
              <div className='w-2/8 '>
                <h2>{item.name}</h2>
              </div>
              <div className='w-2/8 '>
                <h2>{item.description}</h2>
              </div>
              <div className='w-1/8 text-center '>
                <h2>{item.price}</h2>
              </div>
              <div className='w-1/8 text-center'>
                <input type="checkbox" checked={item.newArrival} readOnly />
              </div>
              <div className='w-1/8 text-center'>
                <h2>{item.category}</h2>
              </div>
              <div className='w-1/8 text-center'>
                <h2>{totalStocks(item.variants)}</h2>
              </div>
              <div className='w-1/8 text-center'>
                <h2>{item.discount}</h2>
              </div>
              <div className='w-1/8 flex gap-2 text-center'>
                <FaEdit onClick={() => handleEditProduct(item._id)} size={24} className='text-green-500 transition-all duration-300 opacity-50 cursor-pointer hover:opacity-95 ' />
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

export default AdminProducts
