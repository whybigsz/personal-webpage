import React from 'react'
import ServerDeploy from "./ServerDeploy"
import Image from 'next/image'
import projeto1 from '../../public/images/p1.png'
import projeto2 from '../../public/images/p2.png'
import projeto3 from '../../public/images/p3.png'
import ProjectCard from './ProjectCard'
import Link from 'next/link'
import { FolderProjects } from "./Icons"
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'






const Projects = () => {

  const projectData = [
    {
      id:1,
      title:"Game Tight App",
      description:"Mais de 140 Openers, respostas, testes e closers para exprimentares nas tuas interações",
      image: '/images/p11.png',
      tag:["All","Web"]
    },
    {
      id:2,
      title:"Projeto Final",
      description:"Caraterização dos principais movimentos pendulares da cidade de Lisboa",
      image: '/images/p2.png',
      tag:["All","Web"]
    },
    {
      id:3,
      title:"Ultimate Tic-Tac-Toe",
      description:"3x3 Tabuleiros de Tic-Tac-Toe em React",
      image: '/images/p3.png',
      tag:["All","Web"]
    }
  ]

  return (
    <section id="projects" className='text-white'>

  <div className="grid grid-cols-2 relative mb-3 md:flex">
  <motion.div
  variants={fadeIn('down',0.5)} initial="hidden"
  whileInView={'show'} viewport={{once:false, amount:0.7}}
  className="mt-10 lg:px-4 lg:py-8 md:hidden">
    <ServerDeploy></ServerDeploy>
  </motion.div>
  <motion.div
  variants={fadeIn('up',0.4)} initial="hidden"
  whileInView={'show'} viewport={{once:false, amount:0.7}}
  className={`place-self-start mt-10 text-left relative`}>
    <h2 className=' text-white mt-20 text-5xl md:text-4xl lg:text-2xl font-extrabold'>
          Projetos
        </h2>
        <p className='text-[#ADB7BE] text-base mt-4 '>Explora os meus projetos mais recentes.</p>
        <Link href="https://www.github.com/whybigsz" target="_blank" className='hover:scale-125 mt-2 flex w-[140px] items-center px-6 py-3 rounded-lg bg-black-700 hover:bg-slate-200 border-solid border-2 text-white font-semibold'>
          Projetos <FolderProjects className="ml-2 w-5"/>
        </Link>

        <div className='mt-4 flex gap-10'>
            {projectData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image}/>)}
          </div>
          </motion.div>
  </div>
</section>

  );
}

export default Projects