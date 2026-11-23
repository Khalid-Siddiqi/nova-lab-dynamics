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
    caption: "MoU Signing b/w GU TECH, AL Ghazali University & Indus Hospital & Health Network (IHHN): Advancing AI in Healthcare", 
  },
  {
    src: "/carousoul/DFU_Classification.jpg",
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
    src: "/carousoul/ANA_patterns.jpg",
    alt: "Four held-out HEp-2 cells classified as Homogeneous, Speckled, Nucleolar and Centromere",
    caption:
      "ANA Pattern Recognition with Indus Hospital's Immunology Department: held-out HEp-2 cells named by a Swin-Tiny vision transformer",
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
                    {/* Image frame: the whole image stays visible, with no text on top of it */}
                    <div className="relative flex aspect-[4/3] md:aspect-[16/9] w-full items-center justify-center overflow-hidden">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        // The square MoU photo fills the wide frame from the top on larger screens
                        className={cn(
                          "h-full w-full transition duration-1000",
                          i === 0
                            ? "object-contain md:object-cover md:object-top"
                            : "object-contain object-center"
                        )}
                      />
                    </div>

                    {/* Caption below the image */}
                    {slide.caption && (
                      <div className="border-t border-border px-6 py-5 md:px-10 md:py-6">
                        <p className="max-w-4xl border-l-4 border-electric pl-4 font-display text-base font-semibold leading-snug text-royal md:text-xl">
                          {slide.caption}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            className="absolute -left-5 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-border bg-card md:grid text-foreground shadow-lg transition hover:border-electric hover:bg-electric hover:text-white"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-5 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-border bg-card md:grid text-foreground shadow-lg transition hover:border-electric hover:bg-electric hover:text-white"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Interactive Dots */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {/* Phones: arrows sit beside the dots so they don't cover the image */}
            <button
              onClick={scrollPrev}
              className="mr-2 grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground shadow transition hover:border-electric hover:bg-electric hover:text-white md:hidden"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
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
            <button
              onClick={scrollNext}
              className="ml-2 grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground shadow transition hover:border-electric hover:bg-electric hover:text-white md:hidden"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}