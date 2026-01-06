import jwt from 'jsonwebtoken'

export const generateAccessToken = (data) => {
    try {
        const token = jwt.sign({id:data._id,role:data.role},process.env.JWT_SECRET,{expiresIn:'1d'})
        return token
    } catch (error) {
        console.log(error)
        res.status(401).json({message:"Unauthorized",status:false})
    }
}

export const validateAccessToken = (req,res,next)=>{
    try {
        const authHeader = req.headers?.authorization
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({message:"Unauthorized",status:false})
        } 
        const token = authHeader.split(" ")[1]
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.userId = decoded.id
        req.userRole = decoded.role
        next()
        
    } catch (error) {
        console.log(error)
        res.status(401).json({message:"Unauthorized",status:false})
    }
}

export const checkRole = (...role)=>{
    return (req,res,next)=>{
        if(!req.userRole !== !role.includes(req.user.role)){
            return res.status(403).json({message:"Forbidden: You do not have permission",status:false})
        }
        next()
    }
}