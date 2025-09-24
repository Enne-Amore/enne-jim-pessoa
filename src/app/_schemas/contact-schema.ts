import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Campo obigatório *" }).max(255),
  email: z.email({ message: "Email inválido" }).max(255).trim().toLowerCase(),
  errand: z.string().min(1, { message: "Campo obigatório *" }).max(5000),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
