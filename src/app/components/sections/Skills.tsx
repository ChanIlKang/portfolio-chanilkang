const Skills = () => {
  const languages = [
    {
      name: "JavaScript",
      bgColor: "bg-yellow-400",
    },
    {
      name: "TypeScript",
      bgColor: "bg-blue-500",
    },
    {
      name: "Java",
      bgColor: "bg-red-500",
    },
  ];
  const frontend = [
    {
      name: "React",
      bgColor: "bg-blue-500",
    },
    {
      name: "Next.js",
      bgColor: "bg-green-500",
    },
    {
      name: "Vue.js",
      bgColor: "bg-[#42b883]",
    },
    {
      name: "Flutter",
      bgColor: "bg-green-500",
    },
  ];
  const backend = [
    {
      name: "Firebase",
      bgColor: "bg-yellow-500",
    },
  ];
  const devOps = [
    {
      name: "Git",
      bgColor: "bg-purple-500",
    },
    {
      name: "AWS",
      bgColor: "bg-orange-500",
    },
  ];

  const skillCategories = [
    { label: "Languages", items: languages },
    { label: "Frontend", items: frontend },
    { label: "Backend", items: backend },
    { label: "DevOps", items: devOps },
  ];

  return (
    <section id="skills" className="aspect-[16/9] bg-black">
      <div className="container mx-auto w-full h-full flex items-center text-white">
        <div className="w-full">
          <h1 className="mb-16 text-6xl font-bold text-accent">SKILLS</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skillCategories.map((category) => (
              <div key={category.label} className="flex flex-col gap-4">
                <span className="text-accent-400 text-sm tracking-tight uppercase">
                  {category.label}
                </span>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className={`${item.bgColor} px-4 py-2 text-center font-semibold rounded-lg ${
                        item.name === "JavaScript" ? "text-black" : "text-white"
                      }`}>
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
          