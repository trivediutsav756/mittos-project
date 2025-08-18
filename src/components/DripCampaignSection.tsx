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
    <section className="flex gap-10 p-8 bg-green-50 rounded-2xl">
      {/* Sidebar steps */}
      <ul className="space-y-4">
        {steps.map((step, i) => (
          <li
            key={i}
            onClick={() => handleStepClick(i)}
            className={`w-fit cursor-pointer px-5 py-3 rounded-full flex items-center gap-3 shadow-sm ${
              i === activeIndex
                ? "bg-white shadow-md"
                : "bg-[#d6f5db] hover:bg-[#c8eecd]"
            }`}
          >
            <FaWhatsapp className="text-green-600 text-lg" />
            <span className="text-sm whitespace-nowrap">{step.label}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Phone/Mobile Screen */}
        {activeIndex === steps.length - 1 ? (
          <div className="flex items-center">
            <div className="bg-[#e2f7cb] rounded-3xl p-4 max-w-[260px] flex items-center gap-3">
              <FaWhatsapp className="text-green-600 text-2xl" />
              <span className="text-base">
                Keep adding as many steps you need
              </span>
            </div>
          </div>
        ) : (
          <div className="w-[260px] h-[520px] rounded-3xl overflow-hidden bg-black">
            <img
              src={steps[activeIndex].src}
              alt="phone sequence"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Info / Description */}
        <div className="flex flex-col max-w-md">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
            Sequence or Drip Campaign
          </h2>

          <p className="text-gray-700 mb-6 text-center md:text-left">
            Automate marketing strategy that sends a series of pre-scheduled,
            targeted messages to nurture leads or engage customers over time.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="inline-block w-1 h-1 bg-black rounded-full"></span>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-gray-700" />
                <span className="text-gray-700">Consistent Engagement</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-block w-1 h-1 bg-black rounded-full"></span>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-gray-700" />
                <span className="text-gray-700">Better Customer Retention</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-block w-1 h-1 bg-black rounded-full"></span>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-gray-700" />
                <span className="text-gray-700">Higher Conversion Rates</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-block w-1 h-1 bg-black rounded-full"></span>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-gray-700" />
                <span className="text-gray-700">Scalable for Large Audiences</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-block w-1 h-1 bg-black rounded-full"></span>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-gray-700" />
                <span className="text-gray-700">Automated Lead Nurturing</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-block w-1 h-1 bg-black rounded-full"></span>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-gray-700" />
                <span className="text-gray-700">Re-engage Old Leads</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DripCampaignSection;
