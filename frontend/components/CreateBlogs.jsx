// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { GrGallery } from "react-icons/gr";
// import { getServices } from "../api/servicesApi";
// import { createBlog } from "../api/blogApi";

// const emptySection = () => ({ heading: "", description: "", files: [] });

// const CreateBlog = () => {
//   const navigate = useNavigate();

//   const [services, setServices] = useState([]);

//   const [formData, setFormData] = useState({
//     title: "",
//     heading: "",
//     description: "",
//     services: "",
//   });

//   const [photo, setPhoto] = useState(null);
//   const [sections, setSections] = useState([emptySection()]);

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const fetchServices = async () => {
//     try {
//       const res = await getServices();
//       setServices(res.data.services || res.data.data || []);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   // ---------- Sections ----------
//   const addSection = () => setSections((prev) => [...prev, emptySection()]);

//   const removeSection = (index) =>
//     setSections((prev) => prev.filter((_, i) => i !== index));

//   const handleSectionChange = (index, field, value) =>
//     setSections((prev) =>
//       prev.map((s, i) => (i === index ? { ...s, [field]: value } : s))
//     );

//   const removeSectionFile = (sectionIndex, fileIndex) =>
//     setSections((prev) =>
//       prev.map((s, i) =>
//         i === sectionIndex
//           ? { ...s, files: s.files.filter((_, fi) => fi !== fileIndex) }
//           : s
//       )
//     );

//   // ---------- Submit ----------
//   const handleForm = async (e) => {
//     e.preventDefault();

//     try {
//       const data = new FormData();

//       data.append("title", formData.title);
//       data.append("heading", formData.heading);
//       data.append("description", formData.description);
//       data.append("services", formData.services);

//       if (photo) {
//         data.append("picture", photo);
//       }

//       // files JSON me nahi ja sakti, isliye sirf heading + description bhejo
//       data.append(
//         "sections",
//         JSON.stringify(
//           sections.map(({ heading, description }) => ({ heading, description }))
//         )
//       );

//       // har section ki pictures alag field name se
//       sections.forEach((s, i) => {
//         s.files.forEach((file) => data.append(`sectionPictures_${i}`, file));
//       });

//       const res = await createBlog(data);

//       alert(res.data.message);

//       setFormData({ title: "", heading: "", description: "", services: "" });
//       setPhoto(null);
//       setSections([emptySection()]);

//       navigate("/sideBar/blogs");
//     } catch (error) {
//       console.log(error);
//       alert(error.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div className="bg-black min-h-screen p-8 text-white">
//       <form onSubmit={handleForm} className="max-w-6xl mx-auto">
//         <h2 className="text-xl mb-8 font-medium">Adding New Blog</h2>

//         <div className="grid grid-cols-2 gap-8">
//           {/* Left Section */}
//           {/* <div className="flex flex-col gap-6">
//             <div>
//               <label className="block mb-2">Blog Title*</label>
//               <div>
//                 <label className="block mb-2">Blog Heading*</label>
              
//                 <input
//                   type="text"
//                   name="heading"
//                   value={formData.heading}
//                   onChange={handleChange}
//                   placeholder="Enter blog heading"
//                   className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none"
//                 />
//               </div>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 placeholder="Enter blog title"
//                 className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none"
//               />
//             </div>

//             <div>
//               <label className="block mb-2">Select Service*</label>
//               <select
//                 name="services"
//                 value={formData.services}
//                 onChange={handleChange}
//                 className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none"
//               >
//                 <option value="" className="text-black">
//                   Select Service
//                 </option>
//                 {services.map((service) => (
//                   <option
//                     key={service._id}
//                     value={service._id}
//                     className="text-black"
//                   >
//                     {service.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div> */}

//           <div className="flex flex-col gap-6">
//             {/* Blog Title */}
//             <div>
//               <label className="block mb-2">Blog Title*</label>
//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 placeholder="Enter blog title"
//                 className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none"
//               />
//             </div>

//             {/* Blog Heading (added for showing heading) */}
//             <div>
//               <label className="block mb-2">Blog Heading*</label>
//               <input
//                 type="text"
//                 name="heading"
//                 value={formData.heading}
//                 onChange={handleChange}
//                 placeholder="Enter blog heading"
//                 className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none"
//               />
//             </div>

//             {/* Select Service */}
//             <div>
//               <label className="block mb-2">Select Service*</label>
//               <select
//                 name="services"
//                 value={formData.services}
//                 onChange={handleChange}
//                 className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none"
//               >
//                 <option value="" className="text-black">
//                   Select Service
//                 </option>
//                 {services.map((service) => (
//                   <option
//                     key={service._id}
//                     value={service._id}
//                     className="text-black"
//                   >
//                     {service.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           {/* Right Section (cover picture) */}
//           <div>
//             <label
//               htmlFor="picture"
//               className="w-full h-[320px] rounded-2xl bg-purple-500 flex items-center justify-center cursor-pointer overflow-hidden"
//             >
//               {photo ? (
//                 <img
//                   src={URL.createObjectURL(photo)}
//                   alt="preview"
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <div className="text-6xl">
//                   <GrGallery />
//                 </div>
//               )}
//             </label>

//             <input
//               id="picture"
//               type="file"
//               accept="image/*"
//               className="hidden"
//               onChange={(e) => setPhoto(e.target.files[0])}
//             />
//           </div>
//         </div>

//         {/* Intro Description */}
//         <div className="mt-8">
//           <label className="block mb-2">Description*</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             placeholder="Enter blog intro description"
//             className="w-full h-40 bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none resize-none"
//           />
//         </div>

//         {/* Sections */}
//         <div className="mt-8">
//           <div className="flex items-center justify-between mb-4">
//             <label className="block">Headings & Descriptions*</label>
//             <button
//               type="button"
//               onClick={addSection}
//               className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm"
//             >
//               + Add Heading
//             </button>
//           </div>

//           <div className="flex flex-col gap-6">
//             {sections.map((section, index) => (
//               <div
//                 key={index}
//                 className="border border-gray-700 rounded-xl p-4"
//               >
//                 <div className="flex justify-between items-center mb-3">
//                   <span className="text-sm text-gray-400">
//                     Section {index + 1}
//                   </span>
//                   {sections.length > 1 && (
//                     <button
//                       type="button"
//                       onClick={() => removeSection(index)}
//                       className="text-red-400 text-sm"
//                     >
//                       Remove
//                     </button>
//                   )}
//                 </div>

//                 <input
//                   type="text"
//                   value={section.heading}
//                   onChange={(e) =>
//                     handleSectionChange(index, "heading", e.target.value)
//                   }
//                   placeholder="Enter heading"
//                   className="w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none mb-3"
//                 />

//                 <textarea
//                   value={section.description}
//                   onChange={(e) =>
//                     handleSectionChange(index, "description", e.target.value)
//                   }
//                   placeholder="Enter description for this heading"
//                   className="w-full h-32 bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none resize-none"
//                 />

//                 {/* Section pictures */}
//                 <input
//                   type="file"
//                   accept="image/*"
//                   multiple
//                   onChange={(e) =>
//                     handleSectionChange(index, "files", [
//                       ...section.files,
//                       ...Array.from(e.target.files),
//                     ])
//                   }
//                   className="mt-3 text-sm text-gray-400"
//                 />

//                 {section.files.length > 0 && (
//                   <div className="flex gap-3 mt-3 flex-wrap">
//                     {section.files.map((file, fi) => (
//                       <div key={fi} className="relative">
//                         <img
//                           src={URL.createObjectURL(file)}
//                           alt="preview"
//                           className="w-20 h-20 object-cover rounded-lg"
//                         />
//                         <button
//                           type="button"
//                           onClick={() => removeSectionFile(index, fi)}
//                           className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full text-xs leading-5"
//                         >
//                           ×
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="mt-8 bg-purple-600 hover:bg-purple-700 transition px-8 py-3 rounded-lg font-medium"
//         >
//           Create Blog
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateBlog;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrGallery } from "react-icons/gr";
import { getServices } from "../api/servicesApi";
import { createBlog } from "../api/blogApi";

