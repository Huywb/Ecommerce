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
    const [preVariants, setPreVariants] = useState([])
    const [category, setCategory] = useState()
    const { register, handleSubmit, reset } = useForm()
    const [mode, setMode] = useState('Add')
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const getDeletedImages = (selectedColors = [], preVariants = []) => {
        const deleteImages = []
        const updateImages = []
        preVariants.forEach(pre => {
            const current = selectedColors.find(cur => cur.color === pre.color)
            if (!current) {
                if (pre.image) {
                    deleteImages.push(pre.image)
                    return
                }
            }
            if (current.image instanceof File && pre.image?.public_id) {
                deleteImages.push(pre.image)
                updateImages.push({ color: current.color, stock: current.stock, image: current.image })
            }
            if (!current.image && pre.image) {
                deleteImages.push(pre.image)
            }
        })

        selectedColors.forEach(pre => {
            const existed = preVariants.find(cur => pre.color === cur.color)

            if (!existed && pre.image instanceof File) {
                updateImages.push({ color: pre.color, stock: pre.stock, image: pre.image })
            }
        })
        return {
            deleteImages,
            updateImages
        }
    }

    useEffect(() => {
        const fetchCategory = async () => {
            const res = await AxiosHttp.get('/category/all')
            console.log('res', res)
            if (res.data.status == true) {
                setCategory(res.data.data)
            }
        }
        fetchCategory()
    }, [])

    console.log('cate',category)
    useEffect(() => {
        if (productInfo) {
            reset({
                name: productInfo[0]?.name || '',
                description: productInfo[0]?.description || '',
                price: productInfo[0]?.price || '',
                category: productInfo[0]?.category || '',
                discount: productInfo[0]?.discount || '',
                newArrival: productInfo[0]?.newArrival || false,
                sizes: productInfo[0]?.sizes || [],
            })
            setSelectedColors(productInfo[0].variants)
            setPreVariants(productInfo[0].variants)
            setMode('Edit')
        }
    }, [productInfo])


    const onSubmit = async (data) => {
        try {
            console.log('data', data)
            console.log('image', selectedColors)
            if (!Array.isArray(selectedColors) || selectedColors.length === 0) {
                console.log('array', 343)
                return
            }
            console.log('submit', selectedColors)
            console.log('submit', mode)
            setLoading(true)

            if (mode === 'Add') {
                console.log('add', 123)
                const uploadList = await Promise.all(
                    selectedColors.map(async (item) => {
                        if (!item.image) return null

                        const uploadRes = await uploadToCloudinary(item.image)

                        return {
                            color: item.color,
                            image: [
                                {
                                    url: uploadRes.secure_url,
                                    public_id: uploadRes.public_id
                                }
                            ],
                            stock: item.stock || 0
                        }
                    })
                )

                const finalUploadList = uploadList.filter(Boolean)
                const Alldata = { ...data, variants: finalUploadList }
                const res = await AxiosHttp.post('/product/create', Alldata)
                if (!res.data.status) {
                    toast.error(res.message)
                    return
                }
                toast.success("Add new product successfully")
                setLoading(false)
                navigate(0)
                handleToggleClose()
            } else {
                const { deleteImages, updateImages } = getDeletedImages(selectedColors, preVariants)
                const uploadList = await Promise.all(
                    updateImages.map(async (item) => {
                        if (!item.image) return null

                        const uploadRes = await uploadToCloudinary(item.image)

                        return {
                            color: item.color,
                            image: [
                                {
                                    url: uploadRes.secure_url,
                                    public_id: uploadRes.public_id
                                }
                            ],
                            stock: Number(item.stock) || 0
                        }
                    })
                )

                const finalUploadList = uploadList.filter(Boolean)
                console.log('finalUploadList', finalUploadList)
                const compareImage = selectedColors.filter((item) => (!(item.image instanceof File) && item.color))
                console.log('compareImage', compareImage)
                const Alldata = { ...data, variants: [...finalUploadList, ...compareImage], removeImg: deleteImages }
                console.log('Alldata', Alldata)
                const res = await AxiosHttp.patch(`/product/update/${productInfo[0]._id}`, Alldata)
                if (!res.data.status) {
                    toast.error(res.message)
                    return
                }
                toast.success("Update user successfully")
                setLoading(false)
                navigate(0)
                handleToggleClose()
            }
            console.log('reset', 111)
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
            console.log('error', error)
            toast.error(error)
            setLoading(false)

        }
    }


    const handleColorChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedColors((prev) => [...prev, { color: value, stock: 0, image: '' }]);
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
        ToggleShowAddProductForm(false)
        setMode("Add")
    }
    return (
        <div className={`fixed inset-0 z-50  flex text-white transition-opacity duration-300 ${showAddProductForm ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div onClick={() => handleToggleClose()} className="absolute inset-0 bg-black/50" />
            <div className={`relative overflow-y-auto no-scrollbar ml-auto h-full w-[400px] bg-[#0b0b0b] border-l border-gray-800 transform transition-transform duration-300 ease-in-out
                ${showAddProductForm ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-between items-center p-4">
                    <h2 className="text-xl font-semibold">{mode === 'Add' ? 'Add Product' : 'Edit Product'}</h2>
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
                                category?.map((item, index) => (
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
                                        <input type="checkbox" value={item.value} checked={selectedColors.some(data => data.color === item.value)} onChange={(e) => handleColorChange(e)} className=' checked:accent-[#171717] border border-gray-600 w-3' />
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
                                            item.image instanceof File ? <img src={URL.createObjectURL(item.image)} alt="product image" className="w-10 h-10 object-cover rounded" /> : item.image?.[0]?.url ? <img src={item.image[0].url} alt="product image" className="w-10 h-10 object-cover rounded" /> : <MdOutlineAddBox size={24} className='text-gray-600 hover:text-gray-200 transition-all duration-300' />
                                        }
                                    </label>
                                    <div className='flex gap-2 w-1/2'>
                                        <label>Stock</label>
                                        <input type="number" value={item.stock} onChange={(e) => setSelectedColors((prev) => prev.map((colorItem) => colorItem.color == item.color ? { ...colorItem, stock: e.target.value } : colorItem))} placeholder='0' className='w-[90%] border focus:ring-1 ring-gray-600 border-gray-600 outline-none p-2 rounded-lg bg-[#171717]' />
                                    </div>
                                </div>
                            )
                            )
                        }
                        <div className='flex gap-2'>

                        </div>
                        <span className='text-gray-500'>Select the available colors for the product</span>
                    </div>

                    <button type="submit" disabled={loading} className={`${loading ? 'cursor-not-allowed' : 'cursor-pointer'}  bg-[#171717] text-white py-2 my-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300`}>{loading ? 'Submiting...' : productInfo ? 'Edit Product' : 'Add Product'}</button>
                </form>
            </div>
        </div>
    )
}

export default AddProductForm
