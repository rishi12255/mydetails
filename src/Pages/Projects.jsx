import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'School Website',
    description: 'A beautiful school portal built for online presence and interaction.',
  },
  {
    title: 'Shoes Shop',
    description: 'A modern eCommerce platform for trendy footwear.',
  },
  {
    title: 'Functional Calculator',
    description: 'A simple and effective calculator built with modern UI principles.',
  },
   {
    title: 'Travel Blog',
    description: 'Explore the world through my travel blog.',
  },
  {
    title: 'Printed Shop',
    description: 'You can create your own style',
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className="py-28 px-1  max-w-7xl  mx-auto"
      tabIndex={-1}
      aria-label="Projects showcase"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-center text-green-400 mb-16">
        Projects
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map(({ title, description }, index) => (
          <motion.div
            key={index}
            tabIndex={0}
            className="group bg-gradient-to-br from-gray-800 to-gray-900 p-1 rounded-xl hover:shadow-2xl hover:shadow-green-400/30 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            whileHover={{ scale: 1.04 }}
            whileFocus={{ scale: 1.04 }}
            aria-label={`${title} project`}
          >
            <div className="bg-gray-900 rounded-lg p-6 h-full flex flex-col justify-between transition duration-300 group-hover:bg-opacity-90">
              <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{description}</p>
              <div className="mt-5">
                <button
                  className="text-green-400 font-medium text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-green-400 rounded"
                  onClick={() => alert(`More info about "${title}" coming soon!`)}
                  aria-label={`Learn more about ${title}`}
                >
                  Learn more →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
