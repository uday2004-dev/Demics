import React, { useEffect, useState } from "react";
import {
    getInquiries,
    convertInquiry,
    deleteInquiry,
} from "../api/dashboardApi";

const Inquery = () => {
    const [inquiries, setInquiries] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchInquiries = async () => {
        try {
            const res = await getInquiries();

            setInquiries(res.data.inquiries || []);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleConvert = async (id) => {
        try {
            const res = await convertInquiry(id);

            alert(res.data.message);

            fetchInquiries();
        } catch (error) {
            console.log(error);
            alert("Failed to convert inquiry");
        }
    };
    const deleteInquies = async (id) => {
        try {
            const res = await deleteInquiry(id);

            alert(res.data.message);

            setInquiries((prev) =>
                prev.filter((item) => item._id !== id)
            );
        } catch (error) {
            console.log(error);
            alert("Failed to delete inquiry");
        }
    };
    useEffect(() => {
        fetchInquiries();
    }, []);

    if (loading) {
        return (
            <div className="bg-black min-h-screen flex items-center justify-center text-white">
                Loading...
            </div>
        );
    }

    return (
        <div className="bg-black min-h-screen text-white p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-3xl font-semibold">
                    Inquiries
                </h1>
            </div>

            {inquiries.length === 0 ? (
                <div className="flex justify-center items-center h-[60vh]">
                    <p className="text-gray-400 text-lg">
                        No Inquiries Found
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {inquiries.map((item) => (
                        <div
                            key={item._id}
                            className="bg-[#111111] border border-gray-700 rounded-3xl p-8"
                        >
                            {/* Message */}
                            <p className="text-white text-lg leading-8 mb-6">
                                {item.message}
                            </p>

                            {/* User Details */}
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold">
                                    {item.name}
                                </h3>

                                <p className="text-gray-400">
                                    {item.email}
                                </p>

                                {item.phone && (
                                    <p className="text-gray-400">
                                        {item.phone}
                                    </p>
                                )}

                                <p className="text-gray-500 text-sm">
                                    {item.formType}
                                </p>
                            </div>

                            {/* Status + Action */}
                            <div className="flex items-center justify-between mt-6">
                                <span
                                    className={`px-4 py-2 rounded-full text-sm font-medium ${item.status === "converted"
                                            ? "bg-green-600 text-white"
                                            : "bg-yellow-500 text-black"
                                        }`}
                                >
                                    {item.status}
                                </span>

                                {item.status === "pending" && (
                                    <button
                                        onClick={() => handleConvert(item._id)}
                                        className="bg-green-600 hover:bg-green-700 transition px-5 py-2 rounded-lg"
                                    >
                                        Convert
                                    </button>
                                )}

                                {item.status === "converted" && (
                                    <button
                                        onClick={() => deleteInquies(item._id)}
                                        className="bg-red-600 hover:bg-red-700 transition px-5 py-2 rounded-lg"
                                    >
                                        Delete
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Inquery;

