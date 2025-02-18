import React, { useState } from 'react';
import chair from "../../assets/chair.png";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';  // Importing arrow icons

const TableCorousel = () => {
  const images = [
    chair,
    chair,
    chair,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-[600px] mx-auto">
      <div className="relative flex justify-center items-center">
        <button
          className="absolute left-0 text-white bg-zinc-300 bg-opacity-50  rounded-full"
          onClick={prevImage}
        >
          <FaChevronLeft size={30} />  {/* Left Arrow */}
        </button>
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="w-full h-60 object-cover rounded-md"
        />
        <button
          className="absolute right-0 text-white bg-zinc-300 bg-opacity-50 px-0.2 rounded-full"
          onClick={nextImage}
        >
          <FaChevronRight size={30} />  {/* Right Arrow */}
        </button>

        {/* Dots for carousel */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${currentIndex === index ? 'bg-black' : 'bg-gray-400'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableCorousel;
