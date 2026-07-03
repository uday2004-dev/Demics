import React, { useState } from "react";


const Contact = () => {

      const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    projectDetails: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };


    const faqs = [
    {
      question: "What specific services does DEMICS provide?",
      answer:
        "We provide Branding, Website Development, UI/UX Design, Digital Marketing, SEO, Social Media Marketing and Creative Design solutions.",
    },
    {
      question:
        "How do you ensure our marketing campaigns are data-driven?",
      answer:
        "We use analytics, KPI tracking, user behaviour insights and performance reports to optimize every campaign.",
    },
    {
      question:
        "What is your typical timeline for a website development project?",
      answer:
        "Project timelines vary depending on complexity, but most websites take between 2-8 weeks.",
    },
    {
      question:
        "How do you incorporate AI into your marketing and design solutions?",
      answer:
        "We leverage AI tools for research, content optimization, automation and design workflow enhancement.",
    },
    {
      question:
        "How is ROI measured for our digital campaigns?",
      answer:
        "ROI is measured through conversions, leads, revenue generation, engagement and campaign performance metrics.",
    },
    {
      question:
        "What post-launch support and maintenance do you offer?",
      answer:
        "We provide updates, bug fixes, monitoring, content changes and ongoing support packages.",
    },
  ];
  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#101110] text-white">

      {/* TITLE */}
      <div className="text-center mb-14">
        <h1 className="text-5xl md:text-7xl italic font-serif mb-6">
          Contact us
        </h1>

        <p className="text-lg md:text-2xl text-white/70">
          Tell Us About
        </p>

        <p className="text-xl md:text-3xl font-semibold">
          Your{" "}
          <span className="italic font-serif text-white">
            Project or Vision
          </span>{" "}
          Here
        </p>
      </div>

      {/* FORM */}
      <div className="w-full px-6 md:px-12 lg:px-20 flex flex-col gap-5">

        {/* Full Name */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-md">
          <label className="text-sm text-white/60">Full Name*</label>
          <div className="h-px bg-white/10 my-2" />
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full bg-transparent outline-none text-white"
          />
        </div>

        {/* Email + Mobile */}
        <div className="flex flex-col md:flex-row gap-4">

          <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-md">
            <label className="text-sm text-white/60">Email*</label>
            <div className="h-px bg-white/10 my-2" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-white"
            />
          </div>

          <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-md">
            <label className="text-sm text-white/60">Mobile Number</label>
            <div className="h-px bg-white/10 my-2" />
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full bg-transparent outline-none text-white"
            />
          </div>

        </div>

        {/* Project Details */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-md h-40">
          <label className="text-sm text-white/60">
            Project Details / Info*
          </label>
          <div className="h-px bg-white/10 my-2" />
          <textarea
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            rows={4}
            className="w-full bg-transparent outline-none text-white resize-none"
          />
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSubmit}
            className="px-16 py-4 rounded-full uppercase tracking-widest text-sm font-semibold bg-gradient-to-r from-[#7c3aed] to-[#a855f7] hover:opacity-80 transition"
          >
            Send
          </button>
        </div>
      </div>


       <div className="w-full px-6 md:px-12 lg:px-20 py-20">
        <h2
          className="text-6xl italic mb-16"
          style={{ fontFamily: "serif" }}
        >
          FAQs
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-700 py-6"
          >
            <button
              onClick={() =>
                setOpenFaq(
                  openFaq === index ? null : index
                )
              }
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-xl">
                {faq.question}
              </span>

              <span className="text-3xl">
                {openFaq === index ? "-" : "+"}
              </span>
            </button>

            {openFaq === index && (
              <p className="text-gray-400 mt-5 leading-7">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default Contact;