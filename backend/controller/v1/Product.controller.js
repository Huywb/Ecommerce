import Product from "../../models/Product.model.js";

export const GetAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json({message:"Get all products successfull", status:true, data: products})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [GetAllProducts]",status:false})
    }
}

export const GetProductById = async (req,res)=>{  
    try {
        const productId = req.params.id
        if(!productId){
            return res.status(400).json({message:"Product ID is required",status: false})
        }
        const product = await Product.findById(productId)
        if(!product){
            return res.status(404).json({message:"Product not existd",status:false})
        }
        res.status(200).json({message:"Get product by id successfull", status:true, data: product})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [GetProductById]",status:false})
    }
}

export const CreateProduct = async (req,res)=>{
    try {
        const { name, description, price, newArrival, category, stock, discount, colors, images } = req.body
        if(!name || !description || !price || !newArrival || !category || !stock || !colors || !images || images.length === 0){
            return res.status(400).json({message:"Name, description, price, newArrival, category, stock, colors and images are required", status:false})
        }
        const newProduct = await Product.create({
            name,
            description,
            price,  
            newArrival,
            category,
            stock: stock || 0,
            discount: discount || 0,
            colors,
            images
        })
        res.status(201).json({message:"Product created successfully", status:true, data: newProduct})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [CreateProduct]",status:false})
    }
}

export const UpdateProductById = async (req,res)=>{
    try {
        const productId = req.params.id
        const { name, description, price, newArrival, category, stock, discount, colors, images } = req.body
        if(!productId){
            return res.status(400).json({message:"Product ID is required",status: false})
        }
        const product = await Product.findByIdAndUpdate(productId,{
            name,
            description,
            price,
            newArrival,
            category,
            stock,
            discount,
            colors,
            images
        }, {new: true})
        if(!product){
            return res.status(404).json({message:"Product not existd",status:false})
        }
        res.status(200).json({message:"Product updated successfully", status:true, data: product})
    }
    catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [UpdateProductById]",status:false})
    }   
}

export const DeleteProductById = async (req,res)=>{
    try {
        const productId = req.params.id
        if(!productId){
            return res.status(400).json({message:"Product ID is required",status: false})
        }
        const product = await Product.findByIdAndDelete(productId)
        if(!product){
            return res.status(404).json({message:"Product not existd",status:false})
        }
        res.status(200).json({message:"Product deleted successfully", status:true})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [DeleteProductById]",status:false})
    }
}

