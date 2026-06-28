import React from 'react'
import ServicesCard from '../resuable component/ServicesCard'
import Form from "../resuable component/Form"
import arrow from "../src/assets/arrow.png"

const Services = () => {
  return (
    <div>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen overflow-hidden bg-[#111111] flex items-center">





        <div className="absolute bottom-0 left-0 w-[700px] h-[350px] bg-purple-700/20 blur-[180px] rounded-full z-0" />


        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8">
          <div className="grid md:grid-cols-[1.15fr_0.85fr] items-center">


            <div>

              <h1
                className="text-white italic text-[82px] leading-[92px]"
                style={{ fontFamily: "serif" }}
              >
                Unlock your
                <br />
                business potential
              </h1>
              <div>
              </div>   
              
              {/* <h2>
                Perks of choosing DEMICS
              </h2>


              <p>A design-led, marketing-driven agency brings the perfect blend of aesthetics and strategy to the table—where creativity meets performance. </p>
              <p>By placing visual storytelling at the core and backing it with data-driven insights, such an agency ensures that every campaign is not only visually </p>
              <p>compelling but also purposefully aligned with business goals.
                <p>This integrated approach delivers consistent branding across all touchpoints, enhances user experience, and strengthens brand recall. With agile teams </p>
                <p>that collaborate across design and marketing, brands can launch faster, adapt smarter, and connect deeper with their audience.</p>
              </p> */}


            </div>


            <div className="relative flex justify-center md:justify-end pr-20 -mt-16">

              <div className="absolute top-1/2 right-12 -translate-y-1/2 w-[320px] h-[320px] bg-purple-600/35 blur-[120px] rounded-full"></div>


              <img
                src={arrow}
                alt="Hero"
                className="relative z-20 w-[300px] object-contain -translate-y-6 translate-x-4"
              />

            </div>

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
              Explore our Services
            </h3>



          </div>

          {/* Services Cards */}
          <ServicesCard />
        </div>
      </section>

      <section className="py-28 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-8">
          <Form />
        </div>
      </section>




    </div>
  )
}

export default Services