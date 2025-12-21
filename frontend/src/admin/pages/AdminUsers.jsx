import { useState } from 'react';
import { UsersAdmin } from '../contants/DataAdmin'
import { IoIosMore } from "react-icons/io";

const AdminUsers = () => {
    const [showActions,setShowActions] = useState(null);
    const [page,setPage] = useState(1);
    
    const handleShowActions = (index) => {
        setShowActions(showActions === index ? null : index);
    }

    const handleDeleteUser = (index) => {
        console.log("Delete user at index:", index);
    }

    const handleEditUser = (index) => {
        console.log("Edit user at index:", index);
    }

    let productPerPage = 6
    let totalPage = Math.ceil(UsersAdmin.length/ productPerPage)
    let start = (page - 1) * productPerPage;
    let end = start + productPerPage;
    let currentUsers = UsersAdmin.slice(start, end);
  return (
    <div className='flex flex-col px-6  gap-2 text-white mt-4 text-xs md:text-sm'>
        <h1 className='text-xl font-semibold bg-[#262626] rounded-lg p-2'>All Users</h1>
        <div className='flex flex-col gap-2 border rounded-lg border-gray-800'>
            <div className='flex w-full  p-2 font-semibold'>
                <div className='w-1/8 '>
                    <h2>Avatar</h2>
                </div>
                <div className='w-2/8 '>
                    <h2>User</h2>
                </div>
                <div className='w-3/8 '>
                    <h2>Email</h2>
                </div>
                <div className='w-1/8 '>
                    <h2>Role</h2>
                </div>
                <div className='w-1/8 '>
                    <h2>Status</h2>
                </div>
                <div className='w-1/8 '>
                    <h2>Actions</h2>
                </div>
            </div>
            {
                currentUsers.map((item,index)=>(
                    <div key={index} className='flex w-full border-t border-gray-800 p-2 items-center justify-center'>
                        <div className='w-1/8 '>
                            <img src={item.avatar} alt="user image" className='w-10 h-10 rounded-lg' />
                        </div>
                        <div className='w-2/8 '>
                            <h2>{item.name}</h2>
                        </div>
                        <div className='w-3/8 '>
                            <h2>{item.email}</h2>
                        </div>
                        <div className='w-1/8 '>
                            <h2 className={`px-2 py-1 ${item.role === "Admin" ? "bg-green-500" : "bg-red-500"} w-fit rounded-lg`}>{item.role}</h2>
                            
                        </div>
                        <div className='w-1/8 '>
                            <h2 className={`px-2 py-1 ${item.status === "Active" ? "bg-green-500" : "bg-red-500"} w-fit rounded-lg`}>{item.status}</h2>
                        </div>
                        <div className='w-1/8 relative'>
                            <IoIosMore size={20} onClick={() => handleShowActions(item.id)} className='cursor-pointer opacity-50 hover:opacity-95 transition-all duration-300'/>
                            {showActions === item.id && (
                                <div className='absolute bg-[#171717] flex flex-col z-30 '>
                                    <button onClick={() => handleEditUser(item.id)} className='cursor-pointer hover:bg-gray-600 p-2 px-4 transition-all duration-300'>Edit</button>
                                    <button onClick={() => handleDeleteUser(item.id)} className='cursor-pointer hover:bg-gray-600 p-2 px-4 transition-all duration-300'>Delete</button>
                                </div>
                            )}
                        </div>
                    </div>
                ))
            }
        </div>

        <div className='flex w-full mt-2 justify-center gap-2'>
            {
                page > 1 &&
                <button onClick={()=>setPage(page - 1)} className={`px-2 border rounded-md cursor-pointer ${page == page-1 ? 'bg-[#262626] text-white' : ''}`}>{page - 1 }</button>
            }
            <button onClick={()=>setPage(page)} className={`px-2 border rounded-md cursor-pointer ${page == page ? 'bg-[#262626] text-white' : ''}`}>{page}</button>
            {
                page < totalPage &&
            <button onClick={()=>setPage(page + 1)}  className={`px-2 border rounded-md cursor-pointer ${page == page+1 ? 'bg-[#262626] text-white' : ''}`}>{page + 1}</button>
            }
        </div>
    </div>
  )
}

export default AdminUsers
