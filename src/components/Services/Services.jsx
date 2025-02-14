import React from 'react'

const Services = () => {

    const services = [
        {
          image: "/images/service-1.png",
          title: "Interior Designing Companies",
          description: "Find interior designing companies as per your requirements in affordable cost."
        },
        {
          image: "/images/service-2.png",
          title: "Interior Designing Companies",
          description: "Find interior designing companies as per your requirements in affordable cost."
        },
        {
          image: "/images/service-3.png",
          title: "Interior Designing Companies",
          description: "Find interior designing companies as per your requirements in affordable cost."
        },
        {
          image: "/images/service-4.png",
          title: "Interior Designing Companies",
          description: "Find interior designing companies as per your requirements in affordable cost."
        }

    ]      
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 text-center">
      <h3 className="text-green-700 text-lg font-semibold">Our Services</h3>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">Find Whatever You Want</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={service.image} alt={service.title} className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{service.description}</p>
              <button className="mt-4 px-6 py-2 bg-[#006452] text-white rounded-lg shadow-md hover:bg-green-800 w-full">
                Explore Companies
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
