// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getServices, deleteService } from "../api/servicesApi";
// import { MdOutlineAddCircle } from "react-icons/md";

// const OurServices = () => {
//   const navigate = useNavigate();

//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const fetchServices = async () => {
//     try {
//       setLoading(true);

//       const res = await getServices();

//       if (res.data.success) {
//         setServices(res.data.services);
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const dltServices = async (id) => {
//     try {
//       await deleteService(id);

//       setServices((prev) =>
//         prev.filter((service) => service._id !== id)
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="bg-black min-h-screen p-10">
//       {/* Top Button */}
//       <div className="flex justify-end mb-8">
//         <button
//           onClick={() => navigate("/sideBar/services/create")}
//           className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full cursor-pointer"
//         >
  
//           <MdOutlineAddCircle size={24} />
//         </button>
//       </div>

//       {/* Cards */}
//       {loading ? (
//         <h1 className="text-white">Loading...</h1>
//       ) : (
//         <div className="grid grid-cols-3 gap-8">
//           {services.map((service) => (
//             <div key={service._id}>
//               <div className="bg-purple-500 rounded-xl overflow-hidden h-[220px]">
//                 <img
//                   src={service.photo}
//                   alt={service.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <div className="flex justify-between items-center mt-3">
//                 <h3 className="text-white text-lg">
//                   {service.name}
//                 </h3>

//                 <button
//                   onClick={() => dltServices(service._id)}
//                   className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full cursor-pointer"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default OurServices;



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getServices, deleteService } from "../api/servicesApi";
import { MdOutlineAddCircle, MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

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

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-white text-3xl font-semibold">
            Our Services
          </h1>

          <p className="text-gray-400 mt-1">
            Manage all your services
          </p>
        </div>

        <button
          onClick={() => navigate("/sideBar/services/create")}
          className="
            flex items-center gap-2
            bg-purple-600
            hover:bg-purple-700
            text-white
            px-5 py-3
            rounded-full
            cursor-pointer
            transition
          "
        >
          <MdOutlineAddCircle size={24} />
          <span>Add Service</span>
        </button>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <h1 className="text-white text-xl">
            Loading...
          </h1>
        </div>
      ) : services.length === 0 ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <p className="text-gray-400 text-lg">
            No services found
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service) => (
            <div
              key={service._id}
              className="
                bg-[#151515]
                border border-purple-500/30
                rounded-2xl
                overflow-hidden
                shadow-[0_0_15px_rgba(168,85,247,0.12)]
                hover:border-purple-500/60
                transition
              "
            >

              {/* Image */}
              <div className="h-[220px] bg-purple-500 overflow-hidden">
                <img
                  src={service.photo}
                  alt={service.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    hover:scale-105
                    transition duration-300
                  "
                />
              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-white text-xl font-medium">
                  {service.name}
                </h3>

                {/* Buttons */}
                <div className="flex gap-3 mt-5">

                  {/* Edit */}
                  <button
                    onClick={() =>
                      navigate(
                        `/sideBar/services/edit/${service._id}`
                      )
                    }
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      border
                      border-purple-500
                      text-purple-400
                      hover:bg-purple-500
                      hover:text-white
                      px-4
                      py-2.5
                      rounded-lg
                      cursor-pointer
                      transition
                    "
                  >
                    <MdEdit size={20} />
                    Edit
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => dltServices(service._id)}
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      bg-purple-600
                      hover:bg-purple-700
                      text-white
                      px-4
                      py-2.5
                      rounded-lg
                      cursor-pointer
                      transition
                    "
                  >
                    <MdDeleteOutline size={20} />
                    Delete
                  </button>

                </div>
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default OurServices;