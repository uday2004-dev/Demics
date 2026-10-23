
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Form from "../resuable component/Form";
// import api from "../utls/axios";

// // ---------- Helpers ----------

// // backend kabhi string, kabhi array deta hai, isliye dono handle
// const toArray = (value) => {
//   if (!value) return [];
//   if (typeof value === "string") {
//     try {
//       const parsed = JSON.parse(value);
//       return Array.isArray(parsed) ? parsed : [];
//     } catch {
//       return [];
//     }
//   }
//   return Array.isArray(value) ? value : [];
// };

// // image kabhi "url" string hoti hai, kabhi { url } object
// const getUrl = (pic) => (typeof pic === "string" ? pic : pic?.url || "");

// // section ki pictures ka field name alag ho sakta hai
// const getSectionPics = (section) =>
//   toArray(section.pictures || section.images || section.picture)
//     .map(getUrl)
//     .filter(Boolean);

// const getCover = (blog) => {
//   const pics = Array.isArray(blog.picture) ? blog.picture : [blog.picture];
//   return getUrl(pics[0]);
// };

// const OpenBlogs = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [blog, setBlog] = useState(null);
//   const [similarBlogs, setSimilarBlogs] = useState([]);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     setBlog(null);
//     fetchBlog();
//   }, [id]);

//   const fetchBlog = async () => {
//     try {
//       const res = await api.get(`/api/blog/${id}`);
//       const data = res.data;

//       if (data.success) {
//         setBlog(data.blog);
//         fetchLatestBlogs(data.blog._id);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchLatestBlogs = async (currentBlogId) => {
//     try {
//       const res = await api.get("/api/blog/getAllBlogs");

//       const latestBlogs =
//         res.data.blogs
//           ?.filter((item) => item._id !== currentBlogId)
//           .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//           .slice(0, 2) || [];

//       setSimilarBlogs(latestBlogs);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   if (!blog) {
//     return (
//       <div className="bg-[#111111] min-h-screen flex justify-center items-center text-white text-xl">
//         Loading...
//       </div>
//     );
//   }

//   const sections = toArray(blog.sections);

//   return (
//     <section className="bg-[#111111] min-h-screen pt-44 pb-24">
//       <div className="max-w-5xl mx-auto px-6 md:px-8">
//         {/* Hero Image */}
//         {getCover(blog) && (
//           <img
//             src={getCover(blog)}
//             alt={blog.title}
//             className="w-full h-[260px] md:h-[450px] object-cover rounded-[24px]"
//           />
//         )}

//         {/* Blog Header */}
//         <div className="mt-10">
//           <div className="flex flex-wrap gap-3 mb-5">
//             {blog.services?.name && (
//               <span className="bg-[#222] text-gray-300 text-xs px-4 py-2 rounded-full">
//                 {blog.services.name}
//               </span>
//             )}

//             <span className="bg-[#222] text-gray-300 text-xs px-4 py-2 rounded-full">
//               {new Date(blog.createdAt).toLocaleDateString("en-IN", {
//                 day: "numeric",
//                 month: "short",
//                 year: "numeric",
//               })}
//             </span>
//           </div>

//           <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight mb-4">
//             {blog.title}
//           </h1>

//           {blog.heading && (
//             <h2 className="text-gray-300 text-xl md:text-3xl leading-snug mb-8">
//               {blog.heading}
//             </h2>
//           )}

//           {/* Intro description */}
//           {blog.description && (
//             <p className="text-gray-400 text-lg leading-8 whitespace-pre-line">
//               {blog.description}
//             </p>
//           )}
//         </div>

//         {/* Sections */}
//         {sections.length > 0 && (
//           <div className="mt-14 flex flex-col gap-14">
//             {sections.map((section, index) => {
//               const pics = getSectionPics(section);

//               return (
//                 <article key={index}>
//                   {section.heading && (
//                     <h3 className="text-white text-2xl md:text-4xl font-medium leading-snug mb-4">
//                       {section.heading}
//                     </h3>
//                   )}

