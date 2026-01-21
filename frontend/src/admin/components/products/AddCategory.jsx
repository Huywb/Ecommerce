import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { AxiosHttp } from '../../../libs/BaseAxios'

const AddCategory = ({ showAddCategoryForm, ToggleShowAddProductForm }) => {

    const { register, handleSubmit } = useForm()

    const handleToggleClose = () => {
        ToggleShowAddProductForm(false)
    }

    const onSubmit = async(data) => {
        console.log(data);
        try {
            const res = await AxiosHttp.post("/category/create",data)
            if(res.data.status){
                toast.success("Add category successfully")
                handleToggleClose()
            }else{
                toast.error("Add category failed")
            }
        } catch (error) {
            console.log(error)
            toast.error("Add category failed")
        }
    }
    return (
        <div className={`fixed inset-0 z-50  flex text-white transition-opacity duration-300 ${showAddCategoryForm ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div onClick={() => handleToggleClose(false)} className="absolute inset-0 bg-black/50" />
            <div className={`relative overflow-y-auto no-scrollbar ml-auto h-full w-[400px] bg-[#0b0b0b] border-l border-gray-800 transform transition-transform duration-300 ease-in-out
                        ${showAddCategoryForm ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-xl font-semibold">Add Category</h2>
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
                        <input type="text" {...register("name")} className='w-full border focus:ring-1 ring-gray-600 border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' />
                        <span className='text-gray-500'>Enter the name of the category</span>
                    </div>


                    <button type="submit" className="cursor-pointer bg-[#171717] text-white py-2 my-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">Add Category</button>
                </form>
            </div>
        </div>
    )
}

export default AddCategory
