import React, { useEffect } from "react"; // Import useEffect
import Home from "./pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Ensures animation happens only once
    });
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
