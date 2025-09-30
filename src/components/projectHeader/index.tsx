import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaChevronDown } from "react-icons/fa6";

export interface ProjectHeaderInterface {
  headerStyle: string;
  positions: string[];
  positionStyle: string;
  img: string;
  alt: string;
  imgStyle: string;
  caption: string;
  captionStyle: string;
  downStyle: string;
}

export default function ProjectHeader(props: ProjectHeaderInterface) {
  return (
    <header
      className={`max-w-screen min-h-screen ${props.headerStyle} flex flex-col justify-between items-center px-9 py-8 shadow`}
    >
      <div className={`w-full flex justify-between xl:items-center`}>
        <Link
          href="/"
          aria-label="Voltar à página inicial"
          className={`text-shadow-2xs xl:p-3 xl:rounded-full xl:transition xl:hover:bg-white/15 xl:hover:shadow xl:active:bg-white/30`}
          rel="previous"
        >
          <FaArrowLeft className={`w-[25px] h-auto xl:w-[30px]`} />
        </Link>

        <ul className={`flex flex-col items-end gap-2.5 xl:flex-row`}>
          {props.positions.map((position, index) => (
            <li
              key={index}
              className={`w-max text-xs text-shadow-2xs ${props.positionStyle} px-3.5 py-1 rounded-4xl shadow xl:text-base`}
            >
              {position}
            </li>
          ))}
        </ul>
      </div>

      <figure className={`flex flex-col items-center gap-12 xl:gap-16`}>
        <Image
          src={props.img}
          alt={props.alt}
          width={320}
          height={80}
          className={`${props.imgStyle} h-auto drop-shadow`}
        />

        <figcaption
          className={`${props.captionStyle} text-xl text-center text-shadow-2xs`}
        >
          {props.caption}
        </figcaption>
      </figure>

      <a
        href="#main"
        aria-label="Embarque ao case do projeto"
        className={`${props.downStyle} text-shadow-2xs transition`}
      >
        <FaChevronDown className={`w-[70px] h-auto`} />
      </a>
    </header>
  );
}
