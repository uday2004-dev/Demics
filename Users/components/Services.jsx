import React from 'react'
import ServicesCard from '../resuable component/ServicesCard'
import Form from "../resuable component/Form"

const Services = () => {
  return (
    <div>
<div className=''>
<h1>upper</h1>
</div>
<div className=''>
<h1>middle</h1>
</div>

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