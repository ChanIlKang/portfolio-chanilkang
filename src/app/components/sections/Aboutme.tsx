const Aboutme = () => {
  const aboutmeData = [
    {
      icon: "👤",
      title: "이름",
      description: "강찬일",
    },
    {
      icon: "👤",
      title: "생년월일",
      description: "1990.10.23",
    },
    {
      icon: "👤",
      title: "사는곳",
      description: "인천광역시 부평구",
    },
    {
      icon: "👤",
      title: "최종학력",
      description: "홍익대학교 게임소프트웨어학과",
    },
    {
      icon: "👤",
      title: "연락처",
      description: "010-7511-8691",
    },
    {
      icon: "👤",
      title: "이메일",
      description: "programmer.chanil@gmail.com",
    },
    {
      icon: "👤",
      title: "깃허브",
      description: "https://github.com/chanilkang",
    },
    {
      icon: "👤",
      title: "개인 사이트",
      description: "https://domathang.com",
    },
  ];
  return (
    <div className="w-full bg-green-200">
      <div
        id="aboutme"
        className="max-w-[1080px] h-screen bg-red-300 mx-auto pt-16 px-6 pb-6 flex flex-col justify-center items-center">
        <h1 className="mb-12 text-4xl font-bold">ABOUT ME</h1>
        <div className="grid grid-cols-4 gap-4">
          {aboutmeData.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-center items-center">
              <span className="font-bold text-xl text-black">{item.title}</span>
              <a>{item.description}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