//                   {section.description && (
//                     <p className="text-gray-400 text-lg leading-8 whitespace-pre-line">
//                       {section.description}
//                     </p>
//                   )}

//                   {pics.length > 0 && (
//                     <div
//                       className={`mt-6 grid gap-4 ${
//                         pics.length === 1 ? "grid-cols-1" : "md:grid-cols-2"
//                       }`}
//                     >
//                       {pics.map((pic, i) => (
//                         <img
//                           key={i}
//                           src={pic}
//                           alt={section.heading || `section ${index + 1}`}
//                           className={`w-full object-cover rounded-[20px] ${
//                             pics.length === 1
//                               ? "h-[260px] md:h-[420px]"
//                               : "h-[240px] md:h-[300px]"
//                           }`}
//                         />
//                       ))}
//                     </div>
//                   )}
//                 </article>
//               );
//             })}
//           </div>
//         )}

//         {/* Other Blogs */}
//         {similarBlogs.length > 0 && (
//           <div className="mt-28">
//             <h2
//               className="text-white text-4xl md:text-5xl italic mb-10"
//               style={{ fontFamily: "serif" }}
//             >
//               Other Similar Blogs
//             </h2>

//             <div className="grid md:grid-cols-2 gap-8">
//               {similarBlogs.map((item) => (
//                 <div
//                   key={item._id}
//                   onClick={() => navigate(`/blogs/${item._id}`)}
//                   className="cursor-pointer group"
//                 >
//                   <div className="overflow-hidden rounded-[20px]">
//                     <img
//                       src={getCover(item)}
//                       alt={item.title}
//                       className="w-full h-[250px] object-cover transition duration-500 group-hover:scale-105"
//                     />
//                   </div>

//                   <h3 className="text-white text-2xl mt-4 leading-snug">
//                     {item.heading || item.title}
//                   </h3>
//                 </div>
//               ))}
//             </div>

//             <div className="flex justify-center mt-10">
//               <button
//                 onClick={() => navigate("/blogs")}
//                 className="bg-gradient-to-r from-purple-700 to-fuchsia-500 text-white px-8 py-3 rounded-full"
//               >
//                 VIEW MORE BLOGS
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Contact Form */}
//         <div className="mt-28">
//           <Form />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OpenBlogs;


// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Form from "../resuable component/Form";
// import api from "../utls/axios";

// // Zig-zag purple glows (Blogs listing jaisa)
// const glows = [
//   { side: "right", top: "6%", color: "bg-[#7A00FF]/45" },
//   { side: "left", top: "38%", color: "bg-[#7A00FF]/40" },
//   { side: "right", top: "68%", color: "bg-[#7A00FF]/40" },
// ];

// // ---------- Helpers ----------

// // backend kabhi string, kabhi array deta hai, isliye dono handle
// const toArray = (value) => {
//   if (!value) return [];
//   if (typeof value === "string") {
//     try {
//       const parsed = JSON.parse(value);
//       return Array.isArray(parsed) ? parsed : [];
//     } catch {
//       return [];
//     }
//   }
//   return Array.isArray(value) ? value : [];
// };

// // image kabhi "url" string hoti hai, kabhi { url } object
// const getUrl = (pic) => (typeof pic === "string" ? pic : pic?.url || "");

// const getSectionPics = (section) =>
//   toArray(section.pictures || section.images || section.picture)
//     .map(getUrl)
//     .filter(Boolean);

// const getCover = (blog) => {
//   const pics = Array.isArray(blog.picture) ? blog.picture : [blog.picture];
//   return getUrl(pics[0]);
// };

// // description ko paragraphs mein todta hai (har new line = naya paragraph)
// const Paragraphs = ({ text }) =>
//   (text || "")
//     .split(/\n+/)
//     .filter((p) => p.trim())
//     .map((p, i) => (
//       <p key={i} className="text-gray-300 text-base leading-7 mb-4">
//         {p}
//       </p>
//     ));

