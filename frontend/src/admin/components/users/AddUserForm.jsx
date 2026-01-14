import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import userAvatar from '../../../../public/user.png'
import { toast } from 'react-toastify';
import { AxiosHttp } from '../../../libs/BaseAxios';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
const AddUserForm = ({ InfoUser, showAddUserForm, ToggleShowAddUserForm }) => {

    const { register, handleSubmit, reset } = useForm()
    const [changeAvatar, setChangeAvatar] = useState()
    const [mode, setMode] = useState('Add')
    const [hidePass, setHidePass] = useState(false)
    const [hideComfirmPass, setHideComfirmPass] = useState(false)

    useEffect(() => {
        if (InfoUser) {
            reset({
                name: InfoUser?.name || '',
                email: InfoUser?.email || '',
                phone: InfoUser?.phone || '',
                address: InfoUser?.address || '',
                role: InfoUser?.role || 'user',
            })
            setChangeAvatar(InfoUser.avatar.url)
            setMode('Edit')
        }
    }
        , [InfoUser])

    const handleToggleClose = () => {
        ToggleShowAddUserForm(false)
        reset({
            name: '',
            email: '',
            phone: '',
            address: '',
            role: 'user',
        });
        setChangeAvatar('')
        setMode("Add")
    }

    const onSubmit = async (data) => {
        try {
            console.log(data.password)
            console.log(data.comfirmpassword)
            console.log(mode)
            if (data.password !== data.comfirmpassword) {
                toast.error("Password and Confirm Password not similar")
            }
            const formdata = new FormData()
            formdata.append('name', data.name)
            formdata.append('email', data.email)
            formdata.append('phone', data.phone)
            formdata.append('address', data.address)
            formdata.append('password', data.password)
            formdata.append('images', changeAvatar)
            if (mode == 'Add') {
                const res = await AxiosHttp.post('/user/addUser', formdata, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                console.log(123)
                console.log("add",res)
                if (!res.status) {
                    toast.error(res.message)
                }
            } else {
                const res = await AxiosHttp.patch(`/user/update/${InfoUser._id}`, formdata, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                console.log("update",res)
                if(!res.status){
                    toast.error(res.message)
                }
            }
            reset({
                name: '',
                email: '',
                phone: '',
                address: '',
                role: 'user',
            });
            setChangeAvatar('')
        } catch (error) {
            toast.error("Something wrong ! Try again")
        }

    }
    return (
        <div className={`fixed inset-0 z-50  flex text-white transition-opacity duration-300 ${showAddUserForm ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div onClick={() => handleToggleClose()} className="absolute inset-0 bg-black/50" />
            <div className={`relative overflow-y-auto no-scrollbar ml-auto h-full w-[400px] bg-[#0b0b0b] border-l border-gray-800 transform transition-transform duration-300 ease-in-out
                        ${showAddUserForm ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-xl font-semibold">{InfoUser ? "Edit User" : 'Add User'}</h2>
                    <button
                        className="p-2 bg-red-500 text-white rounded-lg"
                        onClick={() => handleToggleClose()}
                    >
                        Close
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 px-4'>
                    <div className='flex flex-col gap-2'>
                        <label>Name</label>
                        <input type="text" {...register('name')} className='w-full border focus:ring-1 ring-gray-600 border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' />
                        <span className='text-gray-500'>Enter name user</span>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Email</label>
                        <input type="email" {...register('email')} className='w-full border focus:ring-1 ring-gray-600 border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' />
                        <span className='text-gray-500'>Only admin can see your email</span>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Phone</label>
                        <input type="tel" {...register('phone')} className='w-full border focus:ring-1 ring-gray-600 border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' />
                        <span className='text-gray-500'>Only admin can see your phone number</span>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Address</label>
                        <input type="text" {...register('address')} className='w-full border focus:ring-1 ring-gray-600 border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' />
                        <span className='text-gray-500'>Enter your address</span>
                    </div>

                    {
                        mode == "Add" &&
                        <>
                            <div className='flex flex-col gap-2 relative'>
                                <label>Password</label>
                                <input type={hidePass ? 'text' : 'password'} {...register('password')} className='w-full border focus:ring-1 ring-gray-600 border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' />
                                <div onClick={() => setHidePass(!hidePass)} className='absolute text-xl right-2 cursor-pointer bottom-1/2 translate-y-2.5'>
                                    {
                                        hidePass ? <IoEye ></IoEye> : <IoEyeOff></IoEyeOff>
                                    }
                                </div>
                                <span className='text-gray-500'>Enter your password</span>
                            </div>

                            <div className='flex flex-col gap-2 relative'>
                                <label>Confirm Password</label>
                                <input type={hideComfirmPass ? 'text' : 'password'} {...register('comfirmpassword')} className='w-full border focus:ring-1 ring-gray-600 border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' />
                                <div onClick={() => setHidePass(!hidePass)} className='absolute text-xl right-2 cursor-pointer bottom-1/2 translate-y-2.5'>
                                    {
                                        hideComfirmPass ? <IoEye ></IoEye> : <IoEyeOff></IoEyeOff>
                                    }
                                </div>
                                <span className='text-gray-500'>Enter your Confirm Password</span>
                            </div>
                        </>
                    }

                    <div className='flex flex-col gap-2'>
                        <label>Role </label>
                        <select  {...register('role')} className='text-gray-400 min-w-[120px] w-fit border border-gray-600 outline-none p-2 rounded-lg bg-[#171717]'>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                        <span className='text-gray-500'>select role for user</span>
                    </div>

                    <div className={`transition-all duration-300 mt-16  `}>
                        <label className='flex justify-center mb-2 text-md font-semibold' >Avatar</label>
                        <input
                            type="file"
                            id="avatar"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => setChangeAvatar(URL.createObjectURL(e.target.files[0]))}
                        />

                        <label htmlFor="avatar" className="cursor-pointer w-1/2">
                            <div className="w-full max-w-full h-[300px]  overflow-hidden rounded-2xl shadow-lg ">
                                <img src={changeAvatar ? changeAvatar : userAvatar} alt='avatar user' className='w-full h-full object-cover' />
                            </div>
                        </label>
                    </div>

                    <button type="submit" className="cursor-pointer bg-[#171717] text-white py-2 my-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">{InfoUser ? 'Edit User' : 'Add User'}</button>
                </form>
            </div>
        </div >
    )
}

export default AddUserForm
