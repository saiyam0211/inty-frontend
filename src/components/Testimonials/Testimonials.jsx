import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
    name: "KYLE MERWIN",
    role: "CO-owner",
    text: "Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est."
  },
  {
    id: 2,
    image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
    name: "JANE DOE",
    role: "Marketing Head",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, molestiae. Repudiandae consequatur quae ratione minima."
  },
  {
    id: 3,
    image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image
    name: "JOHN SMITH",
    role: "CEO",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
  }
];

export default function Testimonials() {
  return (
    <div className="w-full flex flex-col items-center py-10 bg-gray-100">
      <h3 className="text-green-700 text-lg font-semibold">Our Testimonials</h3>
      <h2 className="text-3xl font-bold text-center mb-6">What our clients say</h2>
      <div className="w-full max-w-3xl">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }}
          pagination={{ clickable: true }}
          className="relative"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <p className="text-gray-700 text-center mb-4">{testimonial.text}</p>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <span className="text-gray-500 text-sm">{testimonial.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center gap-4 mt-4">
          <button className="swiper-button-prev p-2 bg-green-600 text-white rounded-full">
            <ChevronLeft size={20} />
          </button>
          <button className="swiper-button-next p-2 bg-green-600 text-white rounded-full">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
