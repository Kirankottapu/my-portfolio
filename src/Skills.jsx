import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaCode,
} from 'react-icons/fa';
import { SiTailwindcss, SiGithub } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, level: 85 },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, level: 85 },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400" />, level: 70 },
  { name: 'React', icon: <FaReact className="text-cyan-400" />, level: 70 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" />, level: 80 },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" />, level: 70 },
  { name: 'Code Editor', icon: <FaCode className="text-green-400" />, level: 70 },
  { name: 'GitHub', icon: <SiGithub className="text-white" />, level: 70 },
  { name: 'VS Code', icon: <FaCode className="text-[#007ACC]" />, level: 90 },

];

const Skills = () => {
  return (
    <section id="skills" className="w-full min-h-screen py-16 bg-black text-white flex items-center">
      <div className="max-w-9xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center border-b-4 border-blue-500 inline-block mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
              >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{skill.icon}</div>
                <p className="text-xl font-semibold text-gray-200">{skill.name}</p>
              </div>
              <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-blue-500 h-4 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-right text-sm text-gray-400 mt-1">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
