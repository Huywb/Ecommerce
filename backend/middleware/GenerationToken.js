import jwt from 'jsonwebtoken'

export const generateAccessToken = (id) => {
    try {
        const token = jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'})
        return token
    } catch (error) {
        console.log(error)
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
        next()
        
    } catch (error) {
        console.log(error)
        res.status(401).json({message:"Unauthorized",status:false})
    }
}