import Input from "../input";

export default function Form() {
  return (
    <article className={`w-full space-y-8 xl:space-y-10`}>
      <h2 className={`font-title text-28px text-white-200 text-center text-shadow-2xs leading-10 mx-auto xl:text-32px xl:leading-11 xl:w-[400px]`}>
        Será um prazer enorme trabalhar com você!
      </h2>

      <form action="" className={`flex flex-col items-center gap-10 xl:gap-5`}>
        <div className={`flex flex-col items-center gap-6 xl:gap-8 xl:flex-wrap xl:h-[247px] xl:gap-x-12`}>
          <Input
            id="name"
            label="Como devo te chamar?"
            placeholder="Nome completo"
            type="text"
            isInput
          />
          <Input
            id="email"
            label="Email"
            placeholder="nome@empresa.com.br"
            type="email"
            isInput
          />
          <Input
            id="message"
            label="Diga-me do que precisa"
            placeholder="Olá, Enne! Tudo bem? Eu gostaria de ..."
            isMessage
          />
        </div>

        <button
          type="submit"
          className={`font-bold text-xl text-shadow-2xs bg-light-purple px-12 py-4 shadow rounded-4xl cursor-pointer transition duration-300 hover:bg-dark-purple active:bg-white-300 active:text-dark-purple xl:text-2xl`}
        >
          Enviar
        </button>
      </form>
    </article>
  );
}
