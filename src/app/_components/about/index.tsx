import Image from "next/image";
import { FaFileLines } from "react-icons/fa6";

export interface ResumesInterface {
  url: string;
  ariaLabel: string;
  label: string;
}

export default function About() {
  // List of resumes data
  const resumes: ResumesInterface[] = [
    {
      url: "https://docs.google.com/document/d/1IRv4gIQw279SAWeABoCGJwKWRT65rZhoKe_wsl-4e-g/edit?usp=sharing",
      ariaLabel: "Ir ao meu currículo de UI/UX Design",
      label: "UI/UX Design",
    },
    {
      url: "https://docs.google.com/document/d/1lQnBTyK2iCydB-bHw4n8tUW54pEtBqR86aQudit6Blo/edit?usp=sharing",
      ariaLabel: "Ir ao meu currículo de Front-end",
      label: "Front-end",
    },
  ];

  return (
    <section
      id="sobre"
      className={`w-full bg-gradient-to-b from-light-purple to-dark-purple px-9 pt-10 pb-16 flex flex-col items-center justify-center gap-12 shadow xl:flex-row xl:gap-100px xl:pt-14`}
    >
      <article className={`xl:space-y-1 xl:w-[675px]`}>
        <h2
          className={`font-lexia-readable text-white-300 text-32px text-shadow-2xs`}
        >
          Sobre mim
        </h2>

        <p className={`font-open-dyslexic text-xl text-shadow-2xs leading-8 xl:text-2xl xl:leading-9`}>
          Trabalhar na interseção entre <strong>Tecnologia e <span lang="en">Design</span></strong> é onde posso unir lógica e sensibilidade para criar <strong>experiências digitais acessíveis e cheias de significado</strong>. Valorizo muito a <strong>comunicação contínua, o trabalho em equipe e o aprendizado compartilhado</strong>, pois sei que boas soluções nascem de pessoas diversas que colaboram com empatia e escuta ativa. Vejo nas minhas áreas não apenas uma ferramenta estética, mas uma forma de <strong>transformar o digital em um espaço mais humano e acolhedor</strong>.
        </p>

        <ul
          className={`flex flex-col items-center gap-5 mt-7 xl:flex-row xl:mt-5`}
        >
          {resumes.map((resume, index) => (
            <li key={index}>
              <a
                href={resume.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={resume.ariaLabel}
                className={`flex gap-1.5 items-center font-bold text-base text-shadow-2xs bg-dark-pink-100/30 border-1 border-dark-pink-100 px-6 py-2.5 rounded-4xl shadow transition duration-300 hover:bg-dark-pink-100 focus-visible:bg-dark-pink-100 active:bg-dark-pink-200`}
              >
                <span>
                  <FaFileLines className={`w-5 h-auto`} />
                </span>

                <span lang="en">CV {resume.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </article>

      <figure className={`relative flex flex-col items-center gap-5`}>
        <Image
          src={"/assets/enne-jim-pessoa.png"}
          alt="Minha foto de perfil"
          width={240}
          height={240}
          className={`border-2 border-light-pink-100 shadow rounded-full xl:w-[300px]`}
        />

        {/* Color overlay */}
        <div
          className={`absolute inset-0 h-[240px] bg-gradient-to-br from-light-pink-100/10 to-light-pink-100 opacity-20 rounded-full xl:h-[300px]`}
        />

        <figcaption className={`flex flex-col items-center gap-2.5`}>
          <span
            className={`font-lexia-readable text-white-200 text-2xl text-shadow-2xs xl:text-28px`}
          >
            Enne Jim Pessoa
          </span>

          <span
            className={`font-medium text-gray text-xs text-shadow-2xs bg-gradient-to-br from-light-pink-200 to-light-pink-100 shadow px-2.5 py-1 rounded-4xl xl:text-base xl:px-3.5`}
          >
            Ê/Elu/-e
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
