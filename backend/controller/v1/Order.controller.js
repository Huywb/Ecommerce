import { v4 as uuidv4 } from 'uuid';
import Order from '../../models/Order.model.js';

export const AddOrder = async(req,res)=>{
    try {
        const {userId,products,total,paymentMethod} = req.body
        if(!userId || !products || !total || !paymentMethod){
            return res.status(400).json({message:"All filed are required",status:false})
        }
        let orderCode = 'ODC' + '-' + uuidv4()
        const newOrder = await Order.create(
            {
                orderCode,
                userId,
                products,
                total,
                paymentMethod,
            }
        ) 
        if(!newOrder){
            return res.status(400).json({message:"Something wrong went create Order",status:false})
        }
        res.status(201).json({message:"Add new Order Successfully",status:true, data : newOrder})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [AddOrder]",status:false})
    }
}

export const GetOrderById = async(req,res)=>{
    try {
        const id = req.params.id
        if(!id){
            return res.status(400).json({message:"Id is empty",status:false})
        }        
        const checkOrder = await Order.findById(id)
        if(!checkOrder){
            return res.status(400).json({message:"Order is not existed",status : false})
        }
        res.status(200).json({message:"Get Order by Id successfully", status:true, data : checkOrder})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [GetOrderById]",status:false})
    }
}

export const GetAllOrder = async(req,res)=>{
    try {
        const allOrder = await Order.find()
        if(!allOrder){
            return res.status(400).json({message:"Order is empty",status:false})
        }
        res.status(200).json({message:"Get All Order successfully",status:true, data: allOrder})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [GetAllOrder]",status:false})
    }
}

export const UpdateOrderById = async(req,res)=>{
    try {
        const id = req.params.id
        const {shippingStatus, paymentStatus} =req.body

        if(!id){
            return res.status(400).json({message:"Order Id is empty",status:false})
        }
        const checkOrder = await Order.findById(id)
        if(!checkOrder){
            return res.status(400).json({message:"Order is not existed",status:false})
        }
        const updateOrder = await Order.findByIdAndUpdate(id,{
            shippingStatus,
            paymentStatus
        },{new: true})
        if(!updateOrder){
            return res.status(400).json({message:"Some thing wrong went update Order ",status:false})
        }
        res.status(200).json({message:"Update Order By id successfully",status:true, data: updateOrder})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [UpdatgeOrderById]",status:false})
    }
}

export const DeleteOrderByid = async(req,res)=>{
    try {
        const id = req.params.id
        if(!id){
            return res.status(400).json({message:"Order id is empty",status:false})
        }
        const deleteOrder = await Order.findByIdAndDelete(id)
        if(!deleteOrder){
            return res.status(400).json({message:"Some thing wrong went delete order",status:false})
        }
        res.status(200).json({message:"Delete Order by Id successfully",status:true, deleteOrder})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [DeelteOrderByid]",status:false})
    }
}