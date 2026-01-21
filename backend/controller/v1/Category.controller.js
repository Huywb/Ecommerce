import Category from "../../models/Category.model.js"


export const GetCategoryById = async(req,res)=>{
    try {
        const id = req.params.id
        if(!id){
            return res.status(400).json({message:"Id of category is empty",status: false})
        }
        const category = await Category.findById(id)
        if(!category){
            return res.status(400).json({message:"Category not existed", status:false})
        }
        res.status(200).json({message:"Get Category by ID successfully",status: false, data: category})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [GetCategoryById]",status:false})
    }
}

export const GetAllCategory = async(req,res)=>{
    try {
        const allCategory = await Category.find()
        console.log(allCategory)
        res.status(200).json({message:"Get all Category successfully",status:true, data : allCategory})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [GetAllCategory]",status:false})
    }
}

export const AddCategory = async(req,res)=>{
    try {
        const {name} = req.body
        if(!name){
            return res.status(400).json({message:"Name of category is empty",status:false})
        }
        const newCategory = await Category.create({name})
        res.status(201).json({message:"Add new category successfully",status: true, data: newCategory})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [AddCategory]",status:false})
    }
}

export const UpdateCategory = async(req,res)=>{
    try {
        const id = req.params.id
        const {name} = req.body
        if(!id){
            return res.status(400).json({message:"Id of category is empty",status: false})
        }
        if(!name){
            return res.status(400).json({message:"Name of category is empty",status: false})
        }
        const updateCategory = await Category.findByIdAndUpdate(id,name, {new: true})
        res.status(200).json({message:"Update category successfully",status:true, data: updateCategory})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [UpdateCategory]",status:false})
    }
}

export const DeleteCategory = async(req,res)=>{
    try {
        const id = req.params.id
        if(!id){
            return res.status(400).json({message:"Id of category is empty",status:false})
        }
        await Category.findByIdAndDelete(id)
        res.status(200).json({message:"Delete Category successfully",status:true})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [DeleteCategory]",status:false})
    }
}