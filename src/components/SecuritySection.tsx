import React from 'react';
import { motion } from 'framer-motion';
import MetaIcon from '../assets/Meta Icon.jpg';
import { Shield, Award, Check, Lock } from 'lucide-react';

const SecuritySection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const certifications = [
    {
      title: 'SOC2 Type 2 Compliant',
      icon: Shield,
      description: 'We take pride in our SOC2 Type 2 Compliance, showcasing our dedication to rigorous audits, stringent controls, and comprehensive risk management. Your trust is our top priority, and our compliance with SOC2 standards means you can rest assured that your data is managed with the highest integrity and confidentiality.'
    },
    {
      title: 'ISO 27001:2022 Certified',
      icon: Lock,
      description: 'At Pabbly Connect, we don\'t just promise security; we prove it. Our steadfast commitment is backed by the prestigious ISO 27001:2022 Certification, a testament to our world-class data protection standards.'
    }
  ];

  const awards = [
    {
      title: 'Momentum Leader',
      period: 'SPRING 2025',
      color: 'bg-orange-500'
    },
    {
      title: 'Best Support',
      period: 'SPRING 2025',
      color: 'bg-teal-500'
    },
    {
      title: 'High Performer',
      period: 'SPRING 2025 INDIA',
      color: 'bg-blue-500'
    },
    {
      title: 'High Performer',
      period: 'SPRING 2025',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Enterprise Ready Header */}
          <motion.div 
            variants={itemVariants} 
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                backgroundColor: "#dbeafe"
              }}
              whileTap={{ scale: 0.98 }}
              animate={{ 
                boxShadow: ["0 0 0 rgba(59, 130, 246, 0)", "0 0 10px rgba(59, 130, 246, 0.3)", "0 0 0 rgba(59, 130, 246, 0)"]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }
              }}
            >
              <motion.div
                animate={{ rotate: [0, 15, 0, -15, 0] }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  ease: "easeInOut" 
                }}
              >
                <Shield className="w-5 h-5 text-blue-600" />
              </motion.div>
              <motion.span 
                className="text-blue-700 font-semibold"
                whileHover={{ color: "#1d4ed8" }}
                animate={{ 
                  scale: [1, 1.03, 1],
                }}
                transition={{ 
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop"
                  }
                }}
              >
                Pabbly is Enterprise Ready!
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Security Description */}
          <motion.p 
            variants={itemVariants} 
            className="text-center text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            To ensure seamless operations, security, privacy and compliance needs to be coherent. Pabbly is SOC2 Type 2 and ISO 27001:2022 certified. We ensure that the customers data is protected without any lapses in the security. You're safe with us.
          </motion.p>
          
          <motion.div 
            variants={itemVariants} 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.button 
              className="bg-gray-800 text-white text-xs px-3 py-1.5 rounded-md hover:bg-gray-700 transition-all"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#1e40af",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                y: [0, -3, 0],
              }}
              transition={{ 
                y: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }
              }}
            >
              Click here for more information
            </motion.button>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.2 * index, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 12
                }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  backgroundColor: "#f8fafc"
                }}
              >
                <motion.div className="flex items-start gap-4">
                  <motion.div 
                    className="p-3 rounded-lg bg-blue-50"
                    whileHover={{ scale: 1.1, backgroundColor: "#e1f0ff" }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ 
                      boxShadow: ["0 0 0 rgba(59, 130, 246, 0)", "0 0 8px rgba(59, 130, 246, 0.5)", "0 0 0 rgba(59, 130, 246, 0)"],
                      backgroundColor: ["rgba(219, 234, 254, 0.8)", "rgba(191, 219, 254, 0.8)", "rgba(219, 234, 254, 0.8)"],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop"
                      },
                      backgroundColor: {
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop"
                      },
                      scale: {
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop"
                      }
                    }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, 0, -10, 0] }}
                      transition={{ 
                        duration: 5, 
                        repeat: Infinity, 
                        repeatType: "loop", 
                        ease: "easeInOut" 
                      }}
                    >
                      <cert.icon className="w-6 h-6 text-blue-600" />
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="flex-1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (0.2 * index), duration: 0.5 }}
                  >
                    <motion.h3 
                      className="text-lg font-semibold text-gray-900 mb-2"
                      whileHover={{ color: "#0081FB", scale: 1.02 }}
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 10,
                        scale: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop"
                        }
                      }}
                    >
                      {cert.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + (0.2 * index), duration: 0.5 }}
                    >
                      {cert.description}
                    </motion.p>
                  </motion.div>
                  {index === 0 && (
                    <motion.div 
                      className="flex-shrink-0 ml-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.svg 
                        width="80" 
                        height="80" 
                        viewBox="0 0 80 80" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        animate={{ 
                          filter: ["drop-shadow(0px 0px 0px rgba(0, 129, 251, 0))", "drop-shadow(0px 0px 5px rgba(0, 129, 251, 0.7))", "drop-shadow(0px 0px 0px rgba(0, 129, 251, 0))"]
                        }}
                        transition={{
                          filter: {
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "loop"
                          }
                        }}
                      >
                        <circle cx="40" cy="40" r="40" fill="#0081FB" fillOpacity="0.1"/>
                        <circle cx="40" cy="40" r="32" fill="#0081FB"/>
                        <path d="M24 40C24 31.16 31.16 24 40 24C48.84 24 56 31.16 56 40C56 48.84 48.84 56 40 56C31.16 56 24 48.84 24 40Z" fill="white"/>
                        <path d="M32 36H48V44H32V36Z" fill="#0081FB"/>
                        <path d="M40 28C34.48 28 30 32.48 30 38V42H34V38C34 34.68 36.68 32 40 32C43.32 32 46 34.68 46 38V42H50V38C50 32.48 45.52 28 40 28Z" fill="#0081FB"/>
                        <path d="M40 52C43.32 52 46 49.32 46 46V42H34V46C34 49.32 36.68 52 40 52Z" fill="#0081FB"/>
                        <path d="M40 36C38.9 36 38 36.9 38 38C38 38.74 38.4 39.38 39 39.72V42H41V39.72C41.6 39.38 42 38.74 42 38C42 36.9 41.1 36 40 36Z" fill="white"/>
                      </motion.svg>
                    </motion.div>
                  )}
                  {index === 1 && (
                    <motion.div 
                      className="flex-shrink-0 ml-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.svg 
                        width="80" 
                        height="80" 
                        viewBox="0 0 80 80" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        animate={{ 
                          filter: ["drop-shadow(0px 0px 0px rgba(0, 129, 251, 0))", "drop-shadow(0px 0px 5px rgba(0, 129, 251, 0.7))", "drop-shadow(0px 0px 0px rgba(0, 129, 251, 0))"]
                        }}
                        transition={{
                          filter: {
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "loop",
                            delay: 1.5
                          }
                        }}
                      >
                        <circle cx="40" cy="40" r="40" fill="#0081FB" fillOpacity="0.1"/>
                        <circle cx="40" cy="40" r="32" fill="white"/>
                        <path d="M40 16C26.75 16 16 26.75 16 40C16 53.25 26.75 64 40 64C53.25 64 64 53.25 64 40C64 26.75 53.25 16 40 16ZM40 60C28.95 60 20 51.05 20 40C20 28.95 28.95 20 40 20C51.05 20 60 28.95 60 40C60 51.05 51.05 60 40 60Z" fill="#0081FB"/>
                        <path d="M40 24C31.16 24 24 31.16 24 40C24 48.84 31.16 56 40 56C48.84 56 56 48.84 56 40C56 31.16 48.84 24 40 24ZM40 52C33.38 52 28 46.62 28 40C28 33.38 33.38 28 40 28C46.62 28 52 33.38 52 40C52 46.62 46.62 52 40 52Z" fill="#0081FB"/>
                        <path d="M40 32C35.58 32 32 35.58 32 40C32 44.42 35.58 48 40 48C44.42 48 48 44.42 48 40C48 35.58 44.42 32 40 32ZM40 44C37.8 44 36 42.2 36 40C36 37.8 37.8 36 40 36C42.2 36 44 37.8 44 40C44 42.2 42.2 44 40 44Z" fill="#0081FB"/>
                      </motion.svg>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Awards Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {awards.map((award, index) => (
              <motion.div 
                key={index} 
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.1 * index, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="relative"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="w-[120px] h-[90px] mx-auto relative bg-white rounded-lg shadow-md overflow-hidden"
                    whileHover={{
                      filter: "brightness(1.1)",
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                  >
                    <motion.div 
                      className={`absolute top-0 left-0 w-full h-[30px] ${award.color} flex items-center justify-center`}
                      animate={{
                        backgroundColor: [award.color.replace('bg-', '#'), award.color.replace('bg-', '#').replace('500', '600'), award.color.replace('bg-', '#')],
                        scale: [1, 1.03, 1]
                      }}
                      transition={{
                        backgroundColor: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        },
                        scale: {
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "loop"
                        }
                      }}
                    >
                      <motion.span 
                        className="text-[10px] font-medium text-white"
                        whileHover={{ scale: 1.1 }}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{
                          scale: {
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop"
                          }
                        }}
                      >
                        {award.period}
                      </motion.span>
                    </motion.div>
                    <motion.div 
                      className="absolute top-0 right-0 p-1"
                      animate={{ rotate: [0, 5, 0, -5, 0] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#FF492C"/>
                        <path d="M6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12Z" fill="white"/>
                        <path d="M8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12Z" fill="#FF492C"/>
                      </svg>
                    </motion.div>
                    <motion.div 
                      className="absolute left-0 right-0 top-[40px] bottom-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + (0.1 * index), duration: 0.5 }}
                    >
                      <motion.div 
                        className="font-bold text-sm text-gray-900"
                        whileHover={{ 
                          scale: 1.05, 
                          color: award.color.replace('bg-', 'text-') 
                        }}
                        animate={{
                          color: ["#1f2937", award.color.replace('bg-', '#'), "#1f2937"],
                        }}
                        transition={{
                          color: {
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut"
                          }
                        }}
                      >
                        {award.title}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Meta Business Partner Badge */}
          <motion.div 
            variants={itemVariants} 
            className="flex justify-center mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 flex items-center space-x-4 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: 0.2
              }}
            >
              <motion.div 
                className="flex-shrink-0"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  repeatType: "loop", 
                  ease: "easeInOut" 
                }}
              >
                <motion.img 
                  src={MetaIcon} 
                  alt="Meta Business Partner" 
                  className="w-16 h-16 object-contain"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                />
              </motion.div>
              <motion.div 
                className="flex-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <motion.div 
                  className="text-lg font-semibold text-gray-900"
                  whileHover={{ color: "#0081FB", scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Meta
                </motion.div>
                <motion.div 
                  className="text-sm text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  Business Partner
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;