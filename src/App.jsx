import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import AboutMe from './AboutMe.jsx';
import Skills from './Skills.jsx';
import ProjectsSection from './ProjectsSection.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <ProjectsSection />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
