import { createFileRoute } from "@tanstack/react-router";
import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { Approach } from "@/components/sections/Approach";
import { Publications } from "@/components/sections/Publications";
import { Collaborations } from "@/components/sections/Collaborations";
import { Team } from "@/components/sections/Team";
import { ResearchCarousel } from "@/components/sections/ResearchCarousel";
import { ResearchAreas } from "@/components/sections/ResearchAreas";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Medical AI Lab (MAL) — Domain-Driven AI for Healthcare | GU TECH, Al Ghazali University" },
      {
        name: "description",
        content:
          "Medical AI Lab at GU TECH, Al Ghazali University builds domain-driven AI solutions for healthcare — diabetic foot ulcers, brain cancer, bioinformatics, and more.",
      },
      { property: "og:title", content: "Medical AI Lab (MAL) — Domain-Driven AI for Healthcare" },
      {
        property: "og:description",
        content:
          "World-class clinical AI research at GU TECH, Al Ghazali University. Active collaborations with Indus Hospital and Aga Khan University Hospital.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Collaborations />
      <ResearchCarousel />
      <Approach />
      <Publications />
      <Team />
      <ResearchAreas />
      <Contact />
    </main>
  );
}
