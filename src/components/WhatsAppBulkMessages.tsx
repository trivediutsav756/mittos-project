import React from "react";
import { motion } from "framer-motion";
import { FaSyncAlt, FaCalendarAlt, FaSitemap, FaUser } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 12,
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const WhatsAppBulkMessages: React.FC = () => {
  const buttons = [
    "Send Promotions",
    "Offers",
    "Coupon codes",
    "Carousels",
    "Call to Action Button",
    "Marketing Messages",
    "Utility Messages",
    "Order Notification",
    "Quick Reply Button"
  ];

  const features = [
    {
      icon: <FaSyncAlt className="text-green-600" size={28} />,
      title: "Automatic WhatsApp messages",
      desc: "Send Same Messages Multiple Times Everyday"
    },
    {
      icon: <FaCalendarAlt className="text-green-600" size={28} />,
      title: "Schedule your WhatsApp messages",
      desc: "Streamline your work, Schedule Broadcasts 2 months ahead of time"
    },
    {
      icon: <FaSitemap className="text-green-600" size={28} />,
      title: "Drip WhatsApp messages",
      desc: "Send Drip Messages to Convert your Normal Leads into Sales"
    }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="border border-purple-300 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg w-full max-w-[1920px] mx-auto bg-gradient-to-br from-green-50 to-green-100"
    >
      {/* Title */}
      <motion.h1
        variants={itemVariants}
        className="text-xl sm:text-2xl md:text-3xl font-bold text-center leading-snug text-gray-900"
      >
        Send Unlimited WhatsApp Bulk Messages <br /> Just in Single Click
      </motion.h1>

      {/* Features */}
      <div className="mt-4 sm:mt-6 md:mt-8 space-y-3 sm:space-y-4 md:space-y-6">
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="flex items-start"
          >
            <div className="mr-2 sm:mr-3">
              <div className="text-xl sm:text-2xl md:text-[28px]">{item.icon}</div>
            </div>
            <div>
              <h2 className="text-base sm:text-lg md:text-xl font-bold">{item.title}</h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-4 sm:mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
        {buttons.map((text, index) => (
          <motion.button
            key={index}
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 10px #22C55E"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="flex items-center border border-green-500 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base bg-white hover:bg-[#22C55E] hover:text-white transition w-full justify-start shadow-sm"
            style={{ height: "40px", minHeight: "40px", maxHeight: "50px" }}
          >
            <FaUser className="mr-1 sm:mr-2 text-xs sm:text-sm md:text-base" />
            <span className="font-medium">{text}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default WhatsAppBulkMessages;
