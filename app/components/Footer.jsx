import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        {/* Desktop layout (md and above) */}
        <div className="flex flex-col md:hidden">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-6">
              <h2 className="text-2xl text-white font-bold font-title">Ricardo Ferreira</h2>
              <nav>
                <ul className="flex space-x-4 text-white">
                  <li><Link href="#home" className="hover:underline">Home</Link></li>
                  <li><Link href="#about" className="hover:underline">About</Link></li>
                  <li><Link href="#contact" className="hover:underline">Contact</Link></li>
                </ul>
              </nav>
            </div>
            <div className="flex space-x-4 ">
              <Link href="/" target='_blank'>
                <i title='Linkedin' className="ri-linkedin-box-line p-2 bg-rose-600 text-white hover:bg-black/50 rounded-full text-2xl"></i>
              </Link>
              <Link href="/" target='_blank'>
                <i title='Github' className="ri-github-line p-2 bg-rose-600 text-white hover:bg-black/50 rounded-full text-2xl"></i>
              </Link>
              <Link href="/" target='_blank'>
                <i title='Instagram' className="ri-instagram-line p-2 bg-rose-600 text-white hover:bg-black/50  rounded-full text-2xl"></i>
              </Link>
            </div>
          </div>
          <div className="text-center text-md mt-10 mb-4 text-gray-400 font-title">
            &copy; {new Date().getFullYear()} Ricardo Ferreira. Direitos Reservados.
          </div>
        </div>

        {/* Mobile layout (below md) */}
        <div className="hidden md:flex md:flex-col items-center space-y-8">
          <h2 className="text-2xl font-bold font-title text-white">Ricardo Ferreira</h2>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="#home" className="text-white hover:underline">
                  <span className="">Home</span>
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white hover:underline">
                  <span className="">About</span>
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white hover:underline">
                  <span className="">Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <Link href="/" target='_blank'>
              <i title='Linkedin' className="ri-linkedin-box-line p-2 bg-rose-600 text-white hover:bg-black/50 rounded-full text-2xl"></i>
            </Link>
            <Link href="/" target='_blank'>
              <i title='Github' className="ri-github-line p-2 bg-rose-600 text-white hover:bg-black/50 rounded-full text-2xl"></i>
            </Link>
            <Link href="/" target='_blank'>
              <i title='Instagram' className="ri-instagram-line p-2 bg-rose-600 text-white hover:bg-black/50  rounded-full text-2xl"></i>
            </Link>
          </div>

          <div className="text-center text-md my-4 text-gray-400 font-title">
            &copy; {new Date().getFullYear()} Ricardo Ferreira. Direitos Reservados.
          </div>
        </div>
      </div>
    </footer >
  );
}

export default Footer