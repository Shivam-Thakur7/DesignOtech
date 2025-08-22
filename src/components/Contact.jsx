import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaRobot,
} from "react-icons/fa";
import creatorImage from "../assets/mishty.png"; // Update path if different

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function formSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch("https://getform.io/f/amdkwqmb", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        console.log(response);
        document.getElementById("form").reset();
      })
      .catch((error) => console.log(error));
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 bg-[#0a0f1c] px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-['Orbitron'] text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]">
            Get in Touch
          </h2>
          <p className="text-cyan-200/80 text-lg max-w-lg">
            Have questions about Digitify or want to collaborate? Whether you're
            a student, researcher, or AI enthusiast, we’d love to hear from you.
          </p>

          

          {/* Contact Info */}
          <div className="space-y-6 mt-6 text-white">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-cyan-500/20 rounded-xl shadow-md">
                <FaEnvelope className="text-cyan-400 text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-cyan-200/80">contact@digitify.ai</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-cyan-500/20 rounded-xl shadow-md">
                <FaPhone className="text-cyan-400 text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-cyan-200/80">+91 75082 67254</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-cyan-500/20 rounded-xl shadow-md">
                <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-cyan-200/80">Global | Online 24/7</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#111827]/80 border border-purple-500/30 rounded-3xl p-8 shadow-[0_0_25px_rgba(168,85,247,0.5)]"
        >
          <h3 className="text-3xl font-bold text-cyan-400 mb-2 font-['Orbitron']">
            Contact Us
          </h3>
          <p className="text-cyan-200/70 mb-6 text-sm">
            Have an idea, question, or feedback? Send us a message and we’ll get
            back to you soon.
          </p>
          <form
            onSubmit={formSubmit}
            id="form"
            method="POST"
            acceptCharset="UTF-8"
            className="space-y-5"
          >
            <div>
              <label className="block text-cyan-200 font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl p-3 bg-[#0a0f1c] border border-cyan-500/30 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-cyan-200 font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl p-3 bg-[#0a0f1c] border border-cyan-500/30 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-cyan-200 font-medium mb-1">
                Your Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl p-3 bg-[#0a0f1c] border border-cyan-500/30 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold rounded-xl p-4 text-center transition shadow-lg flex justify-center items-center space-x-2"
            >
              <span>Send Message</span>
              <FaPaperPlane />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
