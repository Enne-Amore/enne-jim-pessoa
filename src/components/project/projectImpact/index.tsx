import Image from "next/image";

export default function ProjectImpact() {
  return (
    <section
      id={`impact-cnbpb`}
      className={`w-full bg-gradient-to-b from-[#F2E530] to-[#FFCE31] flex flex-col justify-center items-center gap-10 px-8 pt-11 pb-16 shadow xl:flex-row xl:gap-28 xl:px-100px xl:py-70px`}
    >
      <div className={`space-y-1`}>
        <h2
          className={`font-geometos-rounded text-28px text-center text-shadow-2xs bg-gradient-to-r from-[#713CA6] to-[#6A4EA6] text-transparent bg-clip-text xl:text-32px`}
        >
          Impacto
        </h2>

        <ul
          className={`list-['⭐'] list-outside ml-5.5 space-y-3 xl:w-[551px] xl:ml-auto`}
        >
          <li
            className={`font-open-dyslexic text-xl text-shadow-2xs leading-7 pl-2 xl:pl-1 xl:leading-relaxed xl:text-2xl`}
          >
            Intuitividade em apresentar informações
          </li>

          <li
            className={`font-open-dyslexic text-xl text-shadow-2xs leading-7 pl-2 xl:pl-1 xl:leading-relaxed xl:text-2xl`}
          >
            Instigação em chamar o público-alvo para ser mapeado
          </li>

          <li
            className={`font-open-dyslexic text-xl text-shadow-2xs leading-7 pl-2 xl:pl-1 xl:leading-relaxed xl:text-2xl`}
          >
            Otimização de comunicação e de mobilização
          </li>

          <li
            className={`font-open-dyslexic text-xl text-shadow-2xs leading-7 pl-2 xl:pl-1 xl:leading-relaxed xl:text-2xl`}
          >
            Credibilidade e profissionalismo
          </li>

          <li
            className={`font-open-dyslexic text-xl text-shadow-2xs leading-7 pl-2 xl:pl-1 xl:leading-relaxed xl:text-2xl`}
          >
            Alcance maior de conscientização
          </li>

          <li
            className={`font-open-dyslexic text-xl text-shadow-2xs leading-7 pl-2 xl:pl-1 xl:leading-relaxed xl:text-2xl`}
          >
            Agilidade para atualização de informações
          </li>
        </ul>
      </div>

      <figure>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`/assets/cnbpb-telas-desktop.png`}
            width={410}
            height={465}
            type="image/png"
          />

          <Image
            src={`/assets/cnbpb-telas-mobile.png`}
            alt={`Panfleto do Coletive destacando um QR Code para o site oficial da organização`}
            width={276}
            height={319}
            className={`filter drop-shadow`}
          />
        </picture>
      </figure>
    </section>
  );
}
