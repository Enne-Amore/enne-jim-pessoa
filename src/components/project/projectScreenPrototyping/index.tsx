import Image from "next/image";

export default function ProjectScreenPrototyping() {
  return (
    <section
      id={`screen-prototyping-cnbpb`}
      className={`w-full bg-gradient-to-b from-[#6A4EA6] to-[#713CA6] flex flex-col justify-center items-center gap-11 px-8 pt-12 pb-20 shadow xl:gap-16 xl:pt-70px xl:pb-100px`}
    >
      <h2
        className={`w-[230px] font-geometos-rounded text-[#F2E530] text-28px text-center text-shadow-2xs -mb-5 xl:w-full xl:text-32px`}
      >
        Prototipação de Tela
      </h2>

      <ul className={`flex flex-col gap-10 xl:flex-row xl:gap-20`}>
        <li>
          <figure>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={`/assets/cnbpb-atividades.png`}
                width={500}
                height={265}
                type="image/png"
              />

              <Image
                src={`/assets/cnbpb-atividades.png`}
                alt={`Seção de atividades da página`}
                width={300}
                height={161}
                className={`filter drop-shadow`}
              />
            </picture>
          </figure>
        </li>

        <li>
          <figure>
            <picture>
              <source
                media="(min-width: 1280px)"
                srcSet={`/assets/cnbpb-membres.png`}
                width={500}
                height={265}
                type="image/png"
              />

              <Image
                src={`/assets/cnbpb-membres.png`}
                alt={`Seção de membres da página`}
                width={300}
                height={161}
                className={`filter drop-shadow`}
              />
            </picture>
          </figure>
        </li>
      </ul>
    </section>
  );
}
