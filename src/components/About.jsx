import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Updated impact stats for Digitify
const impactStats = [
  { value: 98, suffix: "%", label: "MODEL", subLabel: "ACCURACY" },
  { value: 5000, suffix: "+", label: "DIGITS", subLabel: "RECOGNIZED" },
  { value: 120, suffix: "+", label: "USERS", subLabel: "ACTIVE DAILY" },
  { value: 15, suffix: "+", label: "ML", subLabel: "MODELS DEPLOYED" },
];

// Hook for count-up animation
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const update = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentVal = Math.floor(progress * end);
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(update);
  }, [end, duration]);

  return count;
};

const WhatWeDo = () => {
  return (
    <section className="bg-[#0a0f1c] py-20 text-center font-sans px-4 md:px-10">
      {/* Impact Stats */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-12 uppercase tracking-wide font-['Orbitron']">
        Digitify Impact
      </h2>

      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        {impactStats.map((item, idx) => {
          const count = useCountUp(item.value, 1500 + idx * 300);

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center px-6 border-r last:border-none border-cyan-500/40"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-purple-400 mb-2 font-['Orbitron'] drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]">
                {count.toLocaleString()}
                {item.suffix}
              </div>
              <div className="text-sm md:text-base font-semibold text-cyan-300 uppercase tracking-wider">
                {item.label}
              </div>
              <div className="text-sm md:text-base font-semibold text-cyan-300 uppercase tracking-wider">
                {item.subLabel}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeDo;
