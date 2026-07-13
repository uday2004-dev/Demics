import React from "react";

import Form from "../resuable component/Form";
import creative from "../src/assets/creative.png"
import copy from "../src/assets/copy.png"
import motion from "../src/assets/motion.png"
import format from "../src/assets/format.png"
import split from "../src/assets/split.png"
import complience from "../src/assets/complience.png"
import stronger from "../src/assets/stronger.png"
import higher from "../src/assets/Higher.png"
import faster from "../src/assets/faster.png"
import Transparent from "../src/assets/Transparent.png"
import OtherServices from "../resuable component/OtherServices";
import ServiceProjects from "./ServiceProjects";
import { useParams } from "react-router-dom";

// for header

import adcreation from "../src/assets/adcreationHeader.png"



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


            <section className="w-full pt-24 bg-[#12001E]">
                                      <img
                                        src={adcreation}
                                        alt="Hero"
                                        className="w-full h-auto block"
                                      />
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

            <section className="py-24 bg-[#111111]">
                <div className="max-w-[1320px] mx-auto px-6 lg:px-12 xl:px-20">
                    <Form />
                </div>
            </section>







        </div>
    );
};

export default Adcreations;