import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import {CircularText,RocketLaunch} from "./Icons"
import {motion} from 'framer-motion'
import { FaRocket } from "react-icons/fa";


const HireMe = () => {

  const [size, setSize] = useState(60);
  const [scale, setScale] = useState(1);

  useEffect(() => {
      const handleResize = () => {
        const screenSize = screen.width;
        const screenInnerWidth = window.innerWidth;

        if (screenInnerWidth >= 767 && screenInnerWidth <= 1023) {
          setSize(60);
          setScale(0.8);
          //console.log("Between 767 and 1023");
        } else if (screenInnerWidth >= 639 && screenInnerWidth < 767) {
          setSize(50);
          //console.log("Between 639 and 767");
          setScale(0.6);
        } else if (screenInnerWidth < 639) {
          setSize(50);
          //console.log("Between 479 and 639");
          setScale(0.3);
        }else {
          setSize(60);
          setScale(1);
        }


      };

      // Initial resize
      handleResize();

      // Add event listener for window resize
      window.addEventListener('resize', handleResize);

      // Cleanup function
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [scale]);

    const size2 = size/10;
    //console.log("size "+ size)

  return (
      <div className={`w-full h-auto right-0`}>
        <motion.div
        style={{scale: `${scale}` }}
        animate={{ rotate: 360 }}
        transition={{ ease: "linear", duration: 8, repeat: Infinity }}
        >
        <CircularText className={"fill-black"}></CircularText>
        <Link href="mailto:abcd@gmail.com" className=' flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md border-dark w-20 h-20 rounded-full'>
        <FaRocket fill="white" className="w-6 h-6"/>
        </Link>
        </motion.div>

    </div>
  )
}

export default HireMe