import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { MenuProvider } from "@/components/menu-context";
import { Picks } from "@/components/picks";
import { MenuSection } from "@/components/menu-section";
import { Space } from "@/components/space";
import { Visit } from "@/components/visit";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <main id="main">
        {/* Picks and Menu share state so a tile can jump straight to a dish. */}
        <MenuProvider>
          <Picks />
          <MenuSection />
        </MenuProvider>
        <Space />
        <Visit />
      </main>
      <Footer />
      <JsonLd />
    </>
  );
}
