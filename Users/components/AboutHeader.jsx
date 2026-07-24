import React from "react";
import grid from "../src/assets/grid.png";
import aim from "../src/assets/aim.png"
import spring from "../src/assets/spring.png"
import fly from "../src/assets/fly.png"
import element from "../src/assets/Elements.png"
import hash from "../src/assets/hash.png"
import laptop from "../src/assets/laptop.png"
import arrow2 from "../src/assets/arrow2.png"
import arrow1 from "../src/assets/arrow1.png"



const AboutHeader = () => {
    return (
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[linear-gradient(103.43deg,#8a38f5_1.29%,#3d1273_39.23%,#040009_98.71%)] px-5 sm:px-8 md:px-12 lg:px-20">

            {/* Grid */}
            <img
                src={grid}
                alt=""
                className="absolute bottom-0 left-0 h-40 w-full object-cover opacity-60 sm:h-48 md:h-60 lg:h-80"
            />
            <img
                src={hash}

                className="
absolute
left-[19.3%]
top-39
w-36
sm:w-40
md:w-44
lg:w-48
xl:w-52
z-30
"
            />
            <img src={arrow2} className="
absolute
top-59.5
left-[69.7%]
w-35
z-33

" />


      <img
        src={arrow1}
        alt=""
        className="
    absolute
    left-[14%]
    top-110
    w-4
    sm:w-8
    md:w-10
    lg:w-16
    xl:w-22
    z-30
  "
      />

            <div className="z-20 mx-auto max-w-5xl text-center">
                <h1
                    className="
      text-white
    font-awesome
      text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[200px]
      leading-none
    "
                >
                    About us
                </h1>

                <br />
                <br />

 <h2
  className="
    text-white
    font-bold
    text-2xl
    sm:text-2xl
    md:text-3xl
    lg:text-4xl
    xl:text-5xl
    leading-none
  "
>
  we are a design-led, strategy-driven digital marketing and creative design
  agency
</h2>

                <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-gray-200 sm:text-base md:text-lg md:leading-8">
                    With DEMICS, your brand is designed with intention, your stories are digitalized with emotion, and your presence evolves with culture. We market across media, innovate with AI, create using cutting-edge technology, and drive results through strategic thinking.                </p>
            </div>

            <img
                src={laptop}
                alt=""
                className="
absolute
right-[10%]
top-98
w-20
sm:w-24
md:w-28
lg:w-36
xl:w-40
z-30
"
            />




        </section>
    );
};

export default AboutHeader;



