// import cookies from "cookie-parser"
// import jwt from "jsonwebtoken"

// export const adminAuthMiddleware = (req, res, next) => {

     
//     try {
//           console.log(req.cookies); 
//     const token = req.cookies.token
//     if(!token){
//        return res.status(401).json({
//             success:false,
//             message:"admin is not authorized"
//         })
//     }

//     const decode=jwt.verify(
//         token,
//         process.env.JWT_SECRET
//     )


//     if(decode.type!=="admin"){
//         return res.status(403).json({
//             success:false,
//             message:"unauthorized"
//         })
//     }

//     req.admin=decode
//     next()


//     } catch (error) {
//         console.log(error)
//         return res.status(401).json(
//             {
//                 success: false,
//                 message: "user is not authenticated"
//             }
//         )
//     }
// }

// export default adminAuthMiddleware


import jwt from "jsonwebtoken";

const adminAuthMiddleware = (req, res, next) => {
  try {
    console.log("========== ADMIN AUTH ==========");
    console.log("Cookies:", req.cookies);

    const token = req.cookies.token;
    console.log("Token:", token);

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Admin is not authorized",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded:", decoded);

    if (decoded.type !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    req.admin = decoded;
    next();
  } catch (error) {
    console.log("AUTH ERROR:", error.message);

    return res.status(401).json({
      success: false,
      message: "User is not authenticated",
    });
  }
};

export default adminAuthMiddleware;