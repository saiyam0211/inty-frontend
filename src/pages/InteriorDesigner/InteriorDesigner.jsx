import React, { useState } from 'react';
import review from "../../assets/googlereview.png";
import backgroundImage from "../../assets/background.png";
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import TrueFocus from '../../components/FocusLink/Focuslink';
import Carousel from "../../components/TableCorousel/Tablecorousel";
import ProfileCard from '../../components/ProfileCard/Profilecard';
import LogoGrid from '../../components/Logogrid/Logogrid';

// Sample Data (Replace this with actual API data)
const profiles = [
  { id: 1, name: "Rahul Sharma", rate: "₹ 250/hr", location: "Koramangala", reviewImage: review, experience: "8+", projectsCompleted: "180+" },
  { id: 2, name: "Priya Singh", rate: "₹ 300/hr", location: "Indiranagar", reviewImage: review, experience: "10+", projectsCompleted: "300+" },
  { id: 3, name: "Amit Patel", rate: "₹ 200/hr", location: "Whitefield", reviewImage: review, experience: "5+", projectsCompleted: "120+" },
  { id: 4, name: "Neha Gupta", rate: "₹ 350/hr", location: "HSR Layout", reviewImage: review, experience: "9+", projectsCompleted: "200+" },
  { id: 5, name: "Vikram Singh", rate: "₹ 400/hr", location: "Jayanagar", reviewImage: review, experience: "17+", projectsCompleted: "400+" },
  { id: 6, name: "Anjali Mehta", rate: "₹ 220/hr", location: "BTM Layout", reviewImage: review, experience: "16+", projectsCompleted: "150+" },
  { id: 7, name: "Suresh Kumar", rate: "₹ 280/hr", location: "Marathahalli", reviewImage: review, experience: "7+", projectsCompleted: "260+" },
  { id: 8, name: "Ramesh Kumar", rate: "₹ 260/hr", location: "Sarjapur Road", reviewImage: review, experience: "15+", projectsCompleted: "100+" },
  { id: 9, name: "Kavita Sharma", rate: "₹ 320/hr", location: "Electronic City", reviewImage: review, experience: "12+", projectsCompleted: "220+" },
  { id: 10, name: "Arun Singh", rate: "₹ 380/hr", location: "Banashankari", reviewImage: review, experience: "11+", projectsCompleted: "350+" },
  { id: 11, name: "Sunita Singh", rate: "₹ 240/hr", location: "Malleshwaram", reviewImage: review, experience: "6+", projectsCompleted: "180+" },
  { id: 12, name: "Rajesh Mehta", rate: "₹ 300/hr", location: "Yelahanka", reviewImage: review, experience: "14+", projectsCompleted: "300+" },
];

// Categories & Thresholds (Experience in years)
const categories = {
  "Basic": { min: 0, max: 7 },
  "Standard": { min: 7, max: 12 },
  "Premium": { min: 12, max: 17 },
  "Luxury": { min: 17, max: Infinity }
};

const InteriorDesigner = () => {
  const [selectedCategory, setSelectedCategory] = useState("Basic");

  // Filter Profiles based on selected focus category
  const filteredProfiles = profiles.filter(profile => {
    const experience = parseInt(profile.experience);
    const { min, max } = categories[selectedCategory];
    return experience >= min && experience < max;
  });

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="absolute top-0 left-0 w-full bg-transparent z-50">
        <Header />
      </div>

      {/* Hero Section */}
      <section
        className="relative h-[300px] sm:h-[400px] md:h-[515px] bg-cover bg-center text-white flex items-center justify-center px-4"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(250,250,250,0.85)] to-[rgba(0,100,82,0.85)]"></div>
        <h2 className="z-50 font-inter font-black text-3xl sm:text-4xl md:text-[64px] leading-tight text-white text-center">
          Interior Designers
        </h2>
      </section>

      {/* Focus Links (Pass the setSelectedCategory function) */}
      <div className="m-8 px-4">
        <TrueFocus sentence="Basic Standard Premium Luxury" onCategorySelect={setSelectedCategory} />
      </div>

      {/* Carousel & Filtered ProfileCards */}

      <div className=" md:grid md:grid-cols-2">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map(profile => (
            <div key={profile.id} className="flex flex-col md:flex-row justify-center items-center md:mb-10 w-full ">
              <div className='w-[350px] max-w-xs sm:max-w-md md:max-w-[550px] md:ml-8 md:transform md:translate-x-1/16 md:translate-y-0 translate-y-5 '>
                <Carousel />
              </div>
              <div className='w-full max-w-[352px] sm:max-w-md md:max-w-[500px] p-4 md:p-0 md:pr-12'>
                <ProfileCard
                  name={profile.name}
                  rate={profile.rate}
                  location={profile.location}
                  reviewImage={profile.reviewImage}
                  experience={profile.experience}
                  projectsCompleted={profile.projectsCompleted}
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-8">No profiles available for this category.</p>
        )}
        
      </div>
      
     

      <div className='p-6 flex flex-col gap-7'>
        <LogoGrid />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default InteriorDesigner;

