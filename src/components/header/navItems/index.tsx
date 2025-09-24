export interface NavItemsInterface {
  url: string;
  label: string;
  ariaLabel: string;
  isMain?: boolean;
}

export default function NavItems() {
  const links: NavItemsInterface[] = [
    {
      url: "#projetos",
      ariaLabel: "Ir à seção de projetos",
      label: "Projetos",
    },
    {
      url: "#sobre",
      ariaLabel: "Ir à seção sobre mim",
      label: "Sobre Mim",
    },
    {
      url: "#contatos",
      ariaLabel: "Ir à seção de contatos",
      label: "Contate-me",
      isMain: true,
    },
  ];

  return (
    <ul className={`flex flex-col items-center gap-1.5 xl:flex-row`}>
      {links.map((link, index) => (
        <li key={index} className={`py-3.5 ${link.isMain ? "mt-3.5 xl:mt-0" : ""}`}>
          <a
            href={link.url}
            aria-label={link.ariaLabel}
            className={`text-xl text-shadow-2xs py-3.5 rounded-4xl transition xl:text-2xl ${
              link.isMain
                ? "bg-dark-pink-100 px-7 mt-3.5 font-bold shadow hover:bg-dark-pink-200 focus-within:bg-dark-pink-200 active:bg-white-300 active:text-dark-pink-200 xl:mt-0 xl:ml-5"
                : "font-medium px-5 hover:text-dark-pink-100 focus-within:text-dark-pink-100 active:text-dark-pink-200"
            }`}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
