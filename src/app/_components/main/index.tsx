import About from "../about";
import Hero from "../hero";
import Projects from "../projects";

export default function Main() {
  return (
    <main
      className={`flex flex-col items-center gap-70px py-11 xl:gap-100px xl:py-70px`}
    >
      <Hero />

      <Projects />

      <About />
    </main>
  );
}
