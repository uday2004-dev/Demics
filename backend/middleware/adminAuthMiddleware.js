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
    console.log("METHOD:", req.method);
    console.log("URL:", req.originalUrl);
    console.log("COOKIES:", req.cookies);
    console.log("TOKEN:", req.cookies?.token);

    const token = req.cookies?.token;

    if (!token) {
      console.log("❌ TOKEN NOT FOUND");

      return res.status(401).json({
        success: false,
        message: "admin is not authorized",
      });
    }

    const decode = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    console.log("DECODED:", decode);

    if (decode.type !== "admin") {
      return res.status(403).json({
        success: false,
        message: "unauthorized",
      });
    }

    req.admin = decode;

    console.log("✅ ADMIN AUTH SUCCESS");

    next();

  } catch (error) {
    console.log("🔥 AUTH ERROR:", error);

    return res.status(401).json({
      success: false,
      message: "user is not authenticated",
    });
  }
};

export default adminAuthMiddleware;