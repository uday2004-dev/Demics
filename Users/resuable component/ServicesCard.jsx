import React, { useEffect, useState } from "react";
import axios from "axios";

const ServicesCard = () => {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      axios.defaults.withCredentials = true;

      const res = await axios.get(
        "http://localhost:3000/api/services/getAllServices"
      );

      if (res.data.success) {
        setServices(res.data.services);
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="grid gap-6">
      {services.map((service) => (
        <div key={service._id}>
          <div className="bg-purple-500 rounded-xl overflow-hidden h-[220px]">
            <img
              src={service.photo}
              alt={service.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex justify-between items-center mt-3">
            <h3 className="text-white text-lg">{service.name}</h3>

           
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;