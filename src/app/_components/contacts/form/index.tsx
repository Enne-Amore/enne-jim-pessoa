"use client";

import {
  contactFormSchema,
  ContactFormSchema,
} from "@/app/_schemas/contact-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import Input from "../input";

export default function Form() {
  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  // Submit button text state
  const [submit, setSubmit] = useState<string>("Enviar");

  // EmailJS parameters
  const userID: string = "npG2gUW78edQeeIXk";
  const serviceID: string = "service_4f9kp7j";
  const templateID: string = "template_jrixhzp";

  // Initialize EmailJS
  emailjs.init(userID);

  // Form submission handler
  function onSubmit(data: ContactFormSchema) {
    // Update button text to indicate sending
    setSubmit("Enviando...");
    console.table(data);

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, data).then(
      () => {
        // Reset button text
        setSubmit("Enviar");
        console.log("SUCCESS!");

        // Display success notification
        Toastify({
          text: "Sucesso ao enviar mensagem!",
          duration: 3000,
          gravity: "top",
          position: "center",
          offset: { x: 0, y: 30 },
          className: "notify-toastify",
          style: {
            background: "#00B09B",
            borderRadius: "30px",
          },
        }).showToast();
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
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
        method="POST"
        className={`flex flex-col items-center gap-9 xl:gap-10`}
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
          className={`font-bold text-xl text-shadow-2xs bg-light-purple px-12 py-4 shadow rounded-4xl cursor-pointer transition duration-300 hover:bg-dark-purple focus-visible:bg-dark-purple active:bg-white-300 active:text-dark-purple xl:text-2xl`}
        >
          {submit}
        </button>
      </form>
    </article>
  );
}
