
import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="relative min-h-[calc(100svh-70px)] flex items-center justify-center overflow-hidden px-5 py-4 text-center bg-gray-900"
      tabIndex={-1}
      aria-label="Hero Section"
    >
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-green-400/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-green-400/5 blur-3xl" />

      {/* Main content */}
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center -translate-y-4 sm:-translate-y-5">

        {/* Profile image */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-fit mx-auto mb-5"
        >
          <div className="absolute -inset-2 rounded-full border border-green-400/40" />

          <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-green-400 shadow-xl shadow-green-400/10">
            <img
              src="/DSC_5024.JPG"
              alt="Rishi Malla"
              className="w-full h-full object-cover"
            />
          </div>

          <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-green-400 border-4 border-gray-900" />
        </motion.div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          Hi, I'm <span className="text-green-400">Rishi Malla</span>
        </h1>

        {/* Role */}
        <h2 className="mt-3 text-lg sm:text-2xl font-medium text-gray-300">
          Frontend Developer
          <span className="text-green-400"> | </span>
          <span className="text-green-400">Creative Thinker</span>
        </h2>

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-7 text-gray-400">
          I build fast, responsive, and user-friendly web interfaces
          with React and Tailwind CSS. I enjoy turning ideas into
          clean and engaging digital experiences.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
          {['React', 'JavaScript', 'Tailwind CSS'].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full border border-gray-700 bg-gray-800/40 text-sm text-gray-300 hover:border-green-400/60 hover:text-green-400 transition"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <a
            href="#projects"
            className="px-7 py-3 rounded-lg bg-green-500 text-black text-sm font-bold hover:bg-green-400 hover:-translate-y-1 transition duration-300"
          >
            Explore My Work ↗
          </a>

          <a
            href="#contact"
            className="px-7 py-3 rounded-lg border border-gray-600 text-gray-200 text-sm font-semibold hover:border-green-400 hover:text-green-400 transition duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="mt-5 text-sm text-gray-500 hover:text-green-400 transition"
        >
          Scroll to explore ↓
        </motion.a>

      </div>
    </motion.section>
  );
}

export default Hero;