// const OpenBlogs = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [blog, setBlog] = useState(null);
//   const [similarBlogs, setSimilarBlogs] = useState([]);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     setBlog(null);
//     fetchBlog();
//   }, [id]);

//   const fetchBlog = async () => {
//     try {
//       const res = await api.get(`/api/blog/${id}`);
//       const data = res.data;

//       if (data.success) {
//         setBlog(data.blog);
//         fetchLatestBlogs(data.blog._id);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchLatestBlogs = async (currentBlogId) => {
//     try {
//       const res = await api.get("/api/blog/getAllBlogs");

//       const latestBlogs =
//         res.data.blogs
//           ?.filter((item) => item._id !== currentBlogId)
//           .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//           .slice(0, 2) || [];

//       setSimilarBlogs(latestBlogs);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   if (!blog) {
//     return (
//       <div className="bg-[#111111] min-h-screen flex justify-center items-center text-white text-xl">
//         Loading...
//       </div>
//     );
//   }

//   const sections = toArray(blog.sections);

//   return (
//     <div className="relative bg-[#111111] overflow-x-clip">
//       <section className="relative z-30 min-h-screen pt-44 pb-24">
//         <div className="max-w-5xl mx-auto px-6 md:px-8">
//           {/* Hero Image */}
//           {getCover(blog) && (
//             <img
//               src={getCover(blog)}
//               alt={blog.title}
//               className="w-full h-[240px] md:h-[450px] object-cover rounded-[24px]"
//             />
//           )}

//           {/* Narrow reading column (Figma jaisa) */}
//           <div className="max-w-3xl mx-auto">
//             {/* Header */}
//             <div className="mt-10">
//               <div className="flex flex-wrap gap-3 mb-5">
//                 {blog.services?.name && (
//                   <span className="bg-[#222] text-gray-300 text-xs px-4 py-2 rounded-full">
//                     {blog.services.name}
//                   </span>
//                 )}

//                 <span className="bg-[#222] text-gray-300 text-xs px-4 py-2 rounded-full">
//                   {new Date(blog.createdAt).toLocaleDateString("en-IN", {
//                     day: "numeric",
//                     month: "short",
//                     year: "numeric",
//                   })}
//                 </span>
//               </div>

//               <h1 className="text-white text-3xl md:text-5xl font-medium leading-tight mb-4">
//                 {blog.heading || blog.title}
//               </h1>

//               {blog.heading && blog.title && (
//                 <p className="text-gray-400 text-lg mb-8">{blog.title}</p>
//               )}

//               <div className={blog.heading ? "" : "mt-8"}>
//                 <Paragraphs text={blog.description} />
//               </div>
//             </div>

//             {/* Sections */}
//             {sections.length > 0 && (
//               <div className="mt-12 flex flex-col gap-12">
//                 {sections.map((section, index) => {
//                   const pics = getSectionPics(section);

//                   return (
//                     <article key={index}>
//                       {section.heading && (
//                         <h3 className="text-white text-2xl md:text-3xl font-medium leading-snug mb-4">
//                           {section.heading}
//                         </h3>
//                       )}

//                       <Paragraphs text={section.description} />

//                       {pics.length > 0 && (
//                         <div
//                           className={`mt-6 grid gap-4 ${
//                             pics.length === 1 ? "grid-cols-1" : "md:grid-cols-2"
//                           }`}
//                         >
//                           {pics.map((pic, i) => (
//                             <img
//                               key={i}
//                               src={pic}
//                               alt={section.heading || `section ${index + 1}`}
//                               className={`w-full object-cover rounded-[20px] ${
//                                 pics.length === 1
//                                   ? "h-[220px] md:h-[360px]"
//                                   : "h-[220px] md:h-[260px]"
//                               }`}
//                             />
//                           ))}
//                         </div>
//                       )}
//                     </article>
//                   );
//                 })}
//               </div>
//             )}
//           </div>

