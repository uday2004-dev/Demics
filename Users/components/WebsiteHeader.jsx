


import React from "react";
import leftVector from "../src/assets/Vector.png";
import rightFeather from "../src/assets/Capa_4.png";
import grid from "../src/assets/grid.png";
// import aim from "../src/assets/aim.png"
import speaker from "../src/assets/speakerHeader.png"
// import spring from "../src/assets/spring.png"
import crown from "../src/assets/crown.png"
// import fly from "../src/assets/fly.png"
import blub from "../src/assets/Blub.png"
import leftSpiral from "../src/assets/leftSpiral.png"
import element from "../src/assets/Elements.png"
import shine3 from "../src/assets/shine3.png"
import shine from "../src/assets/shine.png"
import right from "../src/assets/right.png"
import left from "../src/assets/left.png"
import div from "../src/assets/div.png"
import globe from "../src/assets/globe2.png"


const WebsiteHeader = () => {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[linear-gradient(103.43deg,#8a38f5_1.29%,#3d1273_39.23%,#040009_98.71%)] px-5 sm:px-8 md:px-12 lg:px-20">

      {/* Grid */}
      <img
        src={grid}
        alt=""
        className="absolute bottom-0 left-0 h-40 w-full object-cover opacity-60 sm:h-48 md:h-60 lg:h-80"
      />
      {/* <img
                src={fly}
                alt=""
           className="
absolute
left-[8%]
top-24
w-36
sm:left-[8%] sm:top-24 sm:w-40
md:left-[8%] md:top-24 md:w-44
lg:left-[8%] lg:top-28 lg:w-48
xl:left-[10%] xl:top-32 xl:w-52
z-10
"
            /> */}
      {/* <img
                src={blub}

                className="
absolute
left-[9%]
top-60
w-30
sm:w-40
md:w-44
lg:w-48
xl:w-52
z-30
"
            /> */}
      {/* <img src={shine} alt=""className="
absolute
left-[22%]
top-47
w-10
sm:w-20
md:w-24
lg:w-28
xl:w-32
z-30
" /> */}





      <img
        src={left}
        alt=""
        className="
    absolute
    left-[16%]
    top-79
    w-3
    sm:w-6
    md:w-9
    lg:w-14
    xl:w-18
    z-30
  "
      />
      <img src={div} className="
absolute
top-35
left-[22%]
w-48

" />

      <div className="z-20 mx-auto max-w-5xl text-center">
        <h1
          className="
      text-white
    font-awesome
      text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[180px]
      leading-none
    "
        >
          Website Development
        </h1>

        <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-gray-200 sm:text-base md:text-lg md:leading-8">
          we engineer websites that blend stunning design with rock-solid performance. From pixel-perfect layouts to seamless back-end architecture, we create digital destinations that load instantly, guide visitors intuitively, and convert at scale. By leveraging the latest frameworks, CMS platforms, and accessibility standards, we ensure your site not only looks impeccable across devices but also drives business results.                </p>
      </div>


      {/* <img
                src={aim}
                alt=""
                className="
           
           right-2 top-24
           w-14
           sm:right-4 sm:top-28 sm:w-16
           md:right-8 md:top-28 md:w-24
           lg:right-16 lg:top-28 lg:w-36
           xl:right-[18%] xl:top-28 xl:w-44
           z-10
         "
            /> */}

      <img
        src={globe}
        alt=""
        className="
    absolute
    right-[18%]
    top-36
w-14
sm:w-26
md:w-32
lg:w-36
xl:w-50
    z-30
  "
      />

      <img
        src={right}
        alt=""
        className="
    absolute
    right-[14%]
    top-88
    w-2
    sm:w-4
    md:w-6
    lg:w-10
    xl:w-13
    z-30
  "
      />




    </section>
  );
};

export default WebsiteHeader;



