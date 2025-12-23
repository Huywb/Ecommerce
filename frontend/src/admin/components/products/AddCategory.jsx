import React from 'react'

const AddCategory = ({showAddCategoryForm,ToggleShowAddProductForm }) => {
    const handleToggleClose = () => {
        ToggleShowAddProductForm(false)
    }
    return (
        <div className={`fixed inset-0 z-50 flex text-white transition-opacity duration-300 ${showAddCategoryForm ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div onClick={()=>ToggleShowAddProductForm(false)} className="absolute inset-0 bg-black/50" />
            <div className={`ml-auto h-full w-[400px] bg-[#0b0b0b] border-l border-gray-800 transform transition-transform duration-300 ease-in-out
                ${showAddCategoryForm ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-xl font-semibold">Add Category</h2>
                    <button
                        className="p-2 bg-red-500 text-white rounded-lg"
                        onClick={() => ToggleShowAddProductForm('')}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddCategory
