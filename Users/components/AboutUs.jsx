import React, { useEffect, useState } from "react";
import Form from "../resuable component/Form";

const AboutUs = () => {
  const [teams, setTeams] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const res = await fetch(
        "http://localhost:3000/api/team/  "
      );

      const data = await res.json();

      if (data.success) {
        setTeams(data.teams);
      }
    } catch (error) {
      console.log(error);
    }
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
    <section className="bg-[#111111] text-white overflow-hidden">

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-8 pt-40">
        <div className="rounded-[40px] bg-gradient-to-br from-[#B58DFF] via-[#5F17D4] to-[#1A052F] p-16 text-center">
          <h1
            className="text-7xl italic mb-8"
            style={{ fontFamily: "serif" }}
          >
            About Us
          </h1>

          <h2 className="text-4xl font-medium max-w-4xl mx-auto">
            We are a design-led, strategy-driven digital marketing and
            creative design agency
          </h2>

          <p className="text-gray-200 mt-6 max-w-3xl mx-auto">
            We combine creativity, technology and innovation to help
            brands grow through impactful digital experiences.
          </p>
        </div>
      </div>

      {/* OUR VISION */}
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center rounded-[40px] bg-gradient-to-r from-[#151515] to-[#3d0b6e] p-12">

          <div>
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt=""
              className="rounded-3xl w-full"
            />
          </div>

          <div>
            <h1
              className="text-6xl italic mb-8"
              style={{ fontFamily: "serif" }}
            >
              Our Vision
            </h1>

            <p className="text-gray-300 leading-8">
            Our vision is to revolutionize the way brands connect with the world by blending high-end design with the power of emerging technologies. We aspire to be a global leader in crafting intelligent, immersive, and results-driven brand experiences that are rooted in creativity and powered by data. By combining human-centric design, AI-driven strategies, and advanced digital tools, we aim to help businesses thrive in an ever-evolving digital ecosystem. Our goal is to not just follow trends, but to shape them—delivering future-ready solutions that are bold, adaptive, and impactful. We are committed to building meaningful digital journeys that spark emotion, drive engagement, and create measurable growth, while upholding values of innovation, inclusivity, and ethical digital storytelling. Through collaboration, innovation, and relentless pursuit of excellence, we envision becoming the go-to partner for brands ready to lead in the digital age.
            </p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <h2
          className="text-6xl italic mb-16"
          style={{ fontFamily: "serif" }}
        >
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-[#1a1a1a] border border-gray-700 rounded-3xl p-8">
            <h3 className="text-2xl mb-4">
              Future-First Thinking
            </h3>

            <p className="text-gray-400">
              We combine creativity with technology to build
              experiences that stay ahead of trends.
            </p>
          </div>

          <div className="bg-[#1a1a1a] border border-gray-700 rounded-3xl p-8">
            <h3 className="text-2xl mb-4">
              Custom-Crafted Strategies
            </h3>

            <p className="text-gray-400">
              Every business is unique, so every solution we
              create is customized.
            </p>
          </div>

          <div className="bg-[#1a1a1a] border border-gray-700 rounded-3xl p-8">
            <h3 className="text-2xl mb-4">
              Data-Driven Results
            </h3>

            <p className="text-gray-400">
              We rely on insights, analytics and KPIs to
              maximize campaign performance.
            </p>
          </div>

          <div className="bg-[#1a1a1a] border border-gray-700 rounded-3xl p-8">
            <h3 className="text-2xl mb-4">
              High-End Design Expertise
            </h3>

            <p className="text-gray-400">
              Stunning visuals and premium user experiences
              that leave a lasting impression.
            </p>
          </div>

        </div>
      </div>

      {/* STATS */}
      <div className="max-w-6xl mx-auto px-8 py-24 text-center">
        <h2
          className="text-6xl italic mb-20"
          style={{ fontFamily: "serif" }}
        >
          What Have We Done
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-7xl font-bold text-purple-500">
              100+
            </h3>
            <p className="mt-3 text-gray-400">Projects</p>
          </div>

          <div>
            <h3 className="text-7xl font-bold text-purple-500">
              50+
            </h3>
            <p className="mt-3 text-gray-400">Clients</p>
          </div>

          <div>
            <h3 className="text-7xl font-bold text-purple-500">
              10+
            </h3>
            <p className="mt-3 text-gray-400">Team Members</p>
          </div>

          <div>
            <h3 className="text-7xl font-bold text-purple-500">
              5+
            </h3>
            <p className="mt-3 text-gray-400">Years Experience</p>
          </div>
        </div>
      </div>

      {/* TEAM */}
     <div className="max-w-7xl mx-auto px-8 py-28 ">
  <h2
    className="text-6xl italic mb-8"
    style={{ fontFamily: "serif" }}
  >
    Meet Our Founder
  </h2>

  <p className="text-gray-400 text-lg leading-8 max-w-4xl mb-16">
    We’re a group of passionate designers, strategists, and
    problem-solvers dedicated to helping brands succeed online.
    With diverse skills and a shared commitment to quality, we
    work together to bring fresh ideas, creative solutions, and
    reliable support to every project.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {teams.map((member) => (
      <div key={member._id} className="group">
        <div className="overflow-hidden rounded-3xl">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-[420px] object-cover rounded-3xl transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-medium">
            {member.name}
          </h3>

          <p className="text-gray-400 mt-2">
            {member.designation}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* FAQ */}
      <div className="max-w-5xl mx-auto px-8 py-20">
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

      {/* CONTACT */}
      <div className="max-w-7xl mx-auto px-8 py-24">
        <Form />
      </div>
    </section>
  );
};

export default AboutUs;