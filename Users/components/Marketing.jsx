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
            icon: rightSearch,
            title: "Search Marketing",
            points: [
                "High-impact paid search ",
                "campaigns that put you at the ",
                "top when buyers are actively looking.",
            ],
        },
        {
            icon: Speaker,
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


        
            <section className="w-full pt-24 bg-[#12001E]">

                <MarketingHeader />
            </section>



            <section className="bg-[#101110] py-16 md:py-24 px-4 md:px-10 lg:px-16">

                <div className="max-w-7xl mx-auto">

                    {/* <h2 className="text-center text-white text-xl md:text-5xl  mb-12 md:mb-20"> */}
                      <h2 className="text-center text-white text-xl md:text-5xl mb-16 md:mb-20">
                        What We Provide
                    </h2>

                    <div
                 className="
        grid
        grid-cols-2
        lg:grid-cols-3

        pt-6

        gap-x-3
        gap-y-10

        min-[390px]:gap-x-4
        min-[390px]:gap-y-12

        sm:gap-x-5
        sm:gap-y-12

        md:gap-x-8
        md:gap-y-16
        md:pt-6
    "
                    >



                 

                     {MarketingAssets.map((item, index) => (

                <div
                    key={index}
                    // className="
                    //     relative

                    //     aspect-square
                    //     md:aspect-auto
                    //     md:min-h-[280px]

                    //     rounded-[24px]

                    //     border
                    //     border-purple-400/80

                    //     bg-white/[0.03]
                    //     backdrop-blur-sm

                    //     shadow-[0_0_18px_rgba(168,85,247,0.7),inset_0_0_12px_rgba(168,85,247,0.15)]

                    //     flex
                    //     flex-col
                    //     items-center
                    //     justify-center

                    //     px-3
                    //     py-4

                    //     sm:px-5
                    //     sm:py-6

                    //     md:px-7
                    //     md:pt-16
                    //     md:pb-8

                    //     transition-all
                    //     duration-300

                    //     hover:border-purple-300
                    //     hover:shadow-[0_0_18px_rgba(168,85,247,0.7),inset_0_0_12px_rgba(168,85,247,0.15)]
                    // "


                         className="
                        relative

                  min-h-[150px]
min-[390px]:min-h-[165px]
sm:min-h-[190px]
md:min-h-[280px]
                        rounded-[24px]

                        border
                        border-purple-400/80

                        bg-white/[0.03]
                        backdrop-blur-sm

                        shadow-[0_0_18px_rgba(168,85,247,0.7),inset_0_0_12px_rgba(168,85,247,0.15)]

                        flex
                        flex-col
                        items-center
                        justify-center

                        px-3
pt-12
pb-4



min-[390px]:px-4
min-[390px]:pt-12
min-[390px]:pb-5

    sm:px-5
    sm:py-6

    md:px-7
    md:pt-16
    md:pb-8

    transition-all
    duration-300

    hover:border-purple-300
    hover:shadow-[0_0_18px_rgba(168,85,247,0.7),inset_0_0_12px_rgba(168,85,247,0.15)]
                    "

                >

                    {/* Icon */}
                    {/* <div className="absolute -top-4 md:-top-10 left-1/2 -translate-x-1/2"> */}

                                <div className="absolute -top-4 md:-top-10 left-1/2 -translate-x-1/2">

                        <div
                            className="
                                w-10
                                h-10

                                sm:w-14
                                sm:h-14

                                md:w-[72px]
                                md:h-[72px]

                                rounded-full
                                bg-[#EEF1FF]

                                flex
                                items-center
                                justify-center

                                shadow-[0_0_15px_rgba(168,85,247,0.5)]
                            "
                        >

                            <img
                                src={item.icon}
                                alt=""
                                className="
                                    w-10
                                    h-10

                                    min-[375px]:w-10
                                    min-[375px]:h-10

                                    min-[425px]:w-14
                                    min-[425px]:h-14

                                    md:w-[70px]
                                    md:h-[70px]

                                    object-contain
                                "
                            />

                        </div>

                    </div>

                    {/* Title */}
                    <h3
                        className="
                            w-full
                            text-left
                            text-white
                            font-semibold

                            text-[12px]
                            sm:text-[14px]
                            md:text-2xl

                            mb-2
                            md:mb-5
                        "
                    >
                        {item.title}
                    </h3>

                    {/* Description */}
                    <p
                        className="
                            text-left
                            text-[#D8D8D8]

                            text-[12px]
                            leading-4

                            sm:text-[11px]
                            sm:leading-5

                            md:text-[15px]
                            md:leading-7
                        "
                    >
                        {item.points.join(" ")}
                    </p>

                </div>

            ))}


                    </div>

                </div>

            </section>

            {/* ================= Client Benefits ================= */}

         

               <section className="bg-[#101110] py-16 md:py-28">

  <div className="max-w-7xl mx-auto px-4 md:px-8">

    <h2
      className="text-white italic text-4xl md:text-7xl mb-10 md:mb-16"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      Client Benefits
    </h2>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-8">

      {benefits.map((item, index) => (

        <div
          key={index}


className={`
  ${item.className || ""}

  rounded-[26px]

  border-t
  border-l
  border-purple-400

  bg-white/[0.03]
  backdrop-blur-sm

  p-5
  md:p-8

  min-h-[180px]

  flex
  flex-col
  justify-center

  shadow-[
    0_0_8px_rgba(168,85,247,1),
    0_0_20px_rgba(168,85,247,0.9),
    0_0_40px_rgba(168,85,247,0.75),
    0_0_70px_rgba(168,85,247,0.55),
    0_0_100px_rgba(168,85,247,0.35),
    inset_0_0_18px_rgba(168,85,247,0.2)
  ]

  transition-all
  duration-300

  hover:border-purple-300

  hover:shadow-[
    0_0_10px_rgba(168,85,247,1),
    0_0_25px_rgba(168,85,247,1),
    0_0_50px_rgba(168,85,247,0.9),
    0_0_80px_rgba(168,85,247,0.75),
    0_0_120px_rgba(168,85,247,0.5),
    inset_0_0_25px_rgba(168,85,247,0.3)
  ]
`}
        >

          <img
            src={item.icon}
            alt=""
            className="w-10 md:w-14 mb-5 md:mb-8"
          />

          <h3 className="text-white text-xl md:text-[32px] font-semibold mb-2">
            {item.title}
          </h3>

          <p className="text-white/70 text-sm md:text-lg leading-6 md:leading-7">
            {item.desc}
          </p>

        </div>

      ))}

    </div>

  </div>
</section>

            {/* ================= Featured Projects ================= */}

            <section className="py-16 md:py-28 bg-[#111111]">

                <div className="max-w-7xl mx-auto px-4 md:px-8">

                    <div className="mb-10 md:mb-16">

                        <h3
                            className="text-4xl md:text-6xl italic text-white"
                            style={{ fontFamily: "Playfair Display, serif" }}
                        >
                            Featured Projects
                        </h3>

                    </div>

                    <ServiceProjects serviceId={id} />

                </div>

            </section>

            {/* ================= Other Services ================= */}

            <section className="py-16 md:py-28 bg-[#111111]">

                <div className="max-w-7xl mx-auto px-4 md:px-8">

                    <OtherServices />

                </div>

            </section>

            {/* ================= Contact Form ================= */}

            <section className="py-16 md:py-24 bg-[#111111]">

                <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12 xl:px-20">

                    <Form />

                </div>

            </section>




        </div>
    );
};

export default Marketing;



