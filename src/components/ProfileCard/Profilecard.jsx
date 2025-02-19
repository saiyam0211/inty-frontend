import React from "react";
import review from "../../assets/googlereview.png";

// ProfileCard component
const ProfileCard = ({ name, rate, location, reviewImage, experience, projectsCompleted }) => {
  return (
    <div className="bg-[rgba(0,100,82,1)] md:p-3.5 rounded-b-lg md:rounded-r-lg shadow-lg mx-auto md:pl-12 w-full max-w-md sm:max-w-lg p-4">
      <div className="text-center sm:text-left flex flex-col sm:flex-row justify-between items-center md:gap-4 gap-2">
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-3xl font-bold text-gray-100">{name}</h2>
          <div className="flex flex-wrap justify-center sm:justify-start md:gap-4 gap-2 mt-2">
            <p className="font-normal text-sm text-gray-50">{rate}</p>
            <p className="font-normal text-sm text-gray-50">{location}</p>
          </div>
        </div>
        <img src={reviewImage} alt="Google Review" className="w-[121px] h-[61.30px]" />
      </div>

      <div className="mt-4 md:pl-3 pl-8">
        <div className="flex flex-col md:gap-1.5 text-center sm:text-left">
          <p className="font-bold text-2xl text-gray-100">{experience}</p>
          <p className="font-medium text-base text-gray-100">Years of Experience</p>
          <p className="font-bold text-2xl text-gray-100">{projectsCompleted}</p>
          <p className="font-medium text-base text-gray-100">Projects Completed</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 md:pl-3 sm:pl-8 mb-3.5">
        <button className="w-full sm:w-2xl h-9 bg-white text-black rounded-md">
          Contact Directly
        </button>
        <button className="w-full sm:w-2xl h-9 bg-white text-black rounded-md">
          Schedule a Meeting
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
