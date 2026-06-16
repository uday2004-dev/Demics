import jwt from "jsonwebtoken"



export const adminLogin = async (req, res) => {
  const { id, password } = req.body;

  if (
    id !== process.env.ADMIN_ID||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials"
    });
  }

  const token = jwt.sign(
    { type: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: false
  });

  return res.status(200).json({
    success: true,
    message: "Admin login successful"
  });
};


export const logoutAdmin=async (req,res) => {
    try {
        return res
            .status(200)
            .cookie("token", "", {
                maxAge: 0,
                httpOnly: true,
                sameSite: "strict"
            })
            .json({
                success: true,
                message: "Logged out successfully"
            })

    } catch (error) {
        console.log(error)
    }
  
}