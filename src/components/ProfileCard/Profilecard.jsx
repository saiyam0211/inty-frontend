// import React from "react";
// import review from "../../assets/googlereview.png"

// const ProfileCard = () => {
//   return (
//     <div className="bg-[rgba(0,100,82,1)] p-6 rounded-lg shadow-lg mx-auto pl-8">
//       <div className="text-center flex justify-around items-center gap-4">
//         <div className="flex flex-col items-center justify-center">
//         <h2 className="text-3xl font-bold text-gray-100">Som Prakash</h2>
//         <div className="flex justify-start gap-10 mt-2">
//         <p className="font-normal text-sm leading-[16.94px] tracking-normal text-gray-50">200/hr</p>
//         <p className="font-normal text-sm leading-[16.94px] tracking-normal text-gray-50">Whitefield</p>
//         </div>
//         </div>
//         <img src={review} alt="" className="w-[121px] h-[61.30px]" /> 
//       </div>

//       <div className="mt-4 pl-8">
//         <div className="flex justify-between flex-col gap-1.5">
//           <p className="font-bold text-2xl leading-[31.47px] tracking-normal text-gray-100">10+</p>
//           <p className="font-medium text-base leading-[19.36px] tracking-normal text-gray-100"> Years of Experience</p>
//           <p className="font-bold text-2xl leading-[31.47px] tracking-normal text-gray-100">250+ </p>
//           <p className="font-medium text-base leading-[19.36px] tracking-normal text-gray-100">Projects Completed </p>
//         </div>
//       </div>

//       <div className="mt-6 flex gap-4 pl-8 mb-3.5 ">
//         <button className="w-xs h-9 bg-white text-black rounded-md">
//           Contact Directly
//         </button>
//         <button className="w-xs h-9 bg-white text-black rounded-md">
//           Schedule a Meeting
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;
// import React from "react";
// import review from "../../assets/googlereview.png";

// const ProfileCard = () => {
//   return (
//     <div className="bg-[rgba(0,100,82,1)] p-5 rounded-r-lg  shadow-lg mx-auto pl-8 w-full max-w-md sm:max-w-lg">
//       <div className="text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
//         <div className="flex flex-col items-center sm:items-start">
//           <h2 className="text-3xl font-bold text-gray-100">Som Prakash</h2>
//           <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-2">
//             <p className="font-normal text-sm text-gray-50">₹200/hr</p>
//             <p className="font-normal text-sm text-gray-50">Whitefield</p>
//           </div>
//         </div>
//         <img src={review} alt="Google Review" className="w-[121px] h-[61.30px]" />
//       </div>

//       <div className="mt-4 pl-4 sm:pl-8">
//         <div className="flex flex-col gap-1.5 text-center sm:text-left">
//           <p className="font-bold text-2xl text-gray-100">10+</p>
//           <p className="font-medium text-base text-gray-100">Years of Experience</p>
//           <p className="font-bold text-2xl text-gray-100">250+ </p>
//           <p className="font-medium text-base text-gray-100">Projects Completed</p>
//         </div>
//       </div>

//       <div className="mt-6 flex flex-col sm:flex-row gap-4 pl-4 sm:pl-8 mb-3.5">
//         <button className="w-full sm:w-auto h-9 bg-white text-black rounded-md">
//           Contact Directly
//         </button>
//         <button className="w-full sm:w-auto h-9 bg-white text-black rounded-md">
//           Schedule a Meeting
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;
import React from "react";
import review from "../../assets/googlereview.png";

