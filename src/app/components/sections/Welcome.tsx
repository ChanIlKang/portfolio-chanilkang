const Welcome = () => {
  return (
    <div className="w-full bg-green-200">
      <div id="welcome" className="max-w-[1080px] h-screen bg-blue-300 mx-auto pt-16 px-6 pb-6 flex flex-col justify-center items-center">
        <h1 className="mb-8 text-4xl font-bold">강찬일</h1>
        <p className="text-lg">프론트엔드 개발자 포트폴리오</p>

        <p className="text-lg">안녕하세요, 근본적인 것에 집중하는 문제 해결 개발자 강찬일입니다.</p>
      </div>
    </div>
  );
};

export default Welcome;