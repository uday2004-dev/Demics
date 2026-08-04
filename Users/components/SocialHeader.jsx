


// import React from "react";
// import grid from "../src/assets/grid.png";
// import a from "../src/assets/@.png"
// import rocket from "../src/assets/rocketHeader.png"
// import heart from "../src/assets/heart.png"


// const SocialHeader = () => {
//   return (
//     <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[linear-gradient(103.43deg,#8a38f5_1.29%,#3d1273_39.23%,#040009_98.71%)] px-5 sm:px-8 md:px-12 lg:px-20">

//       {/* Grid */}
//       <img
//         src={grid}
//         alt=""
//         className="absolute bottom-0 left-0 h-40 w-full object-cover opacity-60 sm:h-48 md:h-60 lg:h-80"
//       />

//       {/* <img
//         src={rocket}
//         alt=""
//         className="
//     absolute
//     left-[16%]
//     top-79
//     w-9
//     sm:w-18
//     md:w-26
//     lg:w-32
//     xl:w-40
//     z-30
//   "
//       /> */}

// <img
//   src={rocket}
//   alt=""
//   className="
//     absolute
//     left-[8.2%]
//     top-55
//     w-24
//     sm:w-32
//     md:w-44
//     lg:w-56
//     xl:w-72
//     2xl:w-80
//     z-30
//   "
// />

//       <div className="z-20 mx-auto max-w-5xl text-center">
//         <h1
//           className="
//       text-white
//     font-awesome
//       text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[180px]
//       leading-none
//     "
//         >
//           Social Media Management
//         </h1>

//         <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-gray-200 sm:text-base md:text-lg md:leading-8">
//           we transform social platforms into growth engines. From strategic content calendars to real-time community engagement, we craft authentic conversations that resonate, inspire action, and build lasting relationships. Our blend of creative storytelling, targeted amplification, and data-driven optimization ensures your brand cuts through the noise and turns followers into advocates.             </p>
//       </div>

//       <img
//         src={a}
//         alt=""
//         className="
//     absolute
//     right-[12.6%]
//     top-30
// w-10
// sm:w-20
// md:w-24
// lg:w-28
// xl:w-38
//     z-30
//   "
//       />

// <img
//   src={heart}
//   alt=""
//   className="
//     absolute
//     right-[10.5%]
//     top-83

//     w-16
//     sm:w-24
//     md:w-32
//     lg:w-40
//     xl:w-52
//     2xl:w-60

//     z-30
//   "
// />




//     </section>
//   );
// };

// export default SocialHeader;


import React from "react";
import grid from "../src/assets/grid.png";
import a from "../src/assets/@.png";
import rocket from "../src/assets/rocketHeader.png";
import heart from "../src/assets/heart.png";
import mobileSocialHeader from "../src/assets/mobile-socialheader.png";

const SocialHeader = () => {
  return (
    <>
      {/* ================= Mobile View ================= */}
      <section className="block md:hidden">
        <img
          src={mobileSocialHeader}
          alt="Social Media Header"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* ================= Desktop & Tablet ================= */}
      <section className="relative hidden min-h-[85vh] items-center justify-center overflow-hidden bg-[linear-gradient(103.43deg,#8a38f5_1.29%,#3d1273_39.23%,#040009_98.71%)] px-5 sm:px-8 md:flex md:px-12 lg:px-20">

        {/* Grid */}
        <img
          src={grid}
          alt=""
          className="absolute bottom-0 left-0 h-40 w-full object-cover opacity-60 sm:h-48 md:h-60 lg:h-80"
        />

        {/* Rocket */}
        <img
          src={rocket}
          alt=""
          className="
            absolute
            left-[8.2%]
            top-55
            w-24
            sm:w-32
            md:w-44
            lg:w-56
            xl:w-72
            2xl:w-80
            z-30
          "
        />

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-5xl text-center">
          <h1
            className="
              font-awesome
              leading-none
              text-white
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              xl:text-[180px]
            "
          >
            Social Media Management
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-gray-200 sm:text-base md:text-lg md:leading-8">
            We transform social platforms into growth engines. From strategic
            content calendars to real-time community engagement, we craft
            authentic conversations that resonate, inspire action, and build
            lasting relationships. Our blend of creative storytelling, targeted
            amplification, and data-driven optimization ensures your brand cuts
            through the noise and turns followers into advocates.
          </p>
        </div>

        {/* @ Icon */}
        <img
          src={a}
          alt=""
          className="
            absolute
            right-[12.6%]
            top-30
            w-10
            sm:w-20
            md:w-24
            lg:w-28
            xl:w-38
            z-30
          "
        />

        {/* Heart */}
        <img
          src={heart}
          alt=""
          className="
            absolute
            right-[10.5%]
            top-83
            w-16
            sm:w-24
            md:w-32
            lg:w-40
            xl:w-52
            2xl:w-60
            z-30
          "
        />
      </section>
    </>
  );
};

export default SocialHeader;



