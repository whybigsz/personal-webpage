'use client'
import Image from 'next/image'
import HeroSection from './components/HeroSection';
import Navbar from "./components/Navbar";
import ServerDeploy from "./components/ServerDeploy"
import About from "./components/About"
import Projects from "./components/projects"
import Footer from "./components/Footer"
import HireMe from "./components/HireMe"
import Nav from "./components/Nav"
import ContactForm from "./components/ContactForm"
import ParticleContainer from "./components/ParticlesContainer"
export default function Home() {


  return (
    <div id='/' className="relative flex flex-col min-h-screen bg-slate-200">
      <Navbar />
      <Nav></Nav>

      <div className="container mx-auto left-0 px-4 flex flex-col">
        <HeroSection />
        <About></About>
        <Projects></Projects>
        {/* <div className="absolute bottom-20 right-0">
          <ServerDeploy />
        </div> */}
        <ContactForm></ContactForm>
      </div>

      <div className="md:hidden">
        <Footer />
      </div>
    </div>
  );
}
