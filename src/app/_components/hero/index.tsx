import Image from "next/image";

export default function Hero() {
  return (
    <section
      className={`flex flex-col-reverse items-center gap-12 xl:flex-row xl:gap-100px`}
    >
      <div className={`flex flex-col items-center gap-8`}>
        <h2
          className={`font-title text-44px text-center text-shadow-2xs leading-14 flex flex-col items-center xl:text-5xl`}
        >
          <span className={`text-black`}>Venha conhecer</span>

          <span
            className={`bg-clip-text text-transparent bg-gradient-to-br from-dark-purple to-light-purple`}
          >
            os meus trabalhos
          </span>
        </h2>

        <div
          className={`font-medium text-gray text-base text-shadow-2xs flex flex-col gap-6 xl:text-xl`}
        >
          <span
            className={`w-max bg-gradient-to-br from-light-pink-200 to-light-pink-100 shadow px-7 py-3.5 rounded-4xl -translate-x-5 xl:-translate-x-10`}
          >
            UI/UX Design
          </span>

          <span
            className={`w-max bg-gradient-to-br from-light-pink-200 to-light-pink-100 shadow px-7 py-3.5 rounded-4xl translate-x-5 xl:translate-x-10`}
          >
            Desenvolvimento Front-end
          </span>
        </div>
      </div>

      <figure>
        <Image
          src={"/assets/website-illustration.png"}
          alt=""
          width={280}
          height={206}
          className={`xl:w-[517px] xl:h-[379px]`}
          priority
          loading="eager"
        />
      </figure>
    </section>
  );
}
