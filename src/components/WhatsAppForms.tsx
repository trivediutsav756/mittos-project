import React, { useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhatsAppForms: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const formOptions = [
    "Lead Generation",
    "Feedback Collection",
    "Surveys & Polls",
    "Event Registrations",
    "Appointment Booking",
    "Support Ticket Creation",
    "Placing Orders",
    "Restaurant Reservations"
  ];

  return (
    <div className="bg-green-50 flex flex-col items-center px-3 sm:px-4 pt-6 sm:pt-8 md:pt-10 pb-10 sm:pb-12 md:pb-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 text-center" data-aos="fade-down">
        WhatsApp Forms
      </h1>

      <div
        className="border-2 border-purple-500 p-3 sm:p-4 rounded-md mb-6 sm:mb-8 md:mb-10 max-w-xl text-center text-sm sm:text-base md:text-lg"
        data-aos="fade-up"
      >
        WhatsApp API forms let you capture leads instantly and send automated replies to boost conversion rates.
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full max-w-6xl px-2 sm:px-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {formOptions.map((option, index) => (
          <div
            key={index}
            className="
              flex items-center gap-1 sm:gap-2 border border-green-500 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-md bg-white shadow-sm
              transition duration-300 ease-in-out transform cursor-pointer text-xs sm:text-sm md:text-base
              hover:scale-105 hover:bg-[#22C55E] hover:border-[#22C55E] hover:shadow-[0_0_10px_#22C55E]
              hover:text-white
            "
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <FaUser className="text-inherit text-xs sm:text-sm md:text-base" />
            <span>{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatsAppForms;
