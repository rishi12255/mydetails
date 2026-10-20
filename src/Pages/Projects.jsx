import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'School Website',
    description:
      'A beautiful school portal built for online presence and interaction.',
    icon: '🏫',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Shoes Shop',
    description:
      'A modern eCommerce platform for trendy footwear.',
    icon: '👟',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    title: 'Functional Calculator',
    description:
      'A simple and effective calculator built with HTML, Tailwind CSS, and JavaScript.',
    icon: '🧮',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    demo: 'https://myyeasycalculator.netlify.app/',
  },
  {
    title: 'Travel Blog',
    description: 'Explore the world through my travel blog.',
    icon: '✈️',
    technologies: ['WordPress', 'Travel', 'Web Design'],
  },
  {
    title: 'Printed Shop',
    description: 'You can create your own style.',
    icon: '👕',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 px-5 py-24 sm:px-8 lg:px-12"
      aria-label="Projects showcase"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center sm:mb-16">
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-green-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-green-400">
              My Work
            </span>
            <span className="h-px w-10 bg-green-400" />
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            My <span className="text-green-400">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
            Here are some of the projects I've worked on.
            Each project helps me learn, improve, and build
            something useful.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className={`group flex h-full flex-col rounded-2xl border bg-gradient-to-br from-gray-800 to-gray-900 p-6 transition-all duration-300 ${
                project.demo
                  ? 'border-green-400/60 shadow-lg shadow-green-400/5 hover:border-green-400 hover:shadow-green-400/10'
                  : 'border-gray-700 hover:border-green-400/50'
              }`}
            >
              {/* Project icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/10 text-2xl transition-transform duration-300 group-hover:scale-110">
                {project.icon}
              </div>

              {/* Project details */}
              <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-green-400">
                {project.title}
              </h3>

              <p className="mb-5 flex-grow text-sm leading-6 text-gray-300">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-green-400/10 bg-green-400/10 px-3 py-1 text-xs font-medium text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project action */}
              <div className="mt-auto border-t border-gray-700 pt-5">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-green-500 px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    Live Demo ↗
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-green-400">
                    <span>→</span>
                    More details coming soon
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-green-400/50" />
          <span className="text-xl text-green-400">✦</span>
          <span className="h-px w-20 bg-gradient-to-l from-transparent to-green-400/50" />
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
