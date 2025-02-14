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
        <h3 className="text-[#006452] text-lg font-semibold">Our Partners</h3>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Long Time Partners</h2>
     
       <div className='flex justify-center items-center gap-10'>
             { partners.map((partner, index)=>(
                      <img key={index} src={partner.image} className="w-50 object-cover" alt="" />
              ))}
       </div>
    </section>
  )
}

export default OurPartners
