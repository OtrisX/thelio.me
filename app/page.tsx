import { Contato } from "./_components/contato";
import { Experience } from "./_components/experience";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <Hero />
      <Experience />
      <Contato />
    </main>
  );
}
