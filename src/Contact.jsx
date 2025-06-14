import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-black text-white text-center">
      <div data-aos="fade-up">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-6">Let’s Connect</h2>
      <p className="text-gray-400 mb-10 max-w-xl mx-auto">
        Reach out to me through your favorite platform!
      </p>

      <div className="flex justify-center items-center gap-8 text-3xl">
        <a
          href="mailto:kirankumar76010@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/kiran-kumar-kottapu-02a053265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Kirankottapu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/kiran_kottapu?igsh=MWo3bWQ1eXFwYWNoYg=="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors"
        >
          <FaInstagram />
        </a>
      </div>
      </div>
    </section>
  );
};

export default Contact;
