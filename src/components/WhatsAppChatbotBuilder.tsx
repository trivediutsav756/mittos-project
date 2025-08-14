import React from "react";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppChatbotBuilder: React.FC = () => {
  const buttons = [
    { label: "Share message", icon: <FaUser /> },
    { label: "Ask for information", icon: <FaUser /> },
    { label: "Commerce related", icon: <FaUser /> },
    { label: "Action Button", icon: <FaUser /> },
    { label: "Ai Chatbot", icon: <FaUser /> },
  ];

  return (
    <motion.div
      className="w-full min-h-[400px] bg-green-50 flex flex-col justify-center items-center px-6 py-14"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h1
        className="w-full text-3xl md:text-5xl font-extrabold text-center text-green-900 mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Build WhatsApp Chatbots{" "}
        <span className="text-green-600">No-Code</span> Drag & Drop Builder
      </motion.h1>

      {/* Points */}
      <motion.ul
        className="list-disc list-inside space-y-4 text-lg text-gray-800 w-full max-w-screen-xl mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <li>
          <span className="font-semibold text-green-700">
            Media, Interactive List & Button
          </span>
          , Catalog Message Support
        </li>
        <li>
  The Most Advanced No Code Chatbot Builder for{" "}
  <motion.span
    className="relative text-green-700 font-semibold cursor-pointer group"
    whileHover="hovered"
    initial="initial"
    animate="initial"
  >
    WhatsApp
    <motion.span
      variants={{
        initial: { width: 0 },
        hovered: { width: "100%" },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute left-0 -bottom-1 h-[2px] bg-green-700"
    />
  </motion.span>
</li>

        <li>
          API & Web-hook for Real-Time Communication with any Software.
        </li>
      </motion.ul>

      {/* Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-screen-xl">
        {buttons.map((btn, i) => (
          <motion.button
            key={i}
            className="flex justify-center items-center gap-2 py-4 border border-green-300 rounded-lg text-green-800 font-medium shadow-md bg-white
                       transform transition-all duration-300 w-full
                       hover:bg-[#22C55E] hover:text-white hover:scale-[1.03] hover:shadow-[0_0_10px_#22C55E]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: i * 0.5, // stagger effect
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 10px #22C55E",
              transition: { duration: 0.15 },
            }}
          >
            {btn.icon}
            {btn.label}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default WhatsAppChatbotBuilder;
