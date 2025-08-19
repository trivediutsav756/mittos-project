import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import chatGptImage from "../assets/ChatGPT Image Aug 18, 2025, 11_50_19 AM.png";
import chatGptImage2 from "../assets/ChatGPT Image Aug 18, 2025, 12_02_20 PM.png";
import villaImage from "../assets/Villa Promotion on Smartphone Screen.png";
import image24h from "../assets/image.png";
import image7d from "../assets/image 2.png";

const steps = [
  { label: "After 2 hour", src: chatGptImage },
  { label: "4 hours later", src: chatGptImage2 },
  { label: "12 hours later", src: villaImage },
  { label: "24 hours later", src: image24h },
  { label: "After 7 days", src: image7d },
  {
    label: "Keep adding as many steps you need",
    src: "/img6.png",
  },
];

const DripCampaignSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % steps.length);
  };

  const handleStepClick = (index: number) => {
    setActiveIndex(index); // show selected screen

    // stop existing interval
    if (intervalRef.current) clearInterval(intervalRef.current);

    // start a new auto cycle
    intervalRef.current = setInterval(goToNext, 2000);
  };

  // clear interval on unmount
  useEffect(() => {
    intervalRef.current = setInterval(goToNext, 2000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-10 p-4 sm:p-6 md:p-8 bg-green-50 rounded-xl sm:rounded-2xl">
      {/* Sidebar steps */}
      <ul className="space-y-2 sm:space-y-3 md:space-y-4 flex-shrink-0">
        {steps.map((step, i) => (
          <li
            key={i}
            onClick={() => handleStepClick(i)}
            className={`w-fit cursor-pointer px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full flex items-center gap-2 md:gap-3 shadow-sm ${
              i === activeIndex
                ? "bg-white shadow-md"
                : "bg-[#d6f5db] hover:bg-[#c8eecd]"
            }`}
          >
            <FaWhatsapp className="text-green-600 text-base sm:text-lg" />
            <span className="text-xs sm:text-sm whitespace-nowrap">{step.label}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 mt-4 md:mt-0">
        {/* Phone/Mobile Screen */}
        {activeIndex === steps.length - 1 ? (
          <div className="flex items-center justify-center md:justify-start">
            <div className="bg-[#e2f7cb] rounded-2xl sm:rounded-3xl p-3 sm:p-4 max-w-[220px] sm:max-w-[240px] md:max-w-[260px] flex items-center gap-2 sm:gap-3">
              <FaWhatsapp className="text-green-600 text-xl sm:text-2xl" />
              <span className="text-sm sm:text-base">
                Keep adding as many steps you need
              </span>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-[220px] sm:max-w-[240px] md:max-w-[260px] h-[440px] sm:h-[480px] md:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden bg-black mx-auto md:mx-0">
            <img
              src={steps[activeIndex].src}
              alt="phone sequence"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Info / Description */}
        <div className="flex flex-col max-w-full md:max-w-md">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-center md:text-left">
            Sequence or Drip Campaign
          </h2>

          <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-5 md:mb-6 text-center md:text-left">
            Automate marketing strategy that sends a series of pre-scheduled,
            targeted messages to nurture leads or engage customers over time.
          </p>

          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="inline-block w-1 h-1 bg-black rounded-full"></span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <FaWhatsapp className="text-gray-700 text-sm sm:text-base" />
                <span className="text-gray-700 text-xs sm:text-sm md:text-base">Consistent Engagement</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="inline-block w-1 h-1 bg-black rounded-full"></span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <FaWhatsapp className="text-gray-700 text-sm sm:text-base" />
                <span className="text-gray-700 text-xs sm:text-sm md:text-base">Better Customer Retention</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="inline-block w-1 h-1 bg-black rounded-full"></span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <FaWhatsapp className="text-gray-700 text-sm sm:text-base" />
                <span className="text-gray-700 text-xs sm:text-sm md:text-base">Higher Conversion Rates</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="inline-block w-1 h-1 bg-black rounded-full"></span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <FaWhatsapp className="text-gray-700 text-sm sm:text-base" />
                <span className="text-gray-700 text-xs sm:text-sm md:text-base">Scalable for Large Audiences</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="inline-block w-1 h-1 bg-black rounded-full"></span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <FaWhatsapp className="text-gray-700 text-sm sm:text-base" />
                <span className="text-gray-700 text-xs sm:text-sm md:text-base">Automated Lead Nurturing</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="inline-block w-1 h-1 bg-black rounded-full"></span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <FaWhatsapp className="text-gray-700 text-sm sm:text-base" />
                <span className="text-gray-700 text-xs sm:text-sm md:text-base">Re-engage Old Leads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DripCampaignSection;
