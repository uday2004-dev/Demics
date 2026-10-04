// import React from "react";
// import Graphic_Element from "../src/assets/Graphic_Element.png";
// import Elements from "../src/assets/Elements.png";
// import Capa_4 from "../src/assets/Capa_4.png";
// import grid from "../src/assets/grid.png";
// import logoIcon from "../src/assets/square.png"
// import identityIcon from "../src/assets/handhold.png"
// import guidelineIcon from "../src/assets/penpencil.png"
// import printIcon from "../src/assets/sheet.png"
// import marketingIcon from "../src/assets/Icon.png"
// import digitalIcon from "../src/assets/globe.png"
// import future from "../src/assets/brain.png"
// import support from "../src/assets/handShake.png"
// import revision from "../src/assets/infinity.png"
// import custom from "../src/assets/puzzleCube.png"
// // import BrandingProjects from "./BrandingProjects";
// import ServiceProjects from "./ServiceProjects";
// import Form from "../resuable component/Form";
// import { useParams } from "react-router-dom";
// import OtherServices from "../resuable component/OtherServices";
// import chess from "../src/assets/chess.png"
// import content from "../src/assets/content.png"
// import CRM from "../src/assets/CRM.png"
// import paid from "../src/assets/paid.png"
// import partner from "../src/assets/partner.png"
// import analys from "../src/assets/analys.png"
// import audience from "../src/assets/audience.png"
// import accelarate from "../src/assets/accelarate.png"
// import trust from "../src/assets/trust.png"
// import ROI from "../src/assets/ROI.png"
// import socialmediaHeader from "../src/assets/socialmediaHeader.png"
// import SocialHeader from "./SocialHeader";



// const SocialMediaManagement = () => {
//     const benefits = [
//         {
//             icon: audience,
//             title: "Deeper Audience Engagement",
//             desc: "Spark two-way conversations that humanize your brand and drive meaningful interactions.",
//             className: "lg:col-span-2",
//         },
//         {
//             icon: accelarate,
//             title: "Accelerated Follower Growth",
//             desc: "Combine organic tactics and paid boosts to rapidly expand your social community.",
//             className: "",
//         },
//         {
//             icon: trust,
//             title: "Enhanced Brand Credibility",
//             desc: "Consistent, timely responses and high-quality content build trust and authority.",
//             className: "",
//         },
//         {
//             icon: ROI,
//             title: "Actionable Insights & ROI",
//             desc: "Transparent reporting and data-backed recommendations ensure your social investment pays off.",
//             className: "lg:col-span-2",
//         },]

//     const brandingAssets = [
//         {
//             icon: chess,
//             title: "Channel Strategy",
//             points: [
//                 "Identify the right platforms, post",
//                 "cadence, and tone to reach your",
//                 "unique audience.",

//             ],
//         },
//         {
//             icon: content,
//             title: "Content Creation",
//             points: [
//                 "Produce scroll-stopping visuals, ",
//                 "reels, stories, and copy that ",
//                 "reflect your brand voice.",

//             ],
//         },
//         {
//             icon: CRM,
//             title: "Community Management",
//             points: [
//                 "Monitor conversations, respond",
//                 "to comments and reviews, and ",
//                 "foster genuine brand loyalty.",
//             ],
//         },
//         {
//             icon: paid,
//             title: "Paid Social",
//             points: [
//                 "Target high-value prospects with ",
//                 "precision-tuned campaigns on",
//                 "Facebook, Instagram, LinkedIn, ",
//                 "and more.",
//             ],
//         },
//         {
//             icon: partner,
//             title: "Influencer Partnerships",
//             points: [
//                 "Leverage trusted voices in your ",
//                 "industry to expand reach and ",
//                 "boost credibility.",

//             ],
//         },
//         {
//             icon: digitalIcon,
//             title: "Social Analytics",
//             points: [
//                 "Track engagement, growth, and",
//                 "ROI—then continuously refine ",
//                 "strategy for peak performance.",
//             ],
//         },
//     ];

//     const { id } = useParams();

//     return (
//         <div >

//                 <section className="w-full pt-24 bg-[#12001E]">

//                 <SocialHeader/>
//             </section>

//             <section className="relative bg-[#101110] py-24 px-5 md:px-10 lg:px-16">

