import React from 'react';
import { motion } from 'framer-motion';

// Constants for layout geometry
const CARD_HEIGHT = 68; // px (trigger/action card height + spacing)
const CENTER_CIRCLE_RADIUS = 90; // px (center Pabbly circle, width/height=180px)
const SVG_HORIZONTAL_OFFSET = 170; // px, for how far lines curve out

const AutomationSection: React.FC = () => {
  // Variants for parent-child staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  // Data for triggers and actions
  const triggers = [
    { icon: "woocommerce", text: "When a new order is created in WooCommerce", color: "bg-purple-100", iconColor: "text-purple-600" },
    { icon: "facebook", text: "When a new lead is generated", color: "bg-blue-100", iconColor: "text-blue-600" },
    { icon: "google", text: "When a new lead information is collected", color: "bg-white", iconColor: "text-blue-600" },
    { icon: "calendar", text: "When a new appointment is booked on Calendly", color: "bg-blue-100", iconColor: "text-blue-400" },
    { icon: "razorpay", text: "When a new sale happens through RazorPay", color: "bg-blue-100", iconColor: "text-blue-800" }
  ];

  const actions = [
    { icon: "gmail", text: "Send email notification via Gmail application", color: "bg-red-100", iconColor: "text-red-600" },
    { icon: "sheets", text: "Add information in the Google Sheets", color: "bg-green-100", iconColor: "text-green-600" },
    { icon: "drive", text: "Share a file from the Google Drive", color: "bg-blue-100", iconColor: "text-blue-600" },
    { icon: "mailchimp", text: "Add a New Subscriber in MailChimp", color: "bg-yellow-100", iconColor: "text-yellow-600" },
    { icon: "hubspot", text: "Add Contact in the HubSpot CRM", color: "bg-orange-100", iconColor: "text-orange-600" }
  ];

  // Icons helper
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'woocommerce':
        return (<div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">W</div>);
      case 'facebook':
        return (<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">f</div>);
      case 'google':
        return (
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M22.5 12.2329C22.5 11.4419..." fill="#4285F4" />
            </svg>
          </div>
        );
      case 'calendar':
        return (<div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold">C</div>);
      case 'razorpay':
        return (<div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-white font-bold">R</div>);
      case 'gmail':
        return (
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="..." fill="#E4E4E4" />
            </svg>
          </div>
        );
      case 'sheets':
        return (
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="..." fill="#0F9D58" />
            </svg>
          </div>
        );
      case 'drive':
        return (
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="..." fill="#4285F4" />
            </svg>
          </div>
        );
      case 'mailchimp':
        return (<div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-white font-bold">M</div>);
      case 'hubspot':
        return (<div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold">H</div>);
      default:
        return (<div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">?</div>);
    }
  };

  // Connection lines with animation
  const renderConnections = () => {
    const triggerLines = triggers.map((_, index) => {
      const triggerY = (index - (triggers.length - 1) / 2) * CARD_HEIGHT;
      return (
        <motion.path
          key={`trigger-line-${index}`}
          d={`M${-SVG_HORIZONTAL_OFFSET} ${triggerY} C${-SVG_HORIZONTAL_OFFSET + 55} ${triggerY}, ${-CENTER_CIRCLE_RADIUS} ${triggerY * 0.4}, 0 0`}
          stroke="#fff"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.08 }}
        />
      );
    });

    const actionLines = actions.map((_, index) => {
      const actionY = (index - (actions.length - 1) / 2) * CARD_HEIGHT;
      return (
        <motion.path
          key={`action-line-${index}`}
          d={`M${SVG_HORIZONTAL_OFFSET} ${actionY} C${SVG_HORIZONTAL_OFFSET - 55} ${actionY}, ${CENTER_CIRCLE_RADIUS} ${actionY * 0.4}, 0 0`}
          stroke="#fff"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.5 + index * 0.08 }}
        />
      );
    });

    return (
      <svg
        className="absolute inset-0 pointer-events-none"
        width="100%"
        height={CARD_HEIGHT * Math.max(triggers.length, actions.length)}
        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 0 }}
        viewBox={`${-SVG_HORIZONTAL_OFFSET - 30} ${-CARD_HEIGHT * (Math.max(triggers.length, actions.length) - 1) / 2 - 30} ${2 * (SVG_HORIZONTAL_OFFSET + 30)} ${CARD_HEIGHT * (Math.max(triggers.length, actions.length) - 1) + 60}`}
      >
        {triggerLines}
        {actionLines}
      </svg>
    );
  };

  return (
    <motion.section
      className="w-full bg-blue-800 py-16 px-4 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          💡 Imagine The Possibilities of Automating Anything!
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/90 text-lg mb-4"
        >
          Pabbly Connect supports more than 2,000+ applications for seamless real-time data transfer.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/80 text-md"
        >
          For example: When new sales happen on WooCommerce, Add customer details to Google Sheets
        </motion.p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-10 gap-8 relative" style={{ minHeight: `${CARD_HEIGHT * Math.max(triggers.length, actions.length) + 100}px` }}>
        {/* SVG Connection Lines */}
        <div className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none" style={{ zIndex: 1, transform: 'translate(-50%, -50%)' }}>
          {renderConnections()}
        </div>

        {/* Triggers */}
        <motion.div 
          className="md:col-span-3 flex flex-col space-y-4 z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center mb-2">
            <h3 className="text-white font-bold text-xl mb-1">TRIGGERS</h3>
            <p className="text-white/70 text-sm">Triggers available for 2,000+ apps</p>
          </div>
          {triggers.map((trigger, index) => (
            <motion.div 
              key={`trigger-${index}`}
              className={`${trigger.color} p-4 rounded-lg shadow-md flex items-center space-x-3 cursor-pointer`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{ minHeight: `${CARD_HEIGHT - 8}px` }}
            >
              {renderIcon(trigger.icon)}
              <span className="text-gray-800 text-sm font-medium">{trigger.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Center */}
        <motion.div 
          className="md:col-span-4 flex justify-center items-center z-10"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="relative"
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <div
              className="bg-white rounded-full flex flex-col items-center justify-center shadow-xl z-10 relative"
              style={{ width: 180, height: 180 }}
            >
              <div className="text-green-600 font-bold text-lg">Pabbly Connect</div>
              <div className="text-gray-500 text-xs">Integration Platform</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Actions */}
        <motion.div 
          className="md:col-span-3 flex flex-col space-y-4 z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center mb-2">
            <h3 className="text-white font-bold text-xl mb-1">ACTIONS</h3>
            <p className="text-white/70 text-sm">Actions available for 2,000+ apps</p>
          </div>
          {actions.map((action, index) => (
            <motion.div 
              key={`action-${index}`}
              className={`${action.color} p-4 rounded-lg shadow-md flex items-center space-x-3 cursor-pointer`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{ minHeight: `${CARD_HEIGHT - 8}px` }}
            >
              {renderIcon(action.icon)}
              <span className="text-gray-800 text-sm font-medium">{action.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Testimonials */}
      <motion.div 
        className="max-w-6xl mx-auto mt-16 flex flex-col md:flex-row justify-between gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {["Highly recommended with awesome support", "Best tool to connect different platforms", "Best Zapier Alternative"].map((text, i) => (
          <motion.div
            key={i}
            className="bg-white p-4 rounded-lg text-center flex-1"
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex justify-center text-yellow-400 mb-2">★★★★★</div>
            <p className="text-gray-700 text-sm">"{text}"</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AutomationSection;
