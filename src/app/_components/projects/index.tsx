import Image from "next/image";
import Link from "next/link";

export interface ProjectsInterface {
  href: string;
  ariaLabel: string;
  imgMobile: string;
  imgDesktop: string;
  alt: string;
  positions: string[];
  caption: string;
}

export default function Projects() {
  const projects: ProjectsInterface[] = [
    {
      href: "/coletive-nao-binarie-paraiba",
      ariaLabel: "Ir à página desse projeto específico",
      imgMobile: "cnbpb-mobile.png",
      imgDesktop: "cnbpb-desktop.png",
      alt: "Logo do Coletive Não-Binárie da Paraíba",
      positions: ["UI/UX Design", "Front-end"],
      caption: "Landing Page",
    },
    {
      href: "/janai-amitaf-producoes",
      ariaLabel: "Ir à página desse projeto específico",
      imgMobile: "janai-amitaf-mobile.png",
      imgDesktop: "janai-amitaf-desktop.png",
      alt: "Logo de Janai Amitáf Produções",
      positions: ["UI/UX Design", "Front-end"],
      caption: "Portfólio Web",
    },
  ];

  return (
    <section
      className={`w-[320px] flex flex-col items-center gap-12 xl:w-[1078px] xl:px-0`}
    >
      <h2
        className={`w-full font-title text-28px text-shadow-2xs shadow bg-gradient-to-br from-dark-purple to-light-purple px-9 pt-3 pb-3.5 rounded-full`}
      >
        Projetos
      </h2>

      <ul className={`flex flex-col gap-10 xl:flex-row xl:flex-wrap`}>
        {projects.map((project, index) => (
          <li key={index}>
            <Link href={project.href} aria-label={project.ariaLabel} rel="next">
              <figure
                className={`relative w-[280px] border-2 border-light-pink-100 rounded-4xl shadow overflow-hidden xl:w-[449px]`}
              >
                <picture>
                  <source
                    media="(min-width: 1280px)"
                    srcSet={`assets/${project.imgDesktop}`}
                    width={449}
                    height={281}
                    type="image/png"
                  />

                  <Image
                    src={`/assets/${project.imgMobile}`}
                    alt={project.alt}
                    width={280}
                    height={400}
                    className={`rounded-4xl transition duration-300 hover:scale-110`}
                  />
                </picture>

                <figcaption
                  className={`absolute bottom-5 w-full flex justify-center`}
                >
                  <span
                    className={`w-max text-gray text-xs text-shadow-2xs bg-white/90 px-2.5 py-1 rounded-4xl`}
                  >
                    {project.caption}
                  </span>
                </figcaption>

                <ul
                  className={`absolute top-5 w-full flex justify-center gap-3`}
                >
                  {project.positions.map((position, index) => (
                    <li
                      key={index}
                      className={`w-max text-gray text-xs text-shadow-2xs bg-white/90 px-2.5 py-1 rounded-4xl`}
                    >
                      {position}
                    </li>
                  ))}
                </ul>
              </figure>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
