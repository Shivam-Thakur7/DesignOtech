import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBrain, FaChartBar, FaGamepad } from "react-icons/fa";
import TutorialSlides from "./TutorialSlides";

const Hero = () => {
  const [showTutorial, setShowTutorial] = useState(false);

  return (
    <section
      className="relative text-white py-16 px-4 md:px-12 lg:px-24 overflow-hidden font-['Orbitron']"
      style={{
        background: "linear-gradient(135deg, #0a0f1c, #1b1b2f 60%)",
      }}
    >
      {/* Decorative overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(0, 255, 255, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(155, 0, 255, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(0, 200, 255, 0.1) 0%, transparent 40%)
          `,
          zIndex: 0,
        }}
      />

      <div className="relative top-8 grid grid-cols-1 md:grid-cols-2 items-center gap-10 z-10">
        {/* Left Text Content */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-cyan-400 drop-shadow-lg">
            Digitify <br />
            <span className="text-purple-400">From doodle to digit — instantly</span>
          </h1>
          <p className="text-lg text-gray-300">
            Experience AI-powered recognition like never before. Draw or upload
            your handwritten digits, and Digitify will decode them in real-time.
          </p>
          <button
            onClick={() => setShowTutorial(true)}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-purple-500 hover:to-cyan-500 transition px-6 py-3 rounded-full font-semibold shadow-lg w-fit text-white"
          >
            See How Digitify Works →
          </button>
        </motion.div>

        {/* Right Video */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-sm mx-auto"
        >
          <div className="rounded-t-[3rem] overflow-hidden p-4 bg-gradient-to-b from-cyan-500/20 to-purple-600/20 shadow-xl">
            <video
              src="/vid1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover rounded-2xl shadow-2xl border border-cyan-500/40"
            />
          </div>
        </motion.div>
      </div>

      {/* Feature Strip */}
      <div className="relative mt-16 z-10">
        <div className="bg-[#111827] rounded-2xl p-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-gray-300 shadow-xl border border-purple-600/30">
          <div className="flex flex-col items-center space-y-2">
            <FaBrain size={28} className="text-cyan-400" />
            <p className="font-semibold text-white">AI Recognition</p>
            <p>Advanced neural networks trained to decode handwritten digits.</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FaChartBar size={28} className="text-purple-400" />
            <p className="font-semibold text-white">Confidence Scores</p>
            <p>See how confident the model is with live probability graphs.</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FaGamepad size={28} className="text-pink-400" />
            <p className="font-semibold text-white">Gamified Learning</p>
            <p>Challenge yourself to beat the AI with speed & accuracy tests.</p>
          </div>
        </div>
      </div>

      {/* Tutorial Slides Modal */}
      {showTutorial && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-80"
        >
          <div className="bg-[#1e1e2f] rounded-xl shadow-lg max-w-4xl w-full p-6 relative border border-cyan-500/30">
            <button
              className="absolute top-4 right-4 text-white font-bold text-2xl hover:text-cyan-400"
              onClick={() => setShowTutorial(false)}
            >
              ×
            </button>
            <TutorialSlides onClose={() => setShowTutorial(false)} />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
