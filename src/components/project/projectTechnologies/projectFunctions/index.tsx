export default function ProjectFunctions() {
  return (
    <article className={`space-y-16 xl:space-y-70px`}>
      <h3
        className={`font-geometos-rounded text-[#FFFEF6] text-2xl text-center text-shadow-2xs bg-gradient-to-r from-[#713CA6]/0 via-[#713CA6] to-[#713CA6]/0 pt-6 pb-5 dark:text-[#040008] dark:from-[#F2C029]/0 dark:via-[#F2C029] dark:to-[#F2C029]/0 xl:text-28px`}
      >
        Funcionalidades
      </h3>

      <ul
        className={`w-full flex flex-col justify-center items-center m-auto gap-8 px-2.5 xl:max-w-full xl:w-[834px] xl:gap-9 sm:px-0`}
      >
        <li
          className={`w-full bg-gradient-to-br from-[#FFCE31] to-[#F2E530] px-8 py-6 rounded-4xl shadow dark:from-[#713CA6] dark:to-[#6A4EA6] xl:max-w-[450px] xl:px-9 xl:py-5 xl:-translate-x-32`}
        >
          <p className={`w-fit font-open-dyslexic text-xl text-center text-shadow-2xs leading-9 xl:leading-10 xl:text-2xl`}>
            <strong>Menu de navegação</strong> abrível e fechável para mobile
          </p>
        </li>
        
        <li
          className={`w-full bg-gradient-to-br from-[#FFCE31] to-[#F2E530] px-8 py-6 rounded-4xl shadow dark:from-[#713CA6] dark:to-[#6A4EA6] xl:max-w-[450px] xl:px-9 xl:py-5 xl:translate-x-32`}
        >
          <p className={`w-fit font-open-dyslexic text-xl text-center text-shadow-2xs leading-9 xl:leading-10 xl:text-2xl`}>
            <strong>Detecção e adaptação de tema de cores preferencial</strong> da pessoa usuária
          </p>
        </li>

        <li
          className={`w-full bg-gradient-to-br from-[#FFCE31] to-[#F2E530] px-8 py-6 rounded-4xl shadow dark:from-[#713CA6] dark:to-[#6A4EA6] xl:max-w-[450px] xl:px-9 xl:py-5 xl:-translate-x-32`}
        >
          <p className={`w-fit font-open-dyslexic text-xl text-center text-shadow-2xs leading-9 xl:leading-10 xl:text-2xl`}>
            <strong>Opções de escolher tema</strong> de cores entre <strong>escuro e claro</strong>
          </p>
        </li>
        
        <li
          className={`w-full bg-gradient-to-br from-[#FFCE31] to-[#F2E530] px-8 py-6 rounded-4xl shadow dark:from-[#713CA6] dark:to-[#6A4EA6] xl:max-w-[450px] xl:px-9 xl:py-5 xl:translate-x-32`}
        >
          <p className={`w-fit font-open-dyslexic text-xl text-center text-shadow-2xs leading-9 xl:leading-10 xl:text-2xl`}>
            <strong>Botão</strong>, que aparace no final da página, <strong>de voltar ao topo</strong>
          </p>
        </li>

        <li
          className={`w-full bg-gradient-to-br from-[#FFCE31] to-[#F2E530] px-8 py-6 rounded-4xl shadow dark:from-[#713CA6] dark:to-[#6A4EA6] xl:max-w-[450px] xl:px-9 xl:py-5 xl:-translate-x-32`}
        >
          <p className={`w-fit font-open-dyslexic text-xl text-center text-shadow-2xs leading-9 xl:leading-10 xl:text-2xl`}>
            <strong>Scroll horizontal</strong>, nos carrosséis de imagem, <strong>arrastável através do mouse</strong>
          </p>
        </li>
      </ul>
    </article>
  );
}
