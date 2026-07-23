import React, { useEffect, useState } from "react";
import Form from "../resuable component/Form";
import brain from "../src/assets/brain.png"
import plant from "../src/assets/plant.png"
import custom from "../src/assets/puzzleCube.png"
import tranparent from "../src/assets/Transparent.png"
import Telescope from "../src/assets/Telescope.png"
import grid from "../src/assets/grid.png"
import hash from "../src/assets/hash.png"
import arrow1 from "../src/assets/arrow1.png"
import arrow2 from "../src/assets/arrow2.png"
import laptop from "../src/assets/laptop.png"
import api from "../utls/axios";
const AboutUs = () => {
  const [teams, setTeams] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);
  const benefits = [
    {
      icon: brain,
      title: "Future-First Thinking",
      desc: "We combine creativity with cutting-edge technology to craft innovative brand experiences that stay ahead of trends and disruptions.",
      className: "lg:col-span-2",
    },
    {
      icon: custom,
      title: "Custom-Crafted Strategies",
      desc: "No templates, no shortcuts. We design tailored campaigns and visuals that align with your unique goals, audience, and industry.",
      className: "",
    },
    {
      icon: tranparent,
      title: "Data-Driven Results",
      desc: "Every strategy is backed by insights, analytics, and measurable KPIs — ensuring smart decisions and optimized performance.",
      className: "",
    },
    {
      icon: plant,
      title: "High-End Design Expertise",
      desc: "Our visual storytellers bring world-class design, motion graphics, and immersive experiences that leave a lasting impact.",
      className: "lg:col-span-2",
    },]

  useEffect(() => {
    fetchTeam();
  }, []);

  // const fetchTeam = async () => {
  //   try {
  //     const res = await fetch(
  //       "http://localhost:3000/api/team/  "
  //     );

  //     const data = await res.json();

  //     if (data.success) {
  //       setTeams(data.teams);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const fetchTeam = async () => {
  try {
    const res = await api.get("/api/team");

    if (res.data.success) {
      setTeams(res.data.teams);
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
      <section className="bg-[#111111] pt-36 px-5 lg:px-10">
        <div className="max-w-[1440px] mx-auto">

          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#B98BFF] via-[#5317C8] to-[#13021F] min-h-[760px]">

            {/* Glow */}
            <div className="absolute -top-28 -left-24 w-[520px] h-[520px] rounded-full bg-[#D9B6FF]/40 blur-[120px]" />

            {/* Grid */}
            <img
              src={grid}
              alt=""
              className="absolute bottom-0 left-0 w-full opacity-30 pointer-events-none"
            />

            {/* Hash */}
            <img
              src={hash}
              alt=""
              className="absolute
        w-[120px]
        lg:w-[150px]
        top-[80px]
        left-[120px]"
            />

            {/* Arrow Right */}
            <img
              src={arrow2}
              alt=""
              className="absolute
        w-[90px]
        lg:w-[110px]
        top-[150px]
        right-[180px]"
            />

            {/* Arrow Left */}
            <img
              src={arrow1}
              alt=""
              className="absolute
        w-[85px]
        lg:w-[100px]
        left-[150px]
        bottom-[170px]"
            />

            {/* Laptop */}
            <img
              src={laptop}
              alt=""
              className="absolute
        w-[120px]
        lg:w-[150px]
        right-[120px]
        bottom-[130px]"
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-20">

              <h1
                className="text-white italic leading-none
          text-[70px]
          md:text-[100px]
          lg:text-[120px]"
                style={{ fontFamily: "Cormorant Garamond" }}
              >
                About us
              </h1>

              <h2 className="mt-8 max-w-4xl font-semibold leading-tight text-white
        text-[24px]
        md:text-[32px]
        lg:text-[36px]">
                we are a design-led, strategy-driven digital
                <br />
                marketing and creative design agency
              </h2>

              <div className="w-[70%] lg:w-[430px] h-[2px] bg-[#7C4DFF] mt-4 mb-5" />

              <p className="max-w-3xl text-gray-300 leading-7 text-[14px] lg:text-[15px]">
                With DEMICS, your brand is designed with intention, your stories are
                digitalized with emotion, and your presence evolves with culture.
                We market across media, innovate with AI, create using cutting-edge
                technology, and drive results through strategic thinking.
              </p>

            </div>

            {/* Bottom Curve */}
            <div className="absolute bottom-0 left-0 w-full h-[38px] bg-[#111111] rounded-t-[38px]" />

          </div>

        </div>
      </section>



      {/* OUR VISION */}
      <div className="max-w-screen mx-auto px-8 pb-24">
        <div className="relative overflow-hidden rounded-[40px] bg-[#171717]">

          {/* Purple Glow */}
          <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] bg-[#7B2EFF]/30 blur-[160px] rounded-full"></div>

          <div className="relative grid lg:grid-cols-2 gap-14 items-center p-14">

            {/* Left Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={Telescope}
                alt="Telescope"
                className="w-[390px] h-auto object-contain"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2
                className="text-[72px] leading-none  font-awesome  text-white mb-8"
                // style={{ fontFamily: "serif" }}
              >
                Our Vision
              </h2>

              <p className="text-gray-300 text-[15px] leading-7">
                Our vision is to revolutionize the way brands connect with the world
                by blending high-end design with the power of emerging technologies.
                We aspire to be a global leader in crafting intelligent, immersive,
                and results-driven brand experiences that are rooted in creativity
                and powered by data. By combining human-centric design, AI-driven
                strategies, and advanced digital tools, we aim to help businesses
                thrive in an ever-evolving digital ecosystem. Our goal is to not just
                follow trends, but to shape them—delivering future-ready solutions
                that are bold, adaptive, and impactful. We are committed to building
                meaningful digital journeys that spark emotion, drive engagement, and
                create measurable growth, while upholding values of innovation,
                inclusivity, and ethical digital storytelling. Through collaboration,
                innovation, and relentless pursuit of excellence, we envision becoming
                the go-to partner for brands ready to lead in the digital age.
              </p>
            </div>

          </div>
        </div>
      </div>


      <section className="bg-[#101110] py-28">

        <div className="max-w-[1200px] mx-auto px-6">

          <h2
            className="text-white  font-awesome mb-16
      text-5xl lg:text-7xl"
            // style={{ fontFamily: "Playfair Display, serif" }}
          >
            Client Benefits
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {benefits.map((item, index) => (

              <div
                key={index}
                className={`
          ${item.className}
          rounded-[26px]
          border border-white/20
          bg-white/[0.03]
          backdrop-blur-sm
          p-8
          min-h-[180px]
          flex flex-col justify-center
          transition-all duration-300
          hover:border-[#8B5CF6]
          `}
              >

                <img
                  src={item.icon}
                  alt=""
                  className="w-14 h-14 object-contain mb-8"
                />

                <h3 className="text-white text-[32px] font-medium mb-3">
                  {item.title}
                </h3>

                <p className="text-white/70 text-lg leading-7 max-w-[420px]">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* STATS */}
      <div className="max-w-6xl mx-auto px-8 py-24 text-center">
        <h2
          className="text-6xl  font-awesome mb-20"
          // style={{ fontFamily: "serif" }}
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




      <div className="max-w-7xl mx-auto px-8 py-28">
        <h2
          className="text-6xl  font-awesome mb-16"
          // style={{ fontFamily: "serif" }}
        >
          Meet Our Founder
        </h2>

        {teams.map((member) => (
          <div
            key={member._id}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left Side Image */}
            <div className="overflow-hidden rounded-3xl">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-[550px] object-cover rounded-3xl transition duration-500 hover:scale-105"
              />
            </div>

            {/* Right Side Text */}
            <div>
              <h3 className="text-5xl font-semibold mb-4">
                {member.name}
              </h3>

              <p className="text-xl text-gray-400 mb-8">
                {member.designation}
              </p>

              <p className="text-gray-400 text-lg leading-8">
                We’re a group of passionate designers, strategists, and
                problem-solvers dedicated to helping brands succeed online.
                With diverse skills and a shared commitment to quality, we
                work together to bring fresh ideas, creative solutions, and
                reliable support to every project.
              </p>
            </div>
          </div>
        ))}
      </div>


      {/* FAQ */}
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

      {/* CONTACT */}
      <div className="max-w-7xl mx-auto px-8 py-24">
        <Form />
      </div>
    </section>
  );
};

export default AboutUs;