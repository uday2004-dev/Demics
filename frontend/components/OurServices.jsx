import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getServices, deleteService } from "../api/servicesApi";
import { MdOutlineAddCircle } from "react-icons/md";

const OurServices = () => {
  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);

      const res = await getServices();

      if (res.data.success) {
        setServices(res.data.services);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const dltServices = async (id) => {
    try {
      await deleteService(id);

      setServices((prev) =>
        prev.filter((service) => service._id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-black min-h-screen p-10">
      {/* Top Button */}
      <div className="flex justify-end mb-8">
        <button
          onClick={() => navigate("/sideBar/services/create")}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full cursor-pointer"
        >
  
          <MdOutlineAddCircle size={24} />
        </button>
      </div>

      {/* Cards */}
      {loading ? (
        <h1 className="text-white">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-8">
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
                <h3 className="text-white text-lg">
                  {service.name}
                </h3>

                <button
                  onClick={() => dltServices(service._id)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OurServices;


// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { getServices, deleteService } from '../api/servicesApi'


// const OurServices = () => {
//     const navigate = useNavigate()

//     const [services, setServices] = useState([])
//     const [loading, setLoading] = useState(false)

//     useEffect(() => {
//         fetchServices()
//     }, [])
//     const dltServices = async (id) => {
//         try {
//             const res = await deleteService(id);

//             alert(res.data.message);
//         } catch (error) {
//             console.log(error);
//             alert(
//                 error.response?.data?.message ||
//                 "Failed to delete service"
//             );
//         }
//     };

//     const fetchServices = async () => {
//         try {
//             setLoading(true)

//             const res = await getServices()

//             if (res.data.success) {
//                 setServices(res.data.services)
//             }
//         } catch (error) {
//             console.log(error)
//         } finally {
//             setLoading(false)
//         }
//     }



//     return (
//         <div className='bg-white flex items-col gap-6 '>
//             <button
//                 onClick={() => navigate("/sideBar/services/create")}
//             >
//                 Create Service
//             </button>

//             {loading ? (
//                 <h2>Loading...</h2>
//             ) : (
//                 services.map((service) => (
//                     <div key={service._id} className=''>
                       
//                         <img
//                             src={service.photo}
//                             alt={service.name}
//                             width="200"
//                         />
//                          <h3 className='inline '>{service.name}</h3>
//                         <button
//                         className='border border-[2px] rounded-half cursor-pointer'
//                             onClick={() => dltServices(service._id)}
//                         >
//                             Delete
//                         </button>
//                     </div>
//                 ))
//             )}


//         </div>
//     )
// }

// export default OurServices