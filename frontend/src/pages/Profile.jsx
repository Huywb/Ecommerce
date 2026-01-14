import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import register1 from '../../public/register.png'
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { AxiosHttp } from '../libs/BaseAxios';
import { fetchUser } from '../redux-toolkit/userSlice';

const Profile = () => {
    const { register, handleSubmit, reset } = useForm()
    const [hidePass, setHidePass] = useState(false)
    const [hideComfirmPass, setHideComfirmPass] = useState(false)
    const selected = useSelector((state) => state.user)
    const [changeAvatar, setChangeAvatar] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        if (selected) {
            reset({
                name: selected.name,
                email: selected.email,
                address: selected.address,
                phone: selected.phone,
            })
            setChangeAvatar(selected.avatar.url)
        }
    }, [selected, reset])

    const EditProfile = async (data) => {
        try {
            if (!data) {
                toast.error("Update profile failed")
            }
            const formdata = new FormData()
            formdata.append('name', data.name)
            formdata.append('phone', data.phone)
            formdata.append('address', data.address)
            formdata.append('images', changeAvatar)

            const res = await AxiosHttp.patch(`/user/update/${selected.id}`, formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            if (res.data.status) {
                const { checkUser } = res.data.data

                dispatch(fetchUser({
                    id: checkUser._id,
                    email: checkUser.email,
                    name: checkUser.name,
                    role: checkUser.role,
                    phone: checkUser.phone,
                    address: checkUser.address,
                    avatar: {
                        url: checkUser.url,
                        public_id: checkUser.public_id
                    }
                }))
            }
            if (!res.data.status) {
                toast.error("Something wrong went update profile")
                console.log(res.message)
            } else {
                toast.success("Update profile success")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form className='flex items-center justify-center  gap-4 p-4 ' onSubmit={handleSubmit(EditProfile)}>
            <div className='flex min-w-[80%] gap-10 p-10 border rounded-md border-gray-200 shadow-2xl'>

                <div className={`w-1/2 flex flex-col gap-10 transition-all duration-300`}>
                    <h1 className='text-center text-2xl font-bold'>Edit Profile</h1>
                    <div className='flex flex-col gap-4 font-semibold'>
                        <div className='flex flex-col gap-2 '>
                            <label>Name : </label>
                            <input {...register("name", { required: true })} required placeholder='Huy' className='outline-none border border-gray-300 rounded-md p-2 font-normal' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Email : </label>
                            <input {...register("email", { required: true })} readOnly type="email" className='text-gray-700 cursor-not-allowed outline-none border border-gray-300 font-normal rounded-md p-2' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Address : </label>
                            <input {...register("address", { required: true })} required placeholder="Da Nang" className='outline-none border border-gray-300 rounded-md p-2 font-normal' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Phone : </label>
                            <input {...register("phone", { required: true })} required placeholder='1234567890' type="tel" className='outline-none border border-gray-300 rounded-md p-2 font-normal' />
                        </div>
                        <div className='flex flex-col gap-2 relative'>
                            <label>Password : </label>
                            <input {...register("password", { required: true, minLength: 6 })} required placeholder='*******' type={`${hidePass ? 'text' : 'password'}`} className='outline-none font-normal border border-gray-300 rounded-md p-2' />
                            <div onClick={() => setHidePass(!hidePass)} className='absolute text-xl right-2 cursor-pointer bottom-0 translate-y-[-50%]'>
                                {
                                    hidePass ? <IoEye ></IoEye> : <IoEyeOff></IoEyeOff>
                                }
                            </div>

                        </div>

                        <div className='flex flex-col gap-2 relative'>
                            <label>Confirm Password : </label>
                            <input {...register("confirmPassword", { required: true, minLength: 6 })} required placeholder='*******' type={`${hideComfirmPass ? 'text' : 'password'}`} className='font-normal outline-none border border-gray-300 rounded-md p-2' />
                            <div onClick={() => setHideComfirmPass(!hideComfirmPass)} className='absolute text-xl right-2 cursor-pointer bottom-0 translate-y-[-50%]'>
                                {
                                    hideComfirmPass ? <IoEye ></IoEye> : <IoEyeOff></IoEyeOff>
                                }
                            </div>

                        </div>
                        <button type='submit' className=' mt-2 w-full duration-300 transition-all cursor-pointer flex gap-2 items-center justify-center p-2 bg-gray-800 rounded-md hover:bg-gray-900 text-white'>Save Profile</button>
                    </div>
                    <div className='flex items-center justify-center text-gray-600'>

                    </div>
                </div>
                <div className={`w-1/2 transition-all duration-300 mt-16  `}>
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
                            <img src={changeAvatar ? changeAvatar : ''} className='w-full h-full object-cover' />
                        </div>
                    </label>
                </div>
            </div>
        </form>
    )
}

export default Profile
