import { useEffect, useState } from 'react';
import { UsersAdmin } from '../contants/DataAdmin'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate, useOutletContext } from 'react-router-dom';
import { AxiosHttp } from '../../libs/BaseAxios';
import userImage from '../../../public/user.png'
import { toast } from 'react-toastify';
const AdminUsers = () => {
    const { EditUserById } = useOutletContext();
    const [page, setPage] = useState(1);
    const [listUser, setListUser] = useState([])
    const navigate = useNavigate()

    const handleEditUser = (index) => {
        EditUserById(listUser.find(item => item._id == index));
    }

    const handleDeleteUser = async (id) => {
        const isConfirm = window.confirm("Are you sure deleted this product?")
        if (!isConfirm) return
        try {
            console.log(id)
            const res = await AxiosHttp.delete(`/user/delete/${id}`)
            if (!res.data.status) {
                toast.error("Something wrong try again !!!")
                return
            }
            toast.success('Delete user successfull')
            navigate(0)
        } catch (error) {
            toast.error("Something wrong went delete user")
        }
    }

    let productPerPage = 6
    let totalPage = Math.ceil(listUser.length / productPerPage)
    let start = (page - 1) * productPerPage;
    let end = start + productPerPage;
    let currentUsers = listUser.slice(start, end);

    useEffect(() => {
        const fetchAllUser = async () => {
            const res = await AxiosHttp.get('/user/all')
            const data = await res.data
            setListUser(data.data)
        }
        fetchAllUser()
    }, [])
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
                    <div className='w-2/8 '>
                        <h2>Email</h2>
                    </div>
                    <div className='w-1/8 '>
                        <h2>Phone</h2>
                    </div>
                    <div className='w-1/8 '>
                        <h2>Address</h2>
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
                    currentUsers.map((item, index) => (
                        <div key={index} className='flex w-full border-t border-gray-800 p-2 items-center justify-center'>
                            <div className='w-1/8 '>
                                <img src={item.avatar.url ? item.avatar.url : userImage} alt="user image" className='w-10 h-10 rounded-lg' />
                            </div>
                            <div className='w-2/8 '>
                                <h2>{item.name}</h2>
                            </div>
                            <div className='w-2/8 '>
                                <h2>{item.email}</h2>
                            </div>
                            <div className='w-1/8 '>
                                <h2>{item.phone ? item.phone : 'N/A'}</h2>
                            </div>
                            <div className='w-1/8 '>
                                <h2>{item.address ? item.address : 'N/A'}</h2>
                            </div>
                            <div className='w-1/8 '>
                                <h2 className={`px-2 py-1 ${item.role === "Admin" ? "bg-green-500" : "bg-red-500"} w-fit rounded-lg`}>{item.role}</h2>

                            </div>
                            <div className='w-1/8 '>
                                <h2 className={`px-2 py-1 ${item.status === "Active" ? "bg-green-500" : "bg-red-500"} w-fit rounded-lg`}>{item.status}</h2>
                            </div>
                            <div className='w-1/8 flex gap-2 '>
                                <FaEdit onClick={() => handleEditUser(item._id)} size={24} className='text-green-500 transition-all duration-300 opacity-50 cursor-pointer hover:opacity-95 ' />
                                <MdDeleteForever onClick={() => handleDeleteUser(item._id)} size={24} className='text-red-500 transition-all duration-300 opacity-50 cursor-pointer hover:opacity-95 ' />
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

export default AdminUsers
