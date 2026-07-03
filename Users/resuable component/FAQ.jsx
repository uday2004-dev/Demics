// import React, { useState } from "react";

// const FAQ = () => {
//   const [openFaq, setOpenFaq] = useState(null);

//   const faqs = [
//     {
//       question: "What specific services does DEMICS provide?",
//       answer:
//         "We provide Branding, Website Development, UI/UX Design, Digital Marketing, SEO, Social Media Marketing and Creative Design solutions.",
//     },
//     {
//       question: "How do you ensure our marketing campaigns are data-driven?",
//       answer:
//         "We use analytics, KPI tracking, user behaviour insights and performance reports to optimize every campaign.",
//     },
//     {
//       question: "What is your typical timeline for a website development project?",
//       answer:
//         "Project timelines vary depending on complexity, but most websites take between 2-8 weeks.",
//     },
//     {
//       question: "How do you incorporate AI into your marketing and design solutions?",
//       answer:
//         "We leverage AI tools for research, content optimization, automation and design workflow enhancement.",
//     },
//     {
//       question: "How is ROI measured for our digital campaigns?",
//       answer:
//         "ROI is measured through conversions, leads, revenue generation, engagement and campaign performance metrics.",
//     },
//     {
//       question: "What post-launch support and maintenance do you offer?",
//       answer:
//         "We provide updates, bug fixes, monitoring, content changes and ongoing support packages.",
//     },
//   ];

//   return (
//     <div className="w-full px-6 md:px-12 lg:px-20 py-20 text-white">

//       <h2 className="text-5xl md:text-6xl italic mb-16 font-serif text-center">
//         FAQs
//       </h2>

//       <div className="w-full max-w-4xl mx-auto">
//         {faqs.map((faq, index) => (
//           <div key={index} className="border-b border-gray-700 py-6">

//             <button
//               onClick={() =>
//                 setOpenFaq(openFaq === index ? null : index)
//               }
//               className="w-full flex justify-between items-center text-left"
//             >
//               <span className="text-lg md:text-xl">
//                 {faq.question}
//               </span>

//               <span className="text-3xl">
//                 {openFaq === index ? "-" : "+"}
//               </span>
//             </button>

//             {openFaq === index && (
//               <p className="text-gray-400 mt-5 leading-7">
//                 {faq.answer}
//               </p>
//             )}

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQ;