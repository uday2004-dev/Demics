import cookies from "cookie-parser"
import jwt from "jsonwebtoken"

export const adminAuthMiddleware = (req, res, next) => {
    try {
    const token = req.cookies.token
    if(!token){
       return res.status(401).json({
            success:false,
            message:"admin is not authorized"
        })
    }

    const decode=jwt.verify(
        token,
        process.env.JWT_SECRET
    )


    if(decode.type!=="admin"){
        return res.status(403).json({
            success:false,
            message:"unauthorized"
        })
    }

    req.admin=decode
    next()


    } catch (error) {
        console.log(error)
        return res.status(401).json(
            {
                success: false,
                message: "user is not authenticated"
            }
        )
    }
}

export default adminAuthMiddleware