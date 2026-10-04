// original without animation

import React from "react";
import heroImg from "../src/assets/hero.png";
import rocket from "../src/assets/rocket.png";
import ServicesCard from "../resuable component/ServicesCard";
import Project from "../resuable component/Project";
import Testimonial from "./Testimonial";
import Form from "../resuable component/Form"
import grid from "../src/assets/grid.png"
import { useNavigate } from "react-router-dom";
import heroImg2 from "../src/assets/heroImg2.svg"



const Home = () => {

  const navigate = useNavigate()
  return (
    <div className="bg-[#111111] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative min-h-screen overflow-hidden flex items-center py-16 lg:py-0"
        style={{
          background:
            "linear-gradient(180deg, #111111 0%, #111111 48%, #17121f 58%, #21152d 68%, #2d1742 78%, #3a1858 88%, #48186f 100%)",
        }}
      >

        {/* Background Grid */}
        <img
          src={grid}
          alt="Grid"
          className="absolute bottom-0 left-0 w-full h-[350px] object-cover z-0 opacity-60"
        />

        {/* Purple Glow */}

        <div className="absolute bottom-0 left-0 w-[320px] sm:w-[450px] lg:w-[700px] h-[220px] sm:h-[280px] lg:h-[350px] bg-[#6c14db]/10 blur-[140px] lg:blur-[180px] rounded-full z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-14 lg:gap-0">

            {/* Left */}
            <div className="mt-8 lg:-mt-10 text-center lg:text-left">

              <h1 className="text-white leading-tight lg:leading-none mb-6 lg:mb-8">

                
                <span
                  className="font-awesome text-4xl sm:text-5xl lg:text-6xl italic text-[#ACFE05]"
                >
                  Creative Solutions
                </span>

                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold lg:ml-3 ml-2">
                  {" "}for a
                </span>

                <br />

                <span className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                  Digital-First World
                </span>

              </h1>

              <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 leading-7 lg:leading-8 mb-8 lg:mb-10 text-sm sm:text-base">
                We help brands stand out with impactful design, smart digital
                strategies, and engaging content. From websites and branding to
                social media and marketing campaigns, our team brings your vision
                to life with creativity and precision.
              </p>

              <button onClick={() => navigate("/contact")} className="px-8 py-4 rounded-full bg-gradient-to-r from-[#B84DFF] to-[#7A00FF] text-white font-medium">
                BOOK A CALL
              </button>



            </div>

            {/* Right */}
            <div className="relative flex justify-center lg:justify-end lg:pr-20 mt-10 lg:mt-0 lg:-mt-16">

              {/* Purple Glow */}

              <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-12 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[230px] sm:w-[280px] lg:w-[320px] h-[230px] sm:h-[280px] lg:h-[320px] bg-[#6a13d7]/35 blur-[90px] lg:blur-[120px] rounded-full"></div>

              {/* Hero Image */}
              <img
                src={heroImg2}
                alt="Hero"
                className="relative z-20 w-[240px] sm:w-[280px] lg:w-[300px] object-contain lg:-translate-y-6 lg:translate-x-4"
              />


            </div>

          </div>
        </div>

      </section>


      <div className="bg-gradient-to-r from-[#8200FF] via-[#7C2BF5] to-[#6A1FEE] py-8 overflow-hidden">
        <div className="animate-marquee">
          {[
            "EVOLUTION",
            "pigment play",
            "L.A. COLORS",
            "L.A. Girl",
            "LORD & BERRY",
            "MILANI",
            "Gartner",
            "EVOLUTION",
            "pigment play",
            "L.A. COLORS",
            "L.A. Girl",
            "LORD & BERRY",
            "MILANI",
            "Gartner",
          ].map((brand, index) => (
            <div
              key={index}
              className="mx-12 text-white font-bold text-lg whitespace-nowrap"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>


      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-28">




        <div className="absolute right-0 top-0 w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px] bg-[#5d12bb]/20 blur-[120px] lg:blur-[180px] rounded-full" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">


            <div className="text-center lg:text-left">

              <h2 className="text-white leading-tight">

                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  we are a{" "}
                </span>

                <span
                  className="text-4xl   font-awesome sm:text-5xl lg:text-6xl italic text-[#ACFE05]"
                // style={{ fontFamily: "serif" }}
                >
                  design-led, strategy-driven
                </span>

                <br />

                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  digital marketing and
                </span>

                <br />

                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  creative design agency
                </span>

              </h2>

              <p className="mt-8 lg:mt-10 text-gray-400 leading-7 lg:leading-8 max-w-xl mx-auto lg:mx-0">
                With DEMICS, your brand is designed with intention, your stories
                are digitalized with emotion, and your presence evolves with
                culture. We market across media, innovate with AI, create using
                cutting-edge technology, and drive results through strategic
                thinking.
              </p>




              <button className="mt-8 lg:mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-[#B84DFF] to-[#7A00FF] text-white font-medium">
                LEARN MORE ABOUT US
              </button>

            </div>

            {/* Rocket */}
            <div className="flex justify-center lg:justify-end mt-2 lg:mt-0">

              <img
                src={rocket}
                alt="Rocket"
                className="
            w-[250px]
            xs:w-[200px]
            sm:w-[250px]
            md:w-[340px]
            lg:w-[500px]
            xl:w-[560px]
            object-contain
          "
              />

            </div>

          </div>

        </div>

      </section>

      <section className="bg-[#111111] pt-3 pb-8 sm:pt-5 sm:pb-10 lg:pt-8 lg:pb-16">
        <div className="max-w-7xl mx-auto">

          <div className="px-5 sm:px-6 lg:px-8 mb-8 sm:mb-10 lg:mb-16">
            <h3
              className="text-white    font-awesome text-[34px] sm:text-[42px] md:text-[52px] lg:text-[60px] leading-none"
      
            >
              Our Services
            </h3>
          </div>

          <ServicesCard />
        </div>
      </section>


      {/* <section className="relative overflow-hidden bg-[#111111] pt-3 pb-8 sm:pt-5 sm:pb-10 lg:pt-8 lg:pb-16">

 

  <div className="pointer-events-none absolute top-80 -right-20 w-[350px] h-[350px] bg-[#7A2BF4]/30 blur-[120px] rounded-full" />


  <div className="pointer-events-none absolute -bottom-32 -left-32 w-[350px] h-[350px] bg-[#7A2BF4]/15 blur-[120px] rounded-full" />

  <div className="relative z-10 max-w-7xl mx-auto">

    <div className="px-5 sm:px-6 lg:px-8 mb-8 sm:mb-10 lg:mb-16">
      <h3 className="text-white font-awesome text-[34px] sm:text-[42px] md:text-[52px] lg:text-[60px] leading-none">
        Our Services
      </h3>
    </div>

    <ServicesCard />

  </div>

</section> */}





      <section className="bg-[#111111] pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-12 lg:pb-12">
  
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <h1 className="text-white leading-tight mb-6 sm:mb-8 text-left">
            <span className="font-awesome text-[30px] sm:text-[40px] md:text-[52px] lg:text-[56px] text-[#ACFE05]">
              Client
            </span>

            <span className="ml-2 sm:ml-3 text-[30px] sm:text-[40px] md:text-[52px] lg:text-[56px] font-semibold">
              Testimonials:
            </span>

            <br />

            <span className="text-[34px] sm:text-[44px] md:text-[56px] lg:text-[60px] font-semibold">
              Real Results,
            </span>{" "}

            <span className="font-awesome text-[30px] sm:text-[40px] md:text-[52px] lg:text-[56px] text-[#ACFE05]">
              Real Feedback
            </span>
          </h1>
        </div>

        <Testimonial />
      </section>


      {/* <section className="relative overflow-hidden bg-[#111111] pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-12 lg:pb-12">
  <div className="pointer-events-none absolute top-32 -right-32 w-[350px] h-[350px] bg-[#7A2BF4]/25 blur-[120px] rounded-full" />

  <div className="pointer-events-none absolute -bottom-32 -left-32 w-[350px] h-[350px] bg-[#7A2BF4]/15 blur-[120px] rounded-full" />
  <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
    <h1 className="text-white leading-tight mb-6 sm:mb-8 text-left">

      <span className="font-awesome text-[30px] sm:text-[40px] md:text-[52px] lg:text-[56px] text-[#ACFE05]">
        Client
      </span>

      <span className="ml-2 sm:ml-3 text-[30px] sm:text-[40px] md:text-[52px] lg:text-[56px] font-semibold">
        Testimonials:
      </span>

      <br />

      <span className="text-[34px] sm:text-[44px] md:text-[56px] lg:text-[60px] font-semibold">
        Real Results,
      </span>{" "}

      <span className="font-awesome text-[30px] sm:text-[40px] md:text-[52px] lg:text-[56px] text-[#ACFE05]">
        Real Feedback
      </span>

    </h1>
  </div>


  <div className="relative z-10">
    <Testimonial />
  </div>

</section> */}




      <section className="bg-[#111111] pt-0 pb-20 sm:pb-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <Form />
        </div>
      </section>

    </div>
  );
};

export default Home;

