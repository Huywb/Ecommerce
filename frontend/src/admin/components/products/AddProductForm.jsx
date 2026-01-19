import React, { useEffect, useState } from 'react'
import { MenuList } from '../../../contants/Data'
import { allSizes, colorOptions } from '../../contants/DataAdmin'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { AxiosHttp } from '../../../libs/BaseAxios'
import { useNavigate } from 'react-router-dom'
import { MdOutlineAddBox } from "react-icons/md";
import { uploadToCloudinary } from '../../../libs/UploadImageCloudinary'

const AddProductForm = ({ showAddProductForm, ToggleShowAddProductForm, productInfo }) => {
    const [selectedColors, setSelectedColors] = useState([])
    const [category,setCategory] = useState()
    const { register, handleSubmit, reset, control } = useForm()
    const [mode, setMode] = useState('Add')
    const navigate = useNavigate()

    useEffect(()=> {
        const fetchCategory = async()=>{
            const res = await AxiosHttp.get('/category/all')
            console.log(res)
            if(res.ok){
                setCategory(res.data)
            }
            console.log(category)
        }
        fetchCategory()
    },[])

    console.log(category)
    useEffect(() => {
        if (productInfo) {
            reset({
                name: productInfo?.name || '',
                description: productInfo?.description || '',
                price: productInfo?.price || '',
                category: productInfo?.category || '',
                discount: productInfo?.discount || '',
                newArrival: productInfo?.newArrival || false,
                sizes: productInfo?.sizes || [],
            })
            setSelectedColors([productInfo.variants])
            setMode('Edit')
        }
    }, [productInfo])

    const onSubmit = async (data) => {
        try {
            if (!selectedColors.length) {
                return
            }
            const uploadList = await Promise.all(
                selectedColors.map(async (item) => {
                    if (!item.image) return null

                    const uploadRes = await uploadToCloudinary(item.image)

                    return {
                        color: item.color,
                        images: [
                            {
                                url: uploadRes.secure_url,
                                public_id: uploadRes.public_id
                            }
                        ],
                        stocks: item.stocks || 0
                    }
                })
            )

            const finalUploadList = uploadList.filter(Boolean)
            const Alldata = { ...data,variants: finalUploadList }
            if (mode == 'Add') {
                const res = await AxiosHttp.post('/product/create', Alldata)
                if (!res.data.status) {
                    toast.error(res.message)
                    return
                }
                toast.success("Add new product successfully")
                navigate(0)
                handleToggleClose()
            } else {
                const res = await AxiosHttp.patch(`/product/update/${productInfo._id}`, Alldata)
                if (!res.data.status) {
                    toast.error(res.message)
                    return
                }
                toast.success("Update user successfully")
                navigate(0)
                handleToggleClose()
            }
            reset({
                name: '',
                description: '',
                price: '',
                category: '',
                newArrival: false,
                discount: '',
                sizes: ''
            });
            setSelectedColors([])
        }
        catch (error) {
            toast.error(error)
        }
    }


    const handleColorChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedColors((prev) => [...prev, { image: '', color: value, stocks: 0 }]);
        }
        else {
            setSelectedColors(selectedColors.filter((color) => color.color !== value));
        }
    };

    const handleImageChange = (e, color) => {
        const file = e.target.files[0];
        if (!file) return
        setSelectedColors((pre) => pre.map(item => item.color == color ? { ...item, image: file } : item))
    }


    const handleToggleClose = () => {
        ToggleShowAddProductForm(false)
        setMode("Add")
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

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 px-4'>
                    <div className='flex flex-col gap-2'>
                        <label>Name</label>
                        <input type="text" {...register('name')} placeholder='T-shirt' className='w-full border focus:ring-1 ring-gray-600 border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' />
                        <span className='text-gray-500'>Enter the name of the product</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Description</label>
                        <textarea type="text" {...register('description')} placeholder='This is a new T-Shirt' className='w-full border focus:ring-1 ring-gray-600 border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' />
                        <span className='text-gray-500'>Enter the description of the product</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Price</label>
                        <input type="number" min={0} {...register('price')} placeholder='0' className='w-full border focus:ring-1 ring-gray-600 border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' />
                        <span className='text-gray-500'>Enter the price of the product</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Category</label>
                        <select name="category" {...register('category')} className='text-gray-400 min-w-[120px] w-fit border border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' defaultValue={'Select'} id="category">
                            {
                                MenuList.map((item, index) => (
                                    item.name != 'All' && <option key={index} value={item.name} className='bg-[#171717] text-white' >{item.name}</option>
                                ))
                            }
                        </select>
                        <span className='text-gray-500'>Enter the category of the product</span>
                    </div>

                    <div className='flex gap-5'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <label>Discount (%)</label>
                            <input type="number" {...register('discount')} placeholder='%' className='w-[90%] border focus:ring-1 ring-gray-600 border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' />
                        </div>
                    </div>

                    <div className='flex gap-4 my-4'>
                        <label>Is New Product : </label>
                        <input type="checkbox" {...register('newArrival')} className='checked:accent-[#171717]' />
                        <span className='text-gray-500'>Checked if it a new product</span>
                    </div>


                    <div className='flex flex-col gap-2'>
                        <label>Size</label>
                        <div className='grid grid-cols-5 gap-2'>
                            {
                                allSizes.map((item, index) => (
                                    <div key={index} className='flex gap-2 '>
                                        <input type="checkbox" value={item} {...register('sizes')} className=' checked:accent-[#171717] border border-gray-600 w-3' />
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
                                colorOptions.map((item, index) => (
                                    <div key={index} className='flex gap-2 items-center'>
                                        <input type="checkbox" value={item.value} onClick={(e) => handleColorChange(e)} className=' checked:accent-[#171717] border border-gray-600 w-3' />
                                        <div style={{ backgroundColor: item.hex }} className="w-3 h-3 rounded-full ring-1"></div>
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
                            selectedColors.map((item, index) => (
                                item.color &&
                                <div key={index} className='flex gap-2 items-center'>
                                    <div style={{ backgroundColor: item.color }} className="w-3 h-3 rounded-full ring-1"></div>
                                    <span className='text-gray-400 min-w-15'>{item.color}</span>
                                    <input type="file" id={`productImage-${item.color}`} onChange={(e) => handleImageChange(e, item.color)} className='hidden ' />
                                    <label htmlFor={`productImage-${item.color}`} className="cursor-pointer w-[50%]">
                                        {
                                            item.image ? <img src={URL.createObjectURL(item.image)} alt="product image" className="w-10 h-10 object-cover rounded" /> : <MdOutlineAddBox size={24} className='text-gray-600 hover:text-gray-200 transition-all duration-300' />
                                        }
                                    </label>
                                    <div className='flex gap-2 w-1/2'>
                                        <label>Stock</label>
                                        <input type="number" onChange={(e) => setSelectedColors((prev) => prev.map((colorItem) => colorItem.color == item.color ? { ...colorItem, stocks: e.target.value } : colorItem))} placeholder='0' className='w-[90%] border focus:ring-1 ring-gray-600 border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' />
                                    </div>
                                </div>
                            )
                            )
                        }
                        <div className='flex gap-2'>

                        </div>
                        <span className='text-gray-500'>Select the available colors for the product</span>
                    </div>

                    <button type="submit" className="cursor-pointer bg-[#171717] text-white py-2 my-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">{productInfo ? 'Edit Product' : 'Add Product'}</button>
                </form>
            </div>
        </div>
    )
}

export default AddProductForm
