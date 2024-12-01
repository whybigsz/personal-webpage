import { Home, Folder, FileEdit, Award, Send } from "lucide-react";
import useDetectKeyboardOpen from "use-detect-keyboard-open";
import { Link as ScrollLink, scroller } from "react-scroll";
import React, { useState, useEffect, useCallback } from "react";
import { useMediaQuery } from 'react-responsive';

export const navData = [
  { name: "Início", path: "home", icon: Home },
  { name: "Projetos", path: "projects", icon: Folder },
  { name: "Serviços", path: "services", icon: FileEdit },
  { name: "Experiência", path: "experience", icon: Award },
  { name: "Contactar", path: "contact", icon: Send },
];

const Nav = () => {
  const isKeyboardOpen = useDetectKeyboardOpen();
  const [activeSection, setActiveSection] = useState("home");
  const isXlDisplay = useMediaQuery({ query: '(max-width: 1279px)' });
  // Improved section tracking using IntersectionObserver
  const updateActiveSection = useCallback(() => {
    const sections = navData.map((link) => document.getElementById(link.path));
    let mostVisibleSection = "home"; // Default to home
    let maxVisibility = 0;

    sections.forEach((section) => {
      if (section) {
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.min(
          rect.bottom,
          window.innerHeight || document.documentElement.clientHeight
        ) - Math.max(rect.top, 0);

        const visibilityPercentage = visibleHeight / rect.height;

        if (visibilityPercentage > maxVisibility) {
          maxVisibility = visibilityPercentage;
          mostVisibleSection = section.id;
        }
      }
    });

    setActiveSection(mostVisibleSection);
  }, []);

  // Use IntersectionObserver for tracking
  useEffect(() => {
    const sections = navData.map((link) => document.getElementById(link.path));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // Trigger when 50% of section is visible
      }
    );

    // Observe sections
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Additional scroll event for more precise tracking
    window.addEventListener('scroll', updateActiveSection);

    // Set initial active section
    updateActiveSection();

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, [updateActiveSection]);


  const isActive = (path: string) => activeSection === path;

  return (
    <nav
      className={`fixed side-nav top-auto bottom-1/2 right-[10%] transform translate-y-1/2 mb-4
      w-16 max-w-md z-50 side-nav md:bottom-10 md:w-[90%] xl:left-1/2 xl:-translate-x-1/2 ${isKeyboardOpen ? "xs:hidden" : ""
        }`}
    >
      <div
        className="flex flex-col xl:flex-row items-center justify-between w-full h-full gap-y-10 px-4 py-4 md:px-40
        xl:px-8 bg-zinc-800 backdrop-blur-md shadow-lg rounded-full text-3xl xl:text-xl "
      >
        {navData.map((link, index) => {
          const Icon = link.icon;
          const active = isActive(link.path);

          return (
            <ScrollLink
              key={index}
              to={link.path}
              spy={true}
              smooth={true}
              offset={link.path === "projects" && isXlDisplay ? 370 : -70}
              duration={500}
              onClick={() => setActiveSection(link.path)}
              className={`text-white relative flex items-center justify-center w-10 h-10 text-3xl group hover:text-white
                transition-all duration-300 cursor-pointer`}
            >
              <div className="absolute pr-14 right-0 hidden sm:group-hover:hidden group-hover:block">
                <div className="bg-rose-600 bg-opacity-70 text-white items-center p-1 rounded-md">
                  <div className="xl:hidden text-[12px] leading-none font-bold capitalize">
                    {link.name}
                  </div>
                </div>
              </div>
              <div className="relative w-full h-full flex items-center justify-center">
                <div
                  className={`absolute inset-0 rounded-full bg-rose-600 transition-opacity duration-300 ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                ></div>
                <Icon className="w-6 h-6 z-10" />
              </div>
            </ScrollLink>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;