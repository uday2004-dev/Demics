// original without animation

import React from "react";
import heroImg from "../src/assets/hero.png";
import rocket from "../src/assets/rocket.png";
import ServicesCard from "../resuable component/ServicesCard";
import Project from "../resuable component/Project";
import Testimonial from "./Testimonial";
import Form from "../resuable component/Form"
import grid from "../src/assets/grid.png"
import { useNavigate } from "react-router-dom";
import heroImg2 from "../src/assets/heroImg2.svg"

// import blur from "../src/assets/blurEffect.png"


const Home = () => {

  const navigate = useNavigate()
  return (
    <div className="bg-[#111111] overflow-hidden">

      {/* ================= HERO SECTION ================= */}
      {/* <section className="relative min-h-screen overflow-hidden bg-[#111111] flex items-center py-16 lg:py-0"> */}
    <section
  className="relative min-h-screen overflow-hidden flex items-center py-16 lg:py-0"
  style={{
    background:
      "linear-gradient(180deg, #111111 0%, #111111 48%, #17121f 58%, #21152d 68%, #2d1742 78%, #3a1858 88%, #48186f 100%)",
  }}
>

        {/* Background Grid */}
        <img
          src={grid}
          alt="Grid"
          // className="absolute bottom-0 left-0 w-full h-[350px] object-cover z-0 opacity-60"
          className="absolute bottom-0 left-0 w-full h-[350px] object-cover z-0 opacity-60"
        />

        {/* Purple Glow */}
        {/* <div className="absolute bottom-0 left-0 w-[320px] sm:w-[450px] lg:w-[700px] h-[220px] sm:h-[280px] lg:h-[350px] bg-purple-700/20 blur-[120px] lg:blur-[180px] rounded-full z-0" /> */}

        <div className="absolute bottom-0 left-0 w-[320px] sm:w-[450px] lg:w-[700px] h-[220px] sm:h-[280px] lg:h-[350px] bg-[#6c14db]/10 blur-[140px] lg:blur-[180px] rounded-full z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-14 lg:gap-0">

            {/* Left */}
            <div className="mt-8 lg:-mt-10 text-center lg:text-left">

              <h1 className="text-white leading-tight lg:leading-none mb-6 lg:mb-8">

                {/* <span
                  className="  font-awesome text-4xl-#F5FF1B sm:text-5xl- lg:text-6xl italic "

                > */}
                <span
                  className="font-awesome text-4xl sm:text-5xl lg:text-6xl italic text-[#ACFE05]"
                >
                  Creative Solutions
                </span>

                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold lg:ml-3 ml-2">
                  {" "}for a
                </span>

                <br />

                <span className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                  Digital-First World
                </span>

              </h1>

              <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 leading-7 lg:leading-8 mb-8 lg:mb-10 text-sm sm:text-base">
                We help brands stand out with impactful design, smart digital
                strategies, and engaging content. From websites and branding to
                social media and marketing campaigns, our team brings your vision
                to life with creativity and precision.
              </p>

              <button onClick={() => navigate("/contact")} className="px-8 py-4 rounded-full bg-gradient-to-r from-[#B84DFF] to-[#7A00FF] text-white font-medium">
                BOOK A CALL
              </button>



            </div>

            {/* Right */}
            <div className="relative flex justify-center lg:justify-end lg:pr-20 mt-10 lg:mt-0 lg:-mt-16">

              {/* Purple Glow */}
              {/* <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-12 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[230px] sm:w-[280px] lg:w-[320px] h-[230px] sm:h-[280px] lg:h-[320px] bg-purple-600/35 blur-[90px] lg:blur-[120px] rounded-full"></div> */}

              <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-12 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[230px] sm:w-[280px] lg:w-[320px] h-[230px] sm:h-[280px] lg:h-[320px] bg-[#6a13d7]/35 blur-[90px] lg:blur-[120px] rounded-full"></div>

              {/* Hero Image */}
              <img
                src={heroImg2}
                alt="Hero"
                className="relative z-20 w-[240px] sm:w-[280px] lg:w-[300px] object-contain lg:-translate-y-6 lg:translate-x-4"
              />


            </div>

          </div>
        </div>

      </section>


      {/* <div className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 py-8 overflow-hidden">
        <div className="animate-marquee">
          {[
            "EVOLUTION",
            "pigment play",
            "L.A. COLORS",
            "L.A. Girl",
            "LORD & BERRY",
            "MILANI",
            "Gartner",
            "EVOLUTION",
            "pigment play",
            "L.A. COLORS",
            "L.A. Girl",
            "LORD & BERRY",
            "MILANI",
            "Gartner",
          ].map((brand, index) => (
            <div
              key={index}
              className="mx-12 text-white font-bold text-lg whitespace-nowrap"
            >
              {brand}
            </div>
          ))}
        </div>
      </div> */}

      <div className="bg-gradient-to-r from-[#8200FF] via-[#7C2BF5] to-[#6A1FEE] py-8 overflow-hidden">
        <div className="animate-marquee">
          {[
            "EVOLUTION",
            "pigment play",
            "L.A. COLORS",
            "L.A. Girl",
            "LORD & BERRY",
            "MILANI",
            "Gartner",
            "EVOLUTION",
            "pigment play",
            "L.A. COLORS",
            "L.A. Girl",
            "LORD & BERRY",
            "MILANI",
            "Gartner",
          ].map((brand, index) => (
            <div
              key={index}
              className="mx-12 text-white font-bold text-lg whitespace-nowrap"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>


      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-28">



        {/* <div className="absolute right-0 top-0 w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px] bg-purple-700/20 blur-[120px] lg:blur-[180px] rounded-full" /> */}

        <div className="absolute right-0 top-0 w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px] bg-[#5d12bb]/20 blur-[120px] lg:blur-[180px] rounded-full" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">


            <div className="text-center lg:text-left">

              <h2 className="text-white leading-tight">

                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  we are a{" "}
                </span>

                <span
                  className="text-4xl   font-awesome sm:text-5xl lg:text-6xl italic text-[#ACFE05]"
                // style={{ fontFamily: "serif" }}
                >
                  design-led, strategy-driven
                </span>

                <br />

                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  digital marketing and
                </span>

                <br />

                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                  creative design agency
                </span>

              </h2>

              <p className="mt-8 lg:mt-10 text-gray-400 leading-7 lg:leading-8 max-w-xl mx-auto lg:mx-0">
                With DEMICS, your brand is designed with intention, your stories
                are digitalized with emotion, and your presence evolves with
                culture. We market across media, innovate with AI, create using
                cutting-edge technology, and drive results through strategic
                thinking.
              </p>




              <button className="mt-8 lg:mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-[#B84DFF] to-[#7A00FF] text-white font-medium">
                LEARN MORE ABOUT US
              </button>

            </div>

            {/* Rocket */}
            <div className="flex justify-center lg:justify-end mt-2 lg:mt-0">

              <img
                src={rocket}
                alt="Rocket"
                className="
            w-[250px]
            xs:w-[200px]
            sm:w-[250px]
            md:w-[340px]
            lg:w-[500px]
            xl:w-[560px]
            object-contain
          "
              />

            </div>

          </div>

        </div>

      </section>

      <section className="bg-[#111111] py-12 sm:py-16 lg:py-28">
        <div className="max-w-7xl mx-auto">

          <div className="px-5 sm:px-6 lg:px-8 mb-8 sm:mb-10 lg:mb-16">
            <h3
              className="text-white    font-awesome text-[34px] sm:text-[42px] md:text-[52px] lg:text-[60px] leading-none"
            // style={{ fontFamily: "serif" }}
            >
              Our Services
            </h3>
          </div>

          <ServicesCard />
        </div>
      </section>


      {/* ================= BLUR EFFECT ================= */}

      <section className="py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-8">

          {/* Heading */}
          <div className="mb-16">
            <h3
              className="text-5xl md:text-6xl  font-awesome text-white"
            // style={{ fontFamily: "serif" }}
            >
              Featured Projects
            </h3>



          </div>


          <Project />
        </div>
      </section>



      <section className="py-28 bg-[#111111]">
        {/* Heading */}
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-white leading-tight mb-6 sm:mb-8 text-left">
            <span
              className=" font-awesome text-[30px] sm:text-[40px] md:text-[52px] lg:text-[56px] text-[#ACFE05]"
            // style={{ fontFamily: "serif" }}
            >
              Client
            </span>

            <span className="ml-2 sm:ml-3 text-[30px] sm:text-[40px] md:text-[52px] lg:text-[56px] font-semibold">
              Testimonials:
            </span>

            <br />

            <span className="text-[34px] sm:text-[44px] md:text-[56px] lg:text-[60px] font-semibold">
              Real Results,
            </span>{" "}

            <span
              className=" font-awesome text-[30px] sm:text-[40px] md:text-[52px] lg:text-[56px] text-[#ACFE05]"
            // style={{ fontFamily: "serif" }}
            >
              Real Feedback
            </span>
          </h1>
        </div>

        {/* Full Width Testimonials */}
        <Testimonial />
      </section>



      <section className="py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-8">
          <Form />
        </div>
      </section>



    </div>
  );
};

export default Home;



// // animation demo 1
// import React from "react";
// import heroImg from "../src/assets/hero.png";
// import rocket from "../src/assets/rocket.png";
// import ServicesCard from "../resuable component/ServicesCard";
// import Project from "../resuable component/Project";
// import Testimonial from "./Testimonial";
// import Form from "../resuable component/Form";
// import grid from "../src/assets/grid.png";
// import { useNavigate } from "react-router-dom";
// import heroImg2 from "../src/assets/heroImg2.svg";
// import { motion } from "motion/react";

// const Home = () => {
//   const navigate = useNavigate();

//   /* ================= ANIMATION VARIANTS ================= */

//   const fadeUp = {
//     hidden: {
//       opacity: 0,
//       y: 60,
//     },

//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.22, 1, 0.36, 1],
//       },
//     },
//   };

//   const fadeLeft = {
//     hidden: {
//       opacity: 0,
//       x: -70,
//     },

//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.9,
//         ease: [0.22, 1, 0.36, 1],
//       },
//     },
//   };

//   const fadeRight = {
//     hidden: {
//       opacity: 0,
//       x: 70,
//     },

//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.9,
//         ease: [0.22, 1, 0.36, 1],
//       },
//     },
//   };

//   return (
//     <div className="bg-[#111111] overflow-hidden">

//       {/* =====================================================
//                           HERO SECTION
//       ===================================================== */}

//       <section className="relative min-h-screen overflow-hidden bg-[#111111] flex items-center py-16 lg:py-0">

//         {/* Background Grid */}

//         <motion.img
//           src={grid}
//           alt="Grid"
//           initial={{
//             opacity: 0,
//             scale: 1.1,
//           }}
//           animate={{
//             opacity: 0.6,
//             scale: 1,
//           }}
//           transition={{
//             duration: 1.5,
//             ease: "easeOut",
//           }}
//           className="
//             absolute
//             bottom-0
//             left-0
//             w-full
//             h-[350px]
//             object-cover
//             z-0
//           "
//         />


//         {/* Purple Glow */}

//         <motion.div
//           animate={{
//             scale: [1, 1.08, 1],
//             opacity: [0.2, 0.35, 0.2],
//           }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="
//             absolute
//             bottom-0
//             left-0
//             w-[320px]
//             sm:w-[450px]
//             lg:w-[700px]
//             h-[220px]
//             sm:h-[280px]
//             lg:h-[350px]
//             bg-purple-700/20
//             blur-[120px]
//             lg:blur-[180px]
//             rounded-full
//             z-0
//           "
//         />


//         {/* HERO CONTENT */}

//         <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-8">

//           <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-14 lg:gap-0">


//             {/* ================= LEFT ================= */}

//             <div className="mt-8 lg:-mt-10 text-center lg:text-left">

//               {/* Main Heading */}

//               <motion.h1
//                 initial="hidden"
//                 animate="visible"
//                 className="text-white leading-tight lg:leading-none mb-6 lg:mb-8"
//               >

//                 <motion.span
//                   variants={fadeLeft}
//                   className="
//                     block
//                     font-awesome
//                     text-4xl
//                     sm:text-5xl
//                     lg:text-6xl
//                     italic
//                     text-[#F1FD0F]
//                   "
//                 >
//                   Creative Solutions
//                 </motion.span>


//                 <motion.span
//                   variants={fadeUp}
//                   className="
//                     text-4xl
//                     sm:text-5xl
//                     lg:text-6xl
//                     font-bold
//                     lg:ml-3
//                     ml-2
//                   "
//                 >
//                   {" "}for a
//                 </motion.span>


//                 <br />


//                 <motion.span
//                   variants={fadeRight}
//                   className="
//                     text-5xl
//                     sm:text-6xl
//                     lg:text-7xl
//                     font-bold
//                   "
//                 >
//                   Digital-First World
//                 </motion.span>

//               </motion.h1>


//               {/* Description */}

//               <motion.p
//                 initial={{
//                   opacity: 0,
//                   y: 30,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   delay: 0.7,
//                   duration: 0.8,
//                 }}
//                 className="
//                   text-gray-400
//                   max-w-xl
//                   mx-auto
//                   lg:mx-0
//                   leading-7
//                   lg:leading-8
//                   mb-8
//                   lg:mb-10
//                   text-sm
//                   sm:text-base
//                 "
//               >
//                 We help brands stand out with impactful design, smart digital
//                 strategies, and engaging content. From websites and branding to
//                 social media and marketing campaigns, our team brings your vision
//                 to life with creativity and precision.
//               </motion.p>


//               {/* BOOK A CALL */}

//               <motion.button
//                 initial={{
//                   opacity: 0,
//                   y: 25,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   delay: 0.95,
//                   duration: 0.6,
//                 }}
//                 whileHover={{
//                   scale: 1.06,
//                   boxShadow:
//                     "0 0 35px rgba(184,77,255,0.45)",
//                 }}
//                 whileTap={{
//                   scale: 0.95,
//                 }}
//                 onClick={() => navigate("/contact")}
//                 className="
//                   px-8
//                   py-4
//                   rounded-full
//                   bg-gradient-to-r
//                   from-[#B84DFF]
//                   to-[#7A00FF]
//                   text-white
//                   font-medium
//                 "
//               >
//                 BOOK A CALL
//               </motion.button>

//             </div>


//             {/* ================= RIGHT ================= */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: 100,
//               }}
//               animate={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               transition={{
//                 delay: 0.4,
//                 duration: 1,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="
//                 relative
//                 flex
//                 justify-center
//                 lg:justify-end
//                 lg:pr-20
//                 mt-10
//                 lg:mt-0
//                 lg:-mt-16
//               "
//             >

//               {/* Purple Glow */}

//               <motion.div
//                 animate={{
//                   scale: [1, 1.15, 1],
//                   opacity: [0.25, 0.45, 0.25],
//                 }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="
//                   absolute
//                   top-1/2
//                   left-1/2
//                   lg:left-auto
//                   lg:right-12
//                   -translate-x-1/2
//                   lg:translate-x-0
//                   -translate-y-1/2
//                   w-[230px]
//                   sm:w-[280px]
//                   lg:w-[320px]
//                   h-[230px]
//                   sm:h-[280px]
//                   lg:h-[320px]
//                   bg-purple-600/35
//                   blur-[90px]
//                   lg:blur-[120px]
//                   rounded-full
//                 "
//               />


//               {/* HERO IMAGE */}

//               <motion.img
//                 src={heroImg2}
//                 alt="Hero"

//                 animate={{
//                   y: [0, -15, 0],
//                   rotate: [0, 1, 0, -1, 0],
//                 }}

//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}

//                 whileHover={{
//                   scale: 1.05,
//                 }}

//                 className="
//                   relative
//                   z-20
//                   w-[240px]
//                   sm:w-[280px]
//                   lg:w-[300px]
//                   object-contain
//                   lg:-translate-y-6
//                   lg:translate-x-4
//                 "
//               />

//             </motion.div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//                          CLIENT MARQUEE
//       ===================================================== */}

//       <div className="
//         bg-gradient-to-r
//         from-purple-700
//         via-purple-500
//         to-purple-700
//         py-8
//         overflow-hidden
//       ">

//         <motion.div
//           animate={{
//             x: ["0%", "-50%"],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="flex w-max"
//         >

//           {[
//             "EVOLUTION",
//             "pigment play",
//             "L.A. COLORS",
//             "L.A. Girl",
//             "LORD & BERRY",
//             "MILANI",
//             "Gartner",

//             "EVOLUTION",
//             "pigment play",
//             "L.A. COLORS",
//             "L.A. Girl",
//             "LORD & BERRY",
//             "MILANI",
//             "Gartner",
//           ].map((brand, index) => (

//             <div
//               key={index}
//               className="
//                 mx-12
//                 text-white
//                 font-bold
//                 text-lg
//                 whitespace-nowrap
//               "
//             >
//               {brand}
//             </div>

//           ))}

//         </motion.div>

//       </div>


//       {/* =====================================================
//                          ABOUT SECTION
//       ===================================================== */}

//       <section className="relative overflow-hidden py-12 sm:py-16 lg:py-28">

//         {/* Glow */}

//         <motion.div
//           animate={{
//             scale: [1, 1.15, 1],
//           }}
//           transition={{
//             duration: 7,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="
//             absolute
//             right-0
//             top-0
//             w-[300px]
//             sm:w-[500px]
//             lg:w-[700px]
//             h-[300px]
//             sm:h-[500px]
//             lg:h-[700px]
//             bg-purple-700/20
//             blur-[120px]
//             lg:blur-[180px]
//             rounded-full
//           "
//         />


//         <div className="
//           max-w-7xl
//           mx-auto
//           px-5
//           sm:px-8
//           relative
//           z-10
//         ">

//           <div className="
//             grid
//             grid-cols-1
//             lg:grid-cols-2
//             gap-14
//             lg:gap-20
//             items-center
//           ">


//             {/* TEXT */}

//             <motion.div
//               variants={fadeLeft}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{
//                 once: true,
//                 amount: 0.25,
//               }}
//               className="text-center lg:text-left"
//             >

//               <h2 className="text-white leading-tight">

//                 <span className="
//                   text-4xl
//                   sm:text-5xl
//                   lg:text-6xl
//                   font-bold
//                 ">
//                   we are a{" "}
//                 </span>

//                 <span className="
//                   text-4xl
//                   font-awesome
//                   sm:text-5xl
//                   lg:text-6xl
//                   italic
//                   text-[#F1FD0F]
//                 ">
//                   design-led, strategy-driven
//                 </span>

//                 <br />

//                 <span className="
//                   text-4xl
//                   sm:text-5xl
//                   lg:text-6xl
//                   font-bold
//                 ">
//                   digital marketing and
//                 </span>

//                 <br />

//                 <span className="
//                   text-4xl
//                   sm:text-5xl
//                   lg:text-6xl
//                   font-bold
//                 ">
//                   creative design agency
//                 </span>

//               </h2>


//               <p className="
//                 mt-8
//                 lg:mt-10
//                 text-gray-400
//                 leading-7
//                 lg:leading-8
//                 max-w-xl
//                 mx-auto
//                 lg:mx-0
//               ">
//                 With DEMICS, your brand is designed with intention, your stories
//                 are digitalized with emotion, and your presence evolves with
//                 culture. We market across media, innovate with AI, create using
//                 cutting-edge technology, and drive results through strategic
//                 thinking.
//               </p>


//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow:
//                     "0 0 30px rgba(184,77,255,0.4)",
//                 }}
//                 whileTap={{
//                   scale: 0.95,
//                 }}
//                 className="
//                   mt-8
//                   lg:mt-10
//                   px-8
//                   py-4
//                   rounded-full
//                   bg-gradient-to-r
//                   from-[#B84DFF]
//                   to-[#7A00FF]
//                   text-white
//                   font-medium
//                 "
//               >
//                 LEARN MORE ABOUT US
//               </motion.button>

//             </motion.div>


//             {/* ROCKET */}

//             <motion.div
//               variants={fadeRight}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{
//                 once: true,
//                 amount: 0.25,
//               }}
//               className="
//                 flex
//                 justify-center
//                 lg:justify-end
//                 mt-2
//                 lg:mt-0
//               "
//             >

//               <motion.img
//                 src={rocket}
//                 alt="Rocket"

//                 animate={{
//                   y: [0, -18, 0],
//                   rotate: [0, 1.5, 0, -1.5, 0],
//                 }}

//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}

//                 whileHover={{
//                   scale: 1.05,
//                 }}

//                 className="
//                   w-[250px]
//                   xs:w-[200px]
//                   sm:w-[250px]
//                   md:w-[340px]
//                   lg:w-[500px]
//                   xl:w-[560px]
//                   object-contain
//                 "
//               />

//             </motion.div>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//                          SERVICES
//       ===================================================== */}

//       <section className="bg-[#111111] py-12 sm:py-16 lg:py-28">

//         <div className="max-w-7xl mx-auto">

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{
//               once: true,
//               amount: 0.3,
//             }}
//             className="
//               px-5
//               sm:px-6
//               lg:px-8
//               mb-8
//               sm:mb-10
//               lg:mb-16
//             "
//           >

//             <h3
//               className="
//                 text-white
//                 font-awesome
//                 text-[34px]
//                 sm:text-[42px]
//                 md:text-[52px]
//                 lg:text-[60px]
//                 leading-none
//               "
//             >
//               Our Services
//             </h3>

//           </motion.div>


//           <ServicesCard />

//         </div>

//       </section>


//       {/* =====================================================
//                        FEATURED PROJECTS
//       ===================================================== */}

//       <section className="py-28 bg-[#111111]">

//         <div className="max-w-7xl mx-auto px-8">

//           <motion.div
//             variants={fadeLeft}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{
//               once: true,
//               amount: 0.3,
//             }}
//             className="mb-16"
//           >

//             <h3
//               className="
//                 text-5xl
//                 md:text-6xl
//                 font-awesome
//                 text-white
//               "
//             >
//               Featured Projects
//             </h3>

//           </motion.div>


//           <Project />

//         </div>

//       </section>


//       {/* =====================================================
//                          TESTIMONIAL
//       ===================================================== */}

//       <section className="py-28 bg-[#111111]">

//         <div className="max-w-7xl mx-auto px-8">

//           <motion.h1
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{
//               once: true,
//               amount: 0.3,
//             }}
//             className="
//               text-white
//               leading-tight
//               mb-6
//               sm:mb-8
//               text-left
//             "
//           >

//             <span
//               className="
//                 font-awesome
//                 text-[30px]
//                 sm:text-[40px]
//                 md:text-[52px]
//                 lg:text-[56px]
//                 text-[#F1FD0F]
//               "
//             >
//               Client
//             </span>

//             <span className="
//               ml-2
//               sm:ml-3
//               text-[30px]
//               sm:text-[40px]
//               md:text-[52px]
//               lg:text-[56px]
//               font-semibold
//             ">
//               Testimonials:
//             </span>

//             <br />

//             <span className="
//               text-[34px]
//               sm:text-[44px]
//               md:text-[56px]
//               lg:text-[60px]
//               font-semibold
//             ">
//               Real Results,
//             </span>{" "}

//             <span
//               className="
//                 font-awesome
//                 text-[30px]
//                 sm:text-[40px]
//                 md:text-[52px]
//                 lg:text-[56px]
//                 text-[#F1FD0F]
//               "
//             >
//               Real Feedback
//             </span>

//           </motion.h1>

//         </div>


//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 70,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.15,
//           }}
//           transition={{
//             duration: 0.8,
//           }}
//         >
//           <Testimonial />
//         </motion.div>

//       </section>


//       {/* =====================================================
//                              FORM
//       ===================================================== */}

//       <section className="py-28 bg-[#111111]">

//         <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{
//             once: true,
//             amount: 0.2,
//           }}
//           className="max-w-7xl mx-auto px-8"
//         >

//           <Form />

//         </motion.div>

//       </section>

//     </div>
//   );
// };

// export default Home;

