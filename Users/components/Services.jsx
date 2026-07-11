



import React from "react";
import ServicesCard from "../resuable component/ServicesCard";
import Form from "../resuable component/Form";

import ProcessCard from "./ProcessCard";

import arrow from "../src/assets/arrow.png";

const Services = () => {
  return (
    <div className="bg-[#171717] overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute right-[-200px] top-[-150px] h-[500px] w-[500px] md:h-[700px] md:w-[700px] lg:h-[900px] lg:w-[900px] rounded-full bg-[#6F18FF]/30 blur-[170px] md:blur-[220px]" />

        {/* <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 xl:px-20 pt-28 md:pt-32 lg:pt-36 pb-20 md:pb-24 lg:pb-28"> */}
        <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-14 sm:pb-20 md:pb-24 lg:pb-28">
          {/* <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-14 lg:gap-12 items-center"> */}

          <div className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-10 sm:gap-12 md:gap-14 lg:gap-12 items-center">
            {/* Left */}
            <div className="text-center lg:text-left">
              <h1
                className="text-white italic leading-[1.05]
text-[34px]
min-[375px]:text-[38px]
sm:text-5xl
md:text-6xl
lg:text-[72px]
xl:text-[82px]"
                style={{ fontFamily: "serif" }}
              >
                Unlock your
                <br />
                business potential
              </h1>
            </div>

            {/* Right */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute h-[220px] w-[220px] md:h-[320px] md:w-[320px] lg:h-[420px] lg:w-[420px] rounded-full bg-[#7A00FF]/35 blur-[120px] md:blur-[170px]" />

              <img
                src={arrow}
                alt="Arrow"
                className="relative z-10
w-[130px]
min-[375px]:w-[160px]
sm:w-[210px]
md:w-[270px]
lg:w-[360px]
xl:w-[390px]
object-contain"
              />
            </div>
          </div>

          {/* Perks */}
          <div className="mt-10 sm:mt-14 md:mt-20 lg:mt-24">
            <h2

              className="text-white italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center lg:text-left" style={{ fontFamily: "serif" }}
            >
              Perks of Choosing DEMICS
            </h2>

            <p className="mt-5 sm:mt-6 md:mt-8
text-[#D0D0D0]
text-[14px]
min-[375px]:text-[15px]
sm:text-base
leading-7
md:leading-8">
              A design-led, marketing-driven agency brings the perfect blend
              of aesthetics and strategy to the table—where creativity meets
              performance.
              <br />
              By placing visual storytelling at the core and backing it with
              data-driven insights, every campaign becomes visually <br />compelling
              while staying aligned with business goals. <br />
              This integrated approach delivers consistent branding across all touchpoints, enhances user experience, and strengthens brand recall. With agile teams <br />that collaborate across design and marketing, brands can launch faster, adapt smarter, and connect deeper with their audience.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-10 sm:py-14 md:py-20 w-full">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 xl:px-20">
          <h2
            className="text-white italic
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            mb-10 md:mb-12 text-center lg:text-left"
            style={{ fontFamily: "serif" }}
          >
            Design & Development Process
          </h2>

          < ProcessCard/>
        </div>
      </section>



      {/* ================= SERVICES ================= */}
      <section className="py-10 sm:py-14 md:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 xl:px-20">
          <h2
            className="text-white italic
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            mb-10 md:mb-14 text-center lg:text-left"
            style={{ fontFamily: "serif" }}
          >
            Explore our Services
          </h2>

          <ServicesCard />
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12 xl:px-20">
          <Form />
        </div>
      </section>
    </div>
  );
};

export default Services;