//           {/* Other Blogs */}
//           {similarBlogs.length > 0 && (
//             <div className="mt-28">
//               <h2
//                 className="text-white text-4xl md:text-5xl italic mb-10"
//                 style={{ fontFamily: "serif" }}
//               >
//                 Other Similar Blogs
//               </h2>

//               <div className="grid md:grid-cols-2 gap-8">
//                 {similarBlogs.map((item) => (
//                   <div
//                     key={item._id}
//                     onClick={() => navigate(`/blogs/${item._id}`)}
//                     className="cursor-pointer group"
//                   >
//                     <div className="overflow-hidden rounded-[20px]">
//                       <img
//                         src={getCover(item)}
//                         alt={item.title}
//                         className="w-full h-[250px] object-cover transition duration-500 group-hover:scale-105"
//                       />
//                     </div>

//                     <h3 className="text-white text-2xl mt-4 leading-snug">
//                       {item.heading || item.title}
//                     </h3>
//                   </div>
//                 ))}
//               </div>

//               <div className="flex justify-center mt-10">
//                 <button
//                   onClick={() => navigate("/blogs")}
//                   className="bg-gradient-to-r from-purple-700 to-fuchsia-500 text-white px-8 py-3 rounded-full"
//                 >
//                   VIEW MORE BLOGS
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Contact Form */}
//           <div className="mt-28">
//             <Form />
//           </div>
//         </div>
//       </section>

//       {/* Purple glow layer */}
//       <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden mix-blend-screen">
//         {glows.map((g, i) => (
//           <div
//             key={i}
//             className={`absolute w-[450px] h-[600px] rounded-full blur-[140px] ${g.color} ${
//               g.side === "right" ? "right-[-200px]" : "left-[-200px]"
//             }`}
//             style={{ top: g.top }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OpenBlogs;


// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Form from "../resuable component/Form";
// import api from "../utls/axios";

// // Zig-zag purple glows (Blogs listing jaisa)
// const glows = [
//   { side: "right", top: "6%", color: "bg-[#7A00FF]/45" },
//   { side: "left", top: "38%", color: "bg-[#7A00FF]/40" },
//   { side: "right", top: "68%", color: "bg-[#7A00FF]/40" },
// ];

// // ---------- Helpers ----------


// const toArray = (value) => {
//   if (!value) return [];
//   if (typeof value === "string") {
//     try {
//       const parsed = JSON.parse(value);
//       return Array.isArray(parsed) ? parsed : [];
//     } catch {
//       return [];
//     }
//   }
//   return Array.isArray(value) ? value : [];
// };


// const getUrl = (pic) => (typeof pic === "string" ? pic : pic?.url || "");

// // section ki pictures ka field name alag ho sakta hai
// const getSectionPics = (section) =>
//   toArray(section.pictures || section.images || section.picture)
//     .map(getUrl)
//     .filter(Boolean);

// const getCover = (blog) => {
//   const pics = Array.isArray(blog.picture) ? blog.picture : [blog.picture];
//   return getUrl(pics[0]);
// };

// // har new line = naya paragraph (size purane wale jaisa)
// const Paragraphs = ({ text }) =>
//   (text || "")
//     .split(/\n+/)
//     .filter((p) => p.trim())
//     .map((p, i) => (
//       <p key={i} className="text-gray-400 text-lg leading-8 mb-5">
//         {p}
//       </p>
//     ));

// const OpenBlogs = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [blog, setBlog] = useState(null);
//   const [similarBlogs, setSimilarBlogs] = useState([]);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     setBlog(null);
//     fetchBlog();
//   }, [id]);

//   const fetchBlog = async () => {
//     try {
//       const res = await api.get(`/api/blog/${id}`);
//       const data = res.data;

//       if (data.success) {
//         setBlog(data.blog);
//         fetchLatestBlogs(data.blog._id);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchLatestBlogs = async (currentBlogId) => {
//     try {
//       const res = await api.get("/api/blog/getAllBlogs");

