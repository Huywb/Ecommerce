import React, { useEffect, useState } from 'react'

const AddUserForm = ({ InfoUser, showAddUserForm, ToggleShowAddUserForm }) => {

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        role: 'user'
    });

    console.log("InfoUser:", InfoUser);

    useEffect(()=>{
        if(InfoUser){
            setUserInfo({   
                name: InfoUser?.name || '',
                email: InfoUser?.email || '',
                phone: InfoUser?.phone || '',
                address: InfoUser?.address || '',
                role: InfoUser?.role || 'user'
            })
        }
    }
    ,[InfoUser])
    const handlechangeInfo = (e)=>{
        setUserInfo((prev)=>({...prev,[e.target.name]: e.target.value}))
    }

    const handleToggleClose = () => {
        ToggleShowAddUserForm(false)
        setUserInfo({
            name: '',
            email: '',
            phone: '',
            address: '',
            role: 'user'
        });
    }

    const handleSubmit = (e) => {  
        alert(`User "${userInfo.name}" added!`);
        setUserInfo({
            name: '',
            email: '',
            phone: '',
            address: '',
            role: 'user'
        });
        console.log(userInfo)
    }
    return (
        <div className={`fixed inset-0 z-50  flex text-white transition-opacity duration-300 ${showAddUserForm ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div onClick={() => ToggleShowAddUserForm(false)} className="absolute inset-0 bg-black/50" />
            <div className={`relative overflow-y-auto no-scrollbar ml-auto h-full w-[400px] bg-[#0b0b0b] border-l border-gray-800 transform transition-transform duration-300 ease-in-out
                        ${showAddUserForm ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-xl font-semibold">Add User</h2>
                    <button
                        className="p-2 bg-red-500 text-white rounded-lg"
                        onClick={() => handleToggleClose()}
                    >
                        Close
                    </button>
                </div>

                <div className='flex flex-col gap-2 px-4'>
                    <div className='flex flex-col gap-2'>
                        <label>Name</label>
                        <input type="text" value={userInfo?.name} name="name" onChange={handlechangeInfo} className='w-full border focus:ring-1 ring-gray-600 border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' />
                        <span className='text-gray-500'>Enter name user</span>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Email</label>
                        <input type="email" value={userInfo?.email} name="email" onChange={handlechangeInfo} className='w-full border focus:ring-1 ring-gray-600 border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' />
                        <span className='text-gray-500'>Only admin can see your email</span>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Phone</label>
                        <input type="text" value={userInfo?.phone} name="phone" onChange={handlechangeInfo} className='w-full border focus:ring-1 ring-gray-600 border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' />
                        <span className='text-gray-500'>Only admin can see your phone number</span>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Address</label>
                        <input type="text" value={userInfo?.address} name="address" onChange={handlechangeInfo} className='w-full border focus:ring-1 ring-gray-600 border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' />
                        <span className='text-gray-500'>Enter your address</span>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Role </label>
                        <select name="role" id="" onChange={handlechangeInfo} className='text-gray-400 min-w-[120px] w-fit border border-gray-600 outline-none p-2 rounded-lg bg-[#171717]'>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                        <span className='text-gray-500'>select role for user</span>
                    </div>

                    <button type="submit" onClick={handleSubmit} className="cursor-pointer bg-[#171717] text-white py-2 my-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">{userInfo !=null ? 'Edit User' : 'Add User'}</button>
                </div>
            </div>
        </div>
    )
}

export default AddUserForm
