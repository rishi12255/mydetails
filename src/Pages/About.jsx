
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { number: '01', name: 'React', detail: 'Interactive UI development' },
  { number: '02', name: 'JavaScript', detail: 'Dynamic web experiences' },
  { number: '03', name: 'Tailwind CSS', detail: 'Modern responsive styling' },
  { number: '04', name: 'Responsive Design', detail: 'Layouts for every screen' },
];

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full bg-gray-900 px-6 py-24 sm:py-28"
      tabIndex={-1}
      aria-label="About Me section"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-14">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-green-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-green-400">
              Get to know me
            </span>
            <span className="h-px w-10 bg-green-400" />
          </div>

          <h2 className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            About <span className="text-green-400">Me</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid items-stretch gap-6 md:grid-cols-5">

          {/* Introduction card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 p-7 sm:p-9 md:col-span-3"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-green-400/5 blur-2xl" />

            <div className="relative">
              <span className="text-5xl font-bold text-green-400/30">
                “
              </span>

              <h3 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
                Turning ideas into
                <span className="text-green-400"> digital experiences.</span>
              </h3>

              <p className="text-sm leading-7 text-gray-300 sm:text-base">
                I'm a self-taught{' '}
                <span className="font-semibold text-green-400">
                  Frontend Developer
                </span>{' '}
                passionate about building clean, responsive, and interactive
                websites. I work with{' '}
                <span className="font-semibold text-green-400">React</span> and{' '}
                <span className="font-semibold text-green-400">
                  Tailwind CSS
                </span>{' '}
                to create user-friendly interfaces that work across different
                devices.
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-gray-700 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/10 text-xl text-green-400">
                  ✦
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Always learning
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Learning, creating, and improving every day.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-2xl border border-gray-700 bg-gray-800/40 p-6 sm:p-8 md:col-span-2"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">
                What I work with
              </h3>
              <span className="text-xl text-green-400">↗</span>
            </div>

            <div className="space-y-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex items-center gap-4 rounded-xl border border-gray-700/80 bg-gray-900/70 p-4 transition duration-300 hover:border-green-400/50 hover:bg-gray-800"
                >
                  <span className="text-xs font-bold text-green-400/70">
                    {skill.number}
                  </span>

                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-200 transition group-hover:text-green-400">
                      {skill.name}
                    </h4>
                    <p className="mt-1 text-xs text-gray-400">
                      {skill.detail}
                    </p>
                  </div>

                  <span className="ml-auto text-green-400 opacity-0 transition group-hover:opacity-100">
                    ↗
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom decoration */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-green-400/50" />
          <span className="text-green-400">✦</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-green-400/50" />
        </div>

      </div>
    </motion.section>
  );
}

export default About;