//       const latestBlogs =
//         res.data.blogs
//           ?.filter((item) => item._id !== currentBlogId)
//           .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//           .slice(0, 2) || [];

//       setSimilarBlogs(latestBlogs);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   if (!blog) {
//     return (
//       <div className="bg-[#111111] min-h-screen flex justify-center items-center text-white text-xl">
//         Loading...
//       </div>
//     );
//   }

//   const sections = toArray(blog.sections);

//   return (
//     <div className="relative bg-[#111111] overflow-x-clip">
//       <section className="relative z-30 min-h-screen pt-44 pb-24">
//         <div className="max-w-5xl mx-auto px-6 md:px-8">
//           {/* Hero Image */}
//           {getCover(blog) && (
//             <img
//               src={getCover(blog)}
//               alt={blog.title}
//               className="w-full h-[260px] md:h-[450px] object-cover rounded-[24px]"
//             />
//           )}

//           {/* Blog Header */}
//           <div className="mt-10">
//             <div className="flex flex-wrap gap-3 mb-5">
//               {blog.services?.name && (
//                 <span className="bg-[#222] text-gray-300 text-xs px-4 py-2 rounded-full">
//                   {blog.services.name}
//                 </span>
//               )}

//               <span className="bg-[#222] text-gray-300 text-xs px-4 py-2 rounded-full">
//                 {new Date(blog.createdAt).toLocaleDateString("en-IN", {
//                   day: "numeric",
//                   month: "short",
//                   year: "numeric",
//                 })}
//               </span>
//             </div>

//             <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight mb-4">
//               {blog.title}
//             </h1>

//             {blog.heading && (
//               <h2 className="text-gray-300 text-xl md:text-3xl leading-snug mb-8">
//                 {blog.heading}
//               </h2>
//             )}

//             {/* Intro description */}
//             <Paragraphs text={blog.description} />
//           </div>

//           {/* Sections */}
//           {sections.length > 0 && (
//             <div className="mt-14 flex flex-col gap-14">
//               {sections.map((section, index) => {
//                 const pics = getSectionPics(section);

//                 return (
//                   <article key={index}>
//                     {section.heading && (
//                       <h3 className="text-white text-2xl md:text-4xl font-medium leading-snug mb-4">
//                         {section.heading}
//                       </h3>
//                     )}

//                     <Paragraphs text={section.description} />

//                     {pics.length > 0 && (
//                       <div
//                         className={`mt-6 grid gap-4 ${
//                           pics.length === 1 ? "grid-cols-1" : "md:grid-cols-2"
//                         }`}
//                       >
//                         {pics.map((pic, i) => (
//                           <img
//                             key={i}
//                             src={pic}
//                             alt={section.heading || `section ${index + 1}`}
//                             className={`w-full object-cover rounded-[20px] ${
//                               pics.length === 1
//                                 ? "h-[260px] md:h-[420px]"
//                                 : "h-[240px] md:h-[300px]"
//                             }`}
//                           />
//                         ))}
//                       </div>
//                     )}
//                   </article>
//                 );
//               })}
//             </div>
//           )}

//           {/* Other Blogs */}
//           {similarBlogs.length > 0 && (
//             <div className="mt-28">
//               <h2
//                 className="text-white text-4xl md:text-5xl italic mb-10"
//                 style={{ fontFamily: "serif" }}
//               >
//                 Other Similar Blogs
//               </h2>

//               <div className="grid md:grid-cols-2 gap-8">
//                 {similarBlogs.map((item) => (
//                   <div
//                     key={item._id}
//                     onClick={() => navigate(`/blogs/${item._id}`)}
//                     className="cursor-pointer group"
//                   >
//                     <div className="overflow-hidden rounded-[20px]">
//                       <img
//                         src={getCover(item)}
//                         alt={item.title}
//                         className="w-full h-[250px] object-cover transition duration-500 group-hover:scale-105"
//                       />
//                     </div>

//                     <h3 className="text-white text-2xl mt-4 leading-snug">
//                       {item.heading || item.title}
//                     </h3>
//                   </div>
//                 ))}
//               </div>

