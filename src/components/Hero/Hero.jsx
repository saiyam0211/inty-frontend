import React from 'react'

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-between bg-cover bg-center  mb-12 px-10"
      style={{ backgroundImage: "url('./images/hero-bg.png" }}>
      <div className="max-w-lg ml-[90px] text-white">
        <h1 className="text-6xl font-bold">Welcome to Inty</h1>
        <p className="mt-4 text-lg">
          We help you find and compare the best interior companies, designers, and carpenters.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#006452] text-white rounded-lg shadow-md hover:bg-green-700">
          Explore Services
        </button>
      </div>
      <div className="absolute right-10 flex space-x-4">
        <div className="w-32 h90 bg-white rounded-full overflow-hidden shadow-lg">
          <img src="./images/img1.png" alt="Designer" className="w-full h-full object-cover" />
        </div>
        <div className="w-32 mt-[-50px] h90 bg-white rounded-full overflow-hidden shadow-lg">
          <img src="/images/img2.png" alt="Carpenter" className="w-full h-full object-cover" />
        </div>
        <div className="w-32 h90 bg-white rounded-full overflow-hidden shadow-lg">
          <img src="/images/img3.png" alt="Interior Design" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}

export default Hero
