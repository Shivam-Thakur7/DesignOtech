import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUser,
  FaEnvelope,
  FaTint,
  FaMapMarkerAlt,
  FaHeart,
  FaEdit
} from 'react-icons/fa';

function Profile({ user }) {
  if (!user) {
    return (
      <section className="min-h-screen py-20 bg-[#FFE6EA] flex items-center justify-center">
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center">
          <h2 className="text-3xl font-bold text-[#E94F6A] mb-4">Please Sign In</h2>
          <p className="text-[#3D3D3D] mb-6">Sign in to access your Aidwave profile.</p>
          <button
            onClick={() => window.location.href = '#login'}
            className="bg-[#E94F6A] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#d33f5a] transition"
          >
            Sign In Now
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-20 bg-[#FFE6EA] px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-xl">
        <div className="text-center">
          <div className="relative inline-block mb-4">
            <div className="w-24 h-24 rounded-full bg-[#E94F6A] flex items-center justify-center text-white text-4xl">
              <FaUser />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow"
            >
              <FaEdit className="text-[#E94F6A]" />
            </motion.button>
          </div>
          <h2 className="text-3xl font-bold text-[#E94F6A]">Welcome, {user.name}!</h2>
          <p className="text-[#3D3D3D]/70 mb-6">Here’s your donor dashboard on Aidwave.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Personal Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4 bg-[#FFF0F3] p-4 rounded-xl">
              <FaUser className="text-[#E94F6A]" />
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-semibold">{user.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-[#FFF0F3] p-4 rounded-xl">
              <FaEnvelope className="text-[#E94F6A]" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-[#FFF0F3] p-4 rounded-xl">
              <FaMapMarkerAlt className="text-[#E94F6A]" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold">{user.location || 'Not Provided'}</p>
              </div>
            </div>
          </div>

          {/* Donor Stats */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4 bg-[#FFF0F3] p-4 rounded-xl">
              <FaTint className="text-[#E94F6A]" />
              <div>
                <p className="text-sm text-gray-500">Blood Group</p>
                <p className="font-semibold">{user.bloodGroup || 'Unknown'}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-[#FFF0F3] p-4 rounded-xl">
              <FaHeart className="text-[#E94F6A]" />
              <div>
                <p className="text-sm text-gray-500">Times Donated</p>
                <p className="font-semibold">{user.donations || 0}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-10">
          <h3 className="text-xl font-bold text-[#E94F6A] mb-3">Recent Activity</h3>
          <div className="bg-[#FFF0F3] p-4 rounded-xl text-sm text-[#3D3D3D]/80">
            No recent donations or requests made.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
