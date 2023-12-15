
import {
  HiHome,
  HiUser,
HiViewColumns,
HiRectangleGroup,
HiChatBubbleBottomCenterText,
HiEnvelope} from 'react-icons/hi2'


export const navData = [
  { name: 'Início', path: '/', icon: <HiHome  /> },
  { name: 'Sobre', path: 'about', icon: <HiUser /> },
  { name: 'Projetos', path: 'projects', icon: <HiViewColumns /> },
  {
  name: 'contactar',
  path: 'contact',
  icon: <HiEnvelope />,
  },
  ];

  import {Link as L} from "react-scroll"
  import React, {useEffect} from 'react'
  import {useRouter} from 'next/navigation';



  const Nav = () => {

    const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    const navElement = document.getElementById('nav');

    if (navElement) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Keyboard is open, hide the navigation bar
            navElement.style.display = 'none';
          } else {
            // Keyboard is closed, show the navigation bar
            navElement.style.display = 'block';
          }
        });
      }, {
        root: null,
        threshold: 0,
      });

      observer.observe(navElement);

      // Clean up the observer when the component is unmounted
      return () => {
        observer.disconnect();
      };
    }

    // Return an empty cleanup function if navElement is not found
    return () => {};
  }, []);

  const navElement = document.getElementById('nav');

  const handleKeyboardVisibleChange = (event) => {
    if (navElement) {
      if (event.value) {
        // Keyboard is open, hide the navigation bar
        navElement.style.display = 'none';
      } else {
        // Keyboard is closed, show the navigation bar
        navElement.style.display = 'block';
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keyboardvisibilitychange', handleKeyboardVisibleChange);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('keyboardvisibilitychange', handleKeyboardVisibleChange);
    };
  }, []);


    return (
      // <nav className='flex flex-col items-center xl:justify-center gap-y-4
      // fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-8 w-full
      // xl:w-16 xl:max-w-md xl:fixed
      <nav   className='flex items-center justify-center fixed top-auto bottom-1/2 right-[2%] transform translate-y-1/2
      w-16 max-w-md z-50 md:bottom-10 md:w-full md:left-1/2 md:-translate-x-1/2'>
  <div className='flex flex-col md:flex-row items-center justify-between w-full  h-full gap-y-10 px-4 py-4 md:px-40
  xl:px-8  bg-black/30 rounded-full text-3xl xl:text-xl'>
          {navData.map((link,index) => {
            return (
              <L
              key={index}
              to={link.path}
              spy={true}
              smooth={true}
              offset={index==1 ? 50 : 0}
              duration={500}
              className={`${ link.path === pathname && 'text-blue'}
                 relative flex items-center text-white group hover:text-blue transition-all
                        duration-300`}

                        >
                    <div className='absolute pr-14 right-0 hidden group-hover:flex'>
                    <div className='bg-opacity-70 relative flex text-white items-center p- [6px] rounded-[3px]'>
                    <div className='md:hidden text-[12px] leading-none font-bold capitalize'>
                    {link.name}
                    </div>
                    </div>
                    </div>
                    {/* icon */}
                    <div>{link.icon}</div>
              </L>
            )

          })}
        </div>
      </nav>
    );
  }

  export default Nav