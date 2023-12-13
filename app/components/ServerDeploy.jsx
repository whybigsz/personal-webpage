"use client"
import { useRive,useStateMachineInput } from '@rive-app/react-canvas';
import { useState, useEffect } from "react";


export default function Logo() {


  const { RiveComponent, rive } = useRive({
    src: 'server-deploy.riv',
    stateMachines:"State Machine 1",
    artboard: '56811-running-server.json',
    autoplay: true,
    onStateChange: (event) => {
      console.log(event.data[0]);
    },
  });

  const [scale, setScale] = useState(1);

    useEffect(() => {
      const handleResize = () => {
        // Adjust the scale based on the viewport width
        const screenSize = window.innerWidth;

        if (screenSize <= 479) {
          setScale(0.5);
        } else if (screenSize <= 639) {
          setScale(0.6);
        } else if (screenSize <= 767) {
          setScale(0.7);
        } else if (screenSize <= 1023) {
          setScale(0.7);
        } else if (screenSize <= 1279) {
          setScale(1);
        } else {
          setScale(1.1); // Fallback for larger screens
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
    }, []);

    const dynamicSize = `${scale * 500}px`;




  return (
    // The animation will fit to the parent element, so we set a large height
    // and width for this example.

    <div className='flex items-center'>
        <RiveComponent
        style={{width:dynamicSize, height: dynamicSize }}
         />
      </div>
  );
}