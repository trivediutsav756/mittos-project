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
    <div className="bg-green-50 flex flex-col items-center px-4 pt-10 pb-16">
      <h1 className="text-4xl font-bold mb-4 text-center" data-aos="fade-down">
        WhatsApp Forms
      </h1>

      <div
        className="border-2 border-purple-500 p-4 rounded-md mb-10 max-w-xl text-center text-lg"
        data-aos="fade-up"
      >
        WhatsApp API forms let you capture leads instantly and send automated replies to boost conversion rates.
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {formOptions.map((option, index) => (
          <div
            key={index}
            className="
              flex items-center gap-2 border border-green-500 px-4 py-2 rounded-md bg-white shadow-sm
              transition duration-300 ease-in-out transform cursor-pointer
              hover:scale-105 hover:bg-[#22C55E] hover:border-[#22C55E] hover:shadow-[0_0_10px_#22C55E]
              hover:text-white
            "
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <FaUser className="text-inherit" />
            <span>{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatsAppForms;
