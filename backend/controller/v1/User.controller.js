import { generateAccessToken } from "../../middleware/GenerationToken"
import User from "../../models/User.model"
import bcrypt from "bcryptjs"

export const Login =async (req,res)=>{
    try {
        const {email, password} = req.body
        if(!email || !password ){
            return res.status(400).json({message:"All fields are required",status:false})
        }
        const checkUser = await User.findOne({email})
        if(!checkUser){
            return res.status(404).json({message:'User not found',status: false})
        }
        const passwordMatch = await bcrypt.compare(password,checkUser.password)
        if(!passwordMatch){
            return res.status(400).json({message:"Email or Password wrong",status:false})
        }
        const token = generateAccessToken(checkUser._id)
        res.status(200).json({message:"Login successfull",status:true, data: {token,checkUser}})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [Login]",status:false})
    }
}

export const Register = async (req,res)=>{
    try {
        const {name, email, password, confirmPassword} = req.body
        if(!name || !email || !password || !confirmPassword){
            return res.status(400).json({message:"All fields are required", status:false})
        }
        let checkPassword = password === confirmPassword
        if(!checkPassword){
            return res.status(400).json({message:"Password and Confirm Password not match", status:false})
        }
        const existedUser = await User.findOne({email})
        if(existedUser){
            return res.status(400).json({message:"User already exists",status:false})
        }
        const genSalt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,genSalt)
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        })
        res.status(201).json({message:"User registered successfully", status:true,data :newUser})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [Register]",status:false})
    }
}

export const GetUserById = async (req,res)=>{
    try {
        const userId = req.params.id
        if(!userId){
            return res.status(400).json({message:"User ID is required",status: false})
        }
        const user = await User.findById(userId).select("-password")
        if(!user){
            return res.status(404).json({message:"User not existd",status:false})
        }
        res.status(200).json({message:"Get user by ID successfull",status: true, data : user})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [GetUserById]",status:false})
    }
}

export const GetAllUsers = async (req,res)=>{
    try {
        const users = await User.find().select("-password")
        res.status(200).json({message:"Get all users successfull", status:true, data: users})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [GetAllUsers]",status:false})
    }
}

export const UpdateUserById = async (req,res)=>{
    try {
        const userId = req.params.id
        const {name, email,phone,address, role, status} = req.body
        if(!userId){
            return res.status(400).json({message:"User ID is required",status: false})
        }
        const user = await User.findByIdAndUpdate(userId,{
            name,
            email,
            phone,
            address,
            role,
            status
        }, {new: true}).select("-password")
        if(!user){
            return res.status(404).json({message:"User not existd",status:false})
        }
        res.status(200).json({message:"User updated successfully",status:true, data:user})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [UpdateUserById]",status:false})
    }
}

export const DeleteUserById = async (req,res)=>{  
    try {
        const userId = req.params.id
        if(!userId){
            return res.status(400).json({message:"User ID is required",status: false})
        }
        await User.findByIdAndDelete(userId)
        res.status(200).json({message:"User deleted successfully",status:true})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [DeleteUserById]",status:false})
    }  
}

