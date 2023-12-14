'use client'

import HeroSection from './components/HeroSection';
import Navbar from "./components/Navbar";
import About from "./components/About"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import ContactForm from "./components/ContactForm"

export default function Home() {


  return (
    <div id='/' className="relative flex flex-col min-h-screen bg-black/80">
      <Navbar />
      <Nav></Nav>

      <div className="container mx-auto left-0 px-4 flex flex-col">
        <HeroSection />
        <About></About>
        <Projects></Projects>
        <ContactForm></ContactForm>
      </div>

      <div className="md:hidden">
        <Footer />
      </div>
    </div>
  );
}
