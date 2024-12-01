import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RiTriangleFill } from 'react-icons/ri';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Experience = () => {
  const experiences = [
    {
      title: "Haupper LDa",
      role: "Fullstack developer",
      date: "04/2024 - data atual",
      description: [
        "Desenvolvimento Interface UX/UI",
        "Criação de APIs e serviços",
        "Criação de dashboards",
        "Lógica de segurança"
      ],
      skills: ["React", "Node.js", "TypeScript", "API Development"]
    },
    {
      title: "Projeto Final",
      role: "Parceria ISEC e LxDataLab",
      date: "02/2023 - 07/2023",
      description: [
        "Analisar dados de tráfego",
        "Identificar padrões e tendências",
        "Carregar e pré-processar dados",
        "Treinar e avaliar modelo GRU",
        "Interpretar os resultados"
      ],
      skills: ["Data Analysis", "Machine Learning", "Python", "GRU Model"]
    },
    {
      title: "Programação Avançada - Java",
      role: "Gestão de projetos e estágios",
      date: "02/2022 - 06/2022",
      description: [
        "Máquina de estados",
        "Serialização de objetos",
        "Modelo model-view-controller"
      ],
      skills: ["Java", "State Machines", "MVC", "Object Serialization"]
    },
    {
      title: "Sistemas Operativos - Linguagem C",
      role: "MedicalSO e Champion",
      date: "09/2021 - 06/2022",
      description: [
        "Comunicação entre processos",
        "Sincronização e concorrência",
        "Threads e Mutex"
      ],
      skills: ["C", "Operating Systems", "Concurrency", "Multithreading"]
    }
  ];

  const containerRef = useRef(null);
  const controls = useAnimation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [timelineProgress, setTimelineProgress] = useState(0);

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
    rootMargin: "-50px"
  });

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.offsetHeight;
        containerRef.current.style.setProperty('--timeline-height', `${height}px`);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      const direction = currentPosition > scrollPosition ? 'down' : 'up';
      setScrollDirection(direction);
      setScrollPosition(currentPosition);

      // Calculate timeline progress based on container position
      if (containerRef.current) {
        const containerTop = containerRef.current.getBoundingClientRect().top;
        const containerHeight = containerRef.current.offsetHeight;
        const windowHeight = window.innerHeight;

        // Calculate progress percentage
        let progress = 0;
        progress = Math.min(Math.max((windowHeight - containerTop) / containerHeight, 0), 1);


        setTimelineProgress(progress);
        controls.start({
          scaleY: progress,
          transition: {
            duration: 2,
            ease: "easeOut"
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition, controls]);

  useEffect(() => {
    if (!inView) {
      controls.start({
        scaleY: 0,
        transition: { duration: 2, ease: "easeIn" },
      });
    }
  }, [inView, controls]);

  return (
    <section id='experience' className="mt-16 pt-4 relative w-full md:min-h-screen md:pt-8 pb-10 flex flex-col items-center">
      <div className="mb-2 lg:mb-8 text-center w-full max-w-screen-2xl">
        <h1 className="text-5xl text-white lg:text-3xl font-bold w-full">Experiência e Trabalho</h1>
      </div>

      <div ref={containerRef} className="relative flex flex-col gap-8 w-full max-w-screen-xl mx-auto">
        {/* Timeline Line */}
        <motion.div
          ref={ref}
          className="absolute timeline lg:left-[5%] left-1/2 transform -translate-x-1/2 w-2 bg-gradient-to-br from-rose-600 to-transparent"
          style={{
            height: 'var(--timeline-height)',
            transformOrigin: 'top',
            opacity: inView ? 1 : 0
          }}
          initial={{ scaleY: 0 }}
          animate={controls}
        />

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex w-full items-center relative"
          >
            {/* Timeline Point - Now absolutely positioned in the center */}
            <motion.div
              className={`absolute timeline-point lg:left-[5%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 ml-[-0.75rem] flex items-center justify-center rounded-full bg-rose-800 z-10`}
              initial={{ scale: 0 }}
              animate={{
                scale: timelineProgress > index / experiences.length ? 1 : 0,
                transition: { duration: 0.3 }
              }}
            >
              <i className="ri-star-fill text-white me-[2px]"></i>
            </motion.div>
            <motion.div className='w-full lg:w-3/4'
              initial={{ x: '10%', opacity: 0 }}
              whileInView={{ x: '0%', opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: 0, ease: 'easeInOut' }}
            >
              <Card className={`w-[46.5%] lg:w-full mt-12 mb-10 bg-zinc-800 border-0 rounded-[24px] text-white p-8 shadow-lg relative experience1 timeline-card lg:ml-24- ${index % 2 === 0 ? ' mr-auto' : ' ml-auto'}`}>
                {/* Arrow Indicator */}
                <motion.div
                  className={`absolute top-[54%] -translate-y-1/2  ${index % 2 === 0 ? ' lg:left-[-0.5rem] left-full ml-[-0.75rem]' : ' right-full mr-[-0.75rem]'}`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: timelineProgress > index / experiences.length ? 1 : 0,
                    transition: { duration: 0.3 }
                  }}
                >
                  {index % 2 === 0 ? (
                    <RiTriangleFill className="w-8 h-8 text-zinc-800  transform rotate-90 lg:-rotate-90" />
                  ) : (
                    <RiTriangleFill className="w-8 h-8 text-zinc-800 transform -rotate-90" />
                  )}
                </motion.div>
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="font-medium">{exp.role}</p>
                  <p className="text-sm text-muted-foreground">{exp.date}</p>
                  <p className="py-4">{exp.description.join(", ")}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="inline-flex items-center rounded-full bg-gradient-to-br from-rose-600 to-transparent px-3 py-1 text-xs font-medium text-rose-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;