import Heading from "@/src/shared/components/typography/Heading";
import { GeneratePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: GeneratePageTitle('Iniciar Sesión')
}

export default function LoginPage() {

  return (
    <>
      <Heading>Iniciar Sesión</Heading>
      <Heading level={6}>Iniciar Sesión</Heading>
    </>
  )
}
