import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Award, Shield } from 'lucide-react';
import heroImage from "../assets/mittosapi_image.webp"
import { useHeroContent } from '../hooks/useHeroContent';





const getImageUrl = (path: string) =>
  path?.startsWith("http") ? path : `https://mittos.apxfarms.com//mittosApi/${path}`;
const HeroSection = () => {
  const { data } = useHeroContent();

  const imageSrc = getImageUrl(data?.banners?.[0]?.image_path || heroImage);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-6 sm:py-8 md:py-10 lg:py-16 xl:py-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Badge Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 mb-3 sm:mb-4 md:mb-6 lg:mb-8 justify-center lg:justify-start"
        >
          <div className="flex items-center bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full text-[10px] xs:text-xs font-medium">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-500 rounded-full mr-1 sm:mr-2"></div>
            Powered by Official WhatsApp Business API
          </div>
          <div className="flex items-center bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-[10px] xs:text-xs font-medium">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-500 rounded-full mr-1 sm:mr-2"></div>
            Meta Business Partners
          </div>
          <div className="flex items-center bg-yellow-100 text-yellow-700 px-2 sm:px-3 py-1 rounded-full text-[10px] xs:text-xs font-medium">
            <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
            Awarded by Mr. Ashneer Grover 2024
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-10 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 items-center">
          {/* Content Container - 70% */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-6 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
            >
              <span className="text-green-500">100% Ban Proof</span>{' '}
              <span className="text-gray-900">API</span>
            </motion.h1>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-gray-900"
            >
              Send 100000+ WhatsApp Messages
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-3xl font-medium text-green-500"
            >
              Just in 1 Click
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-xl"
            >
              World's most trusted and affordable complete business automation api platform
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-xs sm:text-sm text-gray-500 flex items-center"
            >
              Powered by Official WhatsApp APIs 🔥
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 pt-2 sm:pt-3 md:pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(34, 197, 94, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-3 lg:py-4 rounded-md sm:rounded-lg font-semibold text-xs sm:text-sm md:text-base lg:text-lg shadow-lg transition-all duration-200"
              >
                Try Mittos API for FREE →
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 hover:border-green-500 text-gray-700 hover:text-green-500 px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-3 lg:py-4 rounded-md sm:rounded-lg font-semibold text-xs sm:text-sm md:text-base lg:text-lg transition-colors duration-200"
              >
                Check Today Offers →
              </motion.button>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-[10px] xs:text-xs sm:text-sm text-blue-600 flex items-center gap-0.5 xs:gap-1 sm:gap-2"
            >
              <Shield className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4" />
              No credit card required
            </motion.p>

            {/* Rating */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-0.5 xs:gap-1 sm:gap-2 pt-2 sm:pt-3 md:pt-4"
            >
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 md:w-5 sm:h-4 md:h-5 fill-current" />
                ))}
              </div>
              <span className="text-[10px] xs:text-xs sm:text-sm text-gray-600">
                Best Alternative to Wati, AiSensy, Double Tick and InteraktI.
              </span>
            </motion.div>
          </motion.div>

          {/* Image Container - 30% */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-4 h-full"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <img
                src={imageSrc}
                alt="Business professionals"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;