import React from 'react';
import ProjectCard from './ProjectCard';

import EnviroVista from './assets/EnviroVista.jpg';
import Eureka from './assets/Eureka.jpg';
import GDG from './assets/GDG.jpg';
import HackFest from './assets/HackFest.jpg';
import HackTraid from './assets/HackTraid.jpg';
import ISRO from './assets/ISRO.jpg';
import Projecure from './assets/Projecure.jpg';
import Aviskara from './assets/Aviskara.jpg';
import SIH from './assets/SIH.jpg';
import E_summit from './assets/E-summit.jpg';
import ISROc from './assets/ISROc.jpg';
import AviskaraC from './assets/AviskaraC.jpg';
import E_summitC from './assets/E-summitC.jpg';
import GDGC from './assets/GDGC.jpg';
import HackTraidC from './assets/HackTraidC.jpg';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-black text-white">
      <h2 className="text-4xl font-bold text-center underline underline-offset-8 decoration-blue-500 mb-16">
        My Projects & Hackathons
      </h2>

      <div data-aos="fade-up">
        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <ProjectCard
            title="EnviroVista"
            image={EnviroVista}
            description="EnviroVista is an eco-conscious platform where users take part in sustainability tasks to earn credit coins. These coins can then be used in the Green Credit Store to redeem eco-friendly products, making green actions rewarding."
            tech={["HTML-CSS, ", "JAVASCRIPT, ", "DJANGO, ", "PYTHON, ", "UIUX "]}
            live="https://envirovista.onrender.com/"
          />
          <ProjectCard
            title="ProjecCure"
            image={Projecure}
            description="A medical website that uses past data to analyze cancer and predict diseases, helping doctors make better decisions."
            tech={["HTML-CSS, ", "TAILWIND CSS, ", "JAVASCRIPT, ", "TABLEAU"]}
            github="https://kirankottapu.github.io/ProjecCure/"
          />
        </div>

        {/* Hackathons */}
        <div className="grid md:grid-cols-2 gap-10">
          <ProjectCard
            title="ISRO Hackathon"
            image={ISRO}
            description="A visually engaging project that tells the story of an astronaut’s mission from Earth to the Moon."
            tech={["Innovation"]}
            certificate={ISROc}
          />
          <ProjectCard
            title="Aviskara 2K23"
            image={Aviskara}
            description="Built a banking application that allows users to withdraw money, deposit funds, transfer money, and check their account balance."
            tech={["HTML-CSS, ", "DJANGO, ", "PYTHON"]}
            certificate={AviskaraC}
          />
          <ProjectCard
            title="HackTraid Season 1"
            image={HackTraid}
            description="Created ProjeCure, an app that predicts diseases using previous data to support early diagnosis."
            tech={["HTML-CSS, ", "TAILWIND CSS, ", "JAVASCRIPT, ", "TABLEAU"]}
            certificate={HackTraidC}
          />
          <ProjectCard
            title="HackFest 2K24"
            image={HackFest}
            description="Developed EnviroVista, a gamified platform where users earn credit coins by completing environmental tasks."
            tech={["HTML-CSS, ", "JAVASCRIPT, ", "DJANGO, ", "PYTHON, ", "UIUX "]}
            certificate="/certificates/hackfest.pdf"
          />
          <ProjectCard
            title="SIH 2024"
            image={SIH}
            description="We developed and showcased the EnviroVista project through a dedicated website, and also built another project that highlights the collaboration between college alumni and students in bringing innovative ideas to life."
            tech={["HTML-CSS, ", "JAVASCRIPT, ", "DJANGO, ", "PYTHON, ", "UIUX "]}
            certificate="/certificates/sih.pdf"
          />
          <ProjectCard
            title="GDG Vizag"
            image={GDG}
            description="Attended workshops on web development to enhance my skills and improve myself."
            certificate={GDGC}
          />
          <ProjectCard
            title="Eureka"
            image={Eureka}
            description="Collaborated with a team to develop a chatbot for interactive communication."
            tech={["AI, ", "HTML-CSS, ", "JAVASCRIPT"]}
          />
          <ProjectCard
            title="E-summit"
            image={E_summit}
            description="Attended an E-Summit to explore innovative startup ideas and watch entrepreneurs present their ventures."
            certificate={E_summitC}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
