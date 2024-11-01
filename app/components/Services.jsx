import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image';
import 'remixicon/fonts/remixicon.css';
import { RiLink } from 'react-icons/ri';
import { Code, Palette, Megaphone } from 'lucide-react';



const Services = () => {

  const serviceIconMap = {
    "Innovative": <Code className="w-12 h-12 text-white" />,
    "Fast": <Palette className="w-12 h-12 text-white" />,
    "Secure": <Megaphone className="w-12 h-12 text-white" />,
  }

  const services = [
    {
      title: "Desenvolvimento Web",
      description: "Criar soluções para destacar o seu negócio e destacar a sua marca.",
      icon: "Innovative",
      link: "https://example.com/innovative-solutions"
    },
    {
      title: "Design Web",
      description: "Desenvolver designs atraentes e intuitivos que refletem a identidade e a missão da sua marca.",
      icon: "Fast",
      link: "https://example.com/fast-delivery"
    },
    {
      title: "Marketing e Publicidade",
      description: "Estratégias de marketing para aumentar a sua presença e impulsionar o seu negócio.",
      icon: "Secure",
      link: "https://example.com/secure-reliable"
    }
  ]

  const ServiceCard = ({ service }) => (
    <Card className="flex flex-col w-full max-w-lg p-6 bg-zinc-800 border-0 rounded-[24px]">
      <CardHeader className="pb-4">
        <div className="relative my-4 ml-[-10px] flex justify-start">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-600 to-transparet rounded-full w-16 h-16 top-[-30px] left-[16px]  z-0" aria-hidden="true" />
          <div className="relative z-10 text-white  ">
            {serviceIconMap[service.icon]}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow text-start">
        <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
        <p className="text-muted-foreground ">{service.description}</p>
      </CardContent>
    </Card>
  )

  return (
    <section className="">
      <h2 className="text-5xl font-bold text-white font-title text-center mb-20">Serviços</h2>
      <div className="flex flex-row gap-8 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;