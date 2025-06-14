import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ztcay1n',       
      'template_gwipmvp',       
      form.current,
      'COSgRo24z3sQTGxW5'        
    )
    .then(() => {
      alert("Message sent successfully!");
      form.current.reset();
    })
    .catch((error) => {
      alert("Failed to send message: " + error.text);
    });
  };

  return (
    <section id="contact" className="bg-gray-950 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center underline underline-offset-8 decoration-blue-500 mb-12">
        Contact Me
      </h2>

      <div className="max-w-3xl mx-auto bg-gray-900 p-8 rounded-xl shadow-lg">
        <form ref={form} onSubmit={sendEmail} className="grid gap-6">
          <input type="text" name="from_name" placeholder="Your Name" required
            className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />

          <input type="email" name="from_email" placeholder="Your Email" required
            className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />

          <textarea name="message" rows="5" placeholder="Your Message" required
            className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>

          <button type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md transition duration-300">
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center space-y-4">
          <p>Email: <a href="mailto:kiran@example.com" className="text-blue-400 hover:underline">kiran@example.com</a></p>
          <div className="flex justify-center gap-6 text-2xl mt-2">
            <a href="https://linkedin.com/in/kiran-kottapu" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-blue-400 transition" />
            </a>
            <a href="https://github.com/kiran-kottapu" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-gray-300 transition" />
            </a>
            <a href="mailto:kiran@example.com">
              <FaEnvelope className="hover:text-red-400 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
