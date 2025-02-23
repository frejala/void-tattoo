import { About } from "@/components/sections/about";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { Interview } from "@/components/sections/interview";
import { Skills } from "@/components/sections/skills";
import { Testimonial } from "@/components/sections/testimonial";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Skills />
      <Testimonial />
      <Interview />
    </>
  );
}
