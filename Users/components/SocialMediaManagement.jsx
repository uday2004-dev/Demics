import React from "react";
import Graphic_Element from "../src/assets/Graphic_Element.png";
import Elements from "../src/assets/Elements.png";
import Capa_4 from "../src/assets/Capa_4.png";
import grid from "../src/assets/grid.png";
import logoIcon from "../src/assets/square.png"
import identityIcon from "../src/assets/handhold.png"
import guidelineIcon from "../src/assets/penpencil.png"
import printIcon from "../src/assets/sheet.png"
import marketingIcon from "../src/assets/Icon.png"
import digitalIcon from "../src/assets/globe.png"
import future from "../src/assets/brain.png"
import support from "../src/assets/handShake.png"
import revision from "../src/assets/infinity.png"
import custom from "../src/assets/puzzleCube.png"
// import BrandingProjects from "./BrandingProjects";
import ServiceProjects from "./ServiceProjects";
import Form from "../resuable component/Form";
import { useParams } from "react-router-dom";
import OtherServices from "../resuable component/OtherServices";
import chess from "../src/assets/chess.png"
import content from "../src/assets/content.png"
import CRM from "../src/assets/CRM.png"
import paid from "../src/assets/paid.png"
import partner from "../src/assets/partner.png"
import analys from "../src/assets/analys.png"
import audience from "../src/assets/audience.png"
import accelarate from "../src/assets/accelarate.png"
import trust from"../src/assets/trust.png"
import ROI from"../src/assets/ROI.png"



const SocialMediaManagement = () => {
    const benefits = [
        {
            icon: audience,
            title: "Deeper Audience Engagement",
            desc: "Spark two-way conversations that humanize your brand and drive meaningful interactions.",
            className: "lg:col-span-2",
        },
        {
            icon:accelarate,
            title: "Accelerated Follower Growth",
            desc: "Combine organic tactics and paid boosts to rapidly expand your social community.",
            className: "",
        },
        {
            icon: trust,
            title: "Enhanced Brand Credibility",
            desc: "Consistent, timely responses and high-quality content build trust and authority.",
            className: "",
        },
        {
            icon: ROI,
            title: "Actionable Insights & ROI",
            desc: "Transparent reporting and data-backed recommendations ensure your social investment pays off.",
            className: "lg:col-span-2",
        },]

    const brandingAssets = [
        {
            icon: chess,
            title: "Channel Strategy",
            points: [
                "Identify the right platforms, post",
                "cadence, and tone to reach your",
                "unique audience.",
            
            ],
        },
        {
            icon: content,
            title: "Content Creation",
            points: [
                "Produce scroll-stopping visuals, ",
                "reels, stories, and copy that ",
                "reflect your brand voice.",
            
            ],
        },
        {
            icon:CRM,
            title: "Community Management",
            points: [
                "Monitor conversations, respond",
                "to comments and reviews, and ",
                "foster genuine brand loyalty.",
            ],
        },
        {
            icon: paid,
            title: "Paid Social",
            points: [
                "Target high-value prospects with ",
                "precision-tuned campaigns on",
                "Facebook, Instagram, LinkedIn, ",
                "and more.",
            ],
        },
        {
            icon: partner,
            title: "Influencer Partnerships",
            points: [
                "Leverage trusted voices in your ",
                "industry to expand reach and ",
                "boost credibility.",
        
            ],
        },
        {
            icon: digitalIcon,
            title: "Social Analytics",
            points: [
                "Track engagement, growth, and",
                "ROI—then continuously refine ",
                "strategy for peak performance.",
            ],
        },
    ];

    const { id } = useParams();

    return (
        <div >
            <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-r from-[#9B6DFF] via-[#3A0F6B] to-[#12001E]">

                {/* Left Glow */}
                <div className="absolute left-0 top-0 h-full w-[40%] bg-[#A56EFF]/30 blur-[140px] z-0" />

                {/* Grid Image */}
                <img
                    src={grid}
                    alt="Grid"
                    className="absolute bottom-0 left-0 w-full object-cover opacity-60 z-0 pointer-events-none"
                />

                {/* Left Illustration */}
                <img
                    src={Graphic_Element}
                    alt=""
                    className="absolute left-8 top-24 w-[340px] xl:w-[390px] z-20"
                />

                {/* Content */}
                <div className="relative z-30 flex flex-col items-center text-center px-8">

                    {/* Heading */}
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
                        Social Media Management
                    </h1>

                    {/* Green Stroke + Pen */}
                    <div className="relative w-[760px] max-w-full -mt-6">

                        <img
                            src={Elements}
                            alt=""
                            className="w-full"
                        />

                        {/* Pen */}
                        <img
                            src={Capa_4}
                            alt=""
                            className="absolute -top-[155px] right-[-195px] w-[220px] xl:w-[250px]"
                        />

                    </div>

                    {/* Description */}
                    <p className="mt-8 max-w-[930px] text-white/90 text-[18px] leading-[42px]">
                       we transform social platforms into growth engines. From strategic content calendars to real-time community engagement, we craft authentic conversations that resonate, inspire action, and build lasting relationships. Our blend of creative storytelling, targeted amplification, and data-driven optimization ensures your brand cuts through the noise and turns followers into advocates.
                    </p>

                </div>
            </section>

            <section className="relative bg-[#101110] py-24 px-5 md:px-10 lg:px-16">

                <div className="max-w-[1280px] mx-auto">

                    <h2 className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-20">
                      Assets preview
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

                        {brandingAssets.map((item, index) => (
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

                                <ul className="space-y-2 text-[#D8D8D8] text-[15px] leading-7">
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
                    <OtherServices />
                </div>
            </section>


            <section className="py-24 bg-[#151415]">
                <div className="max-w-[1320px] mx-auto px-6 lg:px-12 xl:px-20">
                    <Form />
                </div>
            </section>
        </div>
    );
};

export default SocialMediaManagement;