// Dummy data for 20 profiles
const dummyProfiles = [
  {
    name: "Rahul Sharma",
    rate: "₹250/hr",
    location: "Koramangala",
    reviewImage: review,
    experience: "8+",
    projectsCompleted: "180+",
    buttons: [
      { label: "Contact Directly", onClick: "contactDirectly" },
      { label: "Schedule a Meeting", onClick: "scheduleMeeting" },
    ],
  },
//   {
//     name: "Priya Singh",
//     rate: "₹300/hr",
//     location: "Indiranagar",
//     reviewImage: review,
//     experience: "12+",
//     projectsCompleted: "300+",
//     buttons: [
//       { label: "Contact Directly", onClick: "contactDirectly" },
//       { label: "Schedule a Meeting", onClick: "scheduleMeeting" },
//     ],
//   },
//   {
//     name: "Amit Patel",
//     rate: "₹220/hr",
//     location: "HSR Layout",
//     reviewImage: review,
//     experience: "5+",
//     projectsCompleted: "120+",
//     buttons: [
//       { label: "Contact Directly", onClick: "contactDirectly" },
//       { label: "Schedule a Meeting", onClick: "scheduleMeeting" },
//     ],
//   },
//   {
//     name: "Neha Gupta",
//     rate: "₹280/hr",
//     location: "Jayanagar",
//     reviewImage: review,
//     experience: "9+",
//     projectsCompleted: "200+",
//     buttons: [
//       { label: "Contact Directly", onClick: "contactDirectly" },
//       { label: "Schedule a Meeting", onClick: "scheduleMeeting" },
//     ],
//   },
//   {
//     name: "Vikram Singh",
//     rate: "₹350/hr",
//     location: "Marathahalli",
//     reviewImage: review,
//     experience: "15+",
//     projectsCompleted: "400+",
//     buttons: [
//       { label: "Contact Directly", onClick: "contactDirectly" },
//       { label: "Schedule a Meeting", onClick: "scheduleMeeting" },
//     ],
//   },
//   {
//     name: "Anjali Mehta",
//     rate: "₹240/hr",
//     location: "Bellandur",
//     reviewImage: review,
//     experience: "7+",
//     projectsCompleted: "150+",
//     buttons: [
//       { label: "Contact Directly", onClick: "contactDirectly" },
//       { label: "Schedule a Meeting", onClick: "scheduleMeeting" },
//     ],
//   },
//   {
//     name: "Suresh Kumar",
//     rate: "₹260/hr",
//     location: "Electronic City",
//     reviewImage: review,
//     experience: "10+",
//     projectsCompleted: "220+",
//     buttons: [
//       { label: "Contact Directly", onClick: "contactDirectly" },
//       { label: "Schedule a Meeting", onClick: "scheduleMeeting" },
//     ],
//   },
//   {
//     name: "Kavita Reddy",
//     rate: "₹320/hr",
//     location: "Bannerghatta Road",
//     reviewImage: review,
//     experience: "11+",
//     projectsCompleted: "280+",
//     buttons: [
//       { label: "Contact Directly", onClick: "contactDirectly" },
//       { label: "Schedule a Meeting", onClick: "scheduleMeeting" },
//     ],
//   },
//   {
//     name: "Rajesh Verma",
//     rate: "₹230/hr",
//     location: "Sarjapur Road",
//     reviewImage: review,
//     experience: "6+",
//     projectsCompleted: "130+",
//     buttons: [
//       { label: "Contact Directly", onClick: "contactDirectly" },
//       { label: "Schedule a Meeting", onClick: "scheduleMeeting" },
//     ],
//   },
//   {
//     name: "Pooja Desai",
//     rate: "₹270/hr",
//     location: "Whitefield",
//     reviewImage: review,
//     experience: "8+",
//     projectsCompleted: "190+",
//     buttons: [
//       { label: "Contact Directly", onClick: "contactDirectly" },
//       { label: "Schedule a Meeting", onClick: "scheduleMeeting" },
//     ],
//   },
//   {
//     name: "Arun Khanna",
//     rate: "₹290/hr",
//     location: "Koramangala",
//     reviewImage: review,
//     experience: "9+",
//     projectsCompleted: "210+",
//     buttons: [
//       { label: "Contact Directly", onClick: "contactDirectly" },
//       { label: "Schedule a Meeting", onClick: "scheduleMeeting" },
//     ],
//   },
//   {
//     name: "Meera Joshi",
//     rate: "₹310/hr",
//     location: "Indiranagar",
//     reviewImage: review,
//     experience: "13+",
//     projectsCompleted: "320+",
//     buttons: [
//       { label: "Contact Directly", onClick: "contactDirectly" },
//       { label: "Schedule a Meeting", onClick: "scheduleMeeting" },
//     ],
//   },
//   {
//     name: "Sanjay Malhotra",
//     rate: "₹240/hr",
//     location: "HSR Layout",
//     reviewImage: review,
//     experience: "7+",
//     projectsCompleted: "160+",
//     buttons: [
//       { label: "Contact Directly", onClick: "contactDirectly" },
//       { label: "Schedule a Meeting", onClick: "scheduleMeeting" },
//     ],
//   },
//   {
//     name: "Anita Rao",
//     rate: "₹330/hr",
//     location: "Jayanagar",
//     reviewImage: review,
//     experience: "14+",
//     projectsCompleted: "350+",
//     buttons: [
//       { label: "Contact Directly", onClick: "contactDirectly" },
//       { label: "Schedule a Meeting", onClick: "scheduleMeeting" },
//     ],
//   },
//   {
//     name: "Vivek Bhatia",
//     rate: "₹280/hr",
//     location: "Marathahalli",
//     reviewImage: review,
//     experience: "10+",
//     projectsCompleted: "230+",
//     buttons: [
//       { label: "Contact Directly", onClick: "contactDirectly" },
//       { label: "Schedule a Meeting", onClick: "scheduleMeeting" },
//     ],
//   },
//   {
//     name: "Sunita Iyer",
//     rate: "₹260/hr",
//     location: "Bellandur",
//     reviewImage: review,
//     experience: "8+",
//     projectsCompleted: "200+",
//     buttons: [
//       { label: "Contact Directly", onClick: "contactDirectly" },
//       { label: "Schedule a Meeting", onClick: "scheduleMeeting" },
//     ],
//   },
//   {
//     name: "Ravi Menon",
//     rate: "₹300/hr",
//     location: "Electronic City",
//     reviewImage: review,
//     experience: "12+",
//     projectsCompleted: "290+",
//     buttons: [
//       { label: "Contact Directly", onClick: "contactDirectly" },
//       { label: "Schedule a Meeting", onClick: "scheduleMeeting" },
//     ],
//   },
//   {
//     name: "Deepa Nair",
//     rate: "₹270/hr",
//     location: "Bannerghatta Road",
//     reviewImage: review,
//     experience: "9+",
//     projectsCompleted: "210+",
//     buttons: [
//       { label: "Contact Directly", onClick: "contactDirectly" },
//       { label: "Schedule a Meeting", onClick: "scheduleMeeting" },
//     ],
//   },
//   {
//     name: "Manoj Srinivasan",
//     rate: "₹250/hr",
//     location: "Sarjapur Road",
//     reviewImage: review,
//     experience: "7+",
//     projectsCompleted: "170+",
//     buttons: [
//       { label: "Contact Directly", onClick: "contactDirectly" },
//       { label: "Schedule a Meeting", onClick: "scheduleMeeting" },
//     ],
//   },
//   {
//     name: "Shalini Kapoor",
//     rate: "₹290/hr",
//     location: "Whitefield",
//     reviewImage: review,
//     experience: "11+",
//     projectsCompleted: "260+",
//     buttons: [
//       { label: "Contact Directly", onClick: "contactDirectly" },
//       { label: "Schedule a Meeting", onClick: "scheduleMeeting" },
//     ],
//   },
];

