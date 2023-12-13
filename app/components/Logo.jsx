import { useRive,useStateMachineInput } from '@rive-app/react-canvas';
import { useState, useEffect } from "react";


export default function logo() {


  const { RiveComponent, rive } = useRive({
    src: 'gyygy.riv',
    stateMachines:"State Machine 1",
    artboard: 'Hero Demo Listeners Resize',
    autoplay: true,
    onStateChange: (event) => {
      console.log(event.data[0]);
    },
  });

   useStateMachineInput(
    rive,
    "State Machine 1",
    "numSize",0
  );
  useStateMachineInput(
    rive,
    "State Machine 1",
    "numX",12
  );
  useStateMachineInput(
    rive,
    "State Machine 1",
    "numY",55
  );

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the scale based on the viewport width
      const screenSize = screen.width;


      if(screenSize < 639){
        setScale(0.5);
      }else{
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
  }, []);

  const dynamicSize = `${scale * 100}px`;

  return (
    // The animation will fit to the parent element, so we set a large height
    // and width for this example.

    <div className='flex items-center justify-between  rounded-full overflow-hidden'>
        <RiveComponent
        style={{ width: dynamicSize, height: dynamicSize }}
         />
      </div>
  );
}