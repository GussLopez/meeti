import Heading from "@/src/shared/components/typography/Heading"
import { GeneratePageTitle } from "@/src/shared/utils/metadata"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: GeneratePageTitle('Crear Cuenta')
}
export default function CreateAccountPage() {
  return (
    <>
      <Heading>Crear Cuenta</Heading>
    </>
  )
}
