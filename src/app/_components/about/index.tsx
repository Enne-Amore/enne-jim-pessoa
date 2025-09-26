import Image from "next/image"
import { FaFileLines } from "react-icons/fa6"

export interface ResumesInterface {
  url: string,
  ariaLabel: string,
  label: string,
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
    }
  ]

  return (
    <section
      id="sobre"
      className={`w-full bg-gradient-to-b from-light-purple to-dark-purple px-9 pt-10 pb-16 flex flex-col items-center justify-center gap-12 shadow xl:flex-row xl:gap-100px xl:pt-14`}
    >
      <article className={`space-y-1 xl:w-[675px]`}>
        <h2 className={`font-title text-white-300 text-32px text-shadow-2xs`}>
          Conheça-me mais
        </h2>

        <div className={`font-text text-xl text-shadow-2xs leading-8`}>
          <p>
            Atuo em <strong>UI/UX Design</strong> e em <strong>Desenvolvimento Front-end</strong>, sou graduade em <strong>Sistemas Para Internet</strong> e estou me pós-graduando em <strong>User Experience</strong>, pois sempre amei trabalhar principalmente com o visual de projetos dentro da Tecnologia da Informação (TI) e do Design.
          </p>
          
          <p>
            Desenvolvo nessas áreas dentro e fora da faculdade continuamente, e também tenho interesse em ajudar comunidades minorizadas e diversas socialmente com empatia através das minhas habilidades técnicas e comportamentais nas quais vivo evoluindo diariamente, além de incluir <strong>acessibilidade web</strong> nos meus trabalhos.
          </p>
        </div>

        <ul className={`flex flex-col items-center gap-5 mt-7 xl:flex-row xl:mt-5`}>
          {resumes.map((resume, index) => (
            <li key={index}>
              <a
                href={resume.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={resume.ariaLabel}
                className={`flex gap-1.5 items-center font-bold text-base text-shadow-2xs bg-dark-pink-100/30 border-1 border-dark-pink-100 px-6 py-2.5 rounded-4xl shadow transition duration-300 hover:bg-dark-pink-100 focus-within:bg-dark-pink-100 active:bg-dark-pink-200`}
              >
                <span>
                  <FaFileLines className={`w-5 h-auto`} />
                </span>

                <span>
                  CV {resume.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </article>

      <figure className={`flex flex-col items-center gap-5`}>
        <Image
          src={"/assets/enne-jim-pessoa.png"}
          alt="Minha foto de perfil"
          width={240}
          height={240}
          className={`border-2 border-light-pink-100 shadow rounded-full xl:w-[300px]`}
        />

        <figcaption className={`flex flex-col items-center gap-2.5`}>
          <span className={`font-title text-white-200 text-2xl text-shadow-2xs xl:text-28px`}>Enne Jim Pessoa</span>

          <span className={`font-medium text-gray text-xs text-shadow-2xs bg-gradient-to-br from-light-pink-200 to-light-pink-100 shadow px-4 py-1.5 rounded-4xl xl:text-base`}>Ê/Elu/-e</span>
        </figcaption>
      </figure>
    </section>
  )
}