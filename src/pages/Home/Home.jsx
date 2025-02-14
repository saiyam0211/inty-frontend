import React from 'react'
import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import Testimonials from '../../components/Testimonials/Testimonials'
import OurPartners from '../../components/OurPartners/OurPartners'
import Designers from '../../components/Designers/Designers'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Services/>
      <Hero/>
      <Designers/>
      <OurPartners/>
      <Testimonials/>
    </div>
  )
}

export default Home
