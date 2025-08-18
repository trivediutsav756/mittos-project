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
  unlimited?: string[];
  color: string;
  textColor: string;
  hasMoneyBackGuarantee?: boolean;
}

const PabblyComparisonSection: React.FC = () => {
  // Animation variants
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

  // Pricing plans data
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
        { text: 'Unlimited Team Members', available: false },
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
        { text: 'Unlimited Connections', available: true },
      ]
    }
  ];

  return (
    <section className="w-full bg-purple-100 py-16 px-4 overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pabbly Connect: <span className="underline decoration-yellow-400 decoration-4">What Makes Us Different?</span>👇
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We are the only automation platform that offers unlimited internal tasks. You will consume ZERO
            tasks when using internal operations such as Filter, Router, Formatter etc.
          </p>
        </div>

        <div className="relative flex justify-center">
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl relative">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`${plan.color} border border-gray-200 rounded-lg shadow-lg overflow-hidden relative`}
                variants={itemVariants}
              >
                {/* Money Back Badge */}
                {plan.hasMoneyBackGuarantee && (
                  <div className="absolute top-0 right-0 -mt-2 -mr-2 z-10">
                    <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-12 shadow-md">
                      <div className="text-center">30 Days Money</div>
                      <div className="text-center">Back Guarantee</div>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="p-6 flex items-center justify-between border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    {plan.logo === 'zapier' ? (
                      <div className="w-10 h-10 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                          <path d="M22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12Z" fill="#FF4A00"/>
                          <path d="M16.4531 7.0293H12.4414L8.42969 11.041H12.4414L16.4531 7.0293Z" fill="white"/>
                          <path d="M7.54688 7.0293L7.54688 11.041L11.5586 15.0527V11.041L7.54688 7.0293Z" fill="white"/>
                          <path d="M12.4414 15.9355H16.4531L16.4531 11.9238L12.4414 15.9355Z" fill="white"/>
                        </svg>
                      </div>
                    ) : (
                      <div className="w-10 h-10 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                          <circle cx="12" cy="12" r="10.5" fill="#00C389"/>
                          <path d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 16.2C9.67906 16.2 7.8 14.3209 7.8 12C7.8 9.67906 9.67906 7.8 12 7.8C14.3209 7.8 16.2 9.67906 16.2 12C16.2 14.3209 14.3209 16.2 12 16.2Z" fill="white"/>
                        </svg>
                      </div>
                    )}
                    <span className={`font-bold ${plan.textColor}`}>{plan.name}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">{plan.currency}</span>
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                  <div className="text-sm text-gray-500">{plan.period}</div>
                </div>

                {/* Features */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        {feature.available ? (
                          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-red-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        )}
                        <span className={feature.available ? 'text-gray-800' : 'text-gray-500 line-through'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* VS Badge */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                VS
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div 
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <a 
            href="#" 
            className="inline-flex items-center px-8 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
          >
            <span className="mr-2">👍</span>
            START NOW — IT'S FREE!
          </a>
        </motion.div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            Trusted by 14,099+ Businesses
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            30-Days Refund Guarantee
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            11,000+ Video Tutorials
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PabblyComparisonSection;