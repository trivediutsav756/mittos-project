import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import { MdOutlineDomain } from "react-icons/md";
import { TbDots } from "react-icons/tb";

const icons = [
  <FaFacebookF />,
  <FaInstagram />,
  <FaWhatsapp />,
  <SiGoogleads />,
  <MdOutlineDomain />,
  <TbDots />,
];

const IconDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-2 sm:px-3 md:px-4 py-4 sm:py-6 md:py-8 w-full">
      {/* Icons and lines */}
      <div className="relative w-full max-w-6xl flex flex-col items-center">
        {/* Icons Row */}
        <div className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-5 md:gap-8 lg:gap-10">
          {icons.map((Icon, idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              <IconWrapper>{Icon}</IconWrapper>

              {/* Vertical line with conditional height */}
              <div
                className={`mt-1 sm:mt-2 w-0.5 bg-gray-400 ${
                  idx === 0 || idx === icons.length - 1 ? "h-6 sm:h-8 md:h-10" : "h-8 sm:h-10 md:h-12"
                }`}
              />
              {/* Arrowhead */}
              <div className="w-0 h-0 border-l-3 border-r-3 border-t-3 sm:border-l-4 sm:border-r-4 sm:border-t-4 border-l-transparent border-r-transparent border-t-gray-400" />
            </div>
          ))}
        </div>

        {/* Curved horizontal connector - responsive */}
        <div className="flex items-center justify-center absolute top-[4.5rem] sm:top-[5.5rem] md:top-[6.5rem] left-1/2 -translate-x-1/2 w-full max-w-[70%] sm:max-w-[65%] md:max-w-[50%] lg:max-w-[43.1%]">
          {/* Left Curve */}
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-bl-full border-b-2 border-l-2 border-gray-400" />
          {/* Line */}
          <div className="flex-1 h-0.5 mt-2.5 sm:mt-3.5 bg-gray-400" />
          {/* Right Curve */}
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-br-full border-b-2 border-r-2 border-gray-400" />
        </div>

        {/* Center vertical arrow from line to system */}
        <div className="flex flex-col items-center mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          <div className="h-5 sm:h-6 md:h-8 w-0.5 bg-gray-400" />
          <div className="w-0 h-0 border-l-3 border-r-3 border-t-3 sm:border-l-4 sm:border-r-4 sm:border-t-4 border-l-transparent border-r-transparent border-t-gray-400" />
        </div>
      </div>

      {/* Central System Box */}
      <div className="mt-4 sm:mt-6 md:mt-8 bg-purple-700 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-md sm:rounded-lg shadow-md text-center text-xs sm:text-sm md:text-base">
        Central System
      </div>
    </div>
  );
};

interface IconWrapperProps {
  children: React.ReactNode;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children }) => {
  return (
    <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white shadow-md rounded-full flex items-center justify-center text-lg xs:text-xl sm:text-2xl md:text-3xl text-black">
      {children}
    </div>
  );
};

export default IconDiagram;
