import React from "react";
import Graphic_Element from "../src/assets/Graphic_Element.png";

import Capa_4 from "../src/assets/Capa_4.png";
import grid from "../src/assets/grid.png";
import Form from "../resuable component/Form";
import creative from "../src/assets/creative.png"
import copy from "../src/assets/copy.png"
import motion from "../src/assets/motion.png"
import format from "../src/assets/format.png"
import split from "../src/assets/split.png"
import complience from "../src/assets/complience.png"
import stronger from "../src/assets/stronger.png"
import higher from "../src/assets/higher.png"
import faster from "../src/assets/faster.png"
import Transparent from "../src/assets/Transparent.png"
import OtherServices from "../resuable component/OtherServices";
import ServiceProjects from "./ServiceProjects";
import { useParams } from "react-router-dom";

// for header
import Elements from "../src/assets/Elements.png";
import aim from "../src/assets/aim.png"
import spring from "../src/assets/spring.png"
import fly from "../src/assets/fly.png"



const Adcreations = () => {
    const benefits = [
        {
            icon: stronger,
            title: "Stronger Brand Recall",
            desc: "Consistent, high-impact visuals and messaging make your ads unforgettable.",
            className: "lg:col-span-2",
        },
        {
            icon: higher,
            title: "Higher Engagement Rates",
            desc: "Tailored creative and testing drive more clicks, views, and conversions.",
            className: "",
        },
        {
            icon: faster,
            title: "Faster Time-to-Market",
            desc: "End-to-end production workflows accelerate campaign launch across channels.",
            className: "",
        },
        {
            icon: Transparent,
            title: "Transparent Performance Tracking",
            desc: "Detailed creative-level metrics reveal what works, so you invest only in winners.",
            className: "lg:col-span-2",
        },]

    const MarketingAssets = [
        {
            icon: creative,
            title: "Creative Strategy",
            points: [
                "Develop big-idea frameworks  ",
                "that align with your brand goals  ",
                "and audience motivations.",

            ],
        },
        {
            icon: copy,
            title: "Copy Messaging",
            points: [
                "Write clear, compelling  ",
                "headlines and body text that ",
                "drive curiosity and action. ",
            ],
        },
        {
            icon: motion,
            title: "Motion Design",
            points: [
                "Produce scroll-stopping static ",
                "and animated creatives tailored ",
                "to each platform.",

            ],
        },
        {
            icon: format,
            title: "Format Production",
            points: [
                "Export ads in all required specs ",
                "—social sizes, banners, video ",
                "cuts, and native templates.",

            ],
        },
        {
            icon: split,
            title: "Split Testing",
            points: [
                "Continuously test creatives,  ",
                "formats, and copy variants to  ",
                "identify top performers.",
            ],
        },
        {
            icon: complience,
            title: "Compliance Review",
            points: [
                "Ensure every asset adheres to ",
                "brand guidelines, legal ",
                "requirements, and platform policies.",

            ],
        },
    ];
    const {id}=useParams
    return (
        <div >
            {/* <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-r from-[#9B6DFF] via-[#3A0F6B] to-[#12001E]">

          
                <div className="absolute left-0 top-0 h-full w-[40%] bg-[#A56EFF]/30 blur-[140px] z-0" />

       
                <img
                    src={grid}
                    alt="Grid"
                    className="absolute bottom-0 left-0 w-full object-cover opacity-60 z-0 pointer-events-none"
                />

               
                <img
                    src={Graphic_Element}
                    alt=""
                    className="absolute left-8 top-24 w-[340px] xl:w-[390px] z-20"
                />

             
                <div className="relative z-30 flex flex-col items-center text-center px-8">

           
                    <h1
                        className="text-white italic font-light leading-none
          text-[90px]
          md:text-[130px]
          lg:text-[170px]
          xl:text-[190px]"
                        style={{
                            fontFamily: "Playfair Display, serif",
                        }}
                    >
                        Ad Creations
                    </h1>

                    <div className="relative w-[760px] max-w-full -mt-6">

                        <img
                            src={Elements}
                            alt=""
                            className="w-full"
                        />

                    
                        <img
                            src={Capa_4}
                            alt=""
                            className="absolute -top-[155px] right-[-195px] w-[220px] xl:w-[250px]"
                        />

                    </div>

                  
                    <p className="mt-8 max-w-[930px] text-white/90 text-[18px] leading-[42px]">
                        we craft ads that don’t just look great—they perform. By marrying strategic messaging with eye-catching design and data-backed insights, we deliver creative executions that grab attention, spark emotion, and compel users to click. Whether it’s social, display, video, or native, every ad we produce is optimized for impact and ROI.                    </p>

                </div>
            </section> */}

<div className="relative z-30 flex flex-col items-center text-center px-8">

  {/* Heading */}
  <div className="relative inline-block">
    <h1
      className="text-white italic font-light leading-none
      text-[90px] md:text-[130px] lg:text-[170px] xl:text-[190px]"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      Ad Creation
    </h1>

    {/* Left Plane */}
    <img
      src={fly}
      alt=""
      className="absolute -left-28 top-6 w-32 lg:w-40"
    />

    {/* Right Target */}
    <img
      src={aim}
      alt=""
      className="absolute -right-28 bottom-2 w-32 lg:w-40"
    />
  </div>

  {/* Green Scribble */}
  <div className="relative w-[760px] max-w-full -mt-8">
    <img
      src={spring}
      alt=""
      className="w-full"
    />
  </div>

  {/* Description */}
  <p className="mt-8 max-w-[900px] text-white/90 text-[17px] leading-8">
    We craft ads that don’t just look great—they perform. By marrying
    strategic messaging with eye-catching design and data-backed insights,
    we deliver creative executions that grab attention, spark emotion, and
    compel users to click. Whether it’s social, display, video, or native,
    every ad we produce is optimized for impact and ROI.
  </p>

</div>

            <section className="relative bg-[#101110] py-24 px-5 md:px-10 lg:px-16">

                <div className="max-w-[1280px] mx-auto">

                    <h2 className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-20">
                      What We Provide
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

                        {MarketingAssets.map((item, index) => (
                            <div
                                key={index}
                                className="relative w-full min-h-[280px] rounded-[24px]
          border border-white/30
          bg-white/[0.03]
          backdrop-blur-sm
          px-7 pt-16 pb-8
          text-center"
                            >
                                {/* Icon */}
                                {/* <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                                    <div className="w-20 h-20 rounded-full bg-[#EEF1FF] flex items-center justify-center">
                                        <img
                                            src={item.icon}
                                            alt=""
                                            className="w-9 h-9 object-contain"
                                        />
                                    </div>
                                </div> */}
<div className="absolute -top-10 left-1/2 -translate-x-1/2">
  <div className="w-20 h-20 rounded-full bg-[#EEF1FF] flex items-center justify-center overflow-hidden">
    <img
      src={item.icon}
      alt=""
      className="w-[70px] h-[70px] object-contain"
    />
  </div>
</div>
                                <h3 className="text-white text-2xl font-medium mb-5">
                                    {item.title}
                                </h3>

                                {/* <ul className="space-y-2 text-[#D8D8D8] text-[15px] leading-7 list-none">
                                    {item.points.map((point, i) => (
                                        <li className="decoration-none" key={i}>• {point}</li>
                                    ))}
                                </ul> */}
                                <ul className="list-none space-y-2 text-[#D8D8D8] text-[15px] leading-7">
                                    {item.points.map((point, i) => (
                                        <li key={i}>• {point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    </div>

                </div>

            </section>



            <section className="bg-[#101110] py-28">

                <div className="max-w-[1200px] mx-auto px-6">

                    <h2
                        className="text-white italic mb-16
      text-5xl lg:text-7xl"
                        style={{ fontFamily: "Playfair Display, serif" }}
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
    border-t border-l
    border-white/60
    bg-white/[0.03]
    backdrop-blur-sm
    p-8
    min-h-[180px]
    flex flex-col justify-center
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
                        <ServiceProjects serviceId={id} />
                    </div>
                </section>


                <section className="py-28 bg-[#111111]">
                    <div className="max-w-7xl mx-auto px-8">

                        <OtherServices />
                    </div>
                </section>

            </section>

            <section className="py-24 bg-[#151415]">
                <div className="max-w-[1320px] mx-auto px-6 lg:px-12 xl:px-20">
                    <Form />
                </div>
            </section>



            {/* 
      <section className="py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-5xl md:text-6xl italic text-white mb-16">
            Featured Projects
          </h3>

          <BrandingProjects serviceId={id} />
        </div>
      </section>
        */}




        </div>
    );
};

export default Adcreations;