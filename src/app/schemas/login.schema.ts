import z from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .nonempty("E-mail é obrigatório.")
    .email("Use um e-mail válido."),
  password: z
    .string()
    .nonempty("Password é obrigatório.")
    .min(8, "Deve conter no mínimo 8 caracteres."),
});

export default loginSchema;
