import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="w-full bg-gray-900 py-28 px-6"
      tabIndex={-1}
      aria-label="About Me section"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-4xl sm:text-5xl font-bold mb-16  text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-200"
      >
        About Me
      </motion.h2>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="max-w-3xl mx-auto bg-gray-800/40 backdrop-blur-lg p-8 sm:p-12 rounded-2xl shadow-2xl border border-gray-700 hover:scale-105 transform transition-all"
      >
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 text-center">
          I'm a self-taught{' '}
          <span className="text-green-400 font-semibold">Frontend Developer</span> passionate about building
          clean, responsive, and interactive user interfaces. My tools of choice include{' '}
          <span className="text-green-400 font-semibold">React</span> and{' '}
          <span className="text-green-400 font-semibold">Tailwind CSS</span>, allowing me to create elegant,
          performant web apps that work seamlessly across all devices.
        </p>

        {/* Optional Highlights */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <span className="px-4 py-2 bg-green-400/20 text-green-400 rounded-full font-medium text-sm sm:text-base">
            React
          </span>
          <span className="px-4 py-2 bg-green-400/20 text-green-400 rounded-full font-medium text-sm sm:text-base">
            Tailwind CSS
          </span>
          <span className="px-4 py-2 bg-green-400/20 text-green-400 rounded-full font-medium text-sm sm:text-base">
            JavaScript
          </span>
          <span className="px-4 py-2 bg-green-400/20 text-green-400 rounded-full font-medium text-sm sm:text-base">
            Responsive Design
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default About;
