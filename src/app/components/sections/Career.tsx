const Career = () => {
  const careerData = {
    company: "에퀴코리아(주)",
    period: "2023년 6월 - 현재",
    projects: [
      {
        title: "LexCloud 내부 직원용 일정 페이지 리뉴얼",
        period: "23년도 3/4 분기",
        description: "새롭게 디자인한 일정 페이지 UI 및 기능 개선 작업",
      },
      {
        title: "LexCloud 플랫폼 유지보수",
        period: "23년도 4/4 분기 - 현재",
        description: "사용자(내부 직원, 고객, 번역사)의 기능 요청 사항 반영 및 에러 피드백 대응",
        tech: "Vue2, PHP, Sass",
      },
      {
        title: "English Tutor App 디자인",
        period: "23년도 4/4 분기",
        description: "인공지능 영어 학습 앱의 UI / UX 기획 및 화면 디자인",
        tech: "Figma",
      },
      {
        title: "TransCreation",
        period: "23년도 4/4 분기 - 24년도 4/4 분기",
        description: "다국어 콘텐츠 생성형 AI 솔루션 개발 및 유지 보수",
      },
      {
        title: "TransKIND",
        period: "24년도 4/4 분기 - 25년도 2/4 분기",
        description: "TransCreation의 공시자료용 영어 번역 AI 솔루션 개발 및 유지 보수",
      },
      {
        title: "TransCreation Pro",
        period: "24년도 4/4 분기 - 25년도 3/4 분기",
        description: "번역사, 내부 직원 업무에 특화된 TransCreation 솔루션 개발 및 유지 보수",
        tech: "Vue3",
      },
      {
        title: "LexCloud 26",
        period: "25년도 3/4 분기 - 진행중",
        description: "Vue2, PHP 등 혼재된 기술로 제작된 기존 플랫폼 LexCloud를 React 기반으로 포팅",
        tech: "React",
      },
      {
        title: "Qurious PH",
        period: "25년도 4/4 분기 - 진행중",
        description: "필리핀 지사에서 개발한 인공지능 동시 통역 솔루션. Admin·Client 2개 레포를 React + Next.js 기반 단일 구조로 통합하여 개발 효율성과 UI·UX 개선",
        tech: "Next.js",
      },
    ],
  };

  return (
    <section id="career" className="aspect-[16/9] bg-black">
      <div className="container mx-auto w-full h-full flex items-center text-white">
        <div className="w-full">
          <h1 className="mb-16 text-6xl font-bold text-accent">CAREER</h1>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">{careerData.company}</h2>
            <span className="text-accent-400 text-sm tracking-tight">{careerData.period}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerData.projects.map((project, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <span className="text-accent-400 text-xs tracking-tight">{project.period}</span>
                  {project.tech && (
                    <span className="text-accent-300 text-xs">{project.tech}</span>
                  )}
                </div>
                <p className="text-accent-100 text-sm leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;