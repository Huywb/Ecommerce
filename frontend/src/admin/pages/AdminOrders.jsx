import React, { useState } from 'react'
import { ListOrderAdmin } from '../contants/DataAdmin'
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const AdminOrders = ({test}) => {
  console.log("Test prop value:", test);
  const [page, setPage] = useState(1);

  const handleDeleteUser = (index) => {
    console.log("Delete user at index:", index);
  }

  const handleEditUser = (index) => {
    console.log("Edit user at index:", index);
  }

  let productPerPage = 8
  let totalPage = Math.ceil(ListOrderAdmin.length / productPerPage)
  let start = (page - 1) * productPerPage;
  let end = start + productPerPage;
  let currentOrders = ListOrderAdmin.slice(start, end);
  return (
    <div className='flex flex-col px-6  gap-2 text-white mt-4 text-xs md:text-sm'>
      <h1 className='text-xl font-semibold bg-[#262626] rounded-lg p-2'>All Order</h1>
      <div className='flex flex-col gap-2 border rounded-lg border-gray-800'>
        <div className='flex w-full  p-2 font-semibold'>
          <div className='w-1/8 '>
            <h2>ID</h2>
          </div>
          <div className='w-2/8 '>
            <h2>User</h2>
          </div>
          <div className='w-1/8 '>
            <h2>Items</h2>
          </div>
          <div className='w-1/8 '>
            <h2>Price</h2>
          </div>
          <div className='w-1/8 '>
            <h2>Date</h2>
          </div>
          <div className='w-1/8 '>
            <h2>PaymentMethod</h2>
          </div>
          <div className='w-1/8 '>
            <h2>Status</h2>
          </div>
          <div className='w-1/8 '>
            <h2>Shipping</h2>
          </div>
          <div className='w-1/8 '>
            <h2>Actions</h2>
          </div>
        </div>
        {
          currentOrders.map((item, index) => (
            <div key={index} className='flex w-full border-t border-gray-800 p-2 items-center justify-center'>
              <div className='w-1/8 '>
                <h2>{item.orderCode}</h2>
              </div>
              <div className='w-2/8 '>
                <h2>{item.user}</h2>
              </div>
              <div className='w-1/8 '>
                <h2>{item.items}</h2>
              </div>
              <div className='w-1/8 '>
                <h2>${item.total}</h2>
              </div>
              <div className='w-1/8 '>
                <h2>{item.date}</h2>
              </div>
              <div className='w-1/8 '>
                <h2>{item.paymentMethod}</h2>
              </div>
              <div className='w-1/8 '>
                <h2>{item.paymentStatus}</h2>
              </div>
              <div className='w-1/8 '>
                <h2>{item.status}</h2>
              </div>
              <div className='w-1/8 flex gap-2 '>
                <FaEdit onClick={() => handleEditUser(item.id)} size={24} className='text-green-500 transition-all duration-300 opacity-50 cursor-pointer hover:opacity-95 ' />
                <MdDeleteForever onClick={() => handleDeleteUser(item.id)} size={24} className='text-red-500 transition-all duration-300 opacity-50 cursor-pointer hover:opacity-95 ' />
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

export default AdminOrders
