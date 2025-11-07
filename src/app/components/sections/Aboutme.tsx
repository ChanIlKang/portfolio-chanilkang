const Aboutme = () => {
  const aboutmeData = [
    {
      title: "Name",
      description: "강찬일",
    },
    {
      title: "Birth",
      description: "1990.10.23",
    },
    {
      title: "Location",
      description: "인천광역시 부평구",
    },
    {
      title: "Education",
      description: "홍익대학교 게임소프트웨어학과",
    },
    {
      title: "Phone",
      description: "010-7511-8691",
    },
    {
      title: "Email",
      description: "programmer.chanil@gmail.com",
    },
    {
      title: "GitHub",
      description: "github.com/chanilkang",
      link: "https://github.com/chanilkang",
    },
    {
      title: "Website",
      description: "domathang.com",
      link: "https://domathang.com",
    },
  ];

  return (
    <section className="aspect-[16/9] bg-background">
      <div
        id="aboutme"
        className="container mx-auto w-full h-full flex items-center text-primary">
        <div className="w-full">
          <h1 className="mb-16 text-6xl font-bold text-accent">ABOUT ME</h1>
          <div className="grid grid-cols-2 gap-12">
            {aboutmeData.map((item) => (
              <div key={item.title} className="flex flex-col gap-2">
                <span className="text-accent-500 text-sm font-semibold tracking-tight uppercase">
                  {item.title}
                </span>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-lg hover:text-accent transition-colors duration-200">
                    {item.description}
                  </a>
                ) : (
                  <p className="text-primary text-lg">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
