import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { AxiosHttp } from '../../../libs/BaseAxios';
import { useNavigate } from 'react-router-dom';
import { uploadToCloudinary } from '../../../libs/UploadImageCloudinary';
import { FaImage } from "react-icons/fa";
const AddLogoForm = ({ showAddLogoForm, ToggleShowAddLogoForm }) => {

    const [changeAvatar, setChangeAvatar] = useState()
    const [previewAvatar, setPreviewAvatar] = useState()
        const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate()

    const handleChangeAvatar = (e) => {
        const file = e.target.files[0]
        if (!file) return
        setChangeAvatar(file)
        setPreviewAvatar(URL.createObjectURL(file))
    }

    const handleToggleClose = () => {
        ToggleShowAddLogoForm(false)
        setChangeAvatar(null)
        setPreviewAvatar(null)
    }

    const handleSubmit = async () => {
        try {
            setLoading(true)
            const uploadRes = await uploadToCloudinary(changeAvatar)
            const data = { image: { url: uploadRes.secure_url, public_id: uploadRes.public_id } }
            const res = await AxiosHttp.post('/logo/create', data)
            if (!res.data.status) {
                toast.error(res.message)
                return
            }
            setLoading(false)
            toast.success("Add new logo successfully")
            window.location.reload()
            handleToggleClose()
            setChangeAvatar('')
        } catch (error) {
            toast.error("Something wrong ! Try again")
        }

    }
    return (
        <div className={`fixed inset-0 z-40  flex text-white transition-opacity duration-300 ${showAddLogoForm ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div onClick={() => handleToggleClose()} className="absolute inset-0 bg-black/50" />
            <div className={`relative overflow-y-auto no-scrollbar ml-auto h-full w-[400px] bg-[#0b0b0b] border-l border-gray-800 transform transition-transform duration-300 ease-in-out
                        ${showAddLogoForm ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-xl font-semibold">Add Logo</h2>
                    <button
                        className="p-2 bg-red-500 text-white rounded-lg"
                        onClick={() => handleToggleClose()}
                    >
                        Close
                    </button>
                </div>

                <div className='flex flex-col gap-2 px-4 '>
                    <div className={`transition-all duration-300 mt-16  `} >
                        <label className='flex justify-center mb-2 text-md font-semibold' >Avatar</label>
                        <input
                            type="file"
                            id="LogoAvatar"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handleChangeAvatar(e)}
                        />

                        <label htmlFor="LogoAvatar" className="cursor-pointer w-1/2">
                            <div className="w-full max-w-full h-[300px]  overflow-hidden rounded-2xl shadow-lg ">
                                {
                                    previewAvatar ?
                                    <img src={previewAvatar || ''} alt='avatar Logo' className='w-full h-full object-cover' />
                                :   <FaImage className='h-full w-full'/>                               
                                }

                            </div>
                        </label>
                    </div>

                    <button type="submit" onClick={() => handleSubmit()} className="cursor-pointer bg-[#171717] text-white py-2 my-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">{loading ? 'Submiting...' : 'Add Logo'}</button>
                </div>
            </div>
        </div >
    )
}

export default AddLogoForm
