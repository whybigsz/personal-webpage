"use client";
import React, {useState,useEffect} from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { LinkArrow } from "./Icons"
import Herobot from "./Herobot"
import ServerDeploy from "./ServerDeploy"
import HireMe from "./HireMe"
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import ParticleContainer from "./ParticlesContainer"
import Typewriter from 'typewriter-effect'


const HeroSection = () => {

    const [marginTop, setMarginTop] = useState(0);
    const [lg, setLg] = useState(false);


    useEffect(() => {
        const handleResize = () => {
          const screenSize = screen.width;

          if (screen.width <1024 || window.innerWidth < 1024) {
            setLg(false);
            //console.log("entrei janela")
            setMarginTop(0);
          } else {
            setMarginTop(4);
            //console.log("Default case");
            setLg(true);
          }

        //console.log("screenwidth2 "+screenSize)
        };

        // Initial resize
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
  <div className="grid grid-cols-3 relative custom-grid xs:flex xs:flex-col sm:flex sm:flex-col sm:justify-center sm:items-center">
  <motion.div
  variants={fadeIn('down',0.4)} initial="hidden"
  whileInView={'show'} viewport={{once:false, amount:0.7}}
  className="xs:hidden ml-32 lg:ml-0 xs:ml-0 md:ml-4 sm:ml-10 lg:mt-8 xl:mt-10 justify-center text-center sm:text-left">

    <ParticleContainer ></ParticleContainer>
    <Herobot></Herobot>

  </motion.div >
  <div className={` lg:ml-30 xs:ml-0 md:ml-20 sm:ml-10 place-self-start mt-${marginTop} text-left relative`}>

    <motion.h1 variants={fadeIn('up',0.4)} initial="hidden"
    whileInView={'show'} viewport={{once:false, amount:0.7}}
    className='text-white xs:text-center mt-20 text-5xl md:text-4xl lg:text-2xl font-extrabold'>
      Hey, sou
      <br />
      O <span className="text-blue">Ricardo</span> e crio
      <br />

      <Typewriter
                options={{
                  strings: [
                    'Páginas Web',
                    'Aplicações Móveis',
                    'Design Gráfico',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                  cursor: '|',
                  delay: 100,
                }}
                />
    </motion.h1>
    <motion.p
    variants={fadeIn('up',0.5)} initial="hidden"
    whileInView={'show'} viewport={{once:false, amount:0.7}}
    className='text-[#ADB7BE] text-base mt-4 '>
      Do Pensamento à Execução: Inovação Full-Stack em Ação. Explora os meus projetos mais recentes em desenvolvimento web e mobile.
    </motion.p>
    <motion.div
    variants={fadeIn('up',0.6)} initial="hidden"
    whileInView={'show'} viewport={{once:false, amount:0.7}}
    className='place-self-start mt-12 text-left'>
      <div className="flex items-start">
        <Link href="/dummy.pdf" target="_blank" className='hover:scale-125 text-blue border-blue-400 flex w-[165px] items-center px-6 py-3 rounded-lg mb-2 bg-black-700 hover:bg-slate-200 border-solid border-2 text-white font-semibold'>
          Curriculum <LinkArrow className="w-6"/>
        </Link>
        <Link href="mailto:ricardo.ferreira.2222@gmail.com" target='_blank' className=' hover:scale-125 ml-8 mt-3 text-lg font-medium capitalize text-white underline'>
          Contactar
        </Link>
      </div>
    </motion.div>
  </div>
  {/* <HireMe></HireMe> */}
  {lg  ?
  <motion.div variants={fadeIn('left',0.6)} initial="hidden"
  whileInView={'show'} viewport={{once:false, amount:0.7}}>
    <HireMe />
  </motion.div>
   : null }

</div>



    );
}

export default HeroSection