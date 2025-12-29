import Logo from "../../models/Logo.model"

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
        const {imageUrl} = req.body
        if(!imageUrl) {
            return res.status(400).json({message:"Images is empty",status:false})
        }
        const NewLogo = await Logo.create({
            imageUrl
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
        await Logo.updateMany({},{active: false},{new:true})
        await Logo.findByIdAndUpdate(id,{active: true},{new:true})
        res.status(200).json({message:"Active Logo successfully",status:true})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [DeleteLogo]",status:false})
    }
}