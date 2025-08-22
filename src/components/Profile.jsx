import React from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaBrain,
  FaChartLine,
  FaEdit,
  FaTrophy,
} from "react-icons/fa";

function Profile({ user }) {
  if (!user) {
    return (
      <section className="min-h-screen py-20 bg-[#f3f2ff] flex items-center justify-center">
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
          <h2 className="text-3xl font-bold text-[#6C63FF] mb-4">
            Sign in to Digitify
          </h2>
          <p className="text-[#3D3D3D] mb-6">
            Access your AI digit recognition dashboard.
          </p>
          <button
            onClick={() => (window.location.href = "#login")}
            className="bg-[#6C63FF] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#4f46e5] transition"
          >
            Sign In Now
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-20 bg-[#f3f2ff] px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-xl">
        {/* Header */}
        <div className="text-center">
          <div className="relative inline-block mb-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00C9FF] flex items-center justify-center text-white text-4xl shadow-lg">
              <FaUser />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow"
            >
              <FaEdit className="text-[#6C63FF]" />
            </motion.button>
          </div>
          <h2 className="text-3xl font-bold text-[#6C63FF]">
            Hello, {user.name} 👋
          </h2>
          <p className="text-[#3D3D3D]/70 mb-6">
            Your personalized Digitify dashboard.
          </p>
        </div>

        {/* User Info + Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Personal Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4 bg-[#f9f8ff] p-4 rounded-xl">
              <FaUser className="text-[#6C63FF]" />
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-semibold">{user.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-[#f9f8ff] p-4 rounded-xl">
              <FaEnvelope className="text-[#6C63FF]" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4 bg-[#f9f8ff] p-4 rounded-xl">
              <FaBrain className="text-[#6C63FF]" />
              <div>
                <p className="text-sm text-gray-500">AI Model</p>
                <p className="font-semibold">
                  {user.model || "MNIST v1.0"}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-[#f9f8ff] p-4 rounded-xl">
              <FaChartLine className="text-[#6C63FF]" />
              <div>
                <p className="text-sm text-gray-500">Digits Recognized</p>
                <p className="font-semibold">{user.predictions || 0}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-10">
          <h3 className="text-xl font-bold text-[#6C63FF] mb-3">
            Achievements
          </h3>
          <div className="bg-[#f9f8ff] p-4 rounded-xl flex items-center gap-3 text-[#3D3D3D]/80">
            <FaTrophy className="text-yellow-500" />
            {user.achievements && user.achievements.length > 0 ? (
              <ul className="list-disc list-inside">
                {user.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            ) : (
              "No achievements unlocked yet. Keep practicing!"
            )}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-10">
          <h3 className="text-xl font-bold text-[#6C63FF] mb-3">
            Recent Activity
          </h3>
          <div className="bg-[#f9f8ff] p-4 rounded-xl text-sm text-[#3D3D3D]/80">
            {user.activity && user.activity.length > 0
              ? user.activity.map((act, i) => <p key={i}>➤ {act}</p>)
              : "No recent digit recognition yet."}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
