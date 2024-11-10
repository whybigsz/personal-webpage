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
import { useInView } from 'react-intersection-observer';

const skills = [
  { id: '0', skillName: 'Front-End', amount: "90" },
  { id: '1', skillName: 'Back-End', amount: "85" },
  { id: '2', skillName: 'Design', amount: "80" },
];

const SkillsList = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  return (
    <ul ref={ref} className="relative pl-0 text-3xl">
      {skills.map((skill) => (
        <li key={skill.skillName} className="relative flex bg-[#3e4555] mb-4 rounded-lg">
          <motion.div
            className="flex flex-col h-8 bg-gradient-to-br from-rose-500 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: inView ? `${skill.amount}%` : 0 }}
            transition={{ duration: 2 + Number(skill.id) / 10, ease: "easeInOut" }}
          />
          <div className="absolute flex justify-center items-center border-2 border-white/30 bottom-0 top-0 left-0 px-2 w-65 h-30 text-base bg-rose-600 font-semibold text-white">
            {skill.skillName}
          </div>
        </li>
      ))}
    </ul>
  );
};

const HeroSection = () => {
  const [tab, setTab] = useState("habilidades");

  const handleTabChange = (id) => {
    setTab(id);
  };

  const TAB_DATA = [
    {
      title: "Habilidades",
      id: "habilidades",
      content: <SkillsList />
    },
    {
      title: "Educação",
      id: "educação",
      content: (
        <ul className="pl-2 text-white">
          <li className="pb-1">📌 Escola Secundária da Mealhada</li>
          <li>📌 Instituto Politécnico de Engenharia de Coimbra</li>
        </ul>
      )
    }
  ];

  return (

    <div className="relative flex flex-wrap h-[800px] w-full items-center justify-center gap-8">

      {/* 1st Column */}
      <div className="flex flex-col h-full w-1/4 gap-8 xl:hidden">
        <div className="flex h-2/3">
          <Card className="max-w-sm h-full bg-zinc-800 border-0 rounded-[24px] ">
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
              <CardDescription className="w-[100%] text-center text-white font-semibold text-md py-2">
                Apaixonado por criar aplicações web dinâmicas e interativas.
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center py-2">
              <Link title='Download CV' href="/RF_CV.pdf" target="_blank" className="w-[90%] justify-center max-w-xs hover:scale-105 hover:bg-rose-500 bg-transparent border-rose-500 flex items-center p-[0.55rem] my-2 rounded-2xl  border-solid border-2 text-xl text-white font-semibold">
                Download CV
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="flex w-full h-1/3">
          <Card className="w-full h-full relative bg-zinc-800 border-0 rounded-[24px]">
            <button
              onClick={() => handleTabChange(tab === "habilidades" ? "educação" : "habilidades")}
              className="absolute top-10 right-8 text-rose-500 hover:text-rose-700"
            >
              {tab === "habilidades" ? <RiBook2Fill size={24} /> : <RiBarChartHorizontalLine size={24} />}
            </button>

            <CardHeader className="flex justify-center">
              <CardTitle className="text-white flex text-left p-4">
                <div className="text-2xl font-semibold">
                  {TAB_DATA.find((t) => t.id === tab)?.title}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-10">
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 2º Col */}
      <div className="flex flex-col w-[44%] h-full sm:w-full">
        <Card className="w-full h-[100%] relative overflow-hidden border-0 rounded-[24px] bg-zinc-800">
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

      {/* 1º Col in display < than xl*/}
      <div className='hidden flex-col w-1/4 h-full xl:flex xl:w-[36vw] sm:min-w-full gap-8'>
        <div className="flex h-2/3 sm:w-full">
          <Card className="w-full h-full bg-zinc-800 border-0 rounded-[24px] ">
            <CardHeader className="flex items-center justify-center">
              <CardTitle className='text-white flex items-center'>
                <div className='w-[26px] h-[26px] mr-2 rounded-full bg-red-600 ' />
                <p className='font-title text-[1.65rem] md:text-xl '>Ricardo Ferreira</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="relative w-[220px] h-[210px] md:w-[180px] md:h-[170px] bg-gradient-to-br from-rose-600 to-transparet overflow-hidden rounded-[16px]">
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
              <CardDescription className="w-[100%] text-center text-white font-semibold text-md xl:w-[86%]  ">
                Apaixonado por criar aplicações web dinâmicas e interativas.
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link title='Download CV' href="/RF_CV.pdf" target="_blank" className="w-[90%] md:w-[100%] justify-center max-w-xs hover:scale-105 hover:bg-rose-500 bg-transparent border-rose-500 flex items-center p-[0.55rem] my-2 rounded-2xl  border-solid border-2 text-xl text-white font-semibold">
                Download CV
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="flex h-1/3 sm:w-full">
          <Card className="w-full h-full relative bg-zinc-800 border-0 rounded-[24px] ">
            <button
              onClick={() => handleTabChange(tab === "habilidades" ? "educação" : "habilidades")}
              className="absolute top-10 right-8 text-rose-500 hover:text-rose-700"
            >
              {tab === "habilidades" ? <RiBook2Fill size={24} /> : <RiBarChartHorizontalLine size={24} />}
            </button>

            <CardHeader className="flex justify-center">
              <CardTitle className='text-white flex text-left p-4'>
                <div className="text-2xl font-semibold md:text-xl">
                  {TAB_DATA.find((t) => t.id === tab)?.title}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-10">
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 3º Col */}
      <div className="flex flex-col w-1/4 h-full xl:hidden">
        <Card className="w-full h-full bg-zinc-800 border-0 rounded-[24px] xl:max-h-80 xl:space-y-2 ">
          <CardHeader className='xl:items-center'>
            <CardTitle className='text-white text-2xl text-left xl:flex '>Ricardo Ferreira - <p className='font-bold'> Web Developer</p></CardTitle>
            <CardDescription className="text-left text-white mt-2 xl:max-w-lg">
              Sou Software Developer, formado em Engenharia Informática pelo ISEC, com experiência em desenvolvimento web front-end e back-end.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-8 mt-6">
            <div className="flex xl:flex-col justify-center xl:items-center mt-6 xl:mt-0 mb-0">
              <div className="flex space-x-4">
                <Link href="/" target='_blank'>
                  <i title='Linkedin' className="ri-linkedin-box-line p-2 xl:p-1 hover:bg-rose-500 hover:text-white text-black/80 bg-white rounded-full text-4xl"></i>
                </Link>
                <Link href="/" target='_blank'>
                  <i title='Github' className="ri-github-line p-2 xl:p-1 hover:bg-rose-500 hover:text-white text-black/80 bg-white rounded-full text-4xl"></i>
                </Link>
                <Link href="/" target='_blank'>
                  <i title='Instagram' className="ri-instagram-line p-2 xl:p-1 hover:bg-rose-500 hover:text-white text-black/80  bg-white rounded-full text-4xl"></i>
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
              <div className="absolute inset-0 flex items-center justify-center mt-4 scale-150 ">
                <div className="opacity-60 ">
                  <Logo></Logo>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-center flex-col gap-4 xl:hidden py-4">
            <CardDescription className="text-left text-white mt-4">
              Envie um e-mail para descobrir como posso ajudá-lo a alcançar seus objetivos. Obrigado!
            </CardDescription>
            <Button title='Contactar' className="w-full max-w-xs hover:scale-105 hover:bg-black/50  bg-rose-500  flex items-center p-6 my-2 rounded-2xl text-xl text-white font-semibold">
              Contactar
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* 3º Col in display < than xl*/}
      <div className="hidden w-full h-1/3 xl:flex mx-[7.5vw] sm:min-w-full">
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



    // <div className="grid grid-cols-4 xl:grid-cols-2 sm:grid-cols-1 gap-8 relative xs:flex xs:flex-col sm:flex sm:flex-col sm:justify-center sm:items-center">

    //   {/* 1º div (left side, 1/3 width) */}
    //   <div className='col-span-1 flex flex-col gap-8 h-[800px] xl:order-2 xl:h-[100%]'>
    //     <div className="flex items-center justify-center flex-grow ">
    //       <Card className="w-full max-w-sm mx-auto xl:ml-0 bg-zinc-800 border-0 rounded-[24px] h-full xl:max-w-lg">
    //         <CardHeader className="flex items-center justify-center">
    //           <CardTitle className='text-white flex items-center'>
    //             <div className='w-[26px] h-[26px] mr-2 rounded-full bg-red-600 ' />
    //             <p className='font-title text-[1.65rem]'>Ricardo Ferreira</p>
    //           </CardTitle>
    //         </CardHeader>
    //         <CardContent className="flex flex-col items-center space-y-4">
    //           <div className="relative w-[220px] h-[210px] bg-gradient-to-br from-rose-600 to-transparet overflow-hidden rounded-[16px]">
    //             <div className="absolute inset-0 flex items-center justify-center ">
    //               <Image
    //                 src="/images/logo2.png"
    //                 alt="Profile picture"
    //                 layout="fill"
    //                 objectFit="contain"
    //                 className="rounded-lg scale-110 pr-4"
    //               />
    //             </div>
    //           </div>
    //           <CardDescription className="w-[100%] text-center text-white font-semibold text-md xl:w-[86%]">
    //             Apaixonado por criar aplicações web dinâmicas e interativas.
    //           </CardDescription>
    //         </CardContent>
    //         <CardFooter className="flex justify-center">
    //           <Link title='Download CV' href="/RF_CV.pdf" target="_blank" className="w-[90%] justify-center max-w-xs hover:scale-105 hover:bg-rose-500 bg-transparent border-rose-500 flex items-center p-[0.55rem] my-2 rounded-2xl  border-solid border-2 text-xl text-white font-semibold">
    //             Download CV
    //           </Link>
    //         </CardFooter>
    //       </Card>
    //     </div>

    //     {/* Second Card */}
    //     <div className="flex items-center justify-center flex-grow xl:order-4 ">
    //       <Card className="w-full max-w-sm mx-auto bg-zinc-800 border-0 rounded-[24px] h-full relative xl:max-w-lg xl:h-[18rem] xl:ml-0">
    //         {/* Icon Button */}
    //         <button
    //           onClick={() => handleTabChange(tab === "habilidades" ? "educação" : "habilidades")}
    //           className="absolute top-10 right-8 text-rose-500 hover:text-rose-700"
    //         >
    //           {tab === "habilidades" ? <RiBook2Fill size={24} /> : <RiBarChartHorizontalLine size={24} />}
    //         </button>

    //         <CardHeader className="flex justify-center">
    //           <CardTitle className='text-white flex text-left p-4'>
    //             <div className="text-2xl font-semibold">
    //               {TAB_DATA.find((t) => t.id === tab)?.title}
    //             </div>
    //           </CardTitle>
    //         </CardHeader>
    //         <CardContent className="flex flex-col  xl:gap-10">
    //           {TAB_DATA.find((t) => t.id === tab)?.content}
    //         </CardContent>
    //       </Card>
    //     </div>
    //   </div>


    //   {/* 2nd Div (Center, 2/3 width) */}
    //   <div className="col-span-2 xl:col-span-1 xl:flex xl:justify-end ">
    //     <div className="w-full xl:order-1 xl:max-w-lg ">
    //       <Card className="relative overflow-hidden h-[800px] border-0 rounded-[24px] bg-zinc-800 xl:h-[100%]">
    //         <div className="absolute inset-0 bg-gradient-to-br from-rose-600 to-transparent"></div>
    //         <div className="absolute inset-0 top-[-26%] ">
    //           <Image
    //             src="/images/avatar2.png"
    //             alt="Background image"
    //             layout="fill"
    //             objectFit="cover"
    //             className=""
    //           />
    //         </div>
    //         <div className="absolute left-4 bottom-4 xl:left-1/2 xl:transform xl:-translate-x-1/2 ">
    //           <Card className="bg-white/30 backdrop-blur-md p-6 shadow-lg h-[200px] rounded-[16px] flex flex-col justify-between xl:h-[140px]">
    //             <h1 className="text-3xl font-bold text-white">Ricardo Ferreira</h1>
    //             <div className="flex space-x-4">
    //               <Button title='Projetos' className="w-32 bg-rose-500 hover:bg-black/80 flex items-center p-4 rounded-lg text-lg text-white font-semibold">
    //                 Projetos
    //               </Button>
    //               <Button title='Serviços' variant="" className="w-32 text-lg">
    //                 Serviços
    //               </Button>
    //             </div>
    //           </Card>
    //         </div>
    //       </Card>
    //     </div>
    //   </div>

    //   {/* 3rd Div (Right side, 1/3 width) */}
    //   <div className='max-w-sm w-full mx-auto col-span-1 xl:order-3  xl:max-w-[66rem] xl:max-h-80 xl:col-span-2'>
    //     <div className='flex items-center justify-center'>
    //       <Card className="w-full bg-zinc-800 border-0 rounded-[24px] h-[800px] xl:max-h-80 xl:space-y-2 ">
    //         <CardHeader className='xl:items-center'>
    //           <CardTitle className='text-white text-2xl text-left xl:flex '>Ricardo Ferreira - <p className='font-bold'> Web Developer</p></CardTitle>
    //           <CardDescription className="text-left text-white mt-2 xl:max-w-lg">
    //             Sou Software Developer, formado em Engenharia Informática pelo ISEC, com experiência em desenvolvimento web front-end e back-end.
    //           </CardDescription>
    //         </CardHeader>
    //         <CardContent className="flex flex-col items-center space-y-6 mt-2">
    //           <div className="flex xl:flex-col justify-center xl:items-center mt-6 xl:mt-0 mb-0">
    //             <div className="flex space-x-4">
    //               <Link href="/" target='_blank'>
    //                 <i title='Linkedin' className="ri-linkedin-box-line p-2 xl:p-1 bg-white rounded-full text-4xl"></i>
    //               </Link>
    //               <Link href="/" target='_blank'>
    //                 <i title='Github' className="ri-github-line p-2 xl:p-1 bg-white rounded-full text-4xl"></i>
    //               </Link>
    //               <Link href="/" target='_blank'>
    //                 <i title='Instagram' className="ri-instagram-line p-2 xl:p-1  bg-white rounded-full text-4xl"></i>
    //               </Link>
    //             </div>
    //             <div className='hidden xl:flex flex-col items-center m-0'>
    //               <CardDescription className=" text-center text-white my-4">
    //                 Envie um e-mail para descobrir como posso ajudá-lo a alcançar seus objetivos. Obrigado!
    //               </CardDescription>
    //               <Button title='Contactar' className="hidden xl:flex w-full max-w-xs hover:scale-105 hover:bg-black/50  bg-rose-500  items-center p-6 my-2 rounded-2xl text-xl text-white font-semibold">
    //                 Contactar
    //               </Button>
    //             </div>

    //           </div>
    //           <div className="relative w-64 h-64 bg-transparent overflow-hidden xl:hidden">
    //             <div className="absolute inset-0 flex items-center justify-center mt-4 scale-150">
    //               <div className="opacity-60">
    //                 <Logo></Logo>
    //               </div>
    //             </div>
    //           </div>
    //         </CardContent>

    //         <CardFooter className="flex justify-center flex-col gap-4 xl:hidden">
    //           <CardDescription className="text-left text-white mt-4">
    //             Envie um e-mail para descobrir como posso ajudá-lo a alcançar seus objetivos. Obrigado!
    //           </CardDescription>
    //           <Button title='Contactar' className="w-full max-w-xs hover:scale-105 hover:bg-black/50  bg-rose-500  flex items-center p-6 my-2 rounded-2xl text-xl text-white font-semibold">
    //             Contactar
    //           </Button>
    //         </CardFooter>
    //       </Card>
    //     </div>
    //   </div>
    // </div>
  );
}

export default HeroSection