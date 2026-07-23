import React from "react";
import grid from "../src/assets/grid.png";
import aim from "../src/assets/aim.png"
import spring from "../src/assets/spring.png"
import fly from "../src/assets/fly.png"
import element from "../src/assets/Elements.png"



const AdHeader = () => {
    return (
        <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-[linear-gradient(103.43deg,#8a38f5_1.29%,#3d1273_39.23%,#040009_98.71%)] px-5 sm:px-8 md:px-12 lg:px-20">

            {/* Grid */}
            <img
                src={grid}
                alt=""
                className="absolute bottom-0 left-0 h-40 w-full object-cover opacity-60 sm:h-48 md:h-60 lg:h-80"
            />
            <img
                src={fly}

                className="
absolute
left-[9%]
top-39
w-36
sm:w-40
md:w-44
lg:w-48
xl:w-52
z-30
"
            />
            <img src={spring} className="
absolute
top-12
left-[32%]
w-60

" />

            <div className="z-20 mx-auto max-w-5xl text-center">
                <h1
                    className="
      text-white
    font-awesome
      text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[200px]
      leading-none
    "
                >
                    Ad Creation
                </h1>
                <img
                    src={element}
                    alt=""
                    className="-mt-4 ml-10"
                />

                <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-gray-200 sm:text-base md:text-lg md:leading-8">
                    we craft ads that don’t just look great—they perform. By marrying strategic messaging with eye-catching design and data-backed insights, we deliver creative executions that grab attention, spark emotion, and compel users to click. Whether it’s social, display, video, or native, every ad we produce is optimized for impact and ROI.
                </p>
            </div>

            <img
                src={aim}
                alt=""
                className="
absolute
right-[8%]
top-65
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

export default AdHeader;



