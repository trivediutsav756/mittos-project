import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../assets/Angel.jpg";
import image2 from "../assets/CalByte.jpg";
import image3 from "../assets/Changi.jpg";
import image4 from "../assets/Express.jpg";
import image5 from "../assets/Growth.jpg";
import image6 from "../assets/Iskcon.jpg";
import image7 from "../assets/Licious.jpg";
import image8 from "../assets/Maruti.jpg";
import image9 from "../assets/Neet.jpg";
import image10 from "../assets/Prop Chk.jpg";
import image11 from "../assets/Skull.jpg";
import image12 from "../assets/Sobha.jpg";
import image13 from "../assets/Suzlon.jpg";
import image14 from "../assets/Syngenta.jpg";
import image15 from "../assets/WeLend.jpg";
import image16 from "../assets/Welspun.jpg";
import image17 from "../assets/ZA.jpg";
import image18 from "../assets/hindi.jpg";




const MarqueeSection = () => {
  const companies = [
    { name: 'PROPCHK', logo: image10 },
    { name: 'CAL BYTE', logo: image2 },
    { name: 'NEET', logo: image9 },
    { name: 'hindi BLOGGER', logo: image18 },
    { name: 'SUZLON', logo: image13 },
    { name: 'CHANGI', logo: image3 },
    { name: 'WELLSPUN', logo: image16 },
    { name: 'MARUTI SUZUKI', logo: image8 },
    { name: 'Licious', logo: image7 },
    { name: 'syngenta', logo: image14 },
    { name: 'GrowthX', logo: image5 },
    { name: 'SOBHA', logo: image12 },
    { name: 'AngelOne', logo: image1 },
    { name: 'The Indian EXPRESS', logo: image4 },
    { name: 'ISKCON', logo: image6 },
    { name: 'Skullcandy', logo: image11 },
    { name: 'WeLend', logo: image15 },
    { name: 'ZA Insure', logo: image17 },
  ];

  // Duplicate the array for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  // Define a palette of border colors using custom colors from tailwind config
  const borderColors = [
    'border-primary-500',
    'border-secondary-500',
    'border-accent-500',
    'border-success-500',
    'border-warning-500',
    'border-error-500',
    'border-primary-600',
    'border-secondary-600',
    'border-accent-600',
    'border-success-600',
    'border-warning-600',
    'border-error-600',
    'border-primary-400',
    'border-secondary-400',
    'border-accent-400',
    'border-success-400',
    'border-warning-400',
    'border-error-400',
  ];

  return (
    <section className="py-16 bg-[#EBFFF1] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
        >
          Founders & Marketers <span className="text-red-500">Love</span> us
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600"
        >
          Trusted by 50,000+ Businesses across 20+ Countries
        </motion.p>
      </div>

      {/* First Row - Moving Right */}
      <div className="relative mb-8">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex gap-8 whitespace-nowrap"
        >
          {duplicatedCompanies.slice(0, 6).map((company, index) => (
            <motion.div
              key={`row1-${index}`}
              whileHover={{ scale: 1.1 }}
              className={`flex bg-white border-2 ${borderColors[index % borderColors.length]} rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[200px]`}
            >
              <div className="h-24 w-full ">
                {/* <span className="text-gray-700 font-semibold text-lg"> */}
                  <img src={company.logo} alt="" className='w-full h-full object-contain' />
                {/* </span> */}
              </div>
            </motion.div>
          ))}
          {duplicatedCompanies.slice(0, 6).map((company, index) => (
            <motion.div
              key={`row1-${index}`}
              whileHover={{ scale: 1.1 }}
              className={`flex bg-white border-2 ${borderColors[index % borderColors.length]} rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[200px]`}
            >
              <div className="h-24 w-full ">
                {/* <span className="text-gray-700 font-semibold text-lg"> */}
                  <img src={company.logo} alt="" className='w-full h-full object-contain' />
                {/* </span> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Second Row - Moving Left */}
      <div className="relative mb-8">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex gap-8 whitespace-nowrap"
        >
          {duplicatedCompanies.slice(6,12).map((company, index) => (
            <motion.div
            key={`row1-${index}`}
            whileHover={{ scale: 1.1 }}
            className={`flex bg-white border-2 ${borderColors[(index+6) % borderColors.length]} rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[200px]`}
          >
            <div className="h-24 w-full ">
              {/* <span className="text-gray-700 font-semibold text-lg"> */}
                <img src={company.logo} alt="" className='w-full h-full object-contain' />
              {/* </span> */}
            </div>
          </motion.div> 
          ))}
          {duplicatedCompanies.slice(6,12).map((company, index) => (
           <motion.div
           key={`row1-${index}`}
           whileHover={{ scale: 1.1 }}
           className={`flex bg-white border-2 ${borderColors[(index+6) % borderColors.length]} rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[200px]`}
         >
           <div className="h-24 w-full ">
             {/* <span className="text-gray-700 font-semibold text-lg"> */}
               <img src={company.logo} alt="" className='w-full h-full object-contain' />
             {/* </span> */}
           </div>
         </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Third Row - Moving Right (Different Speed) */}
      <div className="relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex gap-8 whitespace-nowrap"
        >
            {duplicatedCompanies.slice(13,18).map((company, index) => (
             <motion.div
             key={`row1-${index}`}
             whileHover={{ scale: 1.1 }}
             className={`flex bg-white border-2 ${borderColors[(index+13) % borderColors.length]} rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[200px]`}
           >
             <div className="h-24 w-full ">
               {/* <span className="text-gray-700 font-semibold text-lg"> */}
                 <img src={company.logo} alt="" className='w-full h-full object-contain' />
               {/* </span> */}
             </div>
           </motion.div>
          ))}
            {duplicatedCompanies.slice(13,18).map((company, index) => (
             <motion.div
             key={`row1-${index}`}
             whileHover={{ scale: 1.1 }}
             className={`flex bg-white border-2 ${borderColors[(index+13) % borderColors.length]} rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[200px]`}
           >
             <div className="h-24 w-full ">
               {/* <span className="text-gray-700 font-semibold text-lg"> */}
                 <img src={company.logo} alt="" className='w-full h-full object-contain' />
               {/* </span> */}
             </div>
           </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarqueeSection;