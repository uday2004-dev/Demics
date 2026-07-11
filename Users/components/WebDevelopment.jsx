import React from "react";
import Graphic_Element from "../src/assets/Graphic_Element.png";
import Elements from "../src/assets/Elements.png";
import Capa_4 from "../src/assets/Capa_4.png";
import grid from "../src/assets/grid.png";
import Form from "../resuable component/Form";
import split from "../src/assets/split.png"
import faster from "../src/assets/faster.png"
import Frontend from "../src/assets/Frontend.png"
import Backend from "../src/assets/Backend.png"
import Ecommerce from "../src/assets/ECommerce.png"
import performance from "../src/assets/performance.png"
import onSupport from "../src/assets/onSupport.png"
import future from "../src/assets/future.png"
import reduced from "../src/assets/reduced.png"
import conversion from "../src/assets/conversion.png"
import ServiceProjects from "../components/ServiceProjects"
import OtherServices from "../resuable component/OtherServices";
import { useParams } from "react-router-dom";
import website from "../src/assets/websiteHeader.png"



const WebDevelopment = () => {

    const { id } = useParams()
    const benefits = [
        {
            icon: faster,
            title: "Lightning-Fast Load Speeds",
            desc: "Reduce bounce rates and improve user satisfaction with optimized performance.",
            className: "lg:col-span-2",
        },
        {
            icon: future,
            title: "Future-Proof Architecture",
            desc: "Modular code and headless options let you add features without rebuilding.",
            className: "",
        },
        {
            icon: reduced,
            title: "Reduced Overhead",
            desc: "Automated deployments and streamlined workflows cut long-term maintenance costs.",
            className: "",
        },
        {
            icon: conversion,
            title: "Higher Conversion Rates",
            desc: "Clear navigation, CTAs, and A/B-tested layouts guide visitors to action.",
            className: "lg:col-span-2",
        },]

    const MarketingAssets = [
        {
            icon: Frontend,
            title: "Front End",
            points: [
                "Responsive, brand-aligned UI   ",
                "built for speed and visual impact. ",


            ],
        },
        {
            icon: Backend,
            title: "Back End",
            points: [
                "Scalable CMS or custom code",
                "—Node.js, Python, or PHP—to ",
                "power your features.",
            ],
        },
        {
            icon: Ecommerce,
            title: "Ecommerce Solutions",
            points: [
                "Secure shopping carts, payment",
                "gateways, and inventory ",
                "management.",

            ],
        },
        {
            icon: performance,
            title: "Performance Optimization",
            points: [
                "Minified assets, intelligent ",
                "caching, and CDN integration for ",
                "sub-2s load times.",

            ],
        },
        {
            icon: split,
            title: "SEO Accessibility",
            points: [
                "Semantic markup, metadata,  ",
                "and WCAG compliance to boost ",
                "rankings and inclusivity.",
            ],
        },
        {
            icon: onSupport,
            title: "Ongoing Support",
            points: [
                "Continuous updates, security ",
                "patches, and feature ",
                "enhancements.",

            ],
        },
    ];
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
                        Website Development
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
                        we engineer websites that blend stunning design with rock-solid performance. From pixel-perfect layouts to seamless back-end architecture, we create digital destinations that load instantly, guide visitors intuitively, and convert at scale. By leveraging the latest frameworks, CMS platforms, and accessibility standards, we ensure your site not only looks impeccable across devices but also drives business results.
                    </p>
                </div>
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

                                <ul className="list-none space-y-2 text-[#D8D8D8] text-[15px] leading-7">
                                    {item.points.map((point, i) => (
                                        <li key={i}>• {point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    </div>

                </div>

            </section> */}
            <section className="w-full pt-24 bg-[#12001E]">
                                      <img
                                        src={website}
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


            <section className="py-28 bg-[#111111] w-full">
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

export default WebDevelopment;