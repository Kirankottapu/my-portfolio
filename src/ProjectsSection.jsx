import React from 'react';
import ProjectCard from './ProjectCard';
import ProfilePic from './assets/EnviroVista.jpg';
import ProfilePic from './assets/kirank.jpg';
import ProfilePic from './assets/kirank.jpg';
import ProfilePic from './assets/kirank.jpg';
import ProfilePic from './assets/kirank.jpg';
import ProfilePic from './assets/kirank.jpg';
import ProfilePic from './assets/kirank.jpg';


const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold text-center underline underline-offset-8 decoration-blue-500 mb-16">
        My Projects & Achievements
      </h2>

      {/*Projects */}
      <h3 className="text-2xl font-semibold text-blue-400 mb-4">Projects</h3>
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        <ProjectCard
          title="EnviroVista"
          image={ProfilePic}
          description="Eco-aware platform with green credit store, analytics, and sustainability modules."
          tech={["React", "Tailwind", "Firebase"]}
          github="https://github.com/your-username/envirovista"
          live="https://envirovista.vercel.app"
        />

        <ProjectCard
          title="ProjecCure"
          image="/images/projecure.png"
          description="Medical insight app with cancer analytics and data-driven disease predictions."
          tech={["React", "Tailwind", "Tableau"]}
          github="https://github.com/your-username/projecure"
          live="https://projecure.vercel.app"
        />
      </div>

      {/* Hackathons */}
      <h3 className="text-2xl font-semibold text-pink-400 mb-4">Hackathons</h3>
      <div className="grid md:grid-cols-2 gap-10">
        <ProjectCard
          title="ISRO Hackathon"
          image="/images/isro-hackathon.png"
          description="Developed a space-data based solution for sustainable living. Finalist."
          tech={["Space", "ISRO", "Innovation"]}
          github="#"
          live="#"
        />

        <ProjectCard
          title="Aviskara 2K23"
          image="/images/aviskara.png"
          description="Presented an AI-based medical system in front of 500+ attendees."
          tech={["AI", "Innovation", "Medical"]}
          github="#"
          live="#"
        />

        <ProjectCard
          title="HackTraiD Season 1"
          image="/images/hacktraid.png"
          description="Built a full-stack solution to bridge the rural education gap."
          tech={["MERN", "Hackathon", "Rural Impact"]}
          github="#"
          live="#"
        />

        <ProjectCard
          title="HackFest 2K24"
          image="/images/hackfest.png"
          description="Proposed a model to reduce carbon footprint using IoT + ML."
          tech={["IoT", "ML", "Hackfest"]}
          github="#"
          live="#"
        />

        <ProjectCard
          title="GDG Hackathon"
          image="/images/gdg.png"
          description="Teamed up to build a social health-tracking app in 24 hours."
          tech={["Flutter", "Firebase", "Hackathon"]}
          github="#"
          live="#"
        />
      </div>

      {/*Certifications */}
      <h3 className="text-2xl font-semibold text-green-400 mb-4">Certifications</h3>
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        <ProjectCard
          title="NPTEL C Programming"
          image="/images/nptel-c-cert.png"
          description="Completed with distinction from NPTEL, gaining strong foundation in C programming."
          tech={["C", "NPTEL", "Fundamentals"]}
          github="#"
          live="#"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;