import React from 'react';
import {
  FaHome,
  FaInfoCircle,
  FaBlog,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <footer className="bg-[#0A0F1E] text-[#D1D5DB] py-14 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Brand Info */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-extrabold mb-4 text-[#3B82F6]">Digitfy</h2>
            <p className="text-[#D1D5DB]/80 leading-relaxed">
              Decoding handwritten intelligence. Recognize, learn, and innovate with the power of AI.
            </p>
            <div className="flex space-x-4 mt-6">
              {[
                { Icon: FaLinkedin, link: "https://linkedin.com" },
                { Icon: FaTwitter, link: "https://twitter.com" },
                { Icon: FaInstagram, link: "https://instagram.com" },
              ].map(({ Icon, link }, idx) => (
                <motion.a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${link}`}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="h-10 w-10 rounded-full bg-[#1F2937]/50 hover:bg-[#3B82F6]/30 transition-all duration-300 flex items-center justify-center shadow-md"
                >
                  <Icon className="text-[#3B82F6] text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 border-b border-[#3B82F6]/40 pb-1">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', icon: FaHome, route: '/' },
                { label: 'About', icon: FaInfoCircle, route: '/About' },
                { label: 'Contact', icon: FaEnvelope, route: '/Contact' },
                { label: 'Blogs', icon: FaBlog, route: '/#blogs' },
              ].map(({ label, icon: Icon, route }) => (
                <motion.li key={label} whileHover={{ x: 6 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link to={route} className="flex items-center space-x-3 group">
                    <span className="h-8 w-8 rounded bg-[#1F2937] group-hover:bg-[#3B82F6]/40 transition-all flex items-center justify-center">
                      <Icon className="text-[#3B82F6]" />
                    </span>
                    <span className="group-hover:text-white transition-colors">{label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Digitfy Features */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 border-b border-[#3B82F6]/40 pb-1">Digitfy Features</h3>
            <ul className="space-y-3">
              {[
                "Handwritten Digit Recognition",
                "AI-Powered Predictions",
                "Real-time Drawing Board",
                "Accuracy Analytics",
                "Model Comparison & Insights"
              ].map((feature, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center space-x-2"
                  whileHover={{ x: 6 }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]"></span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 border-b border-[#3B82F6]/40 pb-1">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-[#3B82F6] text-xl" />
                <span>support@digitfy.ai</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-[#3B82F6] text-xl" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-[#3B82F6] text-xl" />
                <span>Global | Remote-first AI Lab</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#3B82F6]/30 flex flex-col md:flex-row justify-between items-center text-[#9CA3AF] text-sm">
          <motion.p whileHover={{ scale: 1.05 }} className="text-center md:text-left">
            &copy; {currentYear} <span className="font-semibold text-[#3B82F6]">Digitfy</span>. All rights reserved.
          </motion.p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {["Terms", "Privacy", "Cookies"].map((item, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ y: -2, color: "#06B6D4" }}
                className="hover:text-[#3B82F6] transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
