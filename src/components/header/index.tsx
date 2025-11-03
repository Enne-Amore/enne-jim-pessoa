import Image from "next/image";
import MenuDialogMobile from "./menuDialogMobile";
import MenuDesktop from "./menuDesktop";

export default function Header() {
  return (
    <header
      className={`bg-linear-to-br from-dark-purple to-light-purple p-5 flex justify-between items-center shadow xl:py-7 xl:px-10 2xl:px-14`}
    >
      <figure className={`flex items-center gap-2.5`}>
        <Image
          src={"/favicon/logo.png"}
          alt={"Logo do site com um coração rosa"}
          width={50}
          height={50}
          className={`filter drop-shadow xl:w-16`}
          priority
          loading="eager"
        />

        <h1
          className={`font-lexia-readable text-white-200 text-32px text-shadow-2xs w-36 leading-8 translate-y-1 sm:w-full xl:text-4xl sm:translate-y-0`}
        >
          Enne Jim Pessoa
        </h1>
      </figure>

      <MenuDialogMobile />

      <MenuDesktop />
    </header>
  );
}
