import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: 'easeOut' }}
      className="min-h-screen flex justify-center px-6 text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
      tabIndex={-1}
      aria-label="Hero Section"
    >
      <div className="flex flex-col items-center max-w-2xl h-10">

        {/* IMAGE */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1 }}
          className="relative mb-6"
        >
          <div className="absolute inset-0 rounded-full bg-green-400 blur-2xl opacity-20"></div>

          <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-green-400 shadow-lg">
            <img
              src="/DSC_5024.JPG"   // replace with your image
              alt="Rishi Malla"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* NAME */}
        <h1
          tabIndex={0}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-green-400"
        >
          Hi, I'm <span className="text-white">Rishi Malla</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
          Self-taught{' '}
          <span className="text-green-400 font-semibold">Frontend Developer</span>{' '}
          building fast, responsive, and clean web interfaces with React and
          Tailwind CSS.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-3">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-md bg-green-500 text-black text-sm font-semibold hover:bg-green-400 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-md border border-green-400 text-green-400 text-sm hover:bg-green-400 hover:text-black transition"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
