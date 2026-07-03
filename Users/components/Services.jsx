import React from "react";
import ServicesCard from "../resuable component/ServicesCard";
import Form from "../resuable component/Form";
import arrow from "../src/assets/arrow.png";
import ProcessCard from "./ProcessCard";

const Services = () => {
  return (
    <div className="bg-[#171717] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative">

        {/* Background Glow */}
        <div className="absolute right-[-180px] top-[-80px] w-[900px] h-[900px] rounded-full bg-[#6F18FF]/30 blur-[220px]" />

        <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-12 xl:px-20 pt-36 pb-28">

          <div className="grid lg:grid-cols-[58%_42%] gap-12 items-start">

            {/* Left */}
            <div>
              <h1
                className="text-white italic text-5xl md:text-7xl xl:text-[82px] leading-tight tracking-tight"
                style={{ fontFamily: "serif" }}
              >
                Unlock your
                <br />
                business potential
              </h1>
            </div>

            {/* Right */}
            <div className="relative flex justify-center lg:justify-end">

              <div className="absolute right-8 top-10 w-[420px] h-[420px] rounded-full bg-[#7A00FF]/35 blur-[170px]" />

              <img
                src={arrow}
                alt="Arrow"
                className="relative z-10 w-[260px] md:w-[330px] lg:w-[370px] object-contain"
              />
            </div>
          </div>

          {/* Perks */}
          <div className="mt-24 max-w-[760px]">

            <h2
              className="text-white italic text-4xl md:text-6xl leading-tight"
              style={{ fontFamily: "serif" }}
            >
              Perks of Choosing DEMICS
            </h2>

            <p className="mt-8 text-[#D0D0D0] text-base leading-8">
              A design-led, marketing-driven agency brings the perfect blend
              of aesthetics and strategy to the table—where creativity meets
              performance.
              <br />
              <br />
              By placing visual storytelling at the core and backing it with
              data-driven insights, every campaign becomes visually compelling
              while staying aligned with business goals.
              <br />
              <br />
              This integrated approach strengthens branding, improves user
              experience, increases brand recall, and helps businesses connect
              more deeply with their audience.
            </p>

          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="pt-20 pb-10">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 xl:px-20">
          <h2
            className="text-white italic text-4xl md:text-6xl mb-12"
            style={{ fontFamily: "serif" }}
          >
            Design & Development Process
          </h2>

          <ProcessCard />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="pt-8 pb-20">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 xl:px-20">
          <h2
            className="text-white italic text-5xl md:text-6xl mb-14"
            style={{ fontFamily: "serif" }}
          >
            Explore our Services
          </h2>

          <ServicesCard />
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12 xl:px-20">
          <Form />
        </div>
      </section>

    </div>
  );
};

export default Services; 