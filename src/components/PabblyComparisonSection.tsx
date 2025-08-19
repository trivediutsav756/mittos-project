import React from 'react';
import { motion } from 'framer-motion';

interface FeatureItem {
  text: string;
  available: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  currency: string;
  period: string;
  logo?: string;
  features: FeatureItem[];
  color: string;
  textColor: string;
  hasMoneyBackGuarantee?: boolean;
}

const PabblyComparisonSection: React.FC = () => {
  // Stronger container animation (harder + smoother)
  const containerVariants = {
    hidden: { opacity: 0, y: 90 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 16,
        staggerChildren: 0.15
      }
    }
  };

  // Child animation
  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 18
      }
    }
  };

  const pricingPlans: PricingPlan[] = [
    {
      name: 'Zapier',
      price: '128723',
      currency: '₹',
      period: 'Every Year',
      logo: 'zapier',
      color: 'bg-white',
      textColor: 'text-orange-500',
      features: [
        { text: '10,000 Tasks Every Month', available: true },
        { text: 'Instant Webhooks', available: true },
        { text: 'Multi-Step Workflows', available: true },
        { text: 'Unlimited Premium Apps', available: true },
        { text: 'Formatters', available: true },
        { text: 'Filters', available: true },
        { text: 'Path Routers', available: true },
        { text: 'Unlimited Team Members', available: false }
      ]
    },
    {
      name: 'Pabbly Connect',
      price: '15769',
      currency: '₹',
      period: 'Every Year',
      logo: 'pabbly',
      color: 'bg-white',
      textColor: 'text-green-500',
      hasMoneyBackGuarantee: true,
      features: [
        { text: '10,000 Tasks Every Month', available: true },
        { text: 'Instant Webhooks', available: true },
        { text: 'Multi-Step Workflows', available: true },
        { text: 'Unlimited Premium Apps', available: true },
        { text: 'Formatters', available: true },
        { text: 'Iterator & Filter', available: true },
        { text: 'Unlimited Path Routers', available: true },
        { text: 'Unlimited Operations', available: true },
        { text: 'Unlimited Team Members', available: true },
        { text: 'Unlimited Connections', available: true }
      ]
    }
  ];

  return (
    <section className="w-full bg-purple-100 py-6 sm:py-10 md:py-12 lg:py-16 px-2">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Pabbly Connect: <span className="underline decoration-yellow-400 decoration-2 sm:decoration-4">What Makes Us Different?</span>👇
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-xs sm:text-sm md:text-base mt-2">
            We are the only automation platform that offers unlimited internal tasks. You will consume ZERO tasks when using internal operations such as Filter, Router, Formatter etc.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="relative flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full max-w-4xl">
            {pricingPlans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                className={`${plan.color} rounded-lg border border-gray-200 shadow-lg overflow-hidden`}
              >
                {/* Money Back Badge */}
                {plan.hasMoneyBackGuarantee && (
                  <div className="absolute top-0 right-0 translate-x-2 -translate-y-2">
                    <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-[8px] sm:text-[10px] md:text-xs rotate-12">
                      30 Days Money Back
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className="p-4 flex items-center justify-between border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <span className={`font-bold ${plan.textColor}`}>{plan.name}</span>
                  </div>
                  <div className="text-gray-600 text-xs">{plan.period}</div>
                </div>

                {/* Price */}
                <div className="p-4 border-b border-gray-200">
                  <span className="text-lg md:text-2xl font-bold">{plan.currency}{plan.price}</span>
                </div>

                {/* Features */}
                <div className="p-4">
                  <ul className="space-y-2 text-xs sm:text-sm">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        {feature.available ? (
                          <span className="text-green-500">✔</span>
                        ) : (
                          <span className="text-red-500">✖</span>
                        )}
                        <span className={`${!feature.available && 'line-through text-gray-400'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* VS Circle */}
            <motion.div
              variants={itemVariants}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl"
            >
              VS
            </motion.div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="text-center mt-10">
          <a
            href="#"
            className="inline-block px-6 sm:px-8 md:px-10 py-2 sm:py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            START NOW — IT'S FREE!
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          variants={itemVariants}
          className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-gray-600"
        >
          <div className="flex items-center">
            ✔ Trusted by 14,099+ Businesses
          </div>
          <div className="flex items-center">
            ✔ 30-Days Refund Guarantee
          </div>
          <div className="flex items-center">
            ✔ 11,000+ Video Tutorials
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PabblyComparisonSection;
