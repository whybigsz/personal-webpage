"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { fadeIn } from '../variants'
import { motion } from 'framer-motion'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import { InstaIcon, LinkIcon, GitIcon } from "./Icons"
import 'remixicon/fonts/remixicon.css';



const HeroSection = () => {

  const [marginTop, setMarginTop] = useState(0);
  const [lg, setLg] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      const screenSize = screen.width;

      if (screen.width < 1024 || window.innerWidth < 1024) {
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
    <div className="grid grid-cols-4 gap-8 relative xs:flex xs:flex-col sm:flex sm:flex-col sm:justify-center sm:items-center">

      <div className='col-span-1 flex flex-col gap-4 h-[80vh]'>
        {/* First Card */}
        <div className="flex items-center justify-center flex-grow">
          <Card className="w-full max-w-sm mx-auto bg-zinc-800 border-0 rounded-[24px] h-full ">
            <CardHeader className="flex items-center justify-center">
              <CardTitle className='text-white flex items-center'>
                <div className='w-[26px] h-[26px] mr-2 rounded-full bg-red-600' />
                Ricardo Ferreira
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="relative w-64 h-64 bg-gradient-to-br from-rose-600 to-transparent overflow-hidden rounded-[16px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/avatar.png"
                    alt="Profile picture"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
              <CardDescription className="w-[85%] text-center text-white">
                Full-stack developer apaixonado por criar aplicações web interativas e dinâmicas.
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="w-[85%] max-w-xs hover:scale-105 hover:bg-rose-500 bg-transparent border-rose-500 flex items-center p-6 my-2 rounded-2xl  border-solid border-2 text-xl text-white font-semibold">
                Download CV
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Second Card */}
        <div className="flex items-center justify-center flex-grow">
          <Card className="w-full max-w-sm mx-auto bg-zinc-800 border-0 rounded-[24px] h-full">
            <CardHeader className="flex justify-center">
              <CardTitle className='text-white flex text-left p-4'>
                Habilidades
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              {/* Grid layout for icons */}
              <div className="grid grid-cols-5 gap-4">
                {/* Row 1 */}
                <i className="ri-code-s-slash-line text-2xl text-black p-2 bg-white rounded-full"></i>
                <i className="ri-reactjs-line text-2xl text-black p-2 bg-white rounded-full"></i>
                <i className="ri-javascript-line text-2xl text-black p-2 bg-white rounded-full"></i>
                <i className="ri-nodejs-line text-2xl text-black p-2 bg-white rounded-full"></i>
                <i className="ri-line-chart-line text-2xl text-black p-2 bg-white rounded-full"></i>

                {/* Row 2 */}
                <i className="ri-html5-line text-2xl text-black p-2 bg-white rounded-full"></i>
                <i className="ri-css3-line text-2xl text-black p-2 bg-white rounded-full"></i>
                <i className="ri-java-line text-2xl text-black p-2 bg-white rounded-full"></i>
                <i className="ri-slideshow-line text-2xl text-black p-2 bg-white rounded-full"></i>
                <i className="ri-database-2-line text-2xl text-black p-2 bg-white rounded-full"></i>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>


      {/* 2nd Div (Center, 2/3 width) */}
      <div className="w-full col-span-2">
        <Card className="relative overflow-hidden h-[80vh] border-0 rounded-[24px] bg-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-600 to-transparent"></div>
          <div className="absolute inset-0 top-[-26%]">
            <Image
              src="/images/avatar2.png"
              alt="Background image"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
          <div className="absolute left-4 bottom-4">
            <Card className="bg-white/30 backdrop-blur-md p-6 shadow-lg h-[200px] rounded-[16px] flex flex-col justify-between">
              <h1 className="text-3xl font-bold text-white">Ricardo Ferreira</h1>
              <div className="flex space-x-4">
                <Button className="w-32 bg-rose-500 hover:bg-black/80 flex items-center p-4 rounded-lg text-lg text-white font-semibold">
                  Projetos
                </Button>
                <Button variant="" className="w-32 text-lg">
                  Services
                </Button>
              </div>
            </Card>
          </div>
        </Card>
      </div>

      {/* 3rd Div (Right side, 1/3 width) */}
      <div className='max-w-sm w-full mx-auto col-span-1'>
        <div className='flex items-center justify-center'>
          <Card className="w-full bg-zinc-800 border-0 rounded-[24px] h-[80vh]">
            <CardHeader>
              <CardTitle className='text-white text-2xl text-left'>Ricardo Ferreira - <p className='font-bold'>Web Developer</p></CardTitle>
              <CardDescription className="text-left text-white mt-2">
                Sou Software Developer, formado em Engenharia Informática pelo ISEC, com experiência em desenvolvimento web front-end e back-end.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-6">
              <div className="flex justify-center space-x-4 my-3">
                <Link href="/" target='_blank'>
                  <i className="ri-linkedin-box-line p-2 bg-white rounded-full text-2xl"></i>
                </Link>
                <Link href="/" target='_blank'>
                  <i className="ri-github-line p-2 bg-white rounded-full text-2xl"></i>
                </Link>
                <Link href="/" target='_blank'>
                  <i className="ri-instagram-line p-2 bg-white rounded-full text-2xl"></i>
                </Link>
              </div>
              <div className="relative w-64 h-64 bg-gradient-to-br from-rose-600 to-transparent overflow-hidden rounded-[16px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/avatar.png"
                    alt="Profile picture"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-center mt-4 flex-col gap-6">
              <CardDescription className="text-left text-white mt-4">
                Envie um e-mail para descobrir como posso ajudá-lo a alcançar seus objetivos. Obrigado!
              </CardDescription>
              <Button className="w-full max-w-xs hover:scale-105 hover:bg-black/50  bg-rose-500  flex items-center p-6 my-2 rounded-2xl text-xl text-white font-semibold">
                Contactar
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>

  );
}

export default HeroSection

{/* <div className={` lg:ml-30 xs:ml-0 md:ml-20 sm:ml-10 place-self-start mt-${marginTop} text-left relative`}>

        <motion.h1 variants={fadeIn('up', 0.4)} initial="hidden"
          whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
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
          variants={fadeIn('up', 0.5)} initial="hidden"
          whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
          className='text-[#ADB7BE] text-base mt-4 '>
          Do Pensamento à Execução: Inovação Full-Stack em Ação. Explora os meus projetos mais recentes em desenvolvimento web e mobile.
        </motion.p>
        <motion.div
          variants={fadeIn('up', 0.6)} initial="hidden"
          whileInView={'show'} viewport={{ once: false, amount: 0.7 }}
          className='place-self-start mt-12 text-left'>
          <div className="flex items-start">
            <Link href="/RicardoCV.pdf" target="_blank" title="Ricardo Ferreira" className='hover:scale-125 text-blue border-blue-400 flex w-[165px] items-center px-6 py-3 rounded-lg mb-2 border-solid border-2 text-white font-semibold'>
              Curriculum <LinkArrow className="w-6" />
            </Link>
            <L
              to="contact"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className=' hover:scale-125 ml-8 mt-3 text-lg font-medium capitalize text-white underline'>
              Contactar
            </L>
          </div>
        </motion.div>
      </div> */}
{/* <HireMe></HireMe> */ }
{/* {lg &&
        <motion.div variants={fadeIn('left', 0.6)} initial="hidden"
          whileInView={'show'} viewport={{ once: false, amount: 0.7 }}>
          <HireMe />
        </motion.div>
        } */}