import Hero from "../hero";

export default function Main() {
  return (
    <main className={`flex flex-col items-center gap-70px py-11 xl:gap-100px`}>
      <Hero />
    </main>
  );
}
