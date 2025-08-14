import React from 'react';
import { Facebook, Instagram, Linkedin, MoreHorizontal, Radio, Twitter, LucideProps } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

// Animation variants for Framer Motion with explicit TypeScript type
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// --- TypeScript Interfaces ---
interface FunnelStepProps {
  children: React.ReactNode;
  className?: string;
}

// --- Reusable Components with TypeScript ---
const FunnelStep: React.FC<FunnelStepProps> = ({ children, className }) => (
  <motion.div
    variants={fadeIn}
    className={`bg-[#1a1a2e] border border-purple-700 rounded-lg p-4 text-center z-10 w-64 ${className}`}
  >
    {children}
  </motion.div>
);

// A simple vertical connector for mobile fallback
const SimpleConnector: React.FC = () => (
    <div className="w-px h-12 bg-purple-500 mx-auto" />
);

// --- Main Component ---
const RevenueFunnel: React.FC = () => {
  const socialIcons: { icon: React.FC<LucideProps>, key: string }[] = [
    { icon: Facebook, key: "fb" },
    { icon: Instagram, key: "ig" },
    { icon: Twitter, key: "tw" },
    { icon: Radio, key: "rd" },
    { icon: Linkedin, key: "li" },
    { icon: MoreHorizontal, key: "mh" }
  ];

  const automationSteps: string[] = ["AI Chat", "AI Calling", "Chatbot", "WhatsApp", "Email"];
  const nurtureDays: string[] = ["Day 01", "Day 03", "Day 05", "Day 07"];

  return (
    <div className="bg-black text-white min-h-screen font-sans flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 overflow-x-hidden">
      {/* Title */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-green-400">5X YOUR REVENUE</span>
        </h1>
        <p className="text-lg md:text-xl mt-2">with the Power of AI & WhatsApp</p>
      </motion.div>
      
      {/* Main Funnel Container - This needs to be relative to position all the lines */}
      <div className="w-full max-w-5xl flex flex-col items-center relative">

        {/* --- Social Icons & Connector --- */}
        <div className="relative w-full max-w-xl mb-12">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                className="flex flex-wrap justify-around gap-4"
            >
                {socialIcons.map(({ icon: Icon, key }, index) => (
                    <motion.div key={key} variants={fadeIn} className="p-3 bg-gray-800 rounded-full cursor-pointer hover:bg-purple-600 transition-colors z-10">
                        <Icon size={32} />
                    </motion.div>
                ))}
            </motion.div>
            {/* Desktop Lines */}
            <div className="hidden md:block absolute top-10 left-0 w-full h-24">
                <div className="w-full h-px bg-purple-500 absolute top-0"></div>
                <div className="absolute left-[8%]  top-0 h-4 w-px bg-purple-500"></div>
                <div className="absolute left-[25%] top-0 h-4 w-px bg-purple-500"></div>
                <div className="absolute left-[42%] top-0 h-4 w-px bg-purple-500"></div>
                <div className="absolute left-[58%] top-0 h-4 w-px bg-purple-500"></div>
                <div className="absolute left-[75%] top-0 h-4 w-px bg-purple-500"></div>
                <div className="absolute left-[92%] top-0 h-4 w-px bg-purple-500"></div>
                <div className="absolute left-1/2 -ml-px top-4 h-20 w-px bg-purple-500"></div>
            </div>
        </div>
        
        <FunnelStep>Lead Capture</FunnelStep>
        <SimpleConnector />
        <FunnelStep>Wetroo Automation</FunnelStep>

        {/* --- Advanced Connector for the Grid --- */}
        <div className="relative w-full h-24 max-w-3xl">
            {/* Desktop lines */}
            <div className="hidden md:block absolute top-0 left-0 w-full h-full">
                <div className="w-px h-6 bg-purple-500 mx-auto"></div>
                <div className="w-full h-px bg-purple-500 absolute top-6 left-0"></div>
                <div className="absolute top-6 left-[10%] w-px h-6 bg-purple-500"></div>
                <div className="absolute top-6 left-[30%] w-px h-6 bg-purple-500"></div>
                <div className="absolute top-6 left-1/2 w-px h-6 bg-purple-500 -ml-px"></div>
                <div className="absolute top-6 left-[70%] w-px h-6 bg-purple-500"></div>
                <div className="absolute top-6 left-[90%] w-px h-6 bg-purple-500"></div>
            </div>
            {/* Mobile connector */}
            <div className="block md:hidden"><SimpleConnector /></div>
        </div>

        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
        >
          {automationSteps.map((step) => (
            <FunnelStep key={step} className="bg-[#2c2c54] text-sm md:text-base !w-full">{step}</FunnelStep>
          ))}
        </motion.div>

        {/* --- Connector from Grid to next step --- */}
         <div className="relative w-full h-24 max-w-3xl">
            <div className="hidden md:block absolute top-0 left-0 w-full h-full">
                <div className="w-px h-12 bg-purple-500 mx-auto absolute bottom-0 left-1/2 -ml-px"></div>
                <div className="w-full h-px bg-purple-500 absolute top-12 left-0"></div>
                <div className="absolute top-0 left-[10%] w-px h-12 bg-purple-500"></div>
                <div className="absolute top-0 left-[30%] w-px h-12 bg-purple-500"></div>
                <div className="absolute top-0 left-1/2 w-px h-12 bg-purple-500 -ml-px"></div>
                <div className="absolute top-0 left-[70%] w-px h-12 bg-purple-500"></div>
                <div className="absolute top-0 left-[90%] w-px h-12 bg-purple-500"></div>
            </div>
            <div className="block md:hidden"><SimpleConnector /></div>
        </div>

        <FunnelStep className="bg-green-600/20 border-green-500">Auto Qualify Lead</FunnelStep>
        <SimpleConnector />
        <FunnelStep className="bg-yellow-600/20 border-yellow-500">Auto Nurture</FunnelStep>
        
        {/* --- Nurture Days Section with Lines --- */}
        <div className="relative w-full h-24 max-w-2xl">
            <div className="hidden md:block absolute top-0 left-0 w-full h-full">
                <div className="w-px h-6 bg-purple-500 mx-auto"></div>
                <div className="w-full h-px bg-purple-500 absolute top-6 left-0"></div>
                <div className="absolute top-6 left-[12.5%] w-px h-6 bg-purple-500"></div>
                <div className="absolute top-6 left-[37.5%] w-px h-6 bg-purple-500"></div>
                <div className="absolute top-6 left-[62.5%] w-px h-6 bg-purple-500"></div>
                <div className="absolute top-6 left-[87.5%] w-px h-6 bg-purple-500"></div>
            </div>
            <div className="block md:hidden"><SimpleConnector /></div>
        </div>

        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="flex justify-around gap-4 w-full max-w-2xl"
        >
          {nurtureDays.map((day) => (
            <motion.div key={day} variants={fadeIn} className="bg-gray-700 px-4 py-1 rounded-full text-sm z-10">{day}</motion.div>
          ))}
        </motion.div>

        {/* --- Connector from Days to Final Split --- */}
        <div className="relative w-full h-12 max-w-2xl">
            <div className="hidden md:block absolute top-0 left-0 w-full h-full">
                 <div className="absolute top-0 left-[12.5%] w-px h-4 bg-purple-500"></div>
                 <div className="absolute top-0 left-[37.5%] w-px h-4 bg-purple-500"></div>
                 <div className="absolute top-0 left-[62.5%] w-px h-4 bg-purple-500"></div>
                 <div className="absolute top-0 left-[87.5%] w-px h-4 bg-purple-500"></div>
                 <div className="w-full h-px bg-purple-500 absolute top-4 left-0"></div>
                 <div className="w-px h-8 bg-purple-500 absolute top-4 left-1/2 -ml-px"></div>
            </div>
            <div className="block md:hidden"><SimpleConnector /></div>
        </div>
        
        {/* --- Bottom branching section with lines --- */}
        <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative">
          <div className="hidden md:block absolute -top-4 left-0 w-full h-px">
            <div className="w-1/2 h-full bg-purple-500 float-left border-r-[160px] border-transparent"></div>
            <div className="w-1/2 h-full bg-purple-500 float-right border-l-[160px] border-transparent"></div>
          </div>
          <div className="hidden md:block absolute -top-4 left-1/4 w-px h-4 bg-purple-500"></div>
          <div className="hidden md:block absolute -top-4 right-1/4 w-px h-4 bg-purple-500"></div>

          {/* Positive Branch */}
          <motion.div variants={fadeIn} className="flex flex-col items-center gap-y-4">
            <FunnelStep className="bg-green-600/40 border-green-500 w-full">Positive</FunnelStep>
            <SimpleConnector />
            <div className="bg-green-500 text-black font-bold rounded-lg p-3 w-full text-center">Lead Won</div>
          </motion.div>

          {/* Negative Branch */}
          <motion.div variants={fadeIn} className="flex flex-col items-center gap-y-4">
            <FunnelStep className="bg-red-600/40 border-red-500 w-full">Negative</FunnelStep>
            <SimpleConnector />
            <div className="bg-red-500 text-white font-bold rounded-lg p-3 w-full text-center">Long Nurture</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};


export default RevenueFunnel;