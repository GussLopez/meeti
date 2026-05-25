import Hero from "@/components/ui/Hero";
import { auth } from "@/lib/auth";
import { GeneratePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: GeneratePageTitle('Inicio')
  
}
export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  console.log(session);
  return (
    <>
      <Hero />
    </>
  );
}
