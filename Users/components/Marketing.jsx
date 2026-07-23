import React from "react";

import OtherServices from "../resuable component/OtherServices";
import Form from "../resuable component/Form";
import rightSearch from "../src/assets/rightSearch.png"
import Speaker from "../src/assets/Speaker.png"
import video from "../src/assets/video.png"
import email from "../src/assets/email.png"
import CRM from "../src/assets/CRM.png"
import graph from "../src/assets/graph.png"
import focus from "../src/assets/scope.png"
import dollar from "../src/assets/dollar.png"
import targeting from "../src/assets/targeting.png"
import plant from "../src/assets/plant.png"
import ServiceProjects from "./ServiceProjects";
import { useParams } from "react-router-dom";
import marketing from "../src/assets/marketingHeader.png"
import MarketingHeader from "./MarketingHeader";




const Marketing = () => {
    const benefits = [
        {
            icon: focus,
            title: "Precision Audience Targeting",
            desc: "Reach high-value segments with tailored messaging that maximizes engagement and minimizes waste.",
            className: "lg:col-span-2",
        },
        {
            icon: dollar,
            title: "Optimized Marketing ROI",
            desc: "Real-time performance insights allow us to shift budgets toward top-performing channels instantly.",
            className: "",
        },
        {
            icon: targeting,
            title: "Accelerated Conversion Paths",
            desc: "Strategic funnel design and nurture campaigns reduce friction and speed prospects to purchase.",
            className: "",
        },
        {
            icon: plant,
            title: "Transparent, Data-Driven Growth",
            desc: "Clear dashboards and regular reviews ensure you always see exactly how your investment translates to results.",
            className: "lg:col-span-2",
        },]

    const MarketingAssets = [
        {
            icon:rightSearch,
            title: "Search Marketing",
            points: [
                "High-impact paid search ",
                "campaigns that put you at the ",
                "top when buyers are actively looking.",
            ],
        },
        {
            icon:Speaker,
            title: "Programmatic Ads",
            points: [
                "Data-fueled banner, video, and ",
                "native ads, served to the right ",
                "audiences at the right time.",

            ],
        },
        {
            icon: video,
            title: "Brand Guidelines",
            points: [
                "Thought-leadership blogs, ",
                "whitepapers, and multimedia ",
                "assets that attract and educate ",
                "your ideal clients."
            ],
        },
        {
            icon: email,
            title: "Email Automation",
            points: [
                "Automated drip sequences and ",
                "personalized newsletters that guide",
                "leads toward purchase.",

            ],
        },
        {
            icon: CRM,
            title: "CRM Retargeting",
            points: [
                "Re-engage site visitors and ",
                "integrate with your CRM for ",
                "Posters & banners",
                "seamless, cross-channel follow-up.",
            ],
        },
        {
            icon: graph,
            title: "Performance Analytics",
            points: [
                "End-to-end tracking and multi-",
                "touch attribution models to ",
                "continually refine spend and creative.",

            ],
        },
    ];

      const { id } = useParams();
    return (
        <div >
         

                 {/* <section className="w-full pt-24 bg-[#12001E]">
                          <img
                            src={marketing}
                            alt="Hero"
                            className="w-full h-auto block"
                          />
                        </section> */}
                             <section className="w-full pt-24 bg-[#12001E]">
           
                <MarketingHeader/>
            </section>

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
                                {/* <ul className="list-none space-y-2 text-[#D8D8D8] text-[15px] leading-7">
                                    {item.points.map((point, i) => (
                                        <li key={i}>• {point}</li>
                                    ))}
                                </ul> */}
                                  <div className="space-y-1 text-[#D8D8D8] text-[15px] leading-7">
                                    {item.points.map((point, i) => (
                                        <p key={i}> {point}</p>
                                    ))}
                                </div>
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
                    <ServiceProjects serviceId={id} />
                </div>
            </section>


              <section className="py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-8">

        <OtherServices/>
        </div>
      </section>

            <section className="py-24 bg-[#111111]">
                <div className="max-w-[1320px] mx-auto px-6 lg:px-12 xl:px-20">
                    <Form />
                </div>
            </section>



       



        </div>
    );
};

export default Marketing;