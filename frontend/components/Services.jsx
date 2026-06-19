


import React, { useState } from "react";
import { createService, deleteService } from "../api/servicesApi";
import { useNavigate } from "react-router-dom";

const Services = () => {
    const [service, setService] = useState({
        name: "",
    });

    const [servicePic, setServicePic] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setService({
            ...service,
            [e.target.name]: e.target.value,
        });
    };
    const navigate=useNavigate()


    const createServices = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const data = new FormData();

            data.append("name", service.name);

            if (servicePic) {
                data.append("photo", servicePic);
            }

            const res = await createService(data);

            alert(res.data.message);

            setService({
                name: "",
            });

            setServicePic(null);
            navigate("/sideBar/services")
        } catch (error) {
            console.log(error);

            alert(
                error.response?.data?.message ||
                "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-black">
            <form
                onSubmit={createServices}
                className="flex flex-col gap-4 p-6 bg-[#1E1E1E] rounded-lg w-[400px]"
            >
                <h2 className="text-white text-2xl font-semibold">
                    Create Service
                </h2>

                <input
                    type="text"
                    name="name"
                    value={service.name}
                    onChange={handleChange}
                    placeholder="Service Name"
                    className="border border-gray-600 bg-transparent text-white p-3 rounded"
                />

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                        setServicePic(e.target.files[0])
                    }
                    className="text-white"
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-purple-600 text-white p-3 rounded"
                >
                    {loading ? "Creating..." : "Create Service"}
                </button>
            </form>
        </div>
    );
};

export default Services;