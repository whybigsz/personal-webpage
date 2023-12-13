import { useRive } from '@rive-app/react-canvas';


import React, { useEffect, useState } from 'react';

export default function Herobot() {
  const { RiveComponent, rive } = useRive({
    src: 'hero-bot.riv',
    stateMachines: 'State Machine 1',
    artboard: 'HeroBot',
    autoplay: true,
  });

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the scale based on the viewport width
      const screenSize = window.innerWidth;
      const screenSize2 = screen.width;

      if (screenSize <= 479) {
        setScale(0.5);
      } else if (screenSize <= 639) {
        setScale(0.6);
      } else if (screenSize <= 767) {
        setScale(0.8);
      } else if (screenSize <= 1023) {
        setScale(0.8);
      } else if (screenSize <= 1279) {
        setScale(0.8);
      } else {
        setScale(1.1); // Fallback for larger screens
      }
      if(screenSize2 < 639){
        setScale(0.5);
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
    <div style={{ width: dynamicSize, height: dynamicSize, }}>
      <RiveComponent />
    </div>
  );
}
