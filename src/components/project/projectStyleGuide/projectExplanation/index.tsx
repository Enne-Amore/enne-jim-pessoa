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
          Guia de Estilo
        </h2>

        <p
          className={`font-open-dyslexic text-xl text-shadow-2xs leading-9 xl:w-[530px] xl:text-2xl xl:leading-10`}
        >
          Utilizei a <strong>logo da organização</strong> como base somada à própria <strong>bandeira não-binária</strong>, a qual representa a comunidade, com o intuito de <strong>definir as cores e as fontes</strong> do site. Desse modo, a <strong>identidade do movimento social continua consistente</strong>.
        </p>
      </div>

      <figure>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`/assets/cnbpb-style-guide-desktop.png`}
            width={450}
            height={338}
            type="image/png"
          />

          <Image
            src={`/assets/cnbpb-style-guide-mobile.png`}
            alt={`Logo completa do Coletive Não-Binárie da Paraíba com a bandeira não-binária inclusa`}
            width={300}
            height={226}
            className={`rounded-4xl shadow`}
          />
        </picture>
      </figure>
    </article>
  );
}
