const Header = () => {
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
      href: "#others"
    },
  ];
  return (
    <div id="header" className="w-full bg-white fixed top-0">
      <div className="max-w-[1080px] h-16 bg-white flex justify-start items-center mx-auto">
        <h1>강찬일 포트폴리오</h1>
        <div className="flex justify-start items-center ml-auto gap-4">
          {sectionList.map((section) => (
            <a href={section.href} key={section.name}>
              {section.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
