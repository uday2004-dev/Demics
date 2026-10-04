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
import AboutHeader from "./AboutHeader";
import mobileAbout from '../src/assets/mobileAbout.jpg'
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
      {/* <section className="w-full pt-24 bg-[#12001E]">

        <AboutHeader />
      </section> */}

      {/* HERO */}

      {/* Mobile View */}
      {/* <section className="block md:hidden w-full overflow-hidden">
  <img
    src={mobileAbout}
    alt="About Us"
    className="w-full h-auto object-cover"
  />
</section> */}
      {/* <section className="block md:hidden w-full overflow-hidden mt-10"> */}
     <section className="block md:hidden w-full overflow-hidden mt-16">
        <img
          src={mobileAbout}
          alt="About Us"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Desktop / Tablet View */}
      <section className="hidden md:block w-full pt-24 bg-[#12001E]">
        <AboutHeader />
      </section>



      {/* OUR VISION */}


      {/* <div className="w-full px-5 sm:px-8 pb-16 sm:pb-24"> */}
      <div className="w-full pb-16 sm:pb-24">
        <div className="relative w-full overflow-hidden rounded-[30px] sm:rounded-[40px] bg-[#171717]">

          {/* Purple Glow */}
          <div
            className="
        absolute
        -bottom-32
        -left-32
        lg:-right-32
        lg:left-auto
        w-[350px]
        h-[350px]
        sm:w-[450px]
        sm:h-[450px]
        bg-[#7B2EFF]/30
        blur-[140px]
        sm:blur-[160px]
        rounded-full
      "
          ></div>

          <div
      //       className="
      //   relative
      //   w-full
      //   grid
      //   grid-cols-1
      //   lg:grid-cols-2
      //   gap-8
      //   lg:gap-14
      //   items-center
      //   p-6
      //   sm:p-10
      //   lg:p-14
      // "

           className="
        relative
        w-full
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-8
        lg:gap-14
        items-center
        p-4 sm:p-6 md:p-10 lg:p-14
        sm:p-10
        lg:p-14
      "
          >

            {/* ================= CONTENT ================= */}
            <div className="order-1 lg:order-2">

              {/* <h2
                className="
            text-[48px]
            sm:text-[60px]
            lg:text-[72px]
            leading-none
            font-awesome
            text-white
            mb-6
            sm:mb-8
          "
              >
                Our Vision
              </h2> */}

              <h2 className="text-[40px] sm:text-[60px] lg:text-[72px] leading-none font-awesome text-white mb-6 sm:mb-8">
  Our Vision
</h2>

              <p
                className="
            text-gray-300
            text-[14px]
            sm:text-[15px]
            leading-6
            sm:leading-7
          "
              >
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


            {/* ================= TELESCOPE ================= */}
            <div
              className="
          order-2
          lg:order-1
          flex
          justify-center
          lg:justify-start
          mt-4
          sm:mt-8
          lg:mt-0
        "
            >
              <img
                src={Telescope}
                alt="Telescope"
          //       className="
          //   w-[300px]
          //   sm:w-[340px]
          //   lg:w-[390px]
          //   h-auto
          //   object-contain
          // "

                 className="
            w-[240px] sm:w-[300px] md:w-[340px] lg:w-[390px]
            sm:w-[340px]
            lg:w-[390px]
            h-auto
            object-contain
          "
              />
            </div>

          </div>
        </div>
      </div>


      {/* <section className="bg-[#101110] py-28"> */}
      <section className="bg-[#101110] py-14 sm:py-20 md:py-28">

        {/* <div className="max-w-[1200px] mx-auto px-6"> */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

          <h2
            //       className="text-white  font-awesome mb-16
            // text-5xl lg:text-7xl"
            className="text-white font-awesome mb-10 sm:mb-14 md:mb-16 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Client Benefits
          </h2>

          {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"> */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">

            {benefits.map((item, index) => (

              <div
                key={index}
                //       className={`
                // ${item.className}
                // rounded-[26px]
                // border border-white/20
                // bg-white/[0.03]
                // backdrop-blur-sm
                // p-8
                // min-h-[180px]
                // flex flex-col justify-center
                // transition-all duration-300
                // hover:border-[#8B5CF6]
                // `}

          //       className={`
          // ${item.className}
          // rounded-[26px]
          // border border-white/20
          // bg-white/[0.03]
          // backdrop-blur-sm
          // p-5 sm:p-6 md:p-8
          // min-h-[180px]
          // flex flex-col justify-center
          // transition-all duration-300
          // hover:border-[#8B5CF6]
          // `}

          className={`
  ${item.className}
  rounded-[26px]

  border-t
  border-l
  border-purple-400

  bg-white/[0.03]
  backdrop-blur-sm

  p-5 sm:p-6 md:p-8
  min-h-[180px]
  flex flex-col justify-center

  transition-all duration-300
  hover:border-purple-300
`}
              >

                <img
                  src={item.icon}
                  alt=""
                  // className="w-14 h-14 object-contain mb-8"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain mb-5 sm:mb-6 md:mb-8"
                />

                {/* <h3 className="text-white text-[32px] font-medium mb-3"> */}
                <h3 className="text-white text-xl sm:text-2xl md:text-[32px] font-medium mb-3">

                  {item.title}

                </h3>

                {/* <p className="text-white/70 text-lg leading-7 max-w-[420px]"> */}
                <p className="text-white/70 text-sm sm:text-base md:text-lg leading-6 md:leading-7 max-w-[420px]">

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* STATS */}
      {/* <div className="max-w-6xl mx-auto px-8 py-24 text-center"> */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20 md:py-24 text-center">
        <h2
          // className="text-6xl  font-awesome mb-20"
          className="text-4xl sm:text-5xl md:text-6xl font-awesome mb-12 sm:mb-16 md:mb-20"
        // style={{ fontFamily: "serif" }}
        >
          What Have We Done
        </h2>

        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-10"> */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">

          <div>

            {/* <h3 className="text-7xl font-bold text-purple-500"> */}
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-purple-500">

              100+

            </h3>
            <p className="mt-3 text-gray-400">Projects</p>
          </div>

          <div>
            {/* <h3 className="text-7xl font-bold text-purple-500"> */}
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-purple-500">

              50+
            </h3>
            <p className="mt-3 text-gray-400">Clients</p>
          </div>

          <div>
            {/* <h3 className="text-7xl font-bold text-purple-500"> */}
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-purple-500">

              10+
            </h3>
            <p className="mt-3 text-gray-400">Team Members</p>
          </div>

          <div>
            {/* <h3 className="text-7xl font-bold text-purple-500"> */}
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-purple-500">

              5+
            </h3>
            <p className="mt-3 text-gray-400">Years Experience</p>
          </div>
        </div>
      </div>




      {/* <div className="max-w-7xl mx-auto px-8 py-28"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20 md:py-28">

        {/* <h2 className="text-[clamp(2rem,7vw,3.75rem)] font-awesome mb-16 whitespace-nowrap"> */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-awesome mb-10 sm:mb-14 md:mb-16">
          Meet Our Founder
        </h2>

        {teams.map((member) => (
          <div
            key={member._id}
            // className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center"

          >

            {/* Left Side Image */}

            <div
              //  className="relative w-full h-[550px] overflow-hidden rounded-3xl"
              className="relative w-full h-[380px] sm:h-[450px] md:h-[550px] overflow-hidden rounded-3xl"
            >

              <img
                src={member.photo}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover object-[center_15%] transition-all duration-500 ease-in-out hover:scale-110"
              />
            </div>




            {/* Right Side Text */}
            <div>

              {/* <h3 className="text-[38px] sm:text-4xl md:text-5xl font-semibold mb-4"> */}
                              <h3 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-4">

                {member.name}

              </h3>
              {/* <h4 className="text-xl text-gray-400 mb-8"> */}
                            <h4 className="text-base sm:text-xl text-gray-400 mb-8">

                {member.designation}

              </h4>

              {/* <p className="text-gray-400 text-lg leading-8"> */}
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-7 md:leading-8">

                The Vision Behind the Studio <br /><br />
                Our founder brings together a passion for design, branding, and marketing, with a vision to help brands build distinctive and meaningful identities. <br /><br />
                With a design-first approach and an eye for detail, every project combines creative thinking with strategic marketing—from brand identity and content to social media and digital experiences. <br /> <br />
                The belief is simple: great design should not just look good; it should create impact, build recognition, and tell a brand’s story.
              </p>
            </div>
          </div>
        ))}
      </div>


      {/* FAQ */}
      {/* <div className="w-full px-6 md:px-12 lg:px-20 py-20"> */}
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-14 sm:py-16 md:py-20">
        <h2

          // className="text-6xl italic mb-16"
          className="text-4xl sm:text-5xl md:text-6xl italic mb-10 sm:mb-12 md:mb-16"
          style={{ fontFamily: "serif" }}
        >
          FAQs
        </h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            // className="border-b border-gray-700 py-6"
            className="border-b border-gray-700 py-5 sm:py-6"
          >
            <button
              onClick={() =>
                setOpenFaq(
                  openFaq === index ? null : index
                )
              }
              className="w-full flex justify-between items-center text-left"
            >
              {/* <span className="text-xl"> */}
              <span className="text-base sm:text-lg md:text-xl pr-4">
                {faq.question}
              </span>

              {/* <span className="text-3xl"> */}
              <span className="text-2xl sm:text-3xl shrink-0">
                {openFaq === index ? "-" : "+"}
              </span>
            </button>

            {openFaq === index && (
              // <p className="text-gray-400 mt-5 leading-7">
              <p className="text-[#7A2BF4]/90 mt-4 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-7">
                {faq.answer}
              </p>

              //               <p className="text-[#7A2BF4]/90 mt-5 leading-7">
              //   {faq.answer}
              // </p>


            )}
          </div>
        ))}
      </div>

      {/* CONTACT */}
      {/* <div className="max-w-7xl mx-auto px-8 py-24"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-14 sm:py-20 md:py-24">
        <Form />
      </div>
    </section>
  );
};

export default AboutUs;