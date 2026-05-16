import { Form, FormInput, FormLabel, FormSubmit } from "@/components/forms";

export default function RegisterForm() {

  return (
    <Form>
      <FormLabel htmlFor="name">Nombre</FormLabel>
      <FormInput
        id="name"
        type="text"
        placeholder="Ingresa tu Nombre"
      />
      <FormLabel htmlFor="email">E-mail</FormLabel>
      <FormInput
        id="email"
        type="email"
        placeholder="Ingresa tu E-mail"
      />

      <FormLabel htmlFor="password">Password</FormLabel>
      <FormInput
        id="password"
        type="password"
        placeholder="Password - Min 8 Caracteres"
      />
      <FormLabel htmlFor="password_confirmation">Repetir Password</FormLabel>
      <FormInput
        id="password_confirmation"
        type="password"
        placeholder="Repite tu Password"
      />

      <FormSubmit value='Registrarme' />
    </Form>
  )
}
