import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="flex justify-center items-center min-h-screen bg-gradient-to-l from-[#006452] to-white p-5"
    >
      <motion.div
        variants={staggerChildren}
        className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 p-6 rounded-lg text-center w-full"
      >
        <motion.div variants={fadeInUp} className="flex flex-col items-center">
          <motion.div
            variants={fadeInUp}
            className="flex items-center px-10 justify-center gap-2"
          >
            <motion.img
              variants={fadeInUp}
              src="./images/company-logo.png"
              alt="Decorpot Logo"
              className="h-24 md:h-40"
            />
            <motion.p
              variants={fadeInUp}
              className="h-20 md:h-25 bg-black w-[3px]"
            />
            <div className="flex items-center flex-col sm:flex-row gap-2">
              <motion.img
                variants={fadeInUp}
                src="./images/google-icon.png"
                alt="Google Icon"
                className="h-10 md:h-12"
              />
              <motion.p
                variants={fadeInUp}
                className="text-gray-600 text-sm md:text-base text-white"
              >
                23 Reviews <br /> ⭐⭐⭐⭐⭐
              </motion.p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="mt-4 flex flex-col md:flex-row justify-center gap-4 w-full"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 w-full md:w-[40%] bg-[#006452] text-white rounded-md hover:bg-[#004d3b]"
            >
              Add to Compare
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 w-full md:w-[40%] bg-[#006452] text-white rounded-md hover:bg-[#004d3b]"
            >
              Enquire Now
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div variants={fadeInUp} className="mt-6 w-full max-w-lg">
          <iframe
            className="w-full h-64 md:h-80 rounded-md border-none"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26970.993148515387!2d75.66500564441941!3d22.61294685231549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962564220635431%3A0x1ed4b3c611de0d32!2sPithampur%20Industrial%20Area%2C%20Pithampur%2C%20Madhya%20Pradesh!5e1!3m2!1sen!2sin!4v1739855259028!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
