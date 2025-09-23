import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

interface SocialNetworkInterface {
  url: string;
  ariaLabel: string;
  icon: React.ReactNode;
}

export default function SocialNetworks() {
  const socialNetworks: SocialNetworkInterface[] = [
    {
      url: "https://www.linkedin.com/in/enne-jim-pessoa",
      ariaLabel: "Ir ao meu perfil no LinkedIn",
      icon: <FaLinkedinIn className={`w-6 h-auto`} />,
    },
    {
      url: "https://github.com/Enne-Amore",
      ariaLabel: "Ir ao meu perfil no GitHub",
      icon: <FaGithub className={`w-6 h-auto`} />,
    },
    {
      url: "https://wa.me/+5583981448264",
      ariaLabel: "Falar comigo no WhatsApp",
      icon: <FaWhatsapp className={`w-6 h-auto`} />,
    },
  ];

  return (
    <ul className={`flex gap-3`}>
      {socialNetworks.map((network, index) => (
        <li key={index}>
          <a
            href={network.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={network.ariaLabel}
            className={`flex content-center bg-white-200 text-light-purple text-shadow-2xs border border-light-purple p-3 rounded-full shadow transition duration-300 hover:bg-light-purple hover:text-white-200 active:bg-dark-purple`}
          >
            {network.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
