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

  return (
    <div id="skills" className="w-full bg-green-200">
      <div
        id="welcome"
        className="max-w-[1080px] h-screen bg-orange-300 mx-auto pt-16 px-6 pb-6 flex flex-col justify-center items-center">
        <h1 className="mb-8 text-4xl font-bold">SKILLS</h1>
        <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 3fr" }}>
          <p className="flex items-center">Languages</p>
          <div className="flex justify-start gap-2">
            {languages.map((language) => (
              <div
                key={language.name}
                className={`${language.bgColor} w-xxs h-fit px-4 py-2 text-center font-semibold rounded-lg ${language.name === "JavaScript" ? "text-black" : "text-white"}`}>
                {language.name}
              </div>
            ))}
          </div>
          <p className="flex items-center">Frontend</p>
          <div className="flex justify-start gap-2">
            {frontend.map((frontend) => (
              <div
                key={frontend.name}
                className={`${frontend.bgColor} w-xxs h-fit px-4 py-2 text-center font-semibold text-white rounded-lg`}>
                {frontend.name}
              </div>
            ))}
          </div>
          <p className="flex items-center">Backend</p>
          <div className="flex justify-start gap-2">
            {backend.map((backend) => (
              <div
                key={backend.name}
                className={`${backend.bgColor} w-xxs h-fit px-4 py-2 text-center font-semibold text-white rounded-lg`}>
                {backend.name}
              </div>
            ))}
          </div>
          <p className="flex items-center">DevOps</p>
          <div className="flex justify-start gap-2">
            {devOps.map((devOp) => (
              <div
                key={devOp.name}
                className={`${devOp.bgColor} w-xxs h-fit px-4 py-2 text-center font-semibold text-white rounded-lg`}>
                {devOp.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>         
  );          
};

export default Skills;
          