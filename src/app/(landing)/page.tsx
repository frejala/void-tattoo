import { About } from "@/components/sections/about";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Skills />
    </>
  );
}
