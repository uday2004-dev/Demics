// import React from "react";
// import leftVector from "../src/assets/Vector.png";
// import rightFeather from "../src/assets/Capa_4.png";
// import grid from "../src/assets/grid.png";
// import element from "../src/assets/Elements.png"

// const BrandingHero = () => {
//   return (
//     <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[linear-gradient(103.43deg,#8a38f5_1.29%,#3d1273_39.23%,#040009_98.71%)] px-5 sm:px-8 md:px-12 lg:px-20">

//       {/* Grid */}
//       <img
//         src={grid}
//         alt=""
//         className="absolute bottom-0 left-0 h-40 w-full object-cover opacity-60 sm:h-48 md:h-60 lg:h-80"
//       />

//       {/* Left Image */}
//       <img
//         src={leftVector}
//         alt=""
//         className="
//           absolute
//           left-2 top-20
//           w-20
//           sm:left-4 sm:top-1 sm:w-24
//           md:left-8 md:top-24 md:w-36
//           lg:left-16 lg:top-24 lg:w-52
//           xl:left-[10%] xl:top-24 xl:w-64
//           z-10
//         "
//       />



//       {/* Content */}
//       <div className="relative z-20 mx-auto max-w-5xl text-center">
//         <h1 className="mb-5 font-serif   font-awesome font-medium text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[140px] leading-none">
//           Branding
//         </h1>

//         {/* <img
//           src={element}
//           alt=""
//           className="-mt-4 ml-10"
//         /> */}
//     <div className="flex justify-center">
//   <img
//     src={element}
//     alt=""
//     className="
//       w-20
//       sm:w-24
//       md:w-36
//       lg:w-[340px]
//       -mt-5
//     "
//   />
// </div>
//         <p className="mx-auto max-w-4xl text-sm leading-7 text-gray-200 sm:text-base md:text-lg md:leading-8">
//           Branding is the foundation of how a business is perceived in the minds
//           of its audience. It goes far beyond just a logo or a name—it’s the
//           strategic process of shaping a unique identity that communicates a
//           company’s values, personality, and promise. Through elements like
//           visual design, tone of voice, messaging, and customer experience,
//           branding creates an emotional connection with customers, builds trust,
//           and sets a business apart from its competitors. In today’s fast-paced
//           digital world, strong branding is essential not only to capture
//           attention but to foster long-term loyalty and drive meaningful
//           engagement across every touchpoint.
//         </p>
//       </div>

//       {/* Right Image */}
//       {/* <img
//         src={rightFeather}
//         alt=""
//         className="
//     absolute
//     right-2
//     top-60

//     w-16

//     sm:right-4
//     sm:top-24
//     sm:w-22

//     md:right-6
//     md:top-24
//     md:w-32

//     lg:right-10
//     lg:top-20
//     lg:w-44

//     xl:right-[15%]
//     xl:top-20
//     xl:w-60

//     2xl:w-64

//     z-10
//   "
//       /> */}


//       <img
//   src={rightFeather}
//   alt=""
//   className="
//     absolute

//     top-28
//     right-2
//     w-10

//     sm:top-32
//     sm:right-3
//     sm:w-14

//     md:top-24
//     md:right-6
//     md:w-24

//     lg:top-20
//     lg:right-10
//     lg:w-44

//     xl:right-[15%]
//     xl:w-60
//   "
// />
//     </section>
//   );
// };

// export default BrandingHero;



import React from "react";
import leftVector from "../src/assets/Vector.png";
import rightFeather from "../src/assets/Capa_4.png";
import grid from "../src/assets/grid.png";
import element from "../src/assets/Elements.png";
import mobileHero from "../src/assets/mobile-branding.jpg";
// import tabletBranding from "../src/assets/tablet-branding.png";

const BrandingHero = () => {
  return (
    <>
      {/* ================= Mobile View ================= */}
      {/* <section className="block md:hidden">
        <img
          src={mobileHero}
          alt="Branding Hero"
          className="w-full h-auto object-cover"
        />
      </section> */}

  <section className="block md:hidden -mt-1 -mr-1 overflow-hidden">
  <img
    src={mobileHero}
    alt="Branding Hero"
    className="w-full h-auto object-cover scale-[1.03] origin-top"
  />
</section>


    

      {/* ================= Tablet View ================= */}
      {/* <section className="hidden md:block lg:hidden">
    <img
      src={tabletBranding}
      alt="Branding Hero"
      className="w-full h-auto object-cover"
    />
  </section> */}

      {/* ================= Desktop & Tablet ================= */}
      <section className="relative hidden min-h-[85vh] font-serif items-center justify-center overflow-hidden bg-[linear-gradient(103.43deg,#8a38f5_1.29%,#3d1273_39.23%,#040009_98.71%)] px-5 sm:px-8 md:flex md:px-12 lg:px-20">

        {/* Grid */}
        <img
          src={grid}
          alt=""
          className="absolute bottom-0 left-0 h-40 w-full object-cover opacity-60 sm:h-48 md:h-60 lg:h-80"
        />

        {/* Left Illustration */}
        <img
          src={leftVector}
          alt=""
          className="
            absolute
            left-2 top-20
            w-20
            sm:left-4 sm:top-1 sm:w-24
            md:left-8 md:top-24 md:w-36
            lg:left-16 lg:top-24 lg:w-52
            xl:left-[10%] xl:top-24 xl:w-64
            z-10
          "
        />

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-5xl text-center">
          <h1 className="mb-5 font-awesome leading-none text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[140px]">
            Branding
          </h1>

          <div className="flex justify-center">
            <img
              src={element}
              alt=""
              className="
                -mt-5
                w-20
                sm:w-24
                md:w-36
                lg:w-[340px]
              "
            />
          </div>

          <p className="mx-auto max-w-4xl text-sm leading-7 text-gray-200 sm:text-base md:text-lg md:leading-8">
            Branding is the foundation of how a business is perceived in the
            minds of its audience. It goes far beyond just a logo or a
            name—it’s the strategic process of shaping a unique identity that
            communicates a company’s values, personality, and promise. Through
            elements like visual design, tone of voice, messaging, and customer
            experience, branding creates an emotional connection with customers,
            builds trust, and sets a business apart from its competitors. In
            today’s fast-paced digital world, strong branding is essential not
            only to capture attention but to foster long-term loyalty and drive
            meaningful engagement across every touchpoint.
          </p>
        </div>

        {/* Right Feather */}
        <img
          src={rightFeather}
          alt=""
          className="
            absolute
            top-28
            right-2
            w-10

            sm:top-32
            sm:right-3
            sm:w-14

            md:top-24
            md:right-6
            md:w-24

            lg:top-20
            lg:right-10
            lg:w-44

            xl:right-[15%]
            xl:w-60
          "
        />
      </section>
    </>
  );
};

export default BrandingHero;