//                 <div className="max-w-[1280px] mx-auto">

//                     <h2 className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-20">
//                         Assets preview
//                     </h2>
// kcwoie
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

//                         {brandingAssets.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="relative w-full min-h-[280px] rounded-[24px]
//           border border-white/30
//           bg-white/[0.03]
//           backdrop-blur-sm
//           px-7 pt-16 pb-8
//           text-center"
//                             >

//                                 <div className="absolute -top-10 left-1/2 -translate-x-1/2">
//                                     <div className="w-20 h-20 rounded-full bg-[#EEF1FF] flex items-center justify-center overflow-hidden">
//                                         <img
//                                             src={item.icon}
//                                             alt=""
//                                             className="w-[70px] h-[70px] object-contain"
//                                         />
//                                     </div>
//                                 </div>
//                                 <h3 className="text-white text-2xl font-medium mb-5">
//                                     {item.title}
//                                 </h3>

//                                 {/* <ul className="space-y-2 text-[#D8D8D8] text-[15px] leading-7">
//                                     {item.points.map((point, i) => (
//                                         <li key={i}>• {point}</li>
//                                     ))}
//                                 </ul> */}

//                                 <div className="space-y-1 text-[#D8D8D8] text-[15px] leading-7">
//                                     {item.points.map((point, i) => (
//                                         <p key={i}> {point}</p>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))}

//                     </div>

//                 </div>

//             </section>



//             <section className="bg-[#101110] py-28">

//                 <div className="max-w-[1200px] mx-auto px-6">

//                     <h2
//                         className="text-white italic mb-16
//       text-5xl lg:text-7xl"
//                         style={{ fontFamily: "Playfair Display, serif" }}
//                     >
//                         Client Benefits
//                     </h2>

//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//                         {benefits.map((item, index) => (

//                             <div
//                                 key={index}
//                                 className={`
//     ${item.className}
//     rounded-[26px]
//     border-t border-l
//     border-white/60
//     bg-white/[0.03]
//     backdrop-blur-sm
//     p-8
//     min-h-[180px]
//     flex flex-col justify-center
//   `}
//                             >

//                                 <img
//                                     src={item.icon}
//                                     alt=""
//                                     className="w-14 h-14 object-contain mb-8"
//                                 />

//                                 <h3 className="text-white text-[32px] font-medium mb-3">
//                                     {item.title}
//                                 </h3>

//                                 <p className="text-white/70 text-lg leading-7 max-w-[420px]">
//                                     {item.desc}
//                                 </p>

//                             </div>

//                         ))}

//                     </div>

//                 </div>

//             </section>




//             <section className="py-28 bg-[#111111]">
//                 <div className="max-w-7xl mx-auto px-8">

//                     {/* Heading */}
//                     <div className="mb-16">
//                         <h3
//                             className="text-5xl md:text-6xl italic text-white"
//                             style={{ fontFamily: "serif" }}
//                         >
//                             Featured Projects
//                         </h3>
//                     </div>
//                     <ServiceProjects serviceId={id} />
//                 </div>
//             </section>

//             <section className="py-28 bg-[#111111]">
//                 <div className="max-w-7xl mx-auto px-8">
//                     <OtherServices />
//                 </div>
//             </section>


//             <section className="py-24 bg-[#111111]">
//                 <div className="max-w-[1320px] mx-auto px-6 lg:px-12 xl:px-20">
//                     <Form />
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default SocialMediaManagement;



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
import trust from "../src/assets/trust.png"
import ROI from "../src/assets/ROI.png"
import socialmediaHeader from "../src/assets/socialmediaHeader.png"
import SocialHeader from "./SocialHeader";



