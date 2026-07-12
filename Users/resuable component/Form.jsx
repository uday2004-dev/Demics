import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

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

      // const res = await axios.post(
      //   "http://localhost:3000/api/inquery/create",
      //   data
      // );

          const res = await api.post("/api/inquery/create");

      alert(res.data.message);

      setData({
        formType: "workingTogether",
        name: "",
        email: "",
        message: "",
        // phone: "",
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

  return (
    // <section className="bg-[#161717] text-white py-20 px-6">
    //   <div className="w-full max-w-[1320px] mx-auto px-6 lg:px-12 xl:px-20">
    //     <h1 className="text-5xl font-light mb-10">
    //       Interested in <br />
    //       <span className="font-normal">
    //         Working Together?
    //       </span>
    //     </h1>

    //     <form
    //       onSubmit={submitHandler}
    //       className="space-y-6"
    //     >
    //       <div className="grid md:grid-cols-2 gap-6">
    //         <div className="bg-[#111] border border-gray-700 rounded-xl px-6 py-5">
    //           <input
    //             type="text"
    //             name="name"
    //             value={data.name}
    //             onChange={handleChange}
    //             placeholder="Full Name*"
    //             className="w-full bg-transparent outline-none"
    //             required
    //           />
    //         </div>

    //         <div className="bg-[#111] border border-gray-700 rounded-xl px-6 py-5">
    //           <input
    //             type="email"
    //             name="email"
    //             value={data.email}
    //             onChange={handleChange}
    //             placeholder="Email*"
    //             className="w-full bg-transparent outline-none"
    //             required
    //           />
    //         </div>
    //       </div>

    //       <div className="bg-[#111] border border-gray-700 rounded-xl px-6 py-5">
    //         <textarea
    //           name="message"
    //           value={data.message}
    //           onChange={handleChange}
    //           placeholder="Your Message For Us"
    //           rows="4"
    //           className="w-full bg-transparent outline-none resize-none"
    //           required
    //         />
    //       </div>

    //       <div className="flex justify-center">
    //         <button
    //           type="submit"
    //           disabled={loading}
    //           className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition"
    //         >
    //           {loading ? "Submitting..." : "Submit"}
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </section>

    <section className="bg-[#161717] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="w-full max-w-[1320px] mx-auto">
        <h1 className="text-[34px] leading-tight sm:text-[42px] lg:text-5xl font-light mb-8 sm:mb-10">
          Interested in <br />
          <span className="font-normal">Working Together?</span>
        </h1>

        <form
          onSubmit={submitHandler}
          className="space-y-4 sm:space-y-6"
        >
          {/* Mobile = 1 Column | Tablet+ = 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-[#111] border border-gray-700 rounded-xl px-4 sm:px-6 py-4 sm:py-5">
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="Full Name*"
                className="w-full bg-transparent outline-none text-sm sm:text-base"
                required
              />
            </div>

            <div className="bg-[#111] border border-gray-700 rounded-xl px-4 sm:px-6 py-4 sm:py-5">
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Email*"
                className="w-full bg-transparent outline-none text-sm sm:text-base"
                required
              />
            </div>
          </div>

          <div className="bg-[#111] border border-gray-700 rounded-xl px-4 sm:px-6 py-4 sm:py-5">
            <textarea
              name="message"
              value={data.message}
              onChange={handleChange}
              placeholder="Your Message For Us"
              rows={4}
              className="w-full bg-transparent outline-none resize-none text-sm sm:text-base"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>


        </form>
      </div>
    </section>
  );
};

export default Form;
