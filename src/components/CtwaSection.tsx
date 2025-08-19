import React from "react";
import ctwaImage from "../assets/ctwa-section.png.png";
import { motion } from "framer-motion";

const CtwaSection: React.FC = () => {
  // Animation variants
  const containerAnimation = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    }
  };
  
  // Pulse animation for the image
  const pulseAnimation = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.03, 1],
      transition: { 
        duration: 2, 
        repeat: Infinity,
        repeatType: "reverse" 
      }
    }
  };
  
  const textAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };
  return (
    <section className="w-full bg-[#E8F6EB] py-6 sm:py-8 md:py-12 lg:py-16 px-2 sm:px-4 md:px-6 lg:px-8">
      <motion.div 
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerAnimation}>
        {/* Left Text Section */}
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}>
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-2 sm:mb-3 md:mb-4"
            variants={textAnimation}
          >
            Skyrocket Lead Gen <br />
            With Click To <br />
            WhatsApp Ads ( CTWA )
          </motion.h2>
          <motion.p 
            className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed"
            variants={textAnimation}
          >
            Never miss leads, even without numbers! Engage customers directly on
            WhatsApp, nurture leads affordably, sell in real time, and shorten
            your sales funnel effortlessly with CTWA WhatsApp marketing.
          </motion.p>

          <motion.h3 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-4 sm:mt-6 md:mt-8 lg:mt-10 mb-2 sm:mb-3 md:mb-4 lg:mb-6"
            variants={textAnimation}
          >
            Isko Gif Banakar Daaliye
          </motion.h3>
          
          <motion.button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-1.5 sm:py-2 md:py-2.5 lg:py-3 px-3 sm:px-4 md:px-5 lg:px-6 rounded-full shadow-lg flex items-center text-xs sm:text-sm md:text-base"
            variants={textAnimation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1 sm:mr-1.5 md:mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
            Start WhatsApp Marketing
          </motion.button>
        </motion.div>

        {/* Right Image Section */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 sm:mt-3 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          {/* Using imported image from assets */}
          <motion.img
            src={ctwaImage}
            alt="CTWA Demo"
            className="w-full max-w-[250px] xs:max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] rounded-lg shadow-lg"
            variants={imageAnimation}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            animate={pulseAnimation.animate}
            initial={pulseAnimation.initial}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CtwaSection;
