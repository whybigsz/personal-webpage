import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image';
import 'remixicon/fonts/remixicon.css';
import { RiLink } from 'react-icons/ri';



const Projects = () => {

  const skillIconMap = {
    "React": <img src="/assets/react-skill.svg" alt="React" className="w-6 h-6" />,
    "Html": <img src="/assets/html-skill.svg" alt="React" className="w-6 h-6" />,
    "CSharp": <img src="/assets/csharp-skill.svg" alt="React" className="w-6 h-6" />,
    "Firebase": <img src="/assets/firebase-skill.svg" alt="React" className="w-6 h-6" />,
    "API Integration": <img src="/assets/react-skill.svg" alt="React" className="w-6 h-6" />,
    "CSS": <img src="/assets/css-skill.svg" alt="React" className="w-6 h-6" />,
    "Figma": <img src="/assets/figma-skill.svg" alt="React" className="w-6 h-6" />,
    "Tailwind": <img src="/assets/tailwind-skill.svg" alt="React" className="w-6 h-6" />,
  };

  const projects = [
    {
      title: "Dashboards",
      description: "Dashboards genéricos para uso de diferentes tipos de projetos",
      image: "/images/11.png",
      skills: ["React", "CSharp", "Figma"],
      link: "https://example.com/ecommerce"
    },
    {
      title: "Loja produtos 3D",
      description: "Venda de produtos 3D, api integrada com firebase",
      image: "/images/22.png",
      skills: ["React", "CSS", "Html", "Firebase"],
      link: "https://example.com/weather-app"
    },
    {
      title: "Criação de Formulários",
      description: "Formulários genéricos para uso de diferentes tipos de projetos",
      image: "/images/33.png",
      skills: ["Figma", "Tailwind"],
      link: "https://example.com/task-manager"
    }
  ]

  const ProjectCard = ({ project }) => (
    <Card className="flex flex-col w-full max-w-lg p-3 lg:max-w-none  bg-zinc-800 border-0 rounded-[24px]">
      <CardHeader className="">
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={400}
          className="rounded-[16px] object-cover w-full h-64"
        />
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="text-xl text-white mb-2">{project.title}</CardTitle>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4 bg-black/50 p-2 rounded-3xl w-fit">
          {project.skills.map((skill, index) => (
            <span key={index} className=" text-xs p-1 rounded flex items-center">
              {skillIconMap[skill] || skill}
            </span>

          ))}
        </div>
      </CardContent>
      <CardFooter>
        <a href={project.link} className='text-white text-lg font-semibold flex gap-2' target="_blank" rel="noopener noreferrer"><RiLink size={24} /> Visit Project</a>
      </CardFooter>
    </Card>
  )

  return (
    <section className="py-20 px-10 sm:px-4 lg:justify-center ">
      <h2 className="text-5xl font-bold text-white font-title text-center mb-16">Projetos Recentes</h2>
      <div className="flex flex-row lg:flex-col lg:items-center  gap-8 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects
