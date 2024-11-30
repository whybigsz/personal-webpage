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

const SkillsList = ({ isFullHeight, heightRatio }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  console.log("skils isFullHeight " + isFullHeight, " heightRatio " + heightRatio);

  return (
    <ul ref={ref} className="relative pl-0 text-3xl">
      {skills.map((skill) => (
        <li key={skill.skillName} className="relative flex bg-[#3e4555] mb-4 rounded-lg">
          <motion.div
            className={`flex flex-col ${heightRatio > 0.75 ? "h-8" : "h-6"} bg-gradient-to-br from-rose-500 to-transparent rounded-lg`}
            initial={{ width: 0 }}
            animate={{ width: inView ? `${skill.amount}%` : 0 }}
            transition={{ duration: 2 + Number(skill.id) / 10, ease: "easeInOut" }}
          />
          <div className="absolute flex rounded-lg justify-center items-center border-2 border-white/30
          bottom-0 top-0 left-0 px-2 w-65 h-30 min-h-20 max-h-30 text-base bg-rose-600 font-semibold text-white">
            {skill.skillName}
          </div>
        </li>
      ))}
    </ul>
  );
};

const HeroSection = () => {
  const [heightRatio, setHeightRatio] = useState(1);
  const [isFullHeight, setIsFullHeight] = useState(false);
  const [tab, setTab] = useState("habilidades");
  const containerRef = useRef(null);

  const handleTabChange = (id) => {
    setTab(id);
  };

  // Calculate dimensions based on height ratio
  const calculateDimension = (min, max) => {
    return min + (max - min) * heightRatio;
  };

  // Image container dimensions
  const imageWidth = Math.round(calculateDimension(240, 220));
  const imageHeight = Math.round(calculateDimension(140, 210));

  // Margins and spacings
  const topMargin = Math.round(calculateDimension(3, 6));
  const contentGap = Math.round(calculateDimension(6, 10));
  const footerPadding = Math.round(calculateDimension(0, 4));

  const logoScale = 1 + (heightRatio * 0.5);

  const TAB_DATA = [
    {
      title: "Habilidades",
      id: "habilidades",
      content: <SkillsList isFullHeight={isFullHeight} heightRatio={heightRatio} />
    },
    {
      title: "Educação",
      id: "educação",
      content: (
        <ul className="w-full space-y-4 text-sm md:text-base lg:text-lg text-white">
          <li className="flex items-center gap-2">
            <span className="shrink-0">📌</span>
            <span className="flex-1">Escola Secundária da Mealhada</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="shrink-0">📌</span>
            <span className="flex-1">Instituto Politécnico de Engenharia de Coimbra</span>
          </li>
        </ul>
      )
    }
  ];

  useEffect(() => {
    const checkHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.offsetHeight;
        setIsFullHeight(height >= 800);
        console.log("height " + height, "IsFullHeight " + isFullHeight);

        const height2 = containerRef.current.offsetHeight;
        const minHeight = 650;
        const maxHeight = 800;

        // Calculate ratio between 0 and 1
        const newRatio = Math.max(0, Math.min(1,
          (height2 - minHeight) / (maxHeight - minHeight)
        ));

        setHeightRatio(newRatio);
      }
    };

    // Check height initially
    checkHeight();

    // Debounced resize handler
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkHeight, 50);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageContainerStyle = {
    width: `${imageWidth}px`,
    height: `${imageHeight}px`,
  };

  const logoStyle = {
    transform: `scale(${logoScale})`,
    marginTop: `${topMargin * 4}px`,
    transition: 'all 0.3s ease-in-out'
  };

  const footerStyle = {
    paddingBottom: `${footerPadding}rem`,
    marginTop: heightRatio < 0.5 ? '-2rem' : '0',
    transition: 'all 0.3s ease-in-out'
  };

  const imageContainerClass = `relative
    ${heightRatio > 0.75
      ? "w-[220px] h-[210px]"
      : "min-w-[240px] min-h-[140px]"}
    bg-gradient-to-br from-rose-600 to-transparent overflow-hidden rounded-[16px]`;

  const contentSpacingClass = `flex flex-col gap-10 transition-all duration-300 ease-in-out
    ${!heightRatio > 0.75 ? "mx-6 !p-0" : ""}`;

  const socialIconsContainerClass = `flex xl:flex-col justify-center xl:items-center transition-all duration-300 ease-in-out
    ${heightRatio > 0.75 ? "mt-6" : "mt-3"}`;

  const logoContainerClass = `absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out`;

  const cardFooterClass = `flex justify-center flex-col gap-4 xl:hidden transition-all duration-300 ease-in-out
    ${heightRatio > 0.75 ? "py-4" : "mt-[-2rem]"}`;

  const cardDescriptionClass = `text-center text-white transition-all duration-300 ease-in-out
    ${heightRatio > 0.75 ? "my-4" : "my-0"}`;

  return (
    <motion.div ref={containerRef} className="relative flex flex-wrap h-[80vh] min-h-[650px] max-h-[800px] w-full items-center justify-center gap-8">

      {/* 1st Column */}
      <motion.div
        className="flex flex-col h-full w-1/4 gap-8 xl:hidden"
        initial={{ x: '-10%', opacity: 0 }}
        whileInView={{ x: '0%', opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}>
        <div className="flex h-2/3">
          <Card className="max-w-sm h-full bg-zinc-800 border-0 rounded-[24px] ">
            <CardHeader className="flex items-center justify-center">
              <CardTitle className='text-white flex items-center'>
                <div className='w-[26px] h-[26px] mr-2 rounded-full bg-red-600 ' />
                <p className='font-title text-[1.65rem]'>Ricardo Ferreira</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className={imageContainerClass} style={imageContainerStyle}>
                <div className="absolute inset-0 flex items-center justify-center">
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
              className={`absolute top-7 right-7 text-rose-500 hover:text-rose-700`}
            >
              {tab === "habilidades" ? <RiBook2Fill size={24} /> : <RiBarChartHorizontalLine size={24} />}
            </button>

            <CardHeader className="flex justify-center">
              <CardTitle className={`text-white flex text-left`}>
                <div className="text-2xl font-semibold">
                  {TAB_DATA.find((t) => t.id === tab)?.title}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className={contentSpacingClass}>
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* 2º Col */}
      <motion.div
        className="flex flex-col w-[44%] h-full sm:w-[90%] sm:h-3/4"
        initial={{ y: '-5%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 0 }}
      >
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
          <div className="absolute main-mini-card left-4 bottom-4 xl:left-1/2 xl:transform xl:-translate-x-1/2 ">
            <Card className="bg-white/30 xl:items-center  backdrop-blur-md p-6 shadow-lg h-[200px] rounded-[16px] flex flex-col justify-between xl:h-[140px]">
              <h1 className="text-3xl font-bold xl:text-2xl text-white">Ricardo Ferreira</h1>
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
      </motion.div>

      {/* 1º Col in display < than xl*/}
      <motion.div
        className='hidden flex-col w-1/4 h-full xl:flex xl:w-[36vw] sm:min-w-full sm:items-center gap-8'
        initial={{ x: '10%', opacity: 0 }}
        whileInView={{ x: '0%', opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
      >
        <div className="flex h-2/3  sm:w-[90%] sm:h-3/4">
          <Card className="w-full h-full bg-zinc-800 border-0 rounded-[24px] ">
            <CardHeader className="flex items-center justify-center">
              <CardTitle className='text-white flex items-center'>
                <div className='w-[26px] h-[26px] mr-2 rounded-full bg-red-600 ' />
                <p className='font-title text-[1.65rem] md:text-xl '>Ricardo Ferreira</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="relative w-[220px] h-[210px] img-div1 xl:w-[180px] xl:h-[170px] bg-gradient-to-br from-rose-600 to-transparet overflow-hidden rounded-[16px]">
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
        <div className="flex h-1/3 sm:w-[90%] ">
          <Card className="w-full h-full relative bg-zinc-800 border-0 rounded-[24px] ">
            <button
              onClick={() => handleTabChange(tab === "habilidades" ? "educação" : "habilidades")}
              className="absolute top-10 right-8 xl:top-7 text-rose-500 hover:text-rose-700"
            >
              {tab === "habilidades" ? <RiBook2Fill size={24} /> : <RiBarChartHorizontalLine size={24} />}
            </button>

            <CardHeader className="flex justify-center">
              <CardTitle className='text-white flex text-left p-4 sm:p-2 xl:p-0'>
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
      </motion.div>

      {/* 3º Col */}
      <motion.div
        className="flex flex-col w-1/4 h-full xl:hidden"
        initial={{ x: '10%', opacity: 0 }}
        whileInView={{ x: '0%', opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
      >
        <Card className="w-full h-full bg-zinc-800 border-0 rounded-[24px] xl:max-h-80 xl:space-y-2 ">
          <CardHeader className='xl:items-center'>
            <CardTitle className='text-white text-2xl text-left xl:flex '>Ricardo Ferreira - <span className='font-bold'> Web Developer</span></CardTitle>
            <CardDescription className="text-left text-white mt-2 xl:max-w-lg">
              Sou Software Developer, formado em Engenharia Informática pelo ISEC, com experiência em desenvolvimento web front-end e back-end.
            </CardDescription>
          </CardHeader>
          <CardContent className={`flex flex-col items-center  ${heightRatio > 0.75 ? "space-y-8 mt-2 " : "space-y-0 !p-0 mt-0"} `}>
            <div className={socialIconsContainerClass}>
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
                <CardDescription className={cardDescriptionClass}>
                  Envie um e-mail para descobrir como posso ajudá-lo a alcançar seus objetivos. Obrigado!
                </CardDescription>
                <Button title='Contactar' className="hidden xl:flex w-full max-w-xs hover:scale-105 hover:bg-black/50  bg-rose-500  items-center p-6 my-2 rounded-2xl text-xl text-white font-semibold">
                  Contactar
                </Button>
              </div>

            </div>
            <div className="relative w-64 h-64 bg-transparent overflow-hidden xl:hidden">
              <div className={logoContainerClass} style={logoStyle}>
                <div className="opacity-60 ">
                  <Logo></Logo>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className={cardFooterClass} style={footerStyle}>
            <CardDescription className="text-left text-white mt-4">
              Envie um e-mail para descobrir como posso ajudá-lo a alcançar seus objetivos. Obrigado!
            </CardDescription>
            <Button title='Contactar' className="w-full max-w-xs hover:scale-105 hover:bg-black/50  bg-rose-500  flex items-center p-6 my-2 rounded-2xl text-xl text-white font-semibold">
              Contactar
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      {/* 3º Col in display < than xl*/}
      <motion.div className="responsive-container"
        initial={{ y: '-5%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
      >
        <Card className="card-div3">
          <CardHeader className='xl:items-center'>
            <CardTitle className='text-white text-2xl text-left xl:flex '>
              <div>
                <p>Ricardo Ferreira</p>
                <p className='italic font-normal'> Web Developer</p>
              </div>
            </CardTitle>
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
      </motion.div>
    </motion.div >

  );
}

export default HeroSection