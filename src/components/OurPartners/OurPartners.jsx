import React from 'react'

const OurPartners = () => {
    const partners = [
        {
             image : "/images/partner1.png"
        },
        {
             image : "/images/partner2.png"
        },
        {
             image : "/images/partner3.png"
        },
        {
             image : "/images/partner4.png"
        }
    ]
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24 text-center">
        <h3 className="text-green-700 text-lg font-semibold">Our Partners</h3>
    
       <div className='flex justify-center items-center gap-10'>
             { partners.map((partner, index)=>(
                      <img key={index} src={partner.image} className="w-50 object-cover" alt="" />
              ))}
       </div>
    </section>
  )
}

export default OurPartners
