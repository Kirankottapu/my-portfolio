import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaCode,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiVite,
  SiC,
  SiPython,
} from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-400" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white" /> },
  { name: 'VS Code', icon: <FaCode className="text-green-400" /> },
  { name: 'C', icon: <SiC className="text-blue-300" /> },
  { name: 'Python', icon: <SiPython className="text-yellow-300" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-black text-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-8">Skills</h2>
      <div data-aos="fade-up">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 bg-[#1f1f1f] rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="text-sm font-semibold text-gray-300">{skill.name}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Skills;
