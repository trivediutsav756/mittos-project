import React from 'react';
import { motion } from 'framer-motion';
import rewardImage from '../assets/reward.png';

/* Icons */
import { AiOutlineGlobal } from "react-icons/ai";
import { FiAward } from "react-icons/fi";
import { BsHeadset } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

const TrustSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 14,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 16
      }
    }
  };

  return (
    <section className="py-0 bg-transparent overflow-hidden">
      <div className="h-6 w-full bg-gradient-to-b from-violet-50/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-8 sm:p-10 md:p-12 overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-400 rounded-full opacity-20 blur-3xl"></div>

          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            {/* Left */}
            <motion.div variants={containerVariants} className="space-y-6">
              <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-green-600">
                Why Trust on Mittos API
              </motion.h2>

              <motion.p variants={itemVariants} className="text-gray-700 text-sm sm:text-base">
                We Are Awarded By CEO of Bharat Pay Mr. Ashneer Grover
              </motion.p>

              <motion.p variants={itemVariants} className="text-gray-600 text-xs sm:text-sm">
                Mittos API – India's No.1 WhatsApp Official API Solutions Provider Company in all over World since 5 years. And makes 50000+ Happy Customers and helps to grow their business. And Our Company Awarded By CEO of Bharat Pay Mr. Ashneer Grover in 2024
              </motion.p>

              {/* Metrics + Icons */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4">
                <motion.div variants={itemVariants} className="space-y-1 flex flex-col items-start">
                  <AiOutlineGlobal className="text-xl text-green-600" />
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">50,000+</p>
                  <p className="text-xs sm:text-sm text-gray-500">Worldwide Clients</p>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-1 flex flex-col items-start">
                  <FiAward className="text-xl text-green-600" />
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">7+</p>
                  <p className="text-xs sm:text-sm text-gray-500">Awards</p>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-1 flex flex-col items-start">
                  <BsHeadset className="text-xl text-green-600" />
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">24/7</p>
                  <p className="text-xs sm:text-sm text-gray-500">Support</p>
                </motion.div>
              </div>

              <motion.div variants={itemVariants} className="space-y-1 flex flex-col items-start mt-2">
                <FaYoutube className="text-xl text-green-600" />
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">11,000+</p>
                <p className="text-xs sm:text-sm text-gray-500">YouTube Subscribers</p>
              </motion.div>
            </motion.div>

            {/* Right */}
            <motion.div variants={itemVariants} className="flex justify-center md:justify-end">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 80, damping: 14 }}
                className="bg-white rounded-2xl p-2 shadow-lg"
              >
                <img
                  src={rewardImage}
                  alt="Award from Ashneer Grover"
                  className="rounded-xl w-full max-w-md"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Button */}
          <motion.div variants={itemVariants} className="flex justify-center mt-10">
            <button className="px-8 py-3 rounded-full font-semibold text-white
                               bg-gradient-to-r from-blue-600 to-blue-500
                               shadow-lg hover:shadow-xl hover:scale-105
                               transition-all duration-300">
              START NOW — IT’S FREE!
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
