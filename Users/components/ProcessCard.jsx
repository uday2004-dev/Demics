

import React from "react";
import Line1 from "../src/assets/Line 1.png";
import Line2 from "../src/assets/Line 2.png";
import search from "../src/assets/search.png";
import calender from "../src/assets/calender.png";
import checkList from "../src/assets/checklist.png";
import dab from "../src/assets/dab.png";
import paintingBrush from "../src/assets/paintingBrush.png";
import rocket2 from "../src/assets/rocket2.png";

const processData = [
  {
    number: "1.",
    title: "Discovery & Research",
    text: "Understand client goals, target audience, and brand personality.",
    text2: "Conduct competitor analysis and industry benchmarking.",
    text3: "Identify user pain points, market trends, and technical needs.",
    align: "left",
    image: search,
  },
  {
    number: "2.",
    title: "Strategy & Planning",
    text: "Define project scope, timelines, and deliverables.",
    text2:
      "Develop brand and digital strategy aligning with business objectives.",
    text3: "Create wireframes, user journeys, and architecture blueprints.",
    align: "right",
    image: calender,
  },
  {
    number: "3.",
    title: "Design & Development",
    text: "Develop brand visuals (logo, colors, typography) or align with existing assets.",
    text2:
      "Design high-fidelity mockups for website, app, or marketing collaterals.",
    text3:
      "Focus on UI/UX best practices to ensure intuitive and engaging design.",
    align: "left",
    image: paintingBrush,
  },
  {
    number: "4.",
    title: "Testing & QA",
    text: "Perform functionality, usability, speed, and cross-browser testing.",
    text2:
      "Resolve bugs, optimize performance, and ensure security compliance.",
    text3: "Gather client feedback for final adjustments.",
    align: "right",
    image: checkList,
  },
  {
    number: "5.",
    title: "Launch & Deployment",
    text: "Final deployment to live servers or platforms.",
    text2: "Set up tracking tools (Google Analytics, Meta Pixel, etc.).",
    text3: "Provide training or handover documentation if required.",
    align: "left",
    image: rocket2,
  },
  {
    number: "6.",
    title: "Post Launch Support",
    text: "Offer maintenance, updates, and optimization services.",
    text2:
      "Monitor performance and gather data for continuous improvement.",
    text3: "Run A/B tests and iterate based on user behavior.",
    align: "right",
    image: dab,
  },
];

const ProcessCard = () => {
  return (



<section className="relative  bg-[#111111] py-20 lg:py-28 overflow-hidden isolate">
  {/* <div className="max-w-7xl mx-auto px-5 md:px-8 relative"> */}
  <div className="w-full px-5 md:px-8 relative">
    {processData.map((item, index) => (
      <div key={index} className="relative mb-12 lg:mb-16">

        {/* Purple Glow - Only for 3rd Card */}
        {index === 2 && (
          <>
            {/* <div className="absolute -left-28 md:-left-36 lg:-left-48 top-1/2 -translate-y-1/2 h-[220px] w-[220px] md:h-[320px] md:w-[320px] lg:h-[480px] lg:w-[480px] rounded-full bg-[#7A00FF]/30 blur-[120px] md:blur-[170px] -z-10" /> */}
              <div className="absolute -left-28 md:-left-36 lg:-left-48 top-1/2 -translate-y-1/2 h-[220px] w-[220px] md:h-[320px] md:w-[320px] lg:h-[480px] lg:w-[480px] " />

            <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 h-[120px] w-[120px] md:h-[180px] md:w-[180px] rounded-full bg-[#A855F7]/20 blur-[90px] -z-10" />
          </>
        )}

        {/* Card */}
        <div
          className={`flex justify-center ${
            item.align === "left"
              ? "xl:justify-start"
              : "xl:justify-end"
          }`}
        >
          <div
            className="w-full max-w-[650px] rounded-2xl bg-[#242424]
            border-t border-l border-white/60
            transition-all
            p-6 md:p-8"
          >
            <div className="flex items-center gap-4 md:gap-6 mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-10 h-10 md:w-14 md:h-14 object-contain"
                />
              </div>

              <h3 className="text-white text-xl md:text-2xl lg:text-[28px] font-semibold leading-tight">
                {item.number} {item.title}
              </h3>
            </div>

            <ul className="list-disc pl-5 md:pl-6 space-y-3 text-[#BDBDBD] text-sm md:text-[15px] leading-7">
              <li>{item.text}</li>
              <li>{item.text2}</li>
              <li>{item.text3}</li>
            </ul>
          </div>
        </div>

        {/* Connector Line */}
        {index !== processData.length - 1 && (
          <img
            src={item.align === "left" ? Line1 : Line2}
            alt=""
            className={`hidden xl:block absolute top-[155px] ${
              item.align === "left"
                ? "left-[665px]"
                : "left-[265px]"
            }`}
          />
        )}
      </div>
    ))}
  </div>
</section>
  );
};

export default ProcessCard;