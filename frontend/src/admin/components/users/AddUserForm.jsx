import React from 'react'

const AddUserForm = ({showAddUserForm, ToggleShowAddUserForm}) => {
  const handleToggleClose = () => {
    ToggleShowAddUserForm(false)
  }
  return (
    <div className={`fixed inset-0 z-50 flex text-white transition-opacity duration-300 ${showAddUserForm ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div onClick={()=>ToggleShowAddUserForm(false)} className="absolute inset-0 bg-black/50" />
            <div className={`ml-auto h-full w-[400px] bg-[#0b0b0b] border-l border-gray-800 transform transition-transform duration-300 ease-in-out
                ${showAddUserForm ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-xl font-semibold">Add User</h2>
                    <button
                        className="p-2 bg-red-500 text-white rounded-lg"
                        onClick={() => ToggleShowAddUserForm('')}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
  )
}

export default AddUserForm
