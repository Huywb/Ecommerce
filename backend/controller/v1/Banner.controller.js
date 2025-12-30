import Banner from "../../models/Banner.model.js"

export const GetAllBanner = async(req,res)=>{
    try {
        const AllBanner = await Banner.find()
        res.status(200).json({message:"Get All Banner succesfully",status:true, data : AllBanner})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [GetAllBanner]",status:false})
    }
}

export const AddBanner = async(req,res) => {
    try {
        const {images} = req.body
        if(!images) {
            return res.status(400).json({message:"Images is empty",status:false})
        }
        const NewBanner = await Banner.create({
            imageUrl : images
        })
        res.status(200).json({message:"Add new Banner successfully",status:true,data: NewBanner})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [AddBanner]",status:false})
    }
}

export const DeleteBanner = async(req,res)=>{
    try {
        const BannerId = req.params.id
        if(!BannerId) {
            return res.status(400).json({message:"BannerId is undefined",status:false})
        }
        await Banner.findByIdAndDelete(BannerId)
        res.status(200).json({message:"BannerId delete successfully",status:true})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error [DeleteBanner]",status:false})
    }
}