"use client";

import {
  contactFormSchema,
  ContactFormSchema,
} from "@/app/_schemas/contact-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Input from "../input";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  function onSubmit(data: ContactFormSchema) {
    console.table(data);
  }

  return (
    <article className={`w-full space-y-8 xl:space-y-10`}>
      <h2
        className={`font-title text-28px text-white-200 text-center text-shadow-2xs leading-10 mx-auto xl:text-32px xl:leading-11 xl:w-[400px]`}
      >
        Será um prazer enorme trabalhar com você!
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col items-center gap-10`}
      >
        <div
          className={`flex flex-col items-center gap-6 xl:gap-8 xl:flex-wrap xl:max-h-[308px] xl:gap-x-12`}
        >
          <Input
            id="name"
            label="Como devo te chamar?"
            placeholder="Nome completo"
            type="text"
            isInput
            register={{ ...register("name") }}
            errors={errors?.name && <>{errors?.name?.message as string}</>}
          />

          <Input
            id="email"
            label="Email"
            placeholder="nome@empresa.com.br"
            type="email"
            isInput
            register={{ ...register("email") }}
            errors={errors?.email && <>{errors?.email?.message as string}</>}
          />

          <Input
            id="message"
            label="Diga-me do que precisa"
            placeholder="Olá, Enne! Tudo bem? Eu gostaria de ..."
            isMessage
            register={{ ...register("errand") }}
            errors={errors?.errand && <>{errors?.errand?.message as string}</>}
          />
        </div>

        <button
          type="submit"
          className={`font-bold text-xl text-shadow-2xs bg-light-purple px-12 py-4 shadow rounded-4xl cursor-pointer transition duration-300 hover:bg-dark-purple focus-within:bg-dark-purple active:bg-white-300 active:text-dark-purple xl:text-2xl`}
        >
          Enviar
        </button>
      </form>
    </article>
  );
}
