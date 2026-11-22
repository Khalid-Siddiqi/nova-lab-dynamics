import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { cn } from "@/lib/utils";

const slides = [
  {
    src: "/carousoul/Mou_with_Indus.jfif",
    alt: "MoU with Indus Hospital",
    // You mentioned this image already has text on it. 
    // You can leave this blank ("") if you don't want the black gradient caption overlay on this specific slide.
    caption: "MoU Signing b/w GU TECH, AL Ghazali University & Indus Hospital & Health Network (IHHN): Advancing AI in Healthcare", 
  },
  {
    src: "/carousoul/DFU_Classificatio.png",
    alt: "DFU Classification",
    caption: "Instance Segmentation & Wagner Meir Classifying DFU severity grades",
  },
  {
    src: "/carousoul/DFU Prognosis.drawio.png",
    alt: "DFU Prognosis tracking",
    caption: "Tracking DFU progression and healing trajectory over time",
  },
  {
    src: "/carousoul/Brain_cancer.jpeg",
    alt: "Brain cancer segmentation",
    caption: "Instance Segmentation of Tumour,Edema and necrotic tissue of Brain Scan in collaboration with AKU",
  },
  {
    src: "/carousoul/ANA_portal.jpg",
    alt: "ANA / LAB portal classifying HEp-2 cells",
    caption:
      "ANA Pattern Recognition with Indus Hospital's Immunology Department: the ANA / LAB portal classifying held-out HEp-2 cells with a Swin-Tiny vision transformer",
  },
  {
    src: "/carousoul/ANA_homogeneous.jpg",
    alt: "HEp-2 cell classified as Homogeneous",
    caption: "ANA classification · Homogeneous (ICAP AC-1), predicted with >99.9% confidence on a held-out HEp-2 cell",
  },
  {
    src: "/carousoul/ANA_speckled.jpg",
    alt: "HEp-2 cell classified as Speckled",
    caption: "ANA classification · Speckled (ICAP AC-4, 5), predicted with >99.9% confidence on a held-out HEp-2 cell",
  },
  {
    src: "/carousoul/ANA_nucleolar.jpg",
    alt: "HEp-2 cell classified as Nucleolar",
    caption: "ANA classification · Nucleolar (ICAP AC-8 to 10), predicted with 99.9% confidence on a held-out HEp-2 cell",
  },
  {
    src: "/carousoul/ANA_centromere.jpg",
    alt: "HEp-2 cell classified as Centromere",
    caption: "ANA classification · Centromere (ICAP AC-3), predicted with >99.9% confidence on a held-out HEp-2 cell",
  },
];

export function ResearchCarousel() {
  // Added loop: true and the Autoplay plugin with a 5000ms (5 second) delay
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="showcase" className="relative py-28">
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-section)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-electric">
            Lab in Action
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Research Showcase
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Key milestones and results from our ongoing clinical AI research.
          </p>
        </Reveal>

        {/* Carousel wrapper */}
        <div className="relative mt-14">
          <div className="overflow-hidden rounded-3xl bg-white" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, i) => (
                  <div
                    key={i}
                    className="relative min-w-0 shrink-0 grow-0 basis-full"
                  >
                    {/* 1. Aspect ratio gives images more vertical room */}
                    <div className="relative flex aspect-[4/3] md:aspect-[16/9] w-full items-center justify-center overflow-hidden">
                      
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        // 2. Conditional styling: First image gets cover + top focus, others get contain
                        className={cn(
                          "h-full w-full transition duration-1000",
                          i === 0 
                            ? "object-cover object-top scale-90 md:scale-100" 
                            : "object-contain object-center"
                        )} 
                      />

                      {/* Only render the gradient and text if a caption exists */}
                      {slide.caption && (
                        <>
                          {/* Glass overlay at bottom */}
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/95 via-white/40 to-transparent" />

                          {/* Caption Text */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                            <p className="font-display text-lg font-bold leading-relaxed text-slate-900 md:text-xl max-w-3xl drop-shadow-sm">
                              {slide.caption}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            className="absolute -left-5 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-border bg-card text-foreground shadow-lg transition hover:border-electric hover:bg-electric hover:text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-5 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-border bg-card text-foreground shadow-lg transition hover:border-electric hover:bg-electric hover:text-white"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Interactive Dots */}
          <div className="mt-8 flex justify-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-500",
                  i === currentIndex
                    ? "w-10 bg-electric"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}