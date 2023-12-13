import { useRive,useStateMachineInput } from '@rive-app/react-canvas';
import { useState, useEffect } from "react";
import { useLottie } from "lottie-react";
import mv from '../sp.json';
export default function logo() {


  const SM = "State Machine 1";
    const IP = "Click";

    const {rive, RiveComponent } = useRive({
      src: 'RiveRobot.riv',
      stateMachines: SM,
      autoplay: true,
    });

    const onHoverIP = useStateMachineInput(
      rive,
      SM,
      IP
    );

    const options = {
        animationData: mv,
        loop: true,
      };

    const { View } = useLottie(options);

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
          setScale(0.8);
        } else if (screenSize <= 1023) {
          setScale(0.9);
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

        <RiveComponent
        scaleX="-1"
  scaleY="1"
        onMouseOver={() => onHoverIP.fire()}
        style={{width:dynamicSize, height:dynamicSize ,transform: 'scaleX(-1)', }}
         />
  );
}