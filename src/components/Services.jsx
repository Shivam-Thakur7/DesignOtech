import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: 'AI-Powered Digit Recognition',
    description:
      'Instantly recognize handwritten digits with cutting-edge neural networks trained on MNIST and beyond.',
    image: 'digit-ai.png',
    alt: 'AI Digit Recognition',
  },
  {
    title: 'Smart Accuracy Insights',
    description:
      'Get confidence scores and detailed breakdowns of predictions to understand AI decisions better.',
    image: 'insight.png',
    alt: 'Prediction Insights',
  },
  {
    title: 'Leaderboard Challenges',
    description:
      'Compete globally by testing your digits and climbing the accuracy leaderboard.',
    image: 'leaderboard.png',
    alt: 'Leaderboard Gamification',
  },
  {
    title: 'Community Showcase',
    description:
      'Share your doodles, discover patterns from others, and explore the creativity of handwritten digits.',
    image: 'community.png',
    alt: 'Community Sharing',
  },
];

const FeatureCard = ({ feature, index, activeIndex, setActiveIndex }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) setActiveIndex(index);
  }, [inView, index, setActiveIndex]);

  return (
    <motion.div
      ref={ref}
      key={feature.title}
      className={`p-6 rounded-2xl snap-start transition-transform duration-300 border ${
        index === activeIndex
          ? 'bg-[#111827] border-cyan-400 shadow-[0_0_25px_rgba(0,255,255,0.4)] scale-105'
          : 'bg-[#0a0f1c] border-gray-700 opacity-60'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <h3
        className={`text-2xl font-['Orbitron'] font-bold ${
          index === activeIndex ? 'text-cyan-400' : 'text-gray-300'
        }`}
      >
        {feature.title}
      </h3>
      <p className="text-gray-400 mt-2 leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
};

const FeaturesShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full min-h-screen bg-[#0a0f1c] py-24 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={features[activeIndex].image}
              src={features[activeIndex].image}
              alt={features[activeIndex].alt}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl shadow-[0_0_40px_rgba(168,85,247,0.4)] object-contain max-h-full max-w-full"
            />
          </AnimatePresence>
        </div>

        {/* Right Features */}
        <div
          className="w-full lg:w-1/2 max-h-[500px] overflow-y-auto scroll-smooth snap-y snap-mandatory space-y-12 pr-2"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <style>
            {`
              ::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
