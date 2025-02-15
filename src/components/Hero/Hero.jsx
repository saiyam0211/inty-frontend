import React from "react";

const Hero = () => {
  return (
    <section
    className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between bg-cover bg-center px-4 sm:px-6 md:px-10 lg:px-16 py-12 lg:py-0"
    style={{ backgroundImage: "url('./images/hero-bg.png')" }}
  >
    {/* Left Content */}
    <div className="max-w-xl text-white text-center lg:text-left lg:ml-16"  data-aos="fade-up">
      <h1 className="text-5xl pt-2 sm:text-5xl md:text-6xl lg:text-6xl font-bold">
        Welcome to Inty
      </h1>
      <p className="mt-4 text-2xl sm:text-2xl md:text-2xl">
        We help you find and compare the best interior companies, designers, and carpenters.
      </p>
      <button className="mt-6 px-6 py-3 bg-[#006452] text-white sm:py-5 text-3xl rounded-lg shadow-md md:text-2xl md:py-5 hover:bg-[#006452] transition duration-300">
        Explore Services
      </button>
    </div>
  
    {/* Right Image Section */}
    <div className="relative flex space-x-3   items-center justify-center sm:space-x-5 md:space-x-6 lg:space-x-8 mt-8 lg:mt-0">
      {/* <div className="w-24 sm:w-28 md:w-32 h-90 sm:h-95 md:h-95  bg-white rounded-full overflow-hidden shadow-lg"> */}
        <img src="./images/1.png"  data-aos="fade-right" alt="Designer" className="w-full  h-110 lg:h-130 object-contain translate-y-10" />
      {/* </div> */}
      {/* <div className="w-24 sm:w-28 md:w-32 h-90 sm:h-120 md:h-120 bg-white rounded-full overflow-hidden shadow-lg transform -translate-y-8 sm:-translate-y-8  md:-translate-y-8 lg:-translate-y-8"> */}
        <img src="/images/2.png" alt="Carpenter" data-aos="fade-up" className="w-full h-110  lg:h-130 object-contain -translate-y-10" />
      {/* </div> */}
      {/* <div className="w-24 sm:w-28 md:w-32 h-90 sm:h-95 md:h-95 bg-whtite rounded-full overflow-hidden shadow-lg"> */}
      <img src="/images/3.png" alt="Interior Design" data-aos="fade-left" data-aos-anchor-placement="center-bottom" className="w-full overflow-hidden h-110 lg:h-130 object-contain translate-y-10" />
      {/* </div> */}
    </div>
  </section>
  
  );
};

export default Hero;
