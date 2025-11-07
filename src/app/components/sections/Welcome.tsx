import Image from "next/image";

const Welcome = () => {
  return (
    <section className="aspect-[16/9] bg-black">
      <div className="container mx-auto w-full h-full flex items-center justify-between text-white">
        <div>
          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col gap-12 justify-center">
              <h1 className="text-6xl font-bold text-accent">
                Frontend
                <br />
                Developer<i className="animate-pulse ">.</i>
              </h1>
              <p className="text-md text-accent-100">
                I am a frontend developer with a passion for creating beautiful
                and functional web applications.
              </p>
            </div>
            <div className="relative ml-auto pr-12">
              <Image
                src="/imgs/profile-img.jpg"
                alt="profile"
                width={240}
                height={240}
                className="z-[1] relative"
              />
              <div className="absolute top-8 left-8 w-60 h-80 border-2 opacity-50"></div>
            </div>
          </div>
          <div className="flex gap-10">
            <p className="text-accent-400 w-60 tracking-tight text-sm">Highly skilled at progressive enhancement and UI UX engineering.</p>
            <p className="text-accent-400 w-60 tracking-tight text-sm">Currently developing services for translators and reviewers at Lexcode.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
