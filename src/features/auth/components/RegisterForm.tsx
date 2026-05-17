import { Form, FormInput, FormLabel, FormSubmit } from "@/components/forms";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const { register, handleSubmit, watch, formState: { errors }} = useForm();
  return (
    <Form>
      <FormLabel htmlFor="name">Nombre</FormLabel>
      <FormInput
        id="name"
        type="text"
        placeholder="Ingresa tu Nombre"
        {...register('name')}
      />
      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput
        id="email"
        type="email"
        placeholder="Ingresa tu E-mail"
        {...register('email')}
      />

      <FormLabel htmlFor="password">Password</FormLabel>
      <FormInput
        id="password"
        type="password"
        placeholder="Password - Min 8 Caracteres"
        {...register('password')}
      />
      <FormLabel htmlFor="password_confirmation">Repetir Password</FormLabel>
      <FormInput
        id="password_confirmation"
        type="password"
        placeholder="Repite tu Password"
         {...register('passwordConfirmation')}
      />

      <FormSubmit value='Registrarme' />
    </Form>
  )
}
