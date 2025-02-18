import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/CompanyProfile/Header'
import Description from '../../components/CompanyProfile/Description'
import RollingGallery from '../../components/CompanyProfile/RollingGallery/RollingGallery'
import TestimonialCarousel from '../../components/TestimonialCarousel/TestimonialCarousel'
import Footer from '../../components/Footer/Footer'
const CompanyProfile = () => {
  return (
    <div>
       <Navbar/>
       <Header/>
       <Description/>
      <RollingGallery autoplay={true} pauseOnHover={true} />

      <TestimonialCarousel/>
      <Footer/>
    </div>
  )
}

export default CompanyProfile
