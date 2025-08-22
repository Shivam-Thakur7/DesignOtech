import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaRobot } from "react-icons/fa";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Digitify?",
      answer:
        "Digitify is a futuristic web app that recognizes handwritten digits using AI-powered deep learning models trained on datasets like MNIST.",
    },
    {
      question: "Do I need to install anything?",
      answer:
        "Nope! Digitify runs directly in your browser. Just open the app, draw a digit, and get instant predictions powered by machine learning.",
    },
    {
      question: "How accurate is Digitify?",
      answer:
        "Our model achieves over 98% accuracy on test data. Even with messy handwriting, it can still recognize digits with high confidence.",
    },
    {
      question: "Is Digitify only for students?",
      answer:
        "Not at all! Digitify is built for learners, teachers, developers, and curious minds who want to explore AI and digit recognition.",
    },
    {
      question: "Can I contribute or customize it?",
      answer:
        "Yes! Digitify is designed to be extensible. You can train new models, customize the UI, or even integrate it with your own apps.",
    },
  ];

  return (
    <section className="py-20 bg-[#0a0f1c] text-white font-sans relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-cyan-400 font-['Orbitron'] drop-shadow-[0_0_12px_rgba(34,211,238,0.8)] mb-3"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-cyan-200/80 text-lg max-w-3xl mx-auto"
          >
            Everything you need to know about Digitify and how it brings AI
            handwriting recognition to life.
          </motion.p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-5 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="border border-cyan-500/40 rounded-2xl shadow-[0_0_15px_rgba(56,189,248,0.4)] hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all bg-[#111827]/70"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between w-full px-6 py-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg">
                    <FaRobot size={22} />
                  </div>
                  <span className="text-lg font-semibold text-cyan-200">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-cyan-400" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-cyan-100/80 leading-relaxed text-[16px]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
