import React from "react";
import grid from "../src/assets/grid.png";
import aim from "../src/assets/aim.png"
import spring from "../src/assets/spring.png"
import fly from "../src/assets/fly.png"
import element from "../src/assets/Elements.png"



const AdHeader = () => {
    return (
   
        <section
  className="
    relative
    flex
    min-h-[30vh]
    sm:min-h-[25vh]
    md:min-h-[85vh]
    items-center
    justify-center
    overflow-hidden
    bg-[linear-gradient(103.43deg,#8a38f5_1.29%,#3d1273_39.23%,#040009_98.71%)]
    px-4
    sm:px-5
    md:px-12
    lg:px-20
    py-8
    md:py-0
  "
>

    
            <img
  src={grid}
  alt=""
  className="
    absolute
    bottom-0
    left-0
    h-24
    w-full
    object-cover
    opacity-60

    sm:h-32
    md:h-60
    lg:h-80
  "
/>

{/* 
            <img
  src={fly}
  alt=""
  className="
    absolute

    left-3
    top-10
    w-12

    sm:left-4
    sm:top-12
    sm:w-14

    md:left-[9%]
    md:top-39
    md:w-44

    lg:w-48
    xl:w-52

    z-30
  "
/> */}

<img
  src={fly}
  alt=""
  className="
    absolute

    left-3
    top-10
    w-9

        min-[320px]:left-3
    min-[320px]:top-9
    min-[320px]:w-12

    min-[375px]:left-5
    min-[375px]:top-8
    min-[375px]:w-15

    min-[425px]:left-9
    min-[425px]:top-7
    min-[425px]:w-17

    sm:left-6
    sm:top-16
    sm:w-16

    md:left-[9%]
    md:top-39
    md:w-44

    lg:w-48
    xl:w-52

    z-30
  "
/>



{/* 
<img
  src={spring}
  className="
    absolute
    top-3
    left-1/2
    -translate-x-1/2
    w-20

    md:top-12
    md:left-[32%]
    md:translate-x-0
    md:w-60
  "
/> */}

            <div className="z-20 mx-auto max-w-5xl text-center">
 

                <h1
  className="
    text-white
    font-awesome
    text-[50px]
    sm:text-[55px]
    md:text-7xl
    lg:text-8xl
    xl:text-[200px]
    leading-none
  "
>
                    Ad Creation
                </h1>
            
  

{/* <img
  src={element}
  alt=""
  className="
    mx-auto

    -mt-1
    w-30

    min-[375px]:w-28
    min-[375px]:-mt-2

    min-[425px]:w-32

    sm:w-36
    sm:mt-2

    md:w-40
    md:-mt-4

    lg:w-auto
    lg:ml-10
  "
/> */}

<img
  src={element}
  alt=""
  className="

    mx-auto
  -translate-x-2

    -mt-1

    w-24
    ml-4

    min-[320px]::w-80
    min-[320px]:ml-10

    min-[375px]::w-60
    min-[375px]:ml-15

        min-[425px]:w-40
    min-[425px]:ml-18

    sm:w-36
    sm:ml-8

      md:translate-x-0
    md:w-40
    md:ml-8
    md:-mt-4

    lg:w-auto
  "
/>
            


<p
  className="
    mx-auto
    mt-3
    max-w-[400px]
    text-[11px]
    leading-4
    text-gray-200

    sm:max-w-[320px]
    sm:text-[11px]
    sm:leading-5

    md:mt-6
    md:max-w-4xl
    md:text-lg
    md:leading-8
  "
>
                    we craft ads that don’t just look great—they perform. By marrying strategic messaging with eye-catching design and data-backed insights, we deliver creative executions that grab attention, spark emotion, and compel users to click. Whether it’s social, display, video, or native, every ad we produce is optimized for impact and ROI.
                </p>
            </div>

            {/* <img
                src={aim}
                alt=""
                className="
absolute
right-3

top-10
w-20


md:right-[8%]
md:top-60
md:w-28

lg:w-36
xl:w-40
z-30
"
            /> */}
            <img
  src={aim}
  alt=""
  className="
    absolute

    right-3
    top-10
    w-20

    translate-x-0

    min-[320px]:w-9
    min-[320px]:right-3 
    min-[320px]:top-14

    min-[375px]:w-10
    min-[375px]:right-9
    min-[375px]:top-14

    min-[425px]:w-12
    min-[425px]:right-14
    min-[425px]:top-14

    sm:w-36
    sm:right-6

    md:translate-x-0
    md:right-[8%]
    md:top-60
    md:w-28

    lg:w-36
    xl:w-40

    z-30
  "
/>




        </section>
    );
};

export default AdHeader;






// import React from "react";
// import grid from "../src/assets/grid.png";
// import aim from "../src/assets/aim.png";
// import spring from "../src/assets/spring.png";
// import fly from "../src/assets/fly.png";
// import element from "../src/assets/Elements.png";
// import mobileAdCreation from "../src/assets/mobil-adcreation.jpg";

// const AdHeader = () => {
//   return (
//     <>
//       {/* ================= Mobile View ================= */}
//       {/* <section className="block md:hidden">
//         <img
//           src={mobileAdCreation}
//           alt="Ad Creation Header"
//           className="w-full h-auto object-cover"
//         />
//       </section> */}

//       <section className="block md:hidden  -mt-2 overflow-hidden">
//         <img
//           src={mobileAdCreation}
//           alt="Branding Hero"
//           className="w-full h-auto object-cover -translate-y-2"
//         />
//       </section>
      

//       {/* ================= Desktop & Tablet ================= */}
//       <section className="relative hidden min-h-[85vh] items-center justify-center overflow-hidden bg-[linear-gradient(103.43deg,#8a38f5_1.29%,#3d1273_39.23%,#040009_98.71%)] px-5 sm:px-8 md:flex md:px-12 lg:px-20">

//         {/* Grid */}
//         <img
//           src={grid}
//           alt=""
//           className="absolute bottom-0 left-0 h-40 w-full object-cover opacity-60 sm:h-48 md:h-60 lg:h-80"
//         />

//         {/* Fly */}
//         <img
//           src={fly}
//           alt=""
//           className="
//             absolute
//             left-[9%]
//             top-39
//             w-36
//             sm:w-40
//             md:w-44
//             lg:w-48
//             xl:w-52
//             z-30
//           "
//         />

//         {/* Spring */}
//         <img
//           src={spring}
//           alt=""
//           className="
//             absolute
//             top-12
//             left-[32%]
//             w-60
//             z-30
//           "
//         />

//         {/* Content */}
//         <div className="relative z-20 mx-auto max-w-5xl text-center">
//           <h1
//             className="
//               font-awesome
//               text-white
//               leading-none
//               text-5xl
//               sm:text-6xl
//               md:text-7xl
//               lg:text-8xl
//               xl:text-[200px]
//             "
//           >
//             Ad Creation
//           </h1>

//           <div className="flex justify-center">
//             <img
//               src={element}
//               alt=""
//               className="
//                 -mt-4
//                 w-20
//                 sm:w-24
//                 md:w-36
//                 lg:w-[340px]
//               "
//             />
//           </div>

//           <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-gray-200 sm:text-base md:text-lg md:leading-8">
//             We craft ads that don’t just look great—they perform. By marrying
//             strategic messaging with eye-catching design and data-backed
//             insights, we deliver creative executions that grab attention, spark
//             emotion, and compel users to click. Whether it’s social, display,
//             video, or native, every ad we produce is optimized for impact and
//             ROI.
//           </p>
//         </div>

//         {/* Aim */}
//         <img
//           src={aim}
//           alt=""
//           className="
//             absolute
//             right-[8%]
//             top-65
//             w-20
//             sm:w-24
//             md:w-28
//             lg:w-36
//             xl:w-40
//             z-30
//           "
//         />
//       </section>
//     </>
//   );
// };

// export default AdHeader;

