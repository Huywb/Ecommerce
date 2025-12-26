import React, { useEffect, useState } from 'react'
import { MenuList } from '../../../contants/Data'
import { allSizes, colorOptions } from '../../contants/DataAdmin'

const AddProductForm = ({showAddProductForm, ToggleShowAddProductForm,productInfo}) => {
    const [selectedColors, setSelectedColors] = useState([{image: '',color: ''}])

    console.log("productInfo:", productInfo);
    const [selectedProductInfo,setSelectedProductInfo] = useState({
        name: productInfo?.name || '',
        description: productInfo?.description || '',
        price: productInfo?.price || 0,
        category: productInfo?.category || '',
        sizes: productInfo?.sizes || [],
        colors: productInfo?.colors || [],
        images: productInfo?.image || [],
    })


    useEffect(()=>{
        if(productInfo){
            setSelectedProductInfo({
                name: productInfo?.name || '',
                description: productInfo?.description || '',
                price: productInfo?.price || 0,
                category: productInfo?.category || '',
                sizes: productInfo?.sizes || [],
                colors: productInfo?.colors || [],
                images: productInfo?.images || [],
            })
        }
    }
    ,[productInfo])
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(selectedProductInfo);
        setSelectedProductInfo({
            name: '',
            description: '',
            price: 0,
            category: '',
            sizes: [],
        });
        setSelectedColors([{image: '',color: ''}])
    }

    const handlechangeInfo = (e) => {
        setSelectedProductInfo((prev)=>({...prev,[e.target.name]: e.target.value}))
    }

    const handleSizeChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedProductInfo((prev)=>({...prev,sizes: [...prev.sizes, value]}))
        }
        else {
            setSelectedProductInfo((prev)=>({...prev,sizes: prev.sizes.filter((size) => size !== value)}))
        }
    };

    const handleColorChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedColors((prev)=>[...prev, {image: '',color: value}]);
            setSelectedProductInfo((prev)=>({...prev,colors: [...prev.colors, value]}))
        }
        else {
            setSelectedColors(selectedColors.filter((color) => color.color !== value));
            setSelectedProductInfo((prev)=>({...prev,colors: prev.colors.filter((color) => color !== value),images: prev.images.filter((image) => image.color !== value)}))
        }
    };

    const handleImageChange = (e, color) => {
        const file = e.target.files[0];
        setSelectedColors((pre)=>pre.map(item => item.color == color ? {...item,image: URL.createObjectURL(file)} : item))
        setSelectedProductInfo((prev)=>({...prev,images: [...prev.images, {color: color, image: URL.createObjectURL(file)}]}))
    }

    console.log(selectedColors)

    const handleToggleClose = () => {
        ToggleShowAddProductForm(false)
    }
    return (
        <div className={`fixed inset-0 z-50  flex text-white transition-opacity duration-300 ${showAddProductForm ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div onClick={() => ToggleShowAddProductForm(false)} className="absolute inset-0 bg-black/50" />
            <div className={`relative overflow-y-auto no-scrollbar ml-auto h-full w-[400px] bg-[#0b0b0b] border-l border-gray-800 transform transition-transform duration-300 ease-in-out
                ${showAddProductForm ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-xl font-semibold">Add Product</h2>
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
                        <input type="text" name="name" value={selectedProductInfo.name} onChange={handlechangeInfo} className='w-full border focus:ring-1 ring-gray-600 border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' />
                        <span className='text-gray-500'>Enter the name of the product</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Description</label>
                        <textarea type="text" name="description" value={selectedProductInfo.description} onChange={handlechangeInfo} className='w-full border focus:ring-1 ring-gray-600 border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' />
                        <span className='text-gray-500'>Enter the description of the product</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Price</label>
                        <input type="number" min={0} name="price" value={selectedProductInfo.price} onChange={handlechangeInfo} className='w-full border focus:ring-1 ring-gray-600 border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' />
                        <span className='text-gray-500'>Enter the price of the product</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Category</label>
                        <select name="category" value={selectedProductInfo.category} onChange={handlechangeInfo} className='text-gray-400 min-w-[120px] w-fit border border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' defaultValue={'Select'} id="category">
                            {
                                MenuList.map((item,index)=>(
                                    item.name != 'All' && <option key={index} value={item.name} className='bg-[#171717] text-white' >{item.name}</option>
                                ))
                            }
                        </select>
                        <span className='text-gray-500'>Enter the category of the product</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Size</label>
                        <div className='grid grid-cols-5 gap-2'>
                            {
                                allSizes.map((item,index)=>(
                                    <div key={index} className='flex gap-2 '>
                                        <input type="checkbox" value={item} onChange={handleSizeChange} className=' checked:accent-[#171717] border border-gray-600 w-3' />
                                        <span>{item}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <span className='text-gray-500'>Select the available sizes for the product</span>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Color</label>
                        <div className='grid grid-cols-3 gap-2  '>
                            {
                                colorOptions.map((item,index)=>(
                                    <div key={index} className='flex gap-2 items-center'>
                                        <input type="checkbox" value={item.label} onClick={(e)=>handleColorChange(e)} className=' checked:accent-[#171717] border border-gray-600 w-3' />
                                        <div style={{backgroundColor : item.hex}} className="w-3 h-3 rounded-full ring-1"></div>
                                        <span className='text-gray-400'>{item.label}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <span className='text-gray-500'>Select the color of the product</span>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <label>Upload images for selected color</label>
                        
                        {
                            selectedColors.map((color,index)=> (
                                    color.color &&
                                    <div key={index} className='flex gap-2 items-center'>
                                        <div style={{backgroundColor : color.color}} className="w-3 h-3 rounded-full ring-1"></div>
                                        <span className='text-gray-400 min-w-15'>{color.color}</span>
                                        <input type="file" onChange={(e)=>handleImageChange(e,color.color)} className='w-full py-1 border focus:ring-1 ring-gray-600 border-gray-600 outline-none rounded-lg bg-[#171717]' />
                                    </div>
                                )
                            )
                        }
                        <div className='flex gap-2'>
                            </div>    
                        <span className='text-gray-500'>Select the available colors for the product</span>
                    </div>

                    <button type="submit" onClick={handleSubmit} className="cursor-pointer bg-[#171717] text-white py-2 my-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">{productInfo ? 'Edit Product' : 'Add Product'}</button>
                </div>
            </div>
        </div>
    )
}

export default AddProductForm
