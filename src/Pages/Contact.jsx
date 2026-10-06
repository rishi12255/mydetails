
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

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus('⚠️ Please fill in all fields before sending.');
      return;
    }

    emailjs
      .send(
        'service_03t9uur',
        'template_dun8ua4',
        formData,
        '30cy7zYejeV5WxG0L'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);

          setStatus('✅ Message sent successfully!');

          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (err) => {
          console.error('FAILED...', err);
          setStatus('❌ Failed to send message. Please try again.');
        }
      );
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="max-w-lg mx-auto mt-28 mb-28 p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-gray-700"
      tabIndex={-1}
      aria-label="Contact form"
    >
      <h2 className="text-3xl font-extrabold mb-8 text-center text-green-400 tracking-wide">
        Send Me a Message
      </h2>

      <form
        onSubmit={sendEmail}
        className="flex flex-col space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-4 rounded-xl bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-400 focus:border-green-500 transition duration-300 shadow-inner"
          required
          aria-required="true"
          aria-label="Your name"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="p-4 rounded-xl bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-400 focus:border-green-500 transition duration-300 shadow-inner"
          required
          aria-required="true"
          aria-label="Your email"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="6"
          className="p-4 rounded-xl bg-gray-800 border border-gray-600 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-4 focus:ring-green-400 focus:border-green-500 transition duration-300 shadow-inner"
          required
          aria-required="true"
          aria-label="Your message"
        />

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold text-lg rounded-xl py-4 shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50"
        >
          Send Message
        </button>

        {status && (
          <p
            className={`text-center mt-3 font-medium ${
              status.startsWith('✅')
                ? 'text-green-400'
                : 'text-red-500'
            }`}
            role="alert"
          >
            {status}
          </p>
        )}
      </form>
    </motion.section>
  );
}

export default Contact;

