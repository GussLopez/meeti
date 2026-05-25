'use client'

import { Form, FormError, FormInput, FormLabel, FormSubmit } from "@/components/forms"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { SignInInput, SignInSchema } from "../schemas/authSchema"
import { SignInAction } from "../actions/auth-actions"
import toast from "react-hot-toast"

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(SignInSchema),
  })

  const onSubmit = async (data: SignInInput) => {
    const { success, error } = await SignInAction(data);

    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success(success);
    }
  }
  return (
    <Form
      className="mt-10 space-y-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput
        type="email"
        id="email"
        placeholder="Ingresa tu E-mail"
        {...register('email')}
      />
      {errors.email && <FormError>{errors.email.message}</FormError>}
      <FormLabel htmlFor="password">Password</FormLabel>
      <FormInput
        type="password"
        id="password"
        placeholder="Ingresa tu Password"
        {...register('password')}
      />
      {errors.password && <FormError>{errors.password.message}</FormError>}
      <FormSubmit
        value={'Iniciar Sesión'}
      />
    </Form>
  )
}
