import z from "zod";

export const BaseAuthSchema = z.object({
  name: z.string().min(1, { error: 'El nombre es obligatorio' }),
  email: z.email({ error: 'Email no es válido' }),
  password: z.string().min(8, { error: 'El password debe ser mínimo de 8 caracteres' }),
  passwordConfirmation: z.string().min(1, { error: 'El password de confirmación no puedo ir vacio' }),
})

export const SignUpSchema = BaseAuthSchema.pick({
  name: true,
  email: true,
  password: true,
  passwordConfirmation: true
})