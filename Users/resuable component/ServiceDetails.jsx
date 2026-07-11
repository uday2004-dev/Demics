import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import axios from "axios";
import api from "../utls/axios";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        // const res = await axios.get(
        //   `http://localhost:3000/api/services/${id}`
        // );
        const res = await api.get(`/api/services/${id}`,
            {
          withCredentials: true,
        }
        );
        setService(res.data.service);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) {
    return (
      <div className="text-white text-center py-20">
        Loading service...
      </div>
    );
  }

  if (!service) {
    return (
      <div className="text-white text-center py-20">
        Service not found
      </div>
    );
  }

  return (
    <div className="bg-[#161717] min-h-screen text-white px-6 py-10">

      {/* HERO SECTION */}
      <div className="max-w-5xl mx-auto text-center">
        <img
          src={service.photo}
          className="w-[300px] h-[300px] mx-auto rounded-2xl object-cover"
        />

        <h1 className="text-4xl md:text-6xl font-bold mt-6">
          {service.name}
        </h1>

        <p className="text-gray-300 mt-4 text-lg">
          {service.description}
        </p>
      </div>

      {/* CTA SECTION */}
      <div className="text-center mt-10">
        <button className="bg-[#8301FE] px-8 py-3 rounded-full hover:bg-[#6a00cc] transition">
          Contact Us for {service.name}
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;