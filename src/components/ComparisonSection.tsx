// // src/components/ComparisonSection.tsx
// import { motion, useInView } from "framer-motion";
// import { CheckCircle, XCircle } from "lucide-react";
// import { useRef } from "react";
// import { ComparisonItem } from "../data/comparisonData";

// interface ComparisonSectionProps {
//   title?: string;
//   beforeTitle?: string;
//   afterTitle?: string;
//   data: ComparisonItem[];
// }

// export const ComparisonSection: React.FC<ComparisonSectionProps> = ({
//   title = "Before vs After",
//   beforeTitle = "Before",
//   afterTitle = "After",
//   data,
// }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-12" ref={ref}>
//       <h2 className="text-3xl font-bold text-center mb-10">
//         {title} <span className="text-green-600">Mittos API</span>
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Before Column */}
//         <div>
//           <h3 className="text-xl font-semibold text-red-600 mb-4">❌ {beforeTitle}</h3>
//           {data.map((item, idx) => (
//             <motion.div
//               key={`before-${idx}`}
//               initial={{ opacity: 0, x: -40 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: idx * 0.06, duration: 0.5 }}
//               className="flex items-start gap-3 mb-4"
//             >
//               <XCircle className="text-red-500 mt-1" size={20} />
//               <p className="text-gray-700">{item.before}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* After Column */}
//         <div>
//           <h3 className="text-xl font-semibold text-green-600 mb-4">✅ {afterTitle}</h3>
//           {data.map((item, idx) => (
//             <motion.div
//               key={`after-${idx}`}
//               initial={{ opacity: 0, x: 40 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ delay: idx * 0.06, duration: 0.5 }}
//               className="flex items-start gap-3 mb-4"
//             >
//               <CheckCircle className="text-green-500 mt-1" size={20} />
//               <p className="text-gray-800">{item.after}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { XCircle, CheckCircle } from "lucide-react";
import { ComparisonItem } from "../data/comparisonData";

interface ComparisonSectionProps {
  data: ComparisonItem[];
  beforeTitle?: string;
  afterTitle?: string;
  heading?: string;
}

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  data,
  beforeTitle = "Before",
  afterTitle = "After",
  heading = "Transformation with Mittos API",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full px-2 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16 bg-gray-200" ref={ref}>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-gray-800">
        {heading}
      </h2>

      <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto px-2 sm:px-4">
        {/* Before */}
        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-red-600 mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-center">
            ❌ {beforeTitle}
          </h3>
          {data.map((item, idx) => (
            <motion.div
              key={`before-${idx}`}
              custom={idx}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariant}
              whileHover={{ scale: 1.02 }}
              className="bg-[#e0e0e0] shadow-[2px_2px_4px_#bebebe,_-2px_-2px_4px_#ffffff] sm:shadow-[4px_4px_8px_#bebebe,_-4px_-4px_8px_#ffffff] md:shadow-[8px_8px_16px_#bebebe,_-8px_-8px_16px_#ffffff] border border-red-400 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-4 flex gap-1.5 sm:gap-2 md:gap-3 transition-all duration-300"
            >
              <XCircle className="text-red-500 mt-0.5 sm:mt-1 flex-shrink-0 w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px]" />
              <p className="text-gray-700 text-[10px] xs:text-xs sm:text-sm md:text-base">{item.before}</p>
            </motion.div>
          ))}
        </div>

        {/* After */}
        <div>
          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-green-600 mb-2 sm:mb-3 md:mb-4 lg:mb-6 text-center">
            ✅ {afterTitle}
          </h3>
          {data.map((item, idx) => (
            <motion.div
              key={`after-${idx}`}
              custom={idx}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariant}
              whileHover={{ scale: 1.02 }}
              className="bg-[#e0e0e0] shadow-[2px_2px_4px_#bebebe,_-2px_-2px_4px_#ffffff] sm:shadow-[4px_4px_8px_#bebebe,_-4px_-4px_8px_#ffffff] md:shadow-[8px_8px_16px_#bebebe,_-8px_-8px_16px_#ffffff] border border-green-400 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-4 flex gap-1.5 sm:gap-2 md:gap-3 transition-all duration-300"
            >
              <CheckCircle className="text-green-500 mt-0.5 sm:mt-1 flex-shrink-0 w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px] lg:w-[20px] lg:h-[20px]" />
              <p className="text-gray-800 text-[10px] xs:text-xs sm:text-sm md:text-base">{item.after}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