//               <div className="flex justify-center mt-10">
//                 <button
//                   onClick={() => navigate("/blogs")}
//                   className="bg-gradient-to-r from-purple-700 to-fuchsia-500 text-white px-8 py-3 rounded-full"
//                 >
//                   VIEW MORE BLOGS
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* Contact Form */}
//           <div className="mt-28">
//             <Form />
//           </div>
//         </div>
//       </section>

//       {/* Purple glow layer */}
//       <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden mix-blend-screen">
//         {glows.map((g, i) => (
//           <div
//             key={i}
//             className={`absolute w-[450px] h-[600px] rounded-full blur-[140px] ${g.color} ${
//               g.side === "right" ? "right-[-200px]" : "left-[-200px]"
//             }`}
//             style={{ top: g.top }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OpenBlogs;


import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../resuable component/Form";
import api from "../utls/axios";

// Zig-zag purple glows (Home.jsx jaisa: left -> right -> left ...)
const glows = [
  { side: "left", top: "16%", color: "bg-[#7A00FF]/45" },
  { side: "right", top: "27%", color: "bg-[#7A00FF]/45" },
  { side: "left", top: "38%", color: "bg-[#7A00FF]/45" },
  { side: "right", top: "49%", color: "bg-[#7A00FF]/45" },
  { side: "left", top: "60%", color: "bg-[#7A00FF]/45" },
  { side: "right", top: "71%", color: "bg-[#7A00FF]/45" },
  { side: "left", top: "82%", color: "bg-[#7A00FF]/35" },
  { side: "right", top: "92%", color: "bg-[#7A00FF]/50" },
];

// ---------- Helpers ----------

// backend kabhi string, kabhi array deta hai, isliye dono handle
const toArray = (value) => {
  if (!value) return [];
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return Array.isArray(value) ? value : [];
};

// image kabhi "url" string hoti hai, kabhi { url } object
const getUrl = (pic) => (typeof pic === "string" ? pic : pic?.url || "");

// section ki pictures ka field name alag ho sakta hai
const getSectionPics = (section) =>
  toArray(section.pictures || section.images || section.picture)
    .map(getUrl)
    .filter(Boolean);

const getCover = (blog) => {
  const pics = Array.isArray(blog.picture) ? blog.picture : [blog.picture];
  return getUrl(pics[0]);
};

// har new line = naya paragraph (size purane wale jaisa)
const Paragraphs = ({ text }) =>
  (text || "")
    .split(/\n+/)
    .filter((p) => p.trim())
    .map((p, i) => (
      <p key={i} className="text-gray-400 text-lg leading-8 mb-5">
        {p}
      </p>
    ));