const SocialMediaManagement = () => {
    const benefits = [
        {
            icon: audience,
            title: "Deeper Audience Engagement",
            desc: "Spark two-way conversations that humanize your brand and drive meaningful interactions.",
            className: "lg:col-span-2",
        },
        {
            icon: accelarate,
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

    const socialAssets = [
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
            icon: CRM,
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

            <section className="w-full pt-24 bg-[#12001E]">

                <SocialHeader />
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



                       {socialAssets.map((item, index) => (

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




//   className="
//   relative
//   aspect-square
//   md:aspect-auto
//   md:min-h-[280px]

//   rounded-[24px]

//   border
//   border-purple-400

//   bg-white/[0.03]
//   backdrop-blur-sm

//   shadow-[
//     0_0_10px_rgba(168,85,247,1),
//     0_0_25px_rgba(168,85,247,0.95),
//     0_0_50px_rgba(168,85,247,0.8),
//     0_0_80px_rgba(168,85,247,0.6),
//     inset_0_0_20px_rgba(168,85,247,0.3)
//   ]

//   flex
//   flex-col
//   items-center
//   justify-center

//   px-3
//   py-4

//   sm:px-5
//   sm:py-6

//   md:px-7
//   md:pt-16
//   md:pb-8

//   transition-all
//   duration-300

//   hover:border-purple-300

//   hover:shadow-[
//   0_0_8px_rgba(168,85,247,1),
//   0_0_20px_rgba(168,85,247,1),
//   0_0_40px_rgba(168,85,247,0.95),
//   0_0_70px_rgba(168,85,247,0.85),
//   0_0_110px_rgba(168,85,247,0.65),
//   inset_0_0_25px_rgba(168,85,247,0.35)
// ]
// "
                >

                    {/* Icon */}
                    {/* <div className="absolute -top-4 md:-top-10 left-1/2 -translate-x-1/2"> */}

                                {/* <div className="absolute -top-4 md:-top-10 left-1/2 -translate-x-1/2">

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

                    </div> */}


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
          bg-[#97D400]

            flex
            items-center
            justify-center

            shadow-[0_0_15px_rgba(172,254,5,0.5)]
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

            {/* <section className="bg-[#101110] py-16 md:py-28">

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
    border-t border-l
    border-white/60
    bg-white/[0.03]
    backdrop-blur-sm
    p-8
    min-h-[180px]
   

                  p-5
                  md:p-8

                  flex flex-col
                  justify-center
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
            </section> */}


               {/* <section className="bg-[#101110] py-16 md:py-28"> */}
                           {/* <section className="bg-[#101110] pt-16 pb-4 md:pt-28 md:pb-8"> */}
                           <section className="bg-[#101110] pt-16 pb-8 md:pt-28 md:pb-16">


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
//           className={`
//             ${item.className || ""}

//             rounded-[26px]

//             border-t
//             border-l
//             border-purple-400

//             bg-white/[0.03]
//             backdrop-blur-sm

//             shadow-[
//   0_0_8px_rgba(168,85,247,0.95),
//   0_0_20px_rgba(168,85,247,0.75),
//   0_0_40px_rgba(168,85,247,0.55),
//   inset_0_0_15px_rgba(168,85,247,0.18)
// ]

//             hover:border-purple-300

//             hover:shadow-[
//               0_0_10px_rgba(168,85,247,1),
//               0_0_25px_rgba(168,85,247,0.9),
//               0_0_50px_rgba(168,85,247,0.75),
//               0_0_80px_rgba(168,85,247,0.5),
//               inset_0_0_20px_rgba(168,85,247,0.25)
//             ]

//             transition-all
//             duration-300

//             p-5
//             md:p-8

//             min-h-[180px]

//             flex
//             flex-col
//             justify-center
//           `}

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

            {/* <section className="py-16 md:py-28 bg-[#111111]">

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

            </section> */}

            {/* ================= Other Services ================= */}

            {/* <section className="py-16 md:py-28 bg-[#111111]">

                <div className="max-w-7xl mx-auto px-4 md:px-8">

                    <OtherServices />

                </div>

            </section> */}

            {/* ================= Contact Form ================= */}

            {/* <section className="py-16 md:py-24 bg-[#111111]">

                <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12 xl:px-20">

                    <Form />

                </div>

            </section> */}

   {/* Other Services */}
            {/* <section className="bg-[#111111] pt-16 pb-2 md:pt-28 md:pb-4"> */}
            <section className="bg-[#111111] pt-0 pb-2 md:pb-4">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <OtherServices />
                </div>
            </section>

            {/* Contact Form */}
            <section className="bg-[#111111] pt-0 pb-16 md:pb-24">
                <div className="max-w-[1320px] mx-auto px-4 md:px-8 lg:px-12 xl:px-20">
                    <Form />
                </div>
            </section>

        </div>
    );
};

export default SocialMediaManagement;






