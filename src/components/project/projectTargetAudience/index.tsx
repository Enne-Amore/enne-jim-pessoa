import Image from "next/image";

export default function ProjectTargetAudience() {
  return (
    <section
      id={`target-audience-cnbpb`}
      className={`flex flex-col justify-center items-center gap-12 xl:w-[1074px] xl:flex-row xl:justify-between`}
    >
      <div
        className={`bg-[#FFFEF6]/30 flex flex-col items-center gap-1.5 border border-[#040008] rounded-4xl pl-10 pr-5 pt-7 pb-6 xl:pl-14 xl:pr-6 xl:pt-8 xl:pb-7`}
      >
        <h2
          className={`font-geometos-rounded text-28px text-shadow-2xs bg-gradient-to-r from-[#713CA6] to-[#6A4EA6] text-transparent bg-clip-text -ml-6 xl:text-32px xl:-ml-8`}
        >
          Público-Alvo
        </h2>

        <ul
          className={`w-[255px] list-['⭐'] list-outside text-[#242325] space-y-2 xl:w-[320px]`}
        >
          <li
            className={`font-open-dyslexic text-xl text-shadow-2xs pl-0.5 xl:pl-1 xl:text-2xl`}
          >
            Comunidade não-binária
          </li>

          <li
            className={`font-open-dyslexic text-xl text-shadow-2xs pl-0.5 xl:pl-1 xl:text-2xl`}
          >
            Comunidade residente do Estado da Paraíba
          </li>
        </ul>
      </div>

      <figure>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet="/assets/cnbpb-populacao-nb.avif"
            width={560}
            height={298}
            type="image/avif"
          />

          <Image
            src={`/assets/cnbpb-populacao-nb.avif`}
            alt={``}
            width={330}
            height={175}
            className={`filter drop-shadow`}
          />
        </picture>
      </figure>
    </section>
  );
}
