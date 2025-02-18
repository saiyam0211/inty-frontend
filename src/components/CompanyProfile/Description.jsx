import React from 'react'

const Description = () => {
  return (
    <div className="container w-[100%] sm:w-[80%] mx-auto p-6">
    <div className="flex flex-col p-4 gap-20 md:flex-row items-center sm:gap-6 bg-white sm:p-6 rounded-lg shadow-md">
      {/* Image Section */}
      <div className="w-2/ md:w-2/">
        <img
          src="./images/Description.png"
          alt="Interior Design"
          className="w-full rounded-lg"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">Description</h2>
        <p className="text-gray-700">
        Decorpot is a leading and people�s favorite home interior brand which was founded in 2015 with an aim of creating premium and luxury end-to-end home interiors at fair prices and delivering the dreams of the clients. With 8250+ happy homes delivered, our team of 400+ design experts help us bring life to dream home interiors across 8 different cities Bengaluru, Hyderabad, Chennai, Coimbatore, Pune, Noida, Kolkata and Thane Mumbai with 14 exclusive world-class experience centers that showcase the world�s best design styles and practical interiors like which we create and deliver for your home spaces.
        </p>
        {/* <p className="text-gray-700 mt-2">
          We operate in Bengaluru, Hyderabad, Chennai, Coimbatore, Pune,
          Noida, Kolkata, and Mumbai with 14 world-class experience centers
          that showcase the best design styles and practical interiors.
        </p> */}

        {/* Stats Section */}
        <div className="grid grid-cols-2  bg-gradient-to-r rounded-2xl from-[#006452] to-[#c2f8ee] md:grid-cols-2 gap-4 py-4 mt-6">
          <div className=" text-white rounded-lg text-center">
            <p className="text-2xl font-bold">6+</p>
            <p className="text-sm">Branches</p>
          </div>
          <div className=" text-white  rounded-lg text-center">
            <p className="text-2xl font-bold">8250+</p>
            <p className="text-sm">No. of Projects</p>
          </div>
          <div className=" text-white  rounded-lg text-center">
            <p className="text-2xl font-bold">10+</p>
            <p className="text-sm">Years of Experience</p>
          </div>
       
          <div className=" text-white  rounded-lg text-center">
            <p className="text-2xl font-bold">2023</p>
            <p className="text-sm">Years of Awards</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Description
