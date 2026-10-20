
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus('⚠️ Please fill in all fields before sending.');
      return;
    }

    setSending(true);
    setStatus('');

    emailjs
      .send(
        'service_03t9uur',
        'template_dun8ua4',
        formData,
        '30cy7zYejeV5WxG0L'
      )
      .then(() => {
        setStatus('✅ Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch(() => {
        setStatus('❌ Failed to send message. Please try again.');
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full bg-gray-900 px-5 py-24 sm:px-8 sm:py-28"
      tabIndex={-1}
      aria-label="Contact section"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-green-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-green-400">
              Get in touch
            </span>
            <span className="h-px w-10 bg-green-400" />
          </div>

          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Let's <span className="text-green-400">Connect</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Have a project idea, a question, or just want to say hello?
            Send me a message and let's talk.
          </p>
        </div>

        {/* Contact layout */}
        <div className="grid overflow-hidden rounded-3xl border border-gray-700 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl md:grid-cols-5">

          {/* Left information panel */}
          <div className="relative overflow-hidden p-7 sm:p-10 md:col-span-2">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-green-400/10 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-xl border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-400">
                Contact Me ✦
              </span>

              <h3 className="mt-7 text-3xl font-bold leading-tight text-white">
                Let's build something
                <span className="block text-green-400">great together.</span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-gray-400">
                I'm always interested in learning, building creative websites,
                and connecting with people who share similar ideas.
              </p>

              <div className="mt-9 space-y-5">
                <div className="flex items-center gap-4 rounded-xl border border-gray-700 bg-gray-900/60 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-400/10 text-xl text-green-400">
                    @
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Get in touch</p>
                    <p className="mt-1 font-medium text-gray-200">
                      Send me an email
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-gray-700 bg-gray-900/60 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-400/10 text-xl text-green-400">
                    {'</>'}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">My focus</p>
                    <p className="mt-1 font-medium text-gray-200">
                      Web Development
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="text-sm text-gray-400">
                  Open to learning and new ideas
                </span>
              </div>
            </div>
          </div>

          {/* Right form panel */}
          <div className="border-t border-gray-700 p-7 sm:p-10 md:col-span-3 md:border-l md:border-t-0">
            <h3 className="text-2xl font-bold text-white">
              Send a Message<span className="text-green-400">.</span>
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Fill in the details below to contact me.
            </p>

            <form onSubmit={sendEmail} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-700 bg-gray-900/80 px-4 py-3.5 text-white placeholder-gray-500 outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-400/10"
                  required
                  autoComplete="name"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-700 bg-gray-900/80 px-4 py-3.5 text-white placeholder-gray-500 outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-400/10"
                  required
                  autoComplete="email"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your ideas..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full resize-y rounded-xl border border-gray-700 bg-gray-900/80 px-4 py-3.5 text-white placeholder-gray-500 outline-none transition focus:border-green-400 focus:ring-2 focus:ring-green-400/10"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-green-500 px-6 py-4 font-bold text-gray-950 shadow-lg shadow-green-500/10 transition duration-300 hover:-translate-y-0.5 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? 'Sending...' : 'Send Message'}
                {!sending && <span>↗</span>}
              </button>

              {status && (
                <p
                  className={`rounded-lg border p-3 text-center text-sm ${
                    status.startsWith('✅')
                      ? 'border-green-400/20 bg-green-400/10 text-green-400'
                      : 'border-red-400/20 bg-red-400/10 text-red-400'
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Footer decoration */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-green-400/50" />
          <span className="text-green-400">✦</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-green-400/50" />
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