const emptySection = () => ({ heading: "", description: "", files: [] });

const inputClass =
  "w-full bg-transparent border border-gray-600 rounded-lg px-4 py-3 outline-none";

// object URL ek baar banta hai aur unmount pe release hota hai (memory leak nahi)
const FilePreview = ({ file, className }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const objectUrl = URL.createObjectURL(file);
    setUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return url ? <img src={url} alt="preview" className={className} /> : null;
};

const CreateBlog = () => {
  const navigate = useNavigate();

  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    heading: "",
    description: "",
    services: "",
  });
  const [photo, setPhoto] = useState(null);
  const [sections, setSections] = useState([emptySection()]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await getServices();
      setServices(res.data.services || res.data.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ---------- Sections ----------
  const addSection = () => setSections((prev) => [...prev, emptySection()]);

  const removeSection = (index) =>
    setSections((prev) => prev.filter((_, i) => i !== index));

  const handleSectionChange = (index, field, value) =>
    setSections((prev) =>
      prev.map((s, i) => (i === index ? { ...s, [field]: value } : s))
    );

  const addSectionFiles = (index, e) => {
    const picked = Array.from(e.target.files);
    e.target.value = ""; // taaki same file dobara bhi select ho sake
    setSections((prev) =>
      prev.map((s, i) =>
        i === index ? { ...s, files: [...s.files, ...picked] } : s
      )
    );
  };

  const removeSectionFile = (sectionIndex, fileIndex) =>
    setSections((prev) =>
      prev.map((s, i) =>
        i === sectionIndex
          ? { ...s, files: s.files.filter((_, fi) => fi !== fileIndex) }
          : s
      )
    );

  // ---------- Validation (backend ke rules jaisa) ----------
  const validate = () => {
    if (!formData.title.trim()) return "Blog title is required";
    if (!formData.heading.trim()) return "Blog heading is required";
    if (!formData.services) return "Please select a service";
    if (!photo) return "Cover picture is required";
    if (!formData.description.trim()) return "Description is required";

    const hasValidSection = sections.some(
      (s) => s.heading.trim() && s.description.trim()
    );
    if (!hasValidSection) {
      return "Add at least one heading with description";
    }
    return null;
  };

  // ---------- Submit ----------
  const handleForm = async (e) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      alert(error);
      return;
    }

    try {
      setSubmitting(true);

      const data = new FormData();

      data.append("title", formData.title.trim());
      data.append("heading", formData.heading.trim());
      data.append("description", formData.description);
      data.append("services", formData.services);
      data.append("picture", photo);

      // files JSON me nahi ja sakti, isliye sirf heading + description bhejo
      data.append(
        "sections",
        JSON.stringify(
          sections.map(({ heading, description }) => ({ heading, description }))
        )
      );

      // har section ki pictures (optional) alag field name se
      sections.forEach((s, i) => {
        s.files.forEach((file) => data.append(`sectionPictures_${i}`, file));
      });

      const res = await createBlog(data);

      alert(res.data.message);

      setFormData({ title: "", heading: "", description: "", services: "" });
      setPhoto(null);
      setSections([emptySection()]);

      navigate("/sideBar/blogs");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-black min-h-screen p-8 text-white">
      <form onSubmit={handleForm} className="max-w-6xl mx-auto">
        <h2 className="text-xl mb-8 font-medium">Adding New Blog</h2>

        <div className="grid grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="flex flex-col gap-6">
            <div>
              <label className="block mb-2">Blog Title*</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter blog title"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block mb-2">Blog Heading*</label>
              <input
                type="text"
                name="heading"
                value={formData.heading}
                onChange={handleChange}
                placeholder="Enter blog heading"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block mb-2">Select Service*</label>
              <select
                name="services"
                value={formData.services}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="" className="text-black">
                  Select Service
                </option>
                {services.map((service) => (
                  <option
                    key={service._id}
                    value={service._id}
                    className="text-black"
                  >
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Right Section (cover picture) */}
          <div>
            <label
              htmlFor="picture"
              className="w-full h-[320px] rounded-2xl bg-purple-500 flex items-center justify-center cursor-pointer overflow-hidden"
            >
              {photo ? (
                <FilePreview
                  file={photo}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-6xl">
                  <GrGallery />
                </div>
              )}
            </label>

            <input
              id="picture"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setPhoto(e.target.files[0] || null)}
            />
          </div>
        </div>

        {/* Intro Description */}
        <div className="mt-8">
          <label className="block mb-2">Description*</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter blog intro description"
            className={`${inputClass} h-40 resize-none`}
          />
        </div>

        {/* Sections */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <label className="block">Headings & Descriptions*</label>
            <button
              type="button"
              onClick={addSection}
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm"
            >
              + Add Heading
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-xl p-4"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-400">
                    Section {index + 1}
                  </span>
                  {sections.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSection(index)}
                      className="text-red-400 text-sm"
                    >
                      Remove
                    </button>
                  )}
                </div>

                <input
                  type="text"
                  value={section.heading}
                  onChange={(e) =>
                    handleSectionChange(index, "heading", e.target.value)
                  }
                  placeholder="Enter heading"
                  className={`${inputClass} mb-3`}
                />

                <textarea
                  value={section.description}
                  onChange={(e) =>
                    handleSectionChange(index, "description", e.target.value)
                  }
                  placeholder="Enter description for this heading"
                  className={`${inputClass} h-32 resize-none`}
                />

                {/* Section pictures (optional) */}
                <label className="block mt-4 mb-2 text-sm text-gray-400">
                  Pictures for this heading (optional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => addSectionFiles(index, e)}
                  className="text-sm text-gray-400"
                />

                {section.files.length > 0 && (
                  <div className="flex gap-3 mt-3 flex-wrap">
                    {section.files.map((file, fi) => (
                      <div key={`${file.name}-${fi}`} className="relative">
                        <FilePreview
                          file={file}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeSectionFile(index, fi)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 rounded-full text-xs leading-5"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-8 bg-purple-600 hover:bg-purple-700 transition px-8 py-3 rounded-lg font-medium disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Creating..." : "Create Blog"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
