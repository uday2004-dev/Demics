// import React, { useEffect, useState } from "react";

// const Testimonial = () => {
//   const [testimonials, setTestimonials] = useState([]);

//   const fetchTestimonials = async () => {
//     try {
//       const res = await fetch(
//         "http://localhost:3000/api/testimonial/allTestimonial"
//       );

//       const data = await res.json();

//       setTestimonials(data.testimonials || []);
//     } catch (error) {
//       console.log("Error fetching testimonials:", error);
//     }
//   };

//   useEffect(() => {
//     fetchTestimonials();
//   }, []);

//   const marqueeTestimonials = [
//     ...testimonials,
//     ...testimonials,
//   ];

//   return (
//     <section className="py-20 bg-[#111111] overflow-hidden mx-">
//       <div className="space-y-8">

//         {/* Row 1 - Right to Left */}
//         <div className="overflow-hidden">
//           <div className="flex gap-8 animate-left">
//             {marqueeTestimonials.map((item, index) => (
//               <div
//                 key={`top-${item._id}-${index}`}
//                 className="min-w-[550px] bg-[#262626]/50 border border-white/20 rounded-[20px] p-8"
//               >
//                 <h3 className="text-[#c9a8ff] text-2xl mb-8">
//                   {item.testimonial}
//                 </h3>

//                 <p className="text-gray-300 leading-8 mb-12">
//                   {item.review}
//                 </p>

//                 <h4 className="text-[#c9a8ff] text-xl font-semibold">
//                   {item.name}
//                 </h4>

//                 <p className="text-gray-400">
//                   {item.position}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Row 2 - Left to Right */}
//         <div className="overflow-hidden">
//           <div className="flex gap-8 animate-right">
//             {marqueeTestimonials.map((item, index) => (
//               <div
//                 key={`bottom-${item._id}-${index}`}
//                 className="min-w-[550px] bg-[#262626]/50 border border-white/20 rounded-[20px] p-8"
//               >
//                 <h3 className="text-[#c9a8ff] text-2xl mb-8">
//                   {item.testimonial}
//                 </h3>

//                 <p className="text-gray-300 leading-8 mb-12">
//                   {item.review}
//                 </p>

//                 <h4 className="text-[#c9a8ff] text-xl font-semibold">
//                   {item.name}
//                 </h4>

//                 <p className="text-gray-400">
//                   {item.position}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Testimonial;

import React, { useEffect, useState } from "react";
import api from "../utls/axios";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  const fetchTestimonials = async () => {
    try {
      // const res = await fetch(
      //   "http://localhost:3000/api/testimonial/allTestimonial"
      // );
      const res = await api.get("/api/testimonial/allTestimonial");

      const data = await res.json();

      setTestimonials(data.testimonials || []);
    } catch (error) {
      console.log("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const marqueeTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-[#111111] py-16 lg:py-20 overflow-hidden">
      <div className="space-y-6 lg:space-y-8">

        {/* Row 1 */}
        <div className="overflow-hidden">
          <div className="flex gap-5 md:gap-6 lg:gap-8 animate-left">

            {marqueeTestimonials.map((item, index) => (
              <div
                key={`top-${item._id}-${index}`}
                className="
                  w-[88vw]
                  sm:w-[75vw]
                  md:w-[70vw]
                  lg:w-[42vw]
                  xl:w-[36vw]
                  flex-shrink-0
                  bg-[#262626]/50
                  border border-white/20
                  rounded-[22px]
                  p-6 md:p-8"
              >
                <h3 className="text-[#C9A8FF] text-xl md:text-2xl font-semibold leading-tight mb-5 break-words">
                  {item.testimonial}
                </h3>

                <p className="text-gray-300 text-sm md:text-base leading-7 mb-8">
                  {item.review}
                </p>

                <h4 className="text-[#C9A8FF] text-lg md:text-xl font-semibold">
                  {item.name}
                </h4>

                <p className="text-gray-400 text-sm md:text-base mt-1">
                  {item.position}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden">
          <div className="flex gap-5 md:gap-6 lg:gap-8 animate-right">

            {marqueeTestimonials.map((item, index) => (
              <div
                key={`bottom-${item._id}-${index}`}
                className="
                  w-[88vw]
                  sm:w-[75vw]
                  md:w-[70vw]
                  lg:w-[42vw]
                  xl:w-[36vw]
                  flex-shrink-0
                  bg-[#262626]/50
                  border border-white/20
                  rounded-[22px]
                  p-6 md:p-8"
              >
                <h3 className="text-[#C9A8FF] text-xl md:text-2xl font-semibold leading-tight mb-5 break-words">
                  {item.testimonial}
                </h3>

                <p className="text-gray-300 text-sm md:text-base leading-7 mb-8">
                  {item.review}
                </p>

                <h4 className="text-[#C9A8FF] text-lg md:text-xl font-semibold">
                  {item.name}
                </h4>

                <p className="text-gray-400 text-sm md:text-base mt-1">
                  {item.position}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;