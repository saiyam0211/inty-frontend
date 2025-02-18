import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Register/Register";
import LogIn from "./pages/LogIn/LogIn";
import CompanyProfile from "./pages/CompanyProfile/CompanyProfile"
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Ensures animation happens only once
    });
  }, []);

  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/CompanyProfile" element={<CompanyProfile />} />
    </Routes>
   
  );
};

export default App;
