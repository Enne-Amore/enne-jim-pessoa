import SocialNetworks from "@/components/socialNetworks";

export default function SocialMedia() {
  return (
    <article
      className={`flex flex-col items-center gap-5 mx-auto xl:gap-6 xl:w-[420px]`}
    >
      <h3
        className={`font-lexia-readable text-2xl text-white-200 text-center text-shadow-2xs leading-9 xl:text-28px xl:leading-10`}
      >
        Caso prefira, pode me contatar através das redes sociais
      </h3>

      <SocialNetworks socialNetworkStyle={`bg-white-200 text-light-purple border-light-purple hover:bg-light-purple hover:text-white-200 focus-visible:bg-light-purple focus-visible:text-white-200 active:bg-dark-purple`} />
    </article>
  );
}
