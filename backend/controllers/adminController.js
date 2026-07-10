// import jwt from "jsonwebtoken"



// export const adminLogin = async (req, res) => {
//   const { id, password } = req.body;

//   if (
//     id !== process.env.ADMIN_ID||
//     password !== process.env.ADMIN_PASSWORD
//   ) {
//     return res.status(401).json({
//       success: false,
//       message: "Invalid credentials"
//     });
//   }

//   const token = jwt.sign(
//     { type: "admin" },
//     process.env.JWT_SECRET,
//     { expiresIn: "7d" }
//   );
// res.cookie("token", token, {
//   httpOnly: true,
//   secure: true,
//   sameSite: "none",
//   maxAge: 7 * 24 * 60 * 60 * 1000,
// });
//   return res.status(200).json({
//     success: true,
//     message: "Admin login successful"
//   });
// };


// export const logoutAdmin=async (req,res) => {
//     try {
//         return res
//             .status(200)
//             .cookie("token", "", {
//                 maxAge: 0,
//                 httpOnly: true,
//                 sameSite: "strict"
//             })
//             .json({
//                 success: true,
//                 message: "Logged out successfully"
//             })

//     } catch (error) {
//         console.log(error)
//     }
  
// }

import jwt from "jsonwebtoken";

export const adminLogin = async (req, res) => {
  try {
    const { id, password } = req.body;

    if (
      id !== process.env.ADMIN_ID ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { type: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,       // HTTPS (Render)
      sameSite: "none",   // Frontend & Backend different domains
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Admin login successful",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const logoutAdmin = async (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 0,
    });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};