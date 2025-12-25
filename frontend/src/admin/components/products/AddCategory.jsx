import React, { useState } from 'react'

const AddCategory = ({ showAddCategoryForm, ToggleShowAddProductForm }) => {

    const [categoryName, setCategoryName] = useState(null)

    const handleToggleClose = () => {
        ToggleShowAddProductForm(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(categoryName);
        alert(`Category "${categoryName}" added!`);
        setCategoryName('');
    }
    return (
        <div className={`fixed inset-0 z-50  flex text-white transition-opacity duration-300 ${showAddCategoryForm ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div onClick={() => ToggleShowAddProductForm(false)} className="absolute inset-0 bg-black/50" />
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

                <div className='flex flex-col gap-2 px-4'>
                    <div className='flex flex-col gap-2'>
                        <label>Name</label>
                        <input type="text" name="name" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} className='w-full border focus:ring-1 ring-gray-600 border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' />
                        <span className='text-gray-500'>Enter the name of the category</span>
                    </div>


                    <button type="submit" onClick={handleSubmit} className="cursor-pointer bg-[#171717] text-white py-2 my-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">Add Category</button>
                </div>
            </div>
        </div>
    )
}

export default AddCategory
