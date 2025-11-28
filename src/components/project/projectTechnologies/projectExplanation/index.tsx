import Image from "next/image";

export default function ProjectExplanation() {
  return (
    <article
      className={`flex flex-col justify-center items-center gap-9 xl:w-[1074px] xl:flex-row xl:justify-between`}
    >
      <div className={`space-y-1`}>
        <h2
          className={`font-geometos-rounded text-28px text-center text-shadow-2xs bg-gradient-to-r from-[#713CA6] to-[#6A4EA6] text-transparent bg-clip-text dark:from-[#F2E530] dark:to-[#ECE35A] xl:text-32px`}
        >
          Tecnologias Utilizadas
        </h2>

        <p
          className={`font-open-dyslexic text-xl text-shadow-2xs leading-9 xl:w-[487px] xl:text-2xl xl:leading-10`}
        >
          Como o site consiste em uma <strong>Landing Page simples e informativa</strong> de apenas uma página com algumas animações e funcionalidades essenciais, bastou somente utilizar a tríade básica das linguagens <strong>HTML5, CSS3 e Javascript</strong>.
        </p>
      </div>

      <figure>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`/assets/cnbpb-technologies.png`}
            width={450}
            height={216}
            type="image/png"
          />

          <Image
            src={`/assets/cnbpb-technologies.png`}
            alt={`Logo de cada tecnologia utilizada: HTML5, CSS3 e Javascript`}
            width={300}
            height={104}
            className={`filter drop-shadow`}
          />
        </picture>
      </figure>
    </article>
  );
}