// ProfileCard component
const ProfileCard = ({ profile }) => {
  const { name, rate, location, reviewImage, experience, projectsCompleted, buttons } = profile;

  return (
    <div className="bg-[rgba(0,100,82,1)] p-5 rounded-r-lg shadow-lg mx-auto pl-8 w-full max-w-md sm:max-w-lg">
      <div className="text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-3xl font-bold text-gray-100">{name}</h2>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-2">
            <p className="font-normal text-sm text-gray-50">{rate}</p>
            <p className="font-normal text-sm text-gray-50">{location}</p>
          </div>
        </div>
        <img src={reviewImage} alt="Google Review" className="w-[121px] h-[61.30px]" />
      </div>

      <div className="mt-4 pl-4 sm:pl-8">
        <div className="flex flex-col gap-1.5 text-center sm:text-left">
          <p className="font-bold text-2xl text-gray-100">{experience}</p>
          <p className="font-medium text-base text-gray-100">Years of Experience</p>
          <p className="font-bold text-2xl text-gray-100">{projectsCompleted}</p>
          <p className="font-medium text-base text-gray-100">Projects Completed</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-4 pl-4 sm:pl-8 mb-3.5">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="w-full sm:w-auto h-9 bg-white text-black rounded-md"
            onClick={() => console.log(button.onClick)}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
};

// ProfileList component to render all profiles
const ProfileList = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {dummyProfiles.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </div>
  );
};

export default ProfileList;
