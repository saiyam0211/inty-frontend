import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/CompanyProfile/Header";
import Description from "../../components/CompanyProfile/Description";
import RollingGallery from "../../components/CompanyProfile/RollingGallery/RollingGallery";
import TestimonialCarousel from "../../components/TestimonialCarousel/TestimonialCarousel";
import Footer from "../../components/Footer/Footer";
const CompanyProfile = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full bg-transparent z-50">
        <Navbar isResidentialPage={true}/>
      </div>
      <Header />
      <Description />
      <RollingGallery autoplay={true} pauseOnHover={true} />

      <TestimonialCarousel />
      <Footer />
    </div>
  );
};

export default CompanyProfile;
