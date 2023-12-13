import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import { CodeBracketIcon, EyeIcon } from './Icons';
import Link from 'next/link';

const ProjectCard = ({imgUrl,title,description}) => {

  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  const [size, setSize] = useState("210px");

  useEffect(() => {
      const handleResize = () => {
        const screenSize = screen.width;
        const screenInnerWidth = window.innerWidth;

        if (screenInnerWidth >= 1210 && screenInnerWidth <= 1456) {
            setSize("210px")
            //console.log("11111111");
        } else if (screenInnerWidth >= 770 && screenInnerWidth < 1210) {
          setSize("100px")
        } else if (screenInnerWidth < 770) {
          setSize("60px")
        }else {
          setSize("210px")
        }

        console.log("screenInnerWidth "+screenInnerWidth)



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
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className='group relative overflow-hidden rounded-xl'
      >

<div className={`relative w-[${size}] aspect-w-4 aspect-h-4 rounded-xl border-4 border-solid border-white group-hover:overflow-hidden`}>
      <Image
        src={imgUrl}
        alt=''
        width={200}
        height={200}
        unoptimized={false}
        priority={false}
        onLoad={(e) => console.log(e.target.naturalWidth)}
        className='group-hover:scale-125 transition-all duration-700 object-cover rounded-xl '
      />
      {isHovering ? (
        <div className='flex '>
          <Link
            href="/"
            className='absolute inset-0 items-center flex justify-center group-hover:bg-black/70 transition-all duration-300  xs:py-4 sm:py-0 md:py-12 lg:py-6 lg:items-baseline '
          >
            <div className='flex items-center justify-center lg:px-0 lg:py-0 px-2 py-2 aspect-h-10 aspect-w-10 border-white border-4 border-solid rounded-full cursor-pointer hover:border-[#ADB7BE]'>
              <CodeBracketIcon className="bg-[#ADB7BE] hover:white" />
            </div>
          </Link>
        </div>
      ) : null}
    </div>

        <motion.div
          animate={{ x: [0, 100, 0] }}
          className='relative group-hover:left-2 group-hover:bottom-12 transition-all duration-500 z-50'
        >
          <h3 className=' lg:text-sm font-semibold '>{title}</h3>
        </motion.div>

        {isHovering ? (
          <motion.div animate={{ rotate: 360 }} transition={{ type: 'spring', velocity: 2 }}>
            <p className='lg:text-sm w-[200px]'>{description}</p>
          </motion.div>
        ) : null}
      </div>
    );
}

export default ProjectCard