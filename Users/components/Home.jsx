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
      <section className="relative min-h-screen overflow-hidden bg-[#111111] flex items-center">

        {/* Background Grid */}
        <img
          src={grid}
          alt="Grid"
          className="absolute bottom-0 left-0 w-full object-cover z-0 opacity-60"
        />

        {/* Purple Glow */}
        <div className="absolute bottom-0 left-0 w-[700px] h-[350px] bg-purple-700/20 blur-[180px] rounded-full z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8">
          <div className="grid md:grid-cols-[1.15fr_0.85fr] items-center">

            {/* Left */}
            <div className="-mt-10">
              <h1 className="text-white leading-none mb-8">

                <span
                  className="italic text-5xl md:text-6xl"
                  style={{ fontFamily: "serif" }}
                >
                  Creative Solutions
                </span>

                <span className="text-5xl md:text-6xl font-bold ml-3">
                  for a
                </span>

                <br />

                <span className="text-6xl md:text-7xl font-bold">
                  Digital-First World
                </span>

              </h1>

              <p className="text-gray-400 max-w-xl leading-8 mb-10">
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
            <div className="relative flex justify-center md:justify-end pr-20 -mt-16">

              {/* Purple Glow */}
              <div className="absolute top-1/2 right-12 -translate-y-1/2 w-[320px] h-[320px] bg-purple-600/35 blur-[120px] rounded-full"></div>

              {/* Hero Image */}
              <img
                src={heroImg}
                alt="Hero"
                className="relative z-20 w-[300px] object-contain -translate-y-6 translate-x-4"
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
      <section className="relative py-28">
        <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-purple-700/20 blur-[180px] rounded-full" />

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">

            <div>
              <h2 className="text-white leading-tight">
                <span className="text-4xl md:text-6xl font-bold">
                  we are a{" "}
                </span>

                <span
                  className="text-4xl md:text-6xl italic"
                  style={{ fontFamily: "serif" }}
                >
                  design-led, strategy-driven
                </span>

                <br />

                <span className="text-4xl md:text-6xl font-bold">
                  digital marketing and
                </span>

                <br />

                <span className="text-4xl md:text-6xl font-bold">
                  creative design agency
                </span>
              </h2>

              <p className="mt-10 text-gray-400 leading-8 max-w-xl">
                With DEMICS, your brand is designed with intention, your stories
                are digitalized with emotion, and your presence evolves with
                culture. We market across media, innovate with AI, create using
                cutting-edge technology, and drive results through strategic
                thinking.
              </p>

              <button className="mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-[#B84DFF] to-[#7A00FF] text-white font-medium">
                LEARN MORE ABOUT US
              </button>
            </div>



            <div className="relative flex items-center justify-between">



              <div className="flex justify-center md:justify-end w-full relative z-10">
                <img
                  src={rocket}
                  alt="Rocket"
                  className="w-[420px] md:w-[550px] object-contain"
                />
              </div>

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

