import React from "react";
import { motion } from "framer-motion";
import jsLogo from "../assets/js2.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.png";
import nodeLogo from "../assets/node.png";
import mongoLogo from "../assets/mongo.png";

const techStack = [
  { name: "JavaScript", img: jsLogo, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "React", img: reactLogo, link: "https://react.dev" },
  { name: "Tailwind CSS", img: tailwindLogo, link: "https://tailwindcss.com" },
  { name: "Node.js", img: nodeLogo, link: "https://nodejs.org" },
  { name: "MongoDB", img: mongoLogo, link: "https://www.mongodb.com" },
];

function Tech() {
  return (
    <section
      id="tech"
      className="w-full bg-gray-900 py-20 px-4 sm:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-green-400 uppercase tracking-[0.3em] text-xs sm:text-sm mb-4">
            My Development Stack
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200">
            Currently Working On
          </h2>

          <p className="text-gray-300 mt-5 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            The technologies I use to turn ideas into interactive,
            modern, and responsive web experiences.
          </p>
        </motion.div>

        {/* Hanging technology display */}
        <div className="relative max-w-5xl mx-auto">

          {/* Horizontal wire */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gray-400/70" />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-3 sm:gap-x-6">

            {techStack.map((tech, index) => (
              <motion.a
                key={tech.name}
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className={`group relative flex flex-col items-center ${
                  index % 2 === 0
                    ? "mt-0"
                    : "mt-12 sm:mt-16"
                }`}
              >
                {/* Hanging string */}
                <div className="w-[2px] h-10 sm:h-14 bg-gray-400/70 group-hover:bg-green-400 transition-colors duration-300" />

                {/* Hanging point */}
                <div className="w-3 h-3 rounded-full bg-gray-400 group-hover:bg-green-400 border-2 border-gray-900 transition-colors duration-300 z-10" />

                {/* Technology card */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative flex flex-col items-center justify-center w-full min-h-36 sm:min-h-44 px-2 py-5 sm:p-6 rounded-2xl bg-gray-800/50 border border-gray-700/70 hover:border-green-400/60 hover:bg-gray-800 transition-all duration-300 shadow-lg"
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gray-900/70 p-3 mb-4 group-hover:shadow-[0_0_20px_rgba(74,222,128,0.12)] transition-shadow duration-300">
                    <img
                      src={tech.img}
                      alt={tech.name}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Technology name */}
                  <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base text-center">
                    {tech.name}
                  </h3>

                  {/* Hover indicator */}
                  <span className="mt-2 text-green-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore ↗
                  </span>
                </motion.div>
              </motion.a>
            ))}

          </div>
        </div>

        {/* Bottom caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-400 text-xs sm:text-sm mt-16"
        >
          Always learning. Always building.
        </motion.p>

      </div>
    </section>
  );
}

export default Tech;
