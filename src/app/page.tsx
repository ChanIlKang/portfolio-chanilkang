import Header from "./components/Header";
import Welcome from "./components/sections/Welcome";
import Aboutme from "./components/sections/Aboutme";
import Skills from "./components/sections/Skills";

export default function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <Aboutme />
      <Skills />
    </div>
  );
}
