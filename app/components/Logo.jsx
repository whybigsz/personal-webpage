"use client"
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import { useState, useEffect } from "react";


export default function Logo() {


  const { RiveComponent, rive } = useRive({
    src: 'live_in_red.riv',
    // stateMachines: "State Machine 1",
    artboard: 'Artboard',
    autoplay: true,
    onStateChange: (event) => {
      console.log(event.data[0]);
    },
  });

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the scale based on the viewport width
      const screenSize = screen.width;


      if (screenSize < 639) {
        setScale(0.5);
      } else {
        setScale(1.3);
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

  const dynamicSize = `${scale * 150}px`;

  return (
    // The animation will fit to the parent element, so we set a large height
    // and width for this example.

    <div className='flex items-center justify-between rounded-full overflow-hidden'>
      <RiveComponent
        style={{ width: dynamicSize, height: dynamicSize }}
      />
    </div>
  );
}