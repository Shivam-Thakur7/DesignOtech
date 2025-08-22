import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaArrowRight, FaTimes } from 'react-icons/fa';

function SignIn({ onSignIn }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      if (isSignUp) {
        if (!formData.name || !formData.email || !formData.password) {
          setError('All fields are required');
          return;
        }
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          return;
        }
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
        if (existingUsers.some(user => user.email === formData.email)) {
          setError('Email already registered');
          return;
        }

        const newUser = {
          id: Date.now(),
          name: formData.name,
          email: formData.email,
          password: formData.password,
          image: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=0d1117&color=00e6e6`,
          headline: 'Member at Digitify',
          connections: [],
          posts: [],
          joinedDate: new Date().toISOString()
        };

        localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));

        onSignIn(newUser);
      } else {
        if (!formData.email || !formData.password) {
          setError('Email and password are required');
          return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === formData.email && u.password === formData.password);

        if (!user) {
          setError('Invalid email or password');
          return;
        }

        onSignIn(user);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Auth error:', err);
    }
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-[#0d1117] via-[#1a1f2e] to-[#0d1117] text-white relative overflow-hidden">
      {/* Subtle Animated Background Glow */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl -top-40 -left-40"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl bottom-0 right-0"
          animate={{ scale: [1.1, 0.9, 1.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#161b26] rounded-2xl shadow-xl p-8 border border-cyan-500/30 backdrop-blur-md"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2 text-cyan-400">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p className="text-gray-400">
                {isSignUp ? 'Join the Digitify Community' : 'Sign in to continue'}
              </p>
            </div>

            {/* Error Alert */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/10 border border-red-500/40 text-red-400 p-4 rounded-xl mb-6 flex items-center justify-between"
              >
                <span>{error}</span>
                <button onClick={() => setError('')}>
                  <FaTimes />
                </button>
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignUp && (
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400/50" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-3 bg-[#0d1117] border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                  />
                </div>
              )}

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400/50" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-3 bg-[#0d1117] border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  required
                />
              </div>

              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400/50" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full pl-12 pr-4 py-3 bg-[#0d1117] border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  required
                />
              </div>

              {isSignUp && (
                <div className="relative">
                  <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400/50" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className="w-full pl-12 pr-4 py-3 bg-[#0d1117] border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    required
                  />
                </div>
              )}

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-xl font-medium hover:opacity-90 transition duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <span>{isSignUp ? 'Create Account' : 'Sign In'}</span>
                <FaArrowRight />
              </motion.button>
            </form>

            {/* Toggle SignUp/SignIn */}
            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setError('');
                  setFormData({
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                  });
                }}
                className="text-gray-400 hover:text-cyan-400 transition duration-300"
              >
                {isSignUp ? 'Already have an account? Sign in' : "Don’t have an account? Sign up"}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
