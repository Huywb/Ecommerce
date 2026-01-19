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
        let token
        if(req.cookies?.token){
            token = req.cookies.token
        }else if(
            req.headers?.authorization && req.headers.authorization.startsWith("Bearer ")
        ){
             token = req.headers.authorization.split(" ")[1];
        }
        
        if(!token){
            return res.status(401).json({message:"Unauthorized", status:false})
        }
        console.log(token)
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
        if(!role.includes(req.userRole)){
            return res.status(403).json({message:"Forbidden: You do not have permission",status:false})
        }
        next()
    }
}