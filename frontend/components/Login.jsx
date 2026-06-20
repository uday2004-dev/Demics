import React, { useState } from "react";
import logo from "../src/assets/logo.png";
import { loginAdmin } from "../api/authApi";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [formData, setFormData] = useState({
        id: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await loginAdmin(formData);

            console.log(res.data);

            if (res.data.success) {
                alert("Login Successful");

                setFormData({
                    id: "",
                    password: "",
                });
                localStorage.setItem("isAdminLoggedIn", "true");
                navigate("/sideBar");
            }

        } catch (error) {
            console.log(error);
            alert(
                error.response?.data?.message || "Login Failed"
            );
        }
    };

    return (
        <div className="min-h-screen bg-[#1E1E1E] flex items-center justify-center">
            <div className="w-[90%] md:w-[700px] lg:w-[900px] h-[500px] bg-black flex items-center justify-center">

                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-sm flex flex-col items-center gap-4"
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="w-56 object-contain"
                    />

                    <h2 className="text-white text-2xl">LOGIN</h2>

                    <input
                        type="text"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        placeholder="Admin ID"
                        className="w-full border border-gray-500 bg-transparent text-white p-2 rounded"
                    />

                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full border border-gray-500 bg-transparent text-white p-2 rounded"
                    />

                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 rounded"
                    >
                        LOGIN
                    </button>
                </form>



            </div>
        </div>
    );
};

export default Login;