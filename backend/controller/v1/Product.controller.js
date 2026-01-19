import { deleteImage } from "../../middleware/Cloudinary-api.js";
import Product from "../../models/Product.model.js";

export const GetAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json({ message: "Get all products successfull", status: true, data: products })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error [GetAllProducts]", status: false })
    }
}

export const GetProductById = async (req, res) => {
    try {
        const productId = req.params.id
        if (!productId) {
            return res.status(400).json({ message: "Product ID is required", status: false })
        }
        const product = await Product.findById(productId)
        if (!product) {
            return res.status(404).json({ message: "Product not existd", status: false })
        }
        res.status(200).json({ message: "Get product by id successfull", status: true, data: product })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error [GetProductById]", status: false })
    }
}

export const CreateProduct = async (req, res) => {
    try {
        const { name, description, price, newArrival, category, sizes = [], discount = 0, variants } = req.body
        if (!name || !description || price === undefined || newArrival === undefined || !category || !Array.isArray(variants) || variants.length == 0) {
            return res.status(400).json({ message: "Name, description, price, newArrival, category and variant are required", status: false })
        }

        const newProduct = await Product.create({
            name,
            description,
            price,
            newArrival,
            category,
            discount,
            sizes,
            variants
        })
        res.status(201).json({ message: "Product created successfully", status: true, data: newProduct })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error [CreateProduct]", status: false })
    }
}

export const UpdateProductById = async (req, res) => {
    try {
        const productId = req.params.id
        const { name, description, price, newArrival, category, sizes = [], discount = 0, variants, removeImg = [] } = req.body
        if (!productId) {
            return res.status(400).json({ message: "Product ID is required", status: false })
        }
        const product = await Product.findByIdAndUpdate(productId, {
            name,
            description,
            price,
            newArrival,
            category,
            discount,
            sizes,
            variants
        }, { new: true })
        if (!product) {
            return res.status(404).json({ message: "Product not existd", status: false })
        }
        if (Array.isArray(removeImg) && removeImg.length > 0) {
            await Promise.all(removeImg.map((pblic_id) => (
                deleteImage(pblic_id)
            )))
        }
        res.status(200).json({ message: "Product updated successfully", status: true, data: product })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error [UpdateProductById]", status: false })
    }
}

export const DeleteProductById = async (req, res) => {
    try {
        const productId = req.params.id
        if (!productId) {
            return res.status(400).json({ message: "Product ID is required", status: false })
        }
        const product = await Product.findByIdAndDelete(productId)
        if (!product) {
            return res.status(404).json({ message: "Product not existd", status: false })
        }
        await Promise.all(product.variants.map((item) => (
            deleteImage(item.image.public_id)
        )))
        res.status(200).json({ message: "Product deleted successfully", status: true })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error [DeleteProductById]", status: false })
    }
}

