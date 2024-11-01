"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link';
import Image from 'next/image';
import React, { useTransition, useState, useEffect, useRef } from 'react'
import 'remixicon/fonts/remixicon.css';
import Logo from "./Logo"
import { motion } from 'framer-motion'
import { RiBook2Fill, RiBarChartHorizontalLine } from 'react-icons/ri';


const skills = [
  { id: '0', skillName: 'Front-End', amount: "90" },
  { id: '1', skillName: 'Back-End', amount: "85" },
  { id: '2', skillName: 'Design', amount: "80" },
];

const HeroSection = () => {

  const [tab, setTab] = useState("habilidades");
  const [myElementIsVisible, setMyElementIsVisible] = useState(false);
  const [isPending, startTransition] = useTransition();
  const myRef = useRef();
  const eduRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === myRef.current) {
          setMyElementIsVisible(entry.isIntersecting);
        }
      });
    });

    if (myRef.current) observer.observe(myRef.current);

    return () => observer.disconnect();
  }, []);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const TAB_DATA = [
    {
      title: "Habilidades",
      id: "habilidades",
      content: (
        <ul className="relative pl-0  text-3xl ">
          {skills.map((skill) => (
            <li key={skill.skillName} className="overflow-hidden relative flex bg-[#3e4555] mb-4 rounded-lg">
              <motion.div
                ref={myRef}
                className="flex flex-col h-8  bg-gradient-to-br from-rose-500 to-transparet"
                style={{ height: "28px" }}
                animate={myElementIsVisible ? { width: `${100 * (skill.amount / 100)}%` } : {}}
                transition={{ duration: 2 + skill.id / 10, ease: "easeInOut" }}
              />
              <div
                ref={eduRef}
                className="absolute flex justify-center items-center border-2
           border-white/30 bottom-0 top-0 left-0 px-2 w-65 h-30 text-base bg-rose-600 font-semibold text-white"
              >
                {skill.skillName}
              </div>
            </li>
          ))}
        </ul>
      )
    },
    {
      title: "Educação",
      id: "educação",
      content: (
        <ul className='pl-2 text-white'>
          <li className='pb-1'>📌 Escola Secundária da Mealhada</li>
          <li>📌 Instituto Politécnico de Engenharia de Coimbra</li>
        </ul>
      )
    }
  ];

  return (
    <div className="grid grid-cols-4 xl:grid-cols-2 gap-8 relative xs:flex xs:flex-col sm:flex sm:flex-col sm:justify-center sm:items-center">

      {/* 1º div (left side, 1/3 width) */}
      <div className='col-span-1 flex flex-col gap-8 h-[800px] xl:order-2 xl:h-[100%]'>
        <div className="flex items-center justify-center flex-grow ">
          <Card className="w-full max-w-sm mx-auto xl:ml-0 bg-zinc-800 border-0 rounded-[24px] h-full xl:max-w-lg">
            <CardHeader className="flex items-center justify-center">
              <CardTitle className='text-white flex items-center'>
                <div className='w-[26px] h-[26px] mr-2 rounded-full bg-red-600 ' />
                <p className='font-title text-[1.65rem]'>Ricardo Ferreira</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="relative w-[220px] h-[210px] bg-gradient-to-br from-rose-600 to-transparet overflow-hidden rounded-[16px]">
                <div className="absolute inset-0 flex items-center justify-center ">
                  <Image
                    src="/images/logo2.png"
                    alt="Profile picture"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg scale-110 pr-4"
                  />
                </div>
              </div>
              <CardDescription className="w-[100%] text-center text-white font-semibold text-md xl:w-[86%]">
                Apaixonado por criar aplicações web dinâmicas e interativas.
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link title='Download CV' href="/RF_CV.pdf" target="_blank" className="w-[90%] justify-center max-w-xs hover:scale-105 hover:bg-rose-500 bg-transparent border-rose-500 flex items-center p-[0.55rem] my-2 rounded-2xl  border-solid border-2 text-xl text-white font-semibold">
                Download CV
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* Second Card */}
        <div className="flex items-center justify-center flex-grow xl:order-4 ">
          <Card className="w-full max-w-sm mx-auto bg-zinc-800 border-0 rounded-[24px] h-full relative xl:max-w-lg xl:h-[18rem] xl:ml-0">
            {/* Icon Button */}
            <button
              onClick={() => handleTabChange(tab === "habilidades" ? "educação" : "habilidades")}
              className="absolute top-10 right-8 text-rose-500 hover:text-rose-700"
            >
              {tab === "habilidades" ? <RiBook2Fill size={24} /> : <RiBarChartHorizontalLine size={24} />}
            </button>

            <CardHeader className="flex justify-center">
              <CardTitle className='text-white flex text-left p-4'>
                <div className="text-2xl font-semibold">
                  {TAB_DATA.find((t) => t.id === tab)?.title}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col  xl:gap-10">
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </CardContent>
          </Card>
        </div>
      </div>


      {/* 2nd Div (Center, 2/3 width) */}
      <div className="col-span-2 xl:col-span-1 xl:flex xl:justify-end ">
        <div className="w-full xl:order-1 xl:max-w-lg ">
          <Card className="relative overflow-hidden h-[800px] border-0 rounded-[24px] bg-zinc-800 xl:h-[100%]">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-600 to-transparent"></div>
            <div className="absolute inset-0 top-[-26%] ">
              <Image
                src="/images/avatar2.png"
                alt="Background image"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
            <div className="absolute left-4 bottom-4 xl:left-1/2 xl:transform xl:-translate-x-1/2 ">
              <Card className="bg-white/30 backdrop-blur-md p-6 shadow-lg h-[200px] rounded-[16px] flex flex-col justify-between xl:h-[140px]">
                <h1 className="text-3xl font-bold text-white">Ricardo Ferreira</h1>
                <div className="flex space-x-4">
                  <Button title='Projetos' className="w-32 bg-rose-500 hover:bg-black/80 flex items-center p-4 rounded-lg text-lg text-white font-semibold">
                    Projetos
                  </Button>
                  <Button title='Serviços' variant="" className="w-32 text-lg">
                    Serviços
                  </Button>
                </div>
              </Card>
            </div>
          </Card>
        </div>
      </div>

      {/* 3rd Div (Right side, 1/3 width) */}
      <div className='max-w-sm w-full mx-auto col-span-1 xl:order-3  xl:max-w-[66rem] xl:max-h-80 xl:col-span-2'>
        <div className='flex items-center justify-center'>
          <Card className="w-full bg-zinc-800 border-0 rounded-[24px] h-[800px] xl:max-h-80 xl:space-y-2 ">
            <CardHeader className='xl:items-center'>
              <CardTitle className='text-white text-2xl text-left xl:flex '>Ricardo Ferreira - <p className='font-bold'> Web Developer</p></CardTitle>
              <CardDescription className="text-left text-white mt-2 xl:max-w-lg">
                Sou Software Developer, formado em Engenharia Informática pelo ISEC, com experiência em desenvolvimento web front-end e back-end.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-6 mt-2">
              <div className="flex xl:flex-col justify-center xl:items-center mt-6 xl:mt-0 mb-0">
                <div className="flex space-x-4">
                  <Link href="/" target='_blank'>
                    <i title='Linkedin' className="ri-linkedin-box-line p-2 xl:p-1 bg-white rounded-full text-4xl"></i>
                  </Link>
                  <Link href="/" target='_blank'>
                    <i title='Github' className="ri-github-line p-2 xl:p-1 bg-white rounded-full text-4xl"></i>
                  </Link>
                  <Link href="/" target='_blank'>
                    <i title='Instagram' className="ri-instagram-line p-2 xl:p-1  bg-white rounded-full text-4xl"></i>
                  </Link>
                </div>
                <div className='hidden xl:flex flex-col items-center m-0'>
                  <CardDescription className=" text-center text-white my-4">
                    Envie um e-mail para descobrir como posso ajudá-lo a alcançar seus objetivos. Obrigado!
                  </CardDescription>
                  <Button title='Contactar' className="hidden xl:flex w-full max-w-xs hover:scale-105 hover:bg-black/50  bg-rose-500  items-center p-6 my-2 rounded-2xl text-xl text-white font-semibold">
                    Contactar
                  </Button>
                </div>

              </div>
              <div className="relative w-64 h-64 bg-transparent overflow-hidden xl:hidden">
                <div className="absolute inset-0 flex items-center justify-center mt-4 scale-150">
                  <div className="opacity-60">
                    <Logo></Logo>
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-center flex-col gap-4 xl:hidden">
              <CardDescription className="text-left text-white mt-4">
                Envie um e-mail para descobrir como posso ajudá-lo a alcançar seus objetivos. Obrigado!
              </CardDescription>
              <Button title='Contactar' className="w-full max-w-xs hover:scale-105 hover:bg-black/50  bg-rose-500  flex items-center p-6 my-2 rounded-2xl text-xl text-white font-semibold">
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