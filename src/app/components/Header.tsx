"use client";

import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionList = [
    {
      name: "ABOUT ME",
      href: "#aboutme",
    },
    {
      name: "SKILLS",
      href: "#skills",
    },
    {
      name: "CAREER",
      href: "#career",
    },
    {
      name: "PROJECTS",
      href: "#projects",
    },
    {
      name: "OTHERS",
      href: "#others",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > window.innerHeight * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className="w-full fixed top-0 z-100">
      <nav className="navbar">
        <div className="header-container h-16 flex justify-between items-center mx-auto">
          {!isScrolled ? (
            <h1
              key="top"
              className="text-2xl font-bold text-accent animate-[fade-in_.28s_ease-out]">
              강찬일 포트폴리오
            </h1>
          ) : (
            <h1
              key="scrolled"
              className="text-3xl font-bold text-accent animate-[fade-in_.28s_ease-out]">
              KCI
            </h1>
          )}
          <div className="relative">
            {!isMenuOpen ? (
              <div
                className="flex flex-col gap-1 justify-center  h-6 cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className="block w-6 h-0.5 bg-accent"></span>
                <span className="block w-6 h-0.5 bg-accent"></span>
                <span className="block w-6 h-0.5 bg-accent"></span>
              </div>
            ) : (
              <div
                className="relative w-6 h-6 cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-accent -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
                <span className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-accent -translate-x-1/2 -translate-y-1/2 -rotate-45"></span>
              </div>
            )}
            <div className={`flex flex-col gap-1 absolute top-[-12px] right-[-12px] bg-foreground text-black py-10 px-6 z-[-1] ${isMenuOpen ? 'animate-[fade-in_.28s_ease-out]' : 'sr-only'}`}>
              {sectionList.map((section) => {
                return (
                  <a
                    href={section.href}
                    key={section.name}
                    className="text-accent text-lg w-40 px-2 py-1 hover:bg-accent hover:text-foreground">
                    {section.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
