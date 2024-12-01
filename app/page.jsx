'use client'

import HeroSection from './components/HeroSection';
import Navbar from "./components/Navbar";
import About from "./components/About"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import SideBar from "./components/SideBar"
import ContactForm from "./components/ContactForm"
import Services from './components/Services';
import Experience from './components/Experience';

export default function Home() {


  return (
    <div id='home' className="relative flex flex-col min-h-screen bg-black/90 font-body">
      {/* <SideBar />
      <Navbar /> */}
      <Nav></Nav>

      <div className="container mx-auto mt-20 left-0 px-4 flex flex-col">
        <HeroSection />
        <Projects />
        <Services />
        <Experience />
        {/* <About></About> */}
        {/* <Projects></Projects> */}
        <ContactForm></ContactForm>
      </div>

      <Footer />
    </div>
  );
}
