"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import NavLink from "./NavLink"
import { InstaIcon, LinkIcon, GitIcon } from "./Icons"
import MenuOverlay from "./MenuOverlay";
import RiveComponent from '@rive-app/react-canvas';
import Logo from "./Logo"
import { usePathname, useRouter } from 'next/navigation'
import { motion } from "framer-motion"
import HireMe from "./HireMe"
import { fadeIn } from '../variants'
import { Link as L } from "react-scroll"



export const CustomLink = ({ href, title, className = "", style }) => {

  const pathname = usePathname()
  console.log(pathname)


  return (
    <L
      to={href}
      spy={true}
      smooth={true}
      offset={-30}
      duration={500}
      className={`${className} relative group`} style={style}>
      {title}
      <span className={`h-[2px] inline-block bg-gray-400
absolute left-0 -bottom-0.5
group-hover:w-full transition-[width] ease duration-300 ${pathname === href ? 'w-full' : 'w-0'}`} >&nbsp;</span>
    </L>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter()
  const pathname = usePathname()
  const handleClick = () => {
    toggle();
    router.push(href)
  }
  console.log(pathname)
  return (
    <button href={href} className={`${className} relative group my-2`} onClick={handleClick}>
      {title}
      <span className={`h-[2px] inline-block bg-gray-400
absolute left-0 -bottom-0.5
group-hover:w-full transition-[width] ease duration-300 ${pathname === href ? 'w-full' : 'w-0'}`} >&nbsp;</span>
    </button>
  );
};


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [lg, setLg] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setLg(window.innerWidth < 1024);
    if (isOpen && window.innerWidth >= 1024) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially to set the initial state
    handleResize();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (

    <div className='w-full sm:px-20 px-40 py-8 font-medium flex items-center xs:items-stre'>


      {lg ?
        <div className='w-48 h-48 absolute right-10 xs:mt-8 xs:right-6 mt-16 sm:mt-10 sm:right-0'>
          <HireMe />
        </div> : null}


      <button className='mt-8 flex-col justify-center items hidden lg:flex' onClick={handleClick}>
        <span className={`bg-gray-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-gray-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-gray-400 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>




      <motion.div
        variants={fadeIn('up', 0.4)} initial="hidden"
        whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
        className='w-full flex justify-between items-center lg:hidden mr-14'>

        <nav>

          <CustomLink href="/" title="Início" className='mr-4 text-white' style={{ fontSize: 20, fontWeight: 'semibold' }} />
          <CustomLink href="about" title="Sobre" className='mx-4 text-white' style={{ fontSize: 20, fontWeight: 'semibold' }} />
          <CustomLink href="projects" title="Projetos" className='mx-4 text-white' style={{ fontSize: 20, fontWeight: 'semibold' }} />
          {/* <CustomLink href="/about" title="Sobre" className='mx-4' style={{fontSize:20, fontWeight: 'semibold'}}/>
              <CustomLink href="/projetos" title="Projetos" className='mx-4' style={{fontSize:20, fontWeight: 'semibold'}}/> */}
        </nav>
        <nav className='flex items-center space-x-4'>
          <motion.a href="https://www.instagram.com/ricardo_is.ferreira" target='_blank'
            //whileHover={{y:-2}}
            whileTap={{ scale: 0.9 }}
            animate={{
              y: [0, -5, 0], // Bounce effect
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 4, // 3 seconds period
                ease: 'easeInOut',
              },
            }}
          >
            <InstaIcon className='w-6 h-6 text-gray-700' />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/ricardo-ferreira-541830189/" target='_blank'
            //whileHover={{y:-2}}
            whileTap={{ scale: 0.9 }}
            animate={{
              y: [0, -5, 0], // Bounce effect
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 4.1, // 3 seconds period
                ease: 'easeInOut',
              },
            }}
          >
            <LinkIcon className='w-6 h-6 text-gray-700' />
          </motion.a>
          <motion.a href="https://www.github.com/whybigsz" target='_blank'
            //whileHover={{y:-2}}
            whileTap={{ scale: 0.9 }}
            animate={{
              y: [0, -5, 0], // Bounce effect
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 4.2, // 3 seconds period
                ease: 'easeInOut',
              },
            }}
          >
            <GitIcon className='w-6 h-6 ' />
          </motion.a>
        </nav>
      </motion.div>

      {
        isOpen ?

          <div className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed
        top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-slate-900/50 rounded-lg backdrop-blur-md py-32 '>
            <nav className='flex items-center flex-col justify-center '>
              <CustomMobileLink href="/" title="Início" className='' toggle={handleClick} />
              <CustomMobileLink href="/sobre" title="Sobre" className='' />
              <CustomMobileLink href="/projetos" title="Projetos" className='' />
            </nav>
            <nav className='flex items-center space-x-4'>
              <Link href="/" target='_blank'>
                <InstaIcon className='w-6 h-6 text-gray-700' />
              </Link>
              <Link href="/" target='_blank'>
                <LinkIcon className='w-6 h-6   text-gray-700' />
              </Link>
              <Link href="/" target='_blank'>
                <GitIcon className='w-6 h-6 text-gray-700' />
              </Link>
            </nav>
          </div>

          : null
      }

      {/* <div
        className='absolute xs:left-[45%] sm:mt-8 xs:mt-8 left-[50%] top-2 translate-x-[-50%] mt-4' style={{ scale: 1.2, opacity: 0.65 }}>
        <Logo></Logo>
      </div> */}

    </div >
  )
}


export default Navbar