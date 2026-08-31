// import React, { useState } from "react";
// // import axios from "axios";
// import api from "../utls/axios";

// const Form = () => {
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

     

//           const res = await api.post("/api/inquery/create",data);


//       alert(res.data.message);

//       setData({
//         formType: "workingTogether",
//         name: "",
//         email: "",
//         message: "",
//         // phone: "",
//       });
//     } catch (error) {
//       console.log(error);

//       alert(
//         error.response?.data?.message ||
//         "Something went wrong"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (


//     <section className="bg-[#101110] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
//       <div className="w-full max-w-[1320px] mx-auto">
//         <h1 className=" font-awesome text-[34px] leading-tight sm:text-[42px] lg:text-5xl font-light mb-8 sm:mb-10">
//           Interested in <br />
//           <span className="font-normal">Working Together?</span>
//         </h1>

//         <form
//           onSubmit={submitHandler}
//           className="space-y-4 sm:space-y-6"
//         >
//           {/* Mobile = 1 Column | Tablet+ = 2 Columns */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//             <div className="bg-[#111] border border-gray-700 rounded-xl px-4 sm:px-6 py-4 sm:py-5">
//               <input
//                 type="text"
//                 name="name"
//                 value={data.name}
//                 onChange={handleChange}
//                 placeholder="Full Name*"
//                 className="w-full bg-transparent outline-none text-sm sm:text-base"
//                 required
//               />
//             </div>

//             <div className="bg-[#111] border border-gray-700 rounded-xl px-4 sm:px-6 py-4 sm:py-5">
//               <input
//                 type="email"
//                 name="email"
//                 value={data.email}
//                 onChange={handleChange}
//                 placeholder="Email*"
//                 className="w-full bg-transparent outline-none text-sm sm:text-base"
//                 required
//               />
//             </div>
//           </div>

//           <div className="bg-[#111] border border-gray-700 rounded-xl px-4 sm:px-6 py-4 sm:py-5">
//             <textarea
//               name="message"
//               value={data.message}
//               onChange={handleChange}
//               placeholder="Your Message For Us"
//               rows={4}
//               className="w-full bg-transparent outline-none resize-none text-sm sm:text-base"
//               required
//             />
//           </div>

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               disabled={loading}
//               className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition"
//             >
//               {loading ? "Submitting..." : "Submit"}
//             </button>
//           </div>


//         </form>
//       </div>
//     </section>
//   );
// };

// export default Form;


import React, { useState } from "react";
import api from "../utls/axios";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState("");

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post(
        "/api/inquery/create",
        data
      );

      alert(res.data.message);

      setData({
        name: "",
        email: "",
        message: "",
        phone: "",
      });

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

  const glowStyle = (field) => ({
    borderColor:
      focused === field
        ? "rgba(168,85,247,1)"
        : "rgb(75,85,99)",

    boxShadow:
      focused === field
        ? `
          0 0 5px rgba(168,85,247,1),
          0 0 15px rgba(168,85,247,0.9),
          0 0 30px rgba(168,85,247,0.7),
          0 0 50px rgba(168,85,247,0.4)
        `
        : "none",

    transition:
      "border-color 300ms ease, box-shadow 300ms ease",
  });

  return (
    <section className="bg-[#101110] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">

      <div className="w-full max-w-[1320px] mx-auto">

        {/* HEADING */}
        <h1
          className="
            font-awesome
            text-[34px]
            leading-tight
            sm:text-[42px]
            lg:text-5xl
            font-light
            mb-8
            sm:mb-10
          "
        >
          Interested in <br />

          <span className="font-normal">
            Working Together?
          </span>
        </h1>


        <form
          onSubmit={submitHandler}
          className="space-y-4 sm:space-y-6"
        >

          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

            {/* NAME */}
            <div
              style={glowStyle("name")}
              className="
                bg-[#111]
                border
                rounded-xl
                px-4
                sm:px-6
                py-4
                sm:py-5
              "
            >
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused("")}
                placeholder="Full Name*"
                className="
                  w-full
                  bg-transparent
                  outline-none
                  text-sm
                  sm:text-base
                  text-white
                  placeholder:text-gray-500
                "
                required
              />
            </div>


            {/* EMAIL */}
            <div
              style={glowStyle("email")}
              className="
                bg-[#111]
                border
                rounded-xl
                px-4
                sm:px-6
                py-4
                sm:py-5
              "
            >
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused("")}
                placeholder="Email*"
                className="
                  w-full
                  bg-transparent
                  outline-none
                  text-sm
                  sm:text-base
                  text-white
                  placeholder:text-gray-500
                "
                required
              />
            </div>

          </div>


          {/* MESSAGE */}
          <div
            style={glowStyle("message")}
            className="
              bg-[#111]
              border
              rounded-xl
              px-4
              sm:px-6
              py-4
              sm:py-5
            "
          >
            <textarea
              name="message"
              value={data.message}
              onChange={handleChange}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused("")}
              placeholder="Your Message For Us"
              rows={4}
              className="
                w-full
                bg-transparent
                outline-none
                resize-none
                text-sm
                sm:text-base
                text-white
                placeholder:text-gray-500
              "
              required
            />
          </div>


          {/* BUTTON */}
          <div className="flex justify-center">

            <button
              type="submit"
              disabled={loading}
              className="
                px-8
                py-3
                rounded-full
                bg-purple-600
                hover:bg-purple-700
                text-white
                transition-all
                duration-300
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading
                ? "Submitting..."
                : "Submit"}
            </button>

          </div>

        </form>

      </div>

    </section>
  );
};

export default Form;