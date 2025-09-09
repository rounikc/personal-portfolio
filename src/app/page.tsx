import { FloatingNav } from "@/components/floating-nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { FeaturedProjects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <FloatingNav />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
