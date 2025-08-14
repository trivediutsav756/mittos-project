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
    <div className="flex flex-col items-center px-4 py-8 w-full">
      {/* Icons and lines */}
      <div className="relative w-full max-w-6xl flex flex-col items-center">
        {/* Icons Row */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {icons.map((Icon, idx) => (
            <div key={idx} className="relative flex flex-col items-center">
              <IconWrapper>{Icon}</IconWrapper>

              {/* Vertical line with conditional height */}
              <div
                className={`mt-2 w-0.5 bg-gray-400 ${
                  idx === 0 || idx === icons.length - 1 ? "h-10" : "h-12"
                }`}
              />
              {/* Arrowhead */}
              <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400" />
            </div>
          ))}
        </div>

        {/* Curved horizontal connector - responsive */}
        <div className="flex items-center justify-center absolute top-[6.5rem] left-1/2 -translate-x-1/2 w-full max-w-[60%] md:max-w-[43.1%]">
          {/* Left Curve */}
          <div className="w-4 h-4 rounded-bl-full border-b-2 border-l-2 border-gray-400" />
          {/* Line */}
          <div className="flex-1 h-0.5 mt-3.5 bg-gray-400" />
          {/* Right Curve */}
          <div className="w-4 h-4 rounded-br-full border-b-2 border-r-2 border-gray-400" />
        </div>

        {/* Center vertical arrow from line to system */}
        <div className="flex flex-col items-center mt-12">
          <div className="h-8 w-0.5 bg-gray-400" />
          <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-400" />
        </div>
      </div>

      {/* Central System Box */}
      <div className="mt-8 bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md text-center text-sm sm:text-base">
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
    <div className="w-10 h-10 md:w-14 md:h-14 bg-white shadow-md rounded-full flex items-center justify-center text-2xl text-black">
      {children}
    </div>
  );
};

export default IconDiagram;
