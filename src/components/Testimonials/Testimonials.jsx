import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Kyle Merwin",
    role: "CO-owner",
    text: "Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.",
    image: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBpY3R1cmUlMjBwYXNzcG9ydHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Jane Doe",
    role: "CEO",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, expedita? Numquam, illum obcaecati! Quos, hic repudiandae.At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.",
    image: "https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "John Smith",
    role: "CTO",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.",
    image: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (

    <section className="py-12 px-6 md:px-12 lg:px-24 text-center  mb-12">
       <h3 className="text-[#006452] text-lg font-semibold">Our Testimonial</h3>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 z-10" >What our Clients says</h2>



      <div className="flex flex-col items-center p-6 max-w-lg mx-auto mt-15 bg-white shadow-lg rounded-lg relative " >

      
<div className="flex items-center space-x-4">
  <img src="./images/testimonial-design.png" className="absolute transform translate-y-[-100%]   lg:translate-y-[-100%] left-5 h-25 opacity-90" alt="" />
  <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-20 h-20 z-50 rounded-full" />
  <div>
    <h3 className="text-lg font-semibold">{testimonials[currentIndex].name}</h3>
    <p className="text-gray-500">{testimonials[currentIndex].role}</p>
  </div>
</div>
<p className="mt-4 text-gray-600 text-center">{testimonials[currentIndex].text}</p>
<FaQuoteRight className="text-[#006452] text-3xl absolute top-4 right-4" />
<div className="flex mt-4 space-x-4">
  <button onClick={prevTestimonial} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
    <FaChevronLeft />
  </button>
  <button onClick={nextTestimonial} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
    <FaChevronRight />
  </button>
</div>
<div className="flex space-x-2 mt-4">
  {testimonials.map((_, index) => (
    <div
      key={index}
      className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-[#006452]" : "bg-gray-300"}`}
    ></div>
  ))}
</div>
</div>
    </section>
 
  );
}
