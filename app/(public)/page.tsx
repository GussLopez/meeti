import Hero from "@/components/ui/Hero";
import { GeneratePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: GeneratePageTitle('Inicio')
  
}
export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
