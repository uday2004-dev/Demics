import React from "react";
import heroImg from "../src/assets/hero.png";
import rocket from "../src/assets/rocket.png";
import ServicesCard from "../resuable component/ServicesCard";
import Project from "../resuable component/Project";
import Testimonial from "./Testimonial";
import Form from "../resuable component/Form"
import grid from "../src/assets/grid.png"
import blur from "../src/assets/blurEffect.png"


const Home = () => {
  return (
    <div className="bg-[#111111] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen overflow-hidden bg-[#111111] flex items-center py-16 lg:py-0">

        {/* Background Grid */}
        <img
          src={grid}
          alt="Grid"
          className="absolute bottom-0 left-0 w-full h-[350px] object-cover z-0 opacity-60"
        />

        {/* Purple Glow */}
        <div className="absolute bottom-0 left-0 w-[320px] sm:w-[450px] lg:w-[700px] h-[220px] sm:h-[280px] lg:h-[350px] bg-purple-700/20 blur-[120px] lg:blur-[180px] rounded-full z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-14 lg:gap-0">

            {/* Left */}
            <div className="mt-8 lg:-mt-10 text-center lg:text-left">

              <h1 className="text-white leading-tight lg:leading-none mb-6 lg:mb-8">

                <span
                  className="italic text-4xl sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: "serif" }}
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

              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#B84DFF] to-[#7A00FF] text-white font-medium">
                BOOK A CALL
              </button>

            </div>

            {/* Right */}
            <div className="relative flex justify-center lg:justify-end lg:pr-20 mt-10 lg:mt-0 lg:-mt-16">

              {/* Purple Glow */}
              <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-12 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[230px] sm:w-[280px] lg:w-[320px] h-[230px] sm:h-[280px] lg:h-[320px] bg-purple-600/35 blur-[90px] lg:blur-[120px] rounded-full"></div>

              {/* Hero Image */}
              <img
                src={heroImg}
                alt="Hero"
                className="relative z-20 w-[240px] sm:w-[280px] lg:w-[300px] object-contain lg:-translate-y-6 lg:translate-x-4"
              />

            </div>

          </div>
        </div>

      </section>


      <div className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 py-8 overflow-hidden">
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
      {/* ================= ROCKET SECTION ================= */}
      <section className="relative py-20 lg:py-28 overflow-hidden">

  {/* Purple Glow */}
  <div className="absolute right-0 top-0 w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px] bg-purple-700/20 blur-[120px] lg:blur-[180px] rounded-full" />

  <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

      {/* Left */}
      <div className="text-center lg:text-left">

        <h2 className="text-white leading-tight">

          <span className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            we are a{" "}
          </span>

          <span
            className="text-4xl sm:text-5xl lg:text-6xl italic"
            style={{ fontFamily: "serif" }}
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

      {/* Right */}
      <div className="relative flex justify-center lg:justify-end">

        <img
          src={rocket}
          alt="Rocket"
          className="w-[150px] sm:w-[300px] md:w-[420px] lg:w-[550px] object-contain"
        />

      </div>

    </div>
  </div>


</section>
      <section className="py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-8">


          <div className="mb-16">
            <h3
              className="text-5xl md:text-6xl italic text-white"
              style={{ fontFamily: "serif" }}
            >
              Our Services
            </h3>



          </div>


          <ServicesCard />
        </div>
      </section>


      {/* ================= BLUR EFFECT ================= */}

      <section className="py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-8">

          {/* Heading */}
          <div className="mb-16">
            <h3
              className="text-5xl md:text-6xl italic text-white"
              style={{ fontFamily: "serif" }}
            >
              Featured Projects
            </h3>



          </div>


          <Project />
        </div>
      </section>

      <section className="py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-8">

          <h1 className="text-white leading-none mb-8">

            <span
              className="italic text-5xl md:text-6xl"
              style={{ fontFamily: "serif" }}
            >
              Client
            </span>

            <span className="text-5xl md:text-6xl font-bold ml-3">
              Testimonials:
            </span>

            <br />

            <span className="text-6xl md:text-6xl font-bold">
              Real Result, {"    "}
            </span>
            <span className="italic text-5xl md:text-6xl">
              Real Feedback
            </span>

          </h1>

          {/* Testimonial Cards */}
          <Testimonial />
        </div>
      </section>
      <section className="py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-8">
          <Form />
        </div>
      </section>



    </div>
  );
};

export default Home;
