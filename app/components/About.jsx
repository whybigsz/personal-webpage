"use client"
import React, {useTransition, useState,useRef, useEffect } from 'react'
import Image from 'next/image'
import RiveRobot from "./Rivebot"
import Link from 'next/link'
import TabButton from "./TabButton"
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import ParticleContainer from "./ParticlesContainer"

import { useInView, useViewport } from "react-intersection-observer";





const About = () => {

  const skills = [
    { id: '0', skillName: 'Java', amount: "95" },
    { id: '1', skillName: 'Javascript', amount: "85" },
    { id: '2', skillName: 'React', amount: "80" },
    { id: '3', skillName: 'Python', amount: "70" },
    { id: '4', skillName: 'Android',amount: "65",},
    ];

  const [tab,setTab] = useState("habilidades")
  const [isPending,startTransition] = useTransition()

  const [myElementIsVisible, setMyElementIsVisible] = useState(false);
  const [eduElementIsVisible, setEduElementIsVisible] = useState(false);

  const myRef = useRef();
  const eduRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.target === myRef.current) {
        setMyElementIsVisible(entry.isIntersecting);
      } else if (entry.target === eduRef.current) {
        setEduElementIsVisible(entry.isIntersecting);
      }
    });

    observer.observe(myRef.current);
    observer.observe(eduRef.current);

    // Clean up the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const TAB_DATA = [

    {
      title : "Habilidades",
      id: "habilidades",
      content : (

        <ul className="relative pl-0 mx-auto my-auto w-90 text-5xl">
    {skills.map((skill) => (
      <li key={skill.skillName} className="overflow-hidden relative flex bg-[#3e4555] mb-2">

         <motion.div
         ref={myRef}
        className="flex flex-col h-30 bg-[#1DA1F2]"
        style={{
          height: "30px",
        }}
        animate={myElementIsVisible ? { width: `${100 * (skill.amount / 100)}%` } : {}}
        transition={{ duration: 1 + skill.id / 10, ease: "easeInOut" }}
      >
        {/* Your content goes here */}
      </motion.div>
        <div
          ref={eduRef}
          className="absolute flex justify-center items-center border-2
           border-white/30 bottom-0 top-0 left-0 px-2 w-65 h-30 text-base bg-[#4285F4] font-semibold text-white"
        >
          {skill.skillName}
        </div>
      </li>
    ))}
  </ul>
      )
    },
    {
      title : "Educação",
      id: "educação",
      content : (
        <ul className='pl-2 text-white'>
          <li>➡️ Escola Secundária da Mealhada</li>
          <li>➡️ Instituto Politécnico de Engenharia de Coimbra</li>
        </ul>
      )
    }
  ]




  return (
    <section id="about" className='justify-center'>

  <div className="grid grid-cols-2 relative px-10 xs:flex xs:flex-col sm:flex sm:flex-col">

  <motion.div
  variants={fadeIn('up',0.4)} initial="hidden"
  whileInView={'show'} viewport={{once:true, amount:0.7}}
  className={`ml-28 lg:ml-0 place-self-start mt-10 text-left relative`}>
    <h2 className=' text-white mt-20 text-5xl md:text-4xl lg:text-2xl font-extrabold'>
          Sobre Mim
        </h2>
        <p className='mt-4 text-white'>💎 Sou Full-stack developer apaixonado por criar aplicações web interativas e dinâmicas.
          Tenho experiência em trabalhar com Android, JavaScript, React, Node.js, HTML, CSS, Flutter, Firebase, Python, C++ e Git.
        </p>
        <p className='mt-2 text-white'>
        💎 Aprendo rápido e estou sempre à procura de expandir o meu conhecimento e conjunto de habilidades.
          Sou um trabalhador de equipa e estou entusiasmado em trabalhar com outros com a mesma paixão para criar aplicações incríveis.</p>
          <div className='flex flex-row mt-8'>
            <TabButton selectTab={() => handleTabChange("habilidades")} active={tab === "habilidades"} >
              {" "}
              Habilidades{" "}
              </TabButton>
              <TabButton selectTab={() => handleTabChange("educação")} active={tab === "educação"} >
              {" "}
              Educação{" "}
              </TabButton>
          </div>
          <div className='mt-8 '>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
  </motion.div >
  <motion.div
variants={fadeIn('down',0.5)} initial="hidden"
whileInView={'show'} viewport={{once:false, amount:0.7}}
  className="ml-10 place-self-center xs:hidden">
    <RiveRobot></RiveRobot>
  </motion.div>

</div>
</section>

  );
}

export default About
























