import { deleteImage } from "../../middleware/Cloudinary-api.js"
import Logo from "../../models/Logo.model.js"

export const GetAllLogo = async(req,res)=>{
    try {
        const AllLogo = await Logo.find()
        res.status(200).json({message:"Get All Logo succesfully",status:true, data : AllLogo})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [GetAllLogo]",status:false})
    }
}

export const AddLogo = async(req,res) => {
    try {
        const {image} = req.body
        if(!image) {
            return res.status(400).json({message:"Images is empty",status:false})
        }
        const NewLogo = await Logo.create({
            image
        })
        res.status(201).json({message:"Add new Logo successfully",status:true,data: NewLogo})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [AddLogo]",status:false})
    }
}

export const DeleteLogo = async(req,res)=>{
    try {
        const LogoId = req.params.id
        if(!LogoId) {
            return res.status(400).json({message:"LogoId is undefined",status:false})
        }
        const logo = await Logo.findById(LogoId)
        if(logo && logo.active){
            return  res.status(400).json({message:"Cannot delete active logo",status:false})
        }
        if(logo && logo.image && logo.image.public_id){
            await deleteImage(logo.image.public_id)
        }
        await Logo.findByIdAndDelete(LogoId)
        res.status(200).json({message:"LogoId delete successfully",status:true})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [DeleteLogo]",status:false})
    }
}

export const ActiveLogo = async(req,res)=>{
    try {
        const Logoid = req.params.id
        if(!Logoid){
            return res.status(400).json({message:"Id of Logo is empty",status:false})
        }
        await Logo.updateMany({active: true}, {active: false})
        const activeLogo = await Logo.findByIdAndUpdate(Logoid,{active: true},{new:true})
        if(!activeLogo){
            return res.status(404).json({message:"Logo not existed",status:false})
        }
        res.status(200).json({message:"Active Logo successfully",status:true})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [DeleteLogo]",status:false})
    }
}