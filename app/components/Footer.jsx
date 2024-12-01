import React from 'react'
import Link from 'next/link'
import { Link as L } from "react-scroll"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const Footer = () => {
  return (
    <footer className="py-8 md:mb-20">
      <div className="container mx-auto px-4">
        {/* Desktop layout (md and above) */}
        <div className="flex flex-col md:hidden">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-6">
              <h2 className="text-2xl text-white font-bold font-title">Ricardo Ferreira</h2>
              <nav>
                <ul className="flex space-x-4 text-white">
                  <li>
                    <L
                      to={"home"}
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="hover:underline cursor-pointer">
                      Início
                    </L>
                  </li>
                  <li>
                    <L
                      to={"projects"}
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="hover:underline cursor-pointer">
                      Projetos
                    </L>
                  </li>
                  <li>
                    <L
                      to={"services"}
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="hover:underline cursor-pointer">
                      Serviços
                    </L>
                  </li>
                </ul>
              </nav>
            </div>
            <TooltipProvider>
              <div className="flex space-x-4">
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <Link href="/" target='_blank'>
                      <i title='Linkedin' className="ri-linkedin-box-line p-2 bg-rose-600 text-white hover:bg-black/50 rounded-full text-2xl"></i>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="center" className="bg-gray-800 text-white px-2 py-1 text-sm">
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <Link href="/" target='_blank'>
                      <i title='Github' className="ri-github-line p-2 bg-rose-600 text-white hover:bg-black/50 rounded-full text-2xl"></i>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="center" className="bg-gray-800 text-white px-2 py-1 text-sm">
                    <p>Github</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <Link href="/" target='_blank'>
                      <i title='Instagram' className="ri-instagram-line p-2 bg-rose-600 text-white hover:bg-black/50 rounded-full text-2xl"></i>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top" align="center" className="bg-gray-800 text-white px-2 py-1 text-sm">
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
          <div className="text-center text-md mt-10 mb-4 text-gray-400 font-title">
            &copy; {new Date().getFullYear()} Ricardo Ferreira. Direitos Reservados.
          </div>
        </div>

        {/* Mobile layout (below md) */}
        <div className="hidden md:flex md:flex-col items-center space-y-8">
          <h2 className="text-2xl font-bold font-title text-white">Ricardo Ferreira</h2>
          <nav>
            <ul className="flex space-x-4 text-white">
              <li>
                <L
                  to={"home"}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:underline cursor-pointer">
                  Início
                </L>
              </li>
              <li>
                <L
                  to={"projects"}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:underline cursor-pointer">
                  Projetos
                </L>
              </li>
              <li>
                <L
                  to={"services"}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:underline cursor-pointer">
                  Serviços
                </L>
              </li>
            </ul>
          </nav>
          <TooltipProvider>
            <div className="flex space-x-4">
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <Link href="/" target='_blank'>
                    <i title='Linkedin' className="ri-linkedin-box-line p-2 bg-rose-600 text-white hover:bg-black/50 rounded-full text-2xl"></i>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top" align="center" className="bg-gray-800 text-white px-2 py-1 text-sm">
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <Link href="/" target='_blank'>
                    <i title='Github' className="ri-github-line p-2 bg-rose-600 text-white hover:bg-black/50 rounded-full text-2xl"></i>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top" align="center" className="bg-gray-800 text-white px-2 py-1 text-sm">
                  <p>Github</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                  <Link href="/" target='_blank'>
                    <i title='Instagram' className="ri-instagram-line p-2 bg-rose-600 text-white hover:bg-black/50 rounded-full text-2xl"></i>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top" align="center" className="bg-gray-800 text-white px-2 py-1 text-sm">
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>

          <div className="text-center text-md my-4 text-gray-400 font-title">
            &copy; {new Date().getFullYear()} Ricardo Ferreira. Direitos Reservados.
          </div>
        </div>
      </div>
    </footer >
  );
}

export default Footer