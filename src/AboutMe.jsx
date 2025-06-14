import React from 'react';

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen py-16 bg-black text-white flex items-center"
    >
      <div className="max-w-5xl mx-auto px-6 bg-black/70 rounded-xl p-10 space-y-6">
        <h2 className="text-4xl font-bold border-b-4 border-blue-500 inline-block mb-4">
          About Me
        </h2>
        <div data-aos="fade-up">
        <p className="text-lg leading-relaxed text-gray-300">
          Hello! I'm <span className="font-semibold text-blue-400">Kiran Kumar Kottapu</span>, a
          passionate <span className="font-semibold">Frontend Developer</span> skilled in
          <span className="text-blue-400"> HTML</span>,
          <span className="text-blue-400"> CSS</span>,
          <span className="text-blue-400"> Tailwind CSS</span>,
          <span className="text-blue-400"> JavaScript</span>, and
          <span className="text-blue-400"> React</span>.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          I focus on building responsive and user-friendly interfaces that create impactful digital experiences.
          My projects emphasize clean design and performance.
        </p>

        <div className="text-left max-w-3xl mx-auto">
          <p className="text-lg font-medium text-white">Key Contributions:</p>
          <ul className="list-disc pl-6 text-lg mt-2 space-y-2 text-gray-300">
            <li>
              Built <span className="italic text-white">EnviroVista</span> and <span className="italic text-white">ProjecCure</span> — ProjecCure secured <span className="font-semibold text-blue-400">4th place</span> in a national-level hackathon.
            </li>
            <li>
              Developed <span className="italic text-white">EnviroVista</span>, which reached the <span className="font-semibold text-blue-400">finals</span> after 2-3 competitive rounds, all within a span of 4 months.
            </li>
            <li>
              Collaborated with cross-functional teams to integrate data-driven features and responsive UI/UX.
            </li>
            <li>
              Specialize in clean, scalable frontend development using React and Tailwind CSS.
            </li>
            <li>
              Active participant in multiple <span className="font-semibold text-blue-400">hackathons</span>, constantly challenging myself through real-world problem-solving and innovation.
            </li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed text-gray-300">
          I'm currently pursuing my B.Tech in Computer Science with Data Science at
          <span className="font-semibold text-blue-400"> Raghu Institute of Technology</span>. I’m
          continuously learning to grow as a developer through practical experience and creative projects.
        </p>
      </div>
      </div>
    </section>
  );
};

export default AboutMe;
