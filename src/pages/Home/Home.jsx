import React from 'react'
import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import Testimonials from '../../components/Testimonials/Testimonials'
import OurPartners from '../../components/OurPartners/OurPartners'
import Designers from '../../components/Designers/Designers'
import Navbar from '../../components/Navbar/Navbar'
import Features from '../../components/Features/Features'
import Footer from '../../components/Footer/Footer'
import Search from '../../components/Search/Search'
import TestimonialCarousel from '../../components/TestimonialCarousel/TestimonialCarousel'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Services/>
      <Search/>
      <Hero/>
      <Features/>
      <Designers/>
      <OurPartners/>
      <TestimonialCarousel/>
      <Footer/>
        
    </div>
  )
}

export default Home
