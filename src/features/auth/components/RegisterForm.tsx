'use client'

import { Form, FormError, FormInput, FormLabel, FormSubmit } from "@/components/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignUpInput, SignUpSchema } from "../schemas/authSchema";
import { SignUpAction } from "../actions/auth-actions";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(SignUpSchema),
    mode: 'onSubmit'
  });

  const onSubmit = async (data: SignUpInput) => {
    const { error, success } = await SignUpAction(data);

    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success(success);
      reset();
    }
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel htmlFor="name">Nombre</FormLabel>
      <FormInput
        id="name"
        type="text"
        placeholder="Ingresa tu Nombre"
        {...register('name')}
      />

      {errors.name && <FormError>{errors.name.message}</FormError>}
      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput
        id="email"
        type="email"
        placeholder="Ingresa tu E-mail"
        {...register('email')}
      />
      {errors.email && <FormError>{errors.email.message}</FormError>}

      <FormLabel htmlFor="password">Password</FormLabel>
      <FormInput
        id="password"
        type="password"
        placeholder="Password - Min 8 Caracteres"
        {...register('password')}
      />
      {errors.password && <FormError>{errors.password.message}</FormError>}

      <FormLabel htmlFor="password_confirmation">Repetir Password</FormLabel>
      <FormInput
        id="password_confirmation"
        type="password"
        placeholder="Repite tu Password"
        {...register('passwordConfirmation')}
      />
      {errors.passwordConfirmation && <FormError>{errors.passwordConfirmation.message}</FormError>}

      <FormSubmit value='Registrarme' />
    </Form>
  )
}
