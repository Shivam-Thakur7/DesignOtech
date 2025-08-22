import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Student",
    company: "IIT Delhi",
    image: "1.png",
    quote:
      "Digitify made my handwritten digit recognition project 10x easier. The accuracy blew my mind!",
    rating: 5,
  },
  {
    name: "Sofia Patel",
    role: "AI Enthusiast",
    company: "Bangalore, India",
    image: "2.png",
    quote:
      "I sketched messy numbers on my phone, and Digitify still predicted them correctly. Amazing experience!",
    rating: 5,
  },
  {
    name: "Rahul Nair",
    role: "Data Scientist",
    company: "Mumbai, India",
    image: "3.png",
    quote:
      "The futuristic UI + lightning fast ML backend make Digitify a must-try. It feels like sci-fi in action.",
    rating: 5,
  },
  {
    name: "Emily Zhang",
    role: "Research Scholar",
    company: "Singapore",
    image: "4.png",
    quote:
      "Digitify helps me teach neural networks in a fun, interactive way. My students love it!",
    rating: 5,
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preload = testimonials.map(
      (t) =>
        new Promise((res) => {
          const img = new Image();
          img.src = t.image;
          img.onload = res;
        })
    );
    Promise.all(preload).then(() => setImagesLoaded(true));
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [imagesLoaded]);

  return (
    <section className="bg-[#0a0f1c] py-16 px-4 overflow-hidden text-white relative">
      <div className="container mx-auto text-center max-w-5xl">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 font-['Orbitron'] mb-3 drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]">
            What Our Users Say
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg max-w-2xl mx-auto text-cyan-200/80"
          >
            Real stories from learners, creators, and developers using Digitify
            to explore the power of handwritten digit recognition.
          </motion.p>
        </div>

        {/* Loading Spinner */}
        {!imagesLoaded ? (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-cyan-400"></div>
          </div>
        ) : (
          <div className="relative flex justify-center items-center mt-6 min-h-[300px]">
            {testimonials.map((t, index) => {
              const offset = index - activeIndex;
              const visible = Math.abs(offset) <= 1;
              const scale = offset === 0 ? 1 : 0.85;
              const opacity = visible ? 1 : 0;
              const zIndex = 10 - Math.abs(offset);
              const translateX = `${offset * 280}px`;

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-500 ease-in-out"
                  style={{
                    transform: `translateX(${translateX}) scale(${scale})`,
                    opacity,
                    zIndex,
                    pointerEvents: offset === 0 ? "auto" : "none",
                  }}
                >
                  <div className="bg-[#111827] rounded-2xl p-6 w-80 shadow-[0_0_20px_rgba(56,189,248,0.6)] border border-cyan-500/40">
                    <div className="flex justify-center mb-4 relative">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]"
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-cyan-500 rounded-full p-1 shadow-lg">
                        <FaQuoteLeft className="text-white text-sm" />
                      </div>
                    </div>
                    <p className="italic mb-3 text-cyan-100/90 text-sm">
                      "{t.quote}"
                    </p>
                    <div className="flex justify-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${
                            i < t.rating
                              ? "text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-purple-300">
                      {t.name}
                    </h3>
                    <p className="text-sm text-cyan-400/80">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] scale-110"
                  : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
