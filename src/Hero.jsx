import React from 'react';
import ProfilePic from './assets/kirank.jpg';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen pt-20 overflow-hidden flex items-center justify-center md:justify-end text-white relative"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-top"
        style={{ backgroundImage: `url(${ProfilePic})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div data-aos="fade-up">
        <div className="relative z-10 max-w-xl sm:max-w-2xl mx-auto md:mx-0 px-4 sm:px-6 md:px-8 lg:px-16 text-center md:text-right">
          <h1 className="text-4xl sm:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg">
            Hi, I&apos;m Kiran Kumar Kottapu
          </h1>

          <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed drop-shadow-md">
            <Typewriter
              words={[
                'Frontend Developer',
                'Web Developer',
                'Software Engineer',
                'Data Science',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center gap-4">
            <a
              href="#projects"
              className="bg-blue-500 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transform transition duration-300"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="bg-black text-blue-500 font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transform transition duration-300 ml-4 border border-white"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
