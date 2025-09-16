import Image from "next/image";
import MenuDialogMobile from "./menuDialogMobile";

export default function Header() {
  return (
    <header
      className={`bg-linear-to-br from-dark-purple to-light-purple p-5 flex justify-between items-center`}
    >
      <figure className={`flex items-center gap-2.5`}>
        <Image
          src={"/favicon/logo.png"}
          alt={"Logo do site com um coração rosa"}
          width={50}
          height={50}
          className={`shadow`}
          priority
          loading="eager"
        />

        <h1 className={`font-title text-32px text-shadow-2xs w-36 leading-8`}>
          Enne Jim Pessoa
        </h1>
      </figure>

      <MenuDialogMobile />
    </header>
  );
}
