import React from "react";
import heroImg from "../src/assets/hero.png";
import rocket from "../src/assets/rocket.png";
import ServicesCard from "../resuable component/ServicesCard";
import Project from "../resuable component/Project";
import Testimonial from "./Testimonial";
import Form from "../resuable component/Form"


const Home = () => {
  return (
    <div className="bg-[#111111] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-8 pt-24">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] items-center gap-16">

            {/* Left */}
            <div>
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
                social media and marketing campaigns, our team brings your
                vision to life with creativity and precision.
              </p>

              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#B84DFF] to-[#7A00FF] text-white font-medium">
                BOOK A CALL
              </button>
            </div>

            {/* Right */}
            <div className="flex justify-center md:justify-end">
              <img
                src={heroImg}
                alt="Hero"
                className="w-[350px] md:w-[420px] object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= PARTNER STRIP ================= */}
      {/* <div className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 py-8">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-7 gap-8 text-center text-white">
            {[
              "EVOLUTION",
              "pigment play",
              "L.A. COLORS",
              "L.A. Girl",
              "LORD & BERRY",
              "MILANI",
              "Gartner",
            ].map((brand) => (
              <div key={brand}>
                <h4 className="font-bold">{brand}</h4>
              </div>
            ))}
          </div>
        </div>
      </div> */}

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

            {/* Left Content */}
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

            {/* Right Rocket */}
            <div className="flex justify-center md:justify-end">
              <img
                src={rocket}
                alt="Rocket"
                className="w-[420px] md:w-[550px] object-contain"
              />
            </div>

          </div>
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
              Our Services
            </h3>



          </div>

          {/* Services Cards */}
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

          {/* Services Cards */}
          <Project />
        </div>
      </section>

      <section className="py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-8">



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