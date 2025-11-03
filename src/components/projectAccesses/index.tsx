import { ProjectsType } from "@/types/projectsType";
import Image from "next/image";
import { FaGlobe, FaFigma, FaGithub } from "react-icons/fa6";

export default function ProjectAccesses(props: ProjectsType["accesses"]) {
  return (
    <section
      id={props.id}
      className={`flex flex-col items-center gap-10 xl:gap-16`}
    >
      <figure>
        <Image
          src={props.img}
          alt={props.alt}
          width={320}
          height={170}
          className={`h-auto drop-shadow xl:w-[800px]`}
        />
      </figure>

      <ul className={`flex flex-col items-center gap-5 xl:flex-row xl:gap-8`}>
        {props.urlSite && (
          <li>
            <a
              href={props.urlSite}
              aria-label={props.ariaLabelSite}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-bold ${props.urlMainStyle} text-xl text-shadow-2xs flex items-center gap-2 px-5 py-2.5 rounded-4xl shadow transition duration-300 xl:text-2xl xl:px-8 xl:py-3.5`}
            >
              <FaGlobe className={`w-auto h-[25px] xl:h-[28px]`} />

              <span>Acessar site</span>
            </a>
          </li>
        )}

        {props.urlFigma && (
          <li>
            <a
              href={props.urlFigma}
              aria-label={props.ariaLabelFigma}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-bold ${props.urlSecondaryStyle} text-xl text-shadow-2xs flex items-center gap-2 px-5 py-2.5 rounded-4xl shadow transition duration-300 xl:text-2xl xl:px-8 xl:py-3.5`}
            >
              <FaFigma
                className={`w-[20px] h-[25px] xl:w-[23px] xl:h-[28px]`}
              />

              <span>Acessar protótipo</span>
            </a>
          </li>
        )}

        {props.urlGitHub && (
          <li>
            <a
              href={props.urlGitHub}
              aria-label={props.ariaLabelGitHub}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-bold ${props.urlSecondaryStyle} text-xl text-shadow-2xs flex items-center gap-2 px-5 py-2.5 rounded-4xl shadow transition duration-300 xl:text-2xl xl:px-8 xl:py-3.5`}
            >
              <FaGithub className={`w-auto h-[25px] xl:h-[28px]`} />

              <span>Acessar repositório</span>
            </a>
          </li>
        )}
      </ul>
    </section>
  );
}
