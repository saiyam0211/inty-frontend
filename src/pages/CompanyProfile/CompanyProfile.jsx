import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/CompanyProfile/Header'
import Description from '../../components/CompanyProfile/Description'
import RollingGallery from '../../components/CompanyProfile/RollingGallery/RollingGallery'
import TestimonialCarousel from '../../components/TestimonialCarousel/TestimonialCarousel'
import Footer from '../../components/Footer/Footer'
import CardCrousal from '../../components/CardCrousal/CardCrousal'
const CompanyProfile = () => {

      // Sample company data
  const companies = [
      {
        id: 1,
        reviews: 23,
        name: "INTERIOR COMPANY",
        projects: 250,
        experience: 10,
        branches: 20,
      },
      // {
      //   id: 2,
      //   reviews: 23,
      //   name: "INTERIOR COMPANY",
      //   projects: 250,
      //   experience: 10,
      //   branches: 20,
      // },
      // {
      //   id: 3,
      //   reviews: 23,
      //   name: "INTERIOR COMPANY",
      //   projects: 250,
      //   experience: 10,
      //   branches: 20,
      // },
      // {
      //   id: 4,
      //   reviews: 23,
      //   name: "INTERIOR COMPANY",
      //   projects: 250,
      //   experience: 10,
      //   branches: 20,
      // },
      // {
      //   id: 5,
      //   reviews: 23,
      //   name: "INTERIOR COMPANY",
      //   projects: 250,
      //   experience: 10,
      //   branches: 20,
      // },
      // {
      //   id: 6,
      //   reviews: 23,
      //   name: "INTERIOR COMPANY",
      //   projects: 250,
      //   experience: 10,
      //   branches: 20,
      // },
    ];
  
  

  return (
    <div>
       <Navbar/>
       <Header/>
       <Description/>
      <RollingGallery autoplay={true} pauseOnHover={true} />
      <CardCrousal/>
       <div className='mt-20'>
       <TestimonialCarousel/>
     </div>
     
      <Footer/>
    </div>
  )
}

export default CompanyProfile
