import React from 'react'
import ThemeToggle from '../components/ThemeToggle';
import StarBackground from '../components/StarBackground';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';



const Home = () => {
  return (
    <div id="#hero" className="min-h-screen bg-background text-foreground overflow-x-hidden ">
      {/* Theme toggle */}
       <ThemeToggle />
      {/* star background */}
      <StarBackground />
      {/* navbar */}
      <Navbar />
      {/* main content */}
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      {/* footer */}
      <Footer />
    </div>
  )
}

export default Home
