import Header from "./components/Header";
import Welcome from "./components/sections/Welcome";
import Aboutme from "./components/sections/Aboutme";
import Skills from "./components/sections/Skills";
import Career from "./components/sections/Career";

export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <Aboutme />
      <Skills />
      <Career />
    </>
  );
}
