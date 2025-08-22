import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

const slides = [
  {
    title: 'Welcome to Digitify 🔢',
    description: "Let’s explore how Digitify recognizes your handwritten digits in seconds!",
    videoSrc: '/b1.mp4',
  },
  {
    title: 'Draw & Predict ✍️',
    description: "Simply write a number, and Digitify instantly predicts it using AI.",
    videoSrc: '/digitify-draw.mp4',
  },
  {
    title: 'Track Your Progress 📊',
    description: "See your recognition history, accuracy stats, and fun challenges.",
    videoSrc: '/digitify-progress.mp4',
  },
  {
    title: 'Learn & Play 🎮',
    description: "Practice with gamified digit challenges and improve your handwriting!",
    videoSrc: '/digitify-game.mp4',
  },
];

export default function TutorialSlides({ onClose }) {
  const [step, setStep] = useState(0);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl p-6 md:p-10 overflow-hidden">

        {/* Exit Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#6C63FF] text-2xl font-bold hover:text-[#4f46e5] transition"
          aria-label="Close tutorial"
        >
          <X />
        </button>

        {/* Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl w-full h-56 mb-6 overflow-hidden flex items-center justify-center bg-[#f3f2ff]">
              <video
                src={slides[step].videoSrc}
                autoPlay
                loop
                playsInline
                muted
                className="w-full h-full object-contain rounded-xl"
                style={{ transform: 'scale(1.2)', borderRadius: '12px' }}
              />
            </div>

            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00C9FF] bg-clip-text text-transparent mb-4 text-center">
              {slides[step].title}
            </h2>
            <p className="text-[#3D3D3D] text-lg text-center">{slides[step].description}</p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-10">
          <button
            onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
            disabled={step === 0}
            className="flex items-center gap-2 bg-[#f3f2ff] text-[#6C63FF] px-4 py-2 rounded-full font-medium hover:bg-[#e1dfff] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <ArrowLeft size={18} /> Back
          </button>

          {step < slides.length - 1 ? (
            <button
              onClick={() => setStep((prev) => Math.min(prev + 1, slides.length - 1))}
              className="flex items-center gap-2 bg-[#6C63FF] text-white px-4 py-2 rounded-full font-medium hover:bg-[#4f46e5] transition-all"
            >
              Next <ArrowRight size={18} />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-[#6C63FF] to-[#00C9FF] text-white px-6 py-2 rounded-full font-semibold hover:from-[#4f46e5] hover:to-[#0099cc] transition-all"
            >
              Done
            </button>
          )}
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === step ? 'bg-[#6C63FF] scale-110' : 'bg-[#d9d6ff] hover:bg-[#b6b1ff]'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