const OpenBlogs = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [similarBlogs, setSimilarBlogs] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setBlog(null);
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      const res = await api.get(`/api/blog/${id}`);
      const data = res.data;

      if (data.success) {
        setBlog(data.blog);
        fetchLatestBlogs(data.blog._id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchLatestBlogs = async (currentBlogId) => {
    try {
      const res = await api.get("/api/blog/getAllBlogs");

      const latestBlogs =
        res.data.blogs
          ?.filter((item) => item._id !== currentBlogId)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 2) || [];

      setSimilarBlogs(latestBlogs);
    } catch (error) {
      console.log(error);
    }
  };

  if (!blog) {
    return (
      <div className="bg-[#111111] min-h-screen flex justify-center items-center text-white text-xl">
        Loading...
      </div>
    );
  }

  const sections = toArray(blog.sections);

  return (
    <div className="relative bg-[#111111] overflow-x-clip">
      <section className="relative z-10 min-h-screen pt-44 pb-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          {/* Hero Image */}
          {getCover(blog) && (
            <img
              src={getCover(blog)}
              alt={blog.title}
              className="w-full h-[260px] md:h-[450px] object-cover rounded-[24px]"
            />
          )}

          {/* Blog Header */}
          <div className="mt-10">
            <div className="flex flex-wrap gap-3 mb-5">
              {blog.services?.name && (
                <span className="bg-[#222] text-gray-300 text-xs px-4 py-2 rounded-full">
                  {blog.services.name}
                </span>
              )}

              <span className="bg-[#222] text-gray-300 text-xs px-4 py-2 rounded-full">
                {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>

            <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight mb-4">
              {blog.title}
            </h1>

            {blog.heading && (
              <h2 className="text-gray-300 text-xl md:text-3xl leading-snug mb-8">
                {blog.heading}
              </h2>
            )}

            {/* Intro description */}
            <Paragraphs text={blog.description} />
          </div>

          {/* Sections */}
          {sections.length > 0 && (
            <div className="mt-14 flex flex-col gap-14">
              {sections.map((section, index) => {
                const pics = getSectionPics(section);

                return (
                  <article key={index}>
                    {section.heading && (
                      <h3 className="text-white text-2xl md:text-4xl font-medium leading-snug mb-4">
                        {section.heading}
                      </h3>
                    )}

                    <Paragraphs text={section.description} />

                    {pics.length > 0 && (
                      <div
                        className={`mt-6 grid gap-4 ${pics.length === 1 ? "grid-cols-1" : "md:grid-cols-2"
                          }`}
                      >
                        {pics.map((pic, i) => (
                          <img
                            key={i}
                            src={pic}
                            alt={section.heading || `section ${index + 1}`}
                            className={`w-full object-cover rounded-[20px] ${pics.length === 1
                                ? "h-[260px] md:h-[420px]"
                                : "h-[240px] md:h-[300px]"
                              }`}
                          />
                        ))}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          )}

          {/* Other Blogs */}
          {similarBlogs.length > 0 && (
            <div className="mt-28">
              <h2
                className="text-white text-4xl md:text-5xl italic mb-10"
                style={{ fontFamily: "serif" }}
              >
                Other Similar Blogs
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {similarBlogs.map((item) => (
                  <div
                    key={item._id}
                    onClick={() => navigate(`/blogs/${item._id}`)}
                    className="cursor-pointer group"
                  >
                    <div className="overflow-hidden rounded-[20px]">
                      <img
                        src={getCover(item)}
                        alt={item.title}
                        className="w-full h-[250px] object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="text-white text-2xl mt-4 leading-snug">
                      {item.heading || item.title}
                    </h3>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-10">
                <button
                  onClick={() => navigate("/blogs")}
                  className="bg-gradient-to-r from-purple-700 to-fuchsia-500 text-white px-8 py-3 rounded-full"
                >
                  VIEW MORE BLOGS
                </button>
              </div>
            </div>
          )}

          {/* Contact Form */}
          <div className="mt-28">
            <Form />
          </div>
        </div>
      </section>

      {/* ================= GLOBAL ZIG-ZAG GLOW LAYER (content ke UPAR, Home jaisa) ================= */}
      {/* <div className="pointer-events-none absolute top-0 left-0 w-full bottom-[-350px] z-20 overflow-hidden mix-blend-screen">
        {glows.map((g, i) => (
          <div
            key={i}
            className={`absolute w-[450px] h-[600px] rounded-full blur-[140px] ${g.color} ${
              g.side === "right" ? "right-[-200px]" : "left-[-200px]"
            }`}
            style={{ top: g.top }}
          />
        ))}
      </div> */}
      {/* Glow layer */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-full bottom-[-350px] z-20 overflow-hidden mix-blend-screen"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black calc(100% - 350px), transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 0%, black calc(100% - 350px), transparent 100%)",
        }}
      >
        {glows.map((g, i) => (
          <div
            key={i}
            className={`absolute w-[450px] h-[600px] rounded-full blur-[140px] ${g.color} ${g.side === "right" ? "right-[-200px]" : "left-[-200px]"
              }`}
            style={{ top: g.top }}
          />
        ))}
      </div>
    </div>
  );
};

export default OpenBlogs;
