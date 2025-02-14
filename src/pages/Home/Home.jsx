import React from 'react'
import Hero from '../../components/Hero/Hero'
import Services from '../../components/Services/Services'
import Testimonials from '../../components/Testimonials/Testimonials'
import OurPartners from '../../components/OurPartners/OurPartners'

const Home = () => {
  return (
    <div>
        <Services/>
      <Hero/>
      <OurPartners/>
      <Testimonials/>
    </div>
  )
}

export default Home
