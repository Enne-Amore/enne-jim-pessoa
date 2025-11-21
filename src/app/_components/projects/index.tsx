import { ProjectsType } from "@/types/projectsType";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const cards: ProjectsType["card"][] = projects.map((project) => project.card);

  return (
    <section
      id="projetos"
      className={`w-[320px] flex flex-col items-center gap-12 xl:w-[1078px] xl:px-0`}
    >
      <h2
        className={`w-full font-lexia-readable text-28px text-shadow-2xs shadow bg-gradient-to-br from-dark-purple to-light-purple px-9 pt-3.5 pb-3 rounded-full xl:pb-4`}
      >
        Projetos
      </h2>

      <ul className={`flex flex-col gap-10 xl:flex-row xl:flex-wrap`}>
        {cards.map((card, index) => (
          <li key={index}>
            <Link
              href={card.url}
              aria-label={card.ariaLabel}
              rel="next"
              className={`rounded-4xl`}
            >
              <figure
                className={`relative w-[280px] border-2 border-light-pink-100 rounded-4xl shadow overflow-hidden transition duration-300 hover:border-light-pink-200 in-focus:border-light-pink-200 xl:w-[449px]`}
              >
                <picture>
                  <source
                    media="(min-width: 1280px)"
                    srcSet={`assets/${card.imgDesktop}`}
                    width={449}
                    height={281}
                    type="image/avif"
                  />

                  <Image
                    src={`/assets/${card.imgMobile}`}
                    alt={card.alt}
                    width={280}
                    height={400}
                    className={`rounded-4xl transition duration-300 in-focus:scale-110`}
                  />
                </picture>

                {/* Color overlay */}
                <div
                  className={`absolute inset-0 h-[400px] bg-gradient-to-b from-light-pink-100/10 to-light-pink-100 opacity-0 rounded-4xl z-10 transition duration-300 hover:opacity-20 in-focus:opacity-20 xl:h-[281px]`}
                />

                <figcaption
                  className={`absolute bottom-4 w-full flex justify-center`}
                >
                  <span
                    className={`w-max text-gray text-xs text-shadow-2xs select-none bg-white/90 px-2.5 py-1 rounded-4xl`}
                  >
                    {card.caption}
                  </span>
                </figcaption>

                {/* <ul
                  className={`absolute top-4 w-full flex justify-center gap-3`}
                >
                  {card.positions.map((position, index) => (
                    <li
                      key={index}
                      className={`w-max text-gray text-xs text-shadow-2xs select-none bg-white/90 px-2.5 py-1 rounded-4xl`}
                      lang="en"
                    >
                      {position}
                    </li>
                  ))}
                </ul> */}
              </figure>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
