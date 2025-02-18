// import React from 'react'
// import backgroundImage from "../../assets/background.png";
// import Header from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";
// import FocusLinks from '../../components/FocusLink/Focuslink';
// import Carousel from "../../components/TableCorousel/Tablecorousel";
// import ProfileCard from '../../components/ProfileCard/Profilecard';
// import Pagination from '../../components/Pagination/Pagination';

// const InteriorDesigner = () => {
//   return (
//     <>
//     <div className="bg-white">
//       {/* Header Section */}
//       <div className="absolute top-0 left-0 w-full bg-transparent z-50">
//         <Header />
//       </div>

//       {/* Hero Section */}
//       <section
//         className="relative h-[515px] bg-cover bg-center text-white flex items-center justify-center"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-[rgba(250,250,250,0.85)] to-[rgba(0,100,82,0.85)]"></div>
//         <h2 className="z-50 font-inter font-black text-4xl md:text-[64px] leading-[77.45px] tracking-normal text-white">
//           Interior Designers
//         </h2>
//       </section>

//       <div className="mb-12 ">
//       <FocusLinks />
//       </div>

//       {Array(4).fill().map((_, index) => (
//   <div key={index} className="flex justify-center gap-0 mb-9">
//     <div className='absolute w-[550px] left-[233px] z-50'>
//       <Carousel />
//     </div>
//     <div className='w-[530px] ml-[547px]'>
//       <ProfileCard />
//     </div>
//   </div>
// ))}
//       {/* Footer Section */}
//       <Footer />
//     </div>
//     </>
//   )
// }

// export default InteriorDesigner
import React from 'react';
import backgroundImage from "../../assets/background.png";
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import FocusLinks from '../../components/FocusLink/Focuslink';
import Carousel from "../../components/TableCorousel/Tablecorousel";
import ProfileCard from '../../components/ProfileCard/Profilecard';
import Pagination from '../../components/Pagination/Pagination';

const InteriorDesigner = () => {
  return (
    <>
      <div className="bg-white">
        {/* Header Section */}
        <div className="absolute top-0 left-0 w-full bg-transparent z-50">
          <Header />
        </div>

        {/* Hero Section */}
        <section
          className="relative h-[300px] sm:h-[400px] md:h-[515px] bg-cover bg-center text-white flex items-center justify-center px-4"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(250,250,250,0.85)] to-[rgba(0,100,82,0.85)]"></div>
          <h2 className="z-50 font-inter font-black text-3xl sm:text-4xl md:text-[64px] leading-tight text-white text-center">
            Interior Designers
          </h2>
        </section>

        {/* Focus Links */}
        <div className="mb-12 px-4">
          <FocusLinks />
        </div>

        {/* Carousel & ProfileCard Section */}
        {Array(4).fill().map((_, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row justify-center items-center mb-9 "
          >
            <div className='w-full max-w-xs sm:max-w-md md:max-w-[550px] md:ml-16'>
              <Carousel />
            </div>
            <div className='w-full max-w-xs sm:max-w-md md:max-w-[530px] md:pr-12 '>
              <ProfileCard />
            </div>
          </div>
        ))}

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
}

export default InteriorDesigner;
