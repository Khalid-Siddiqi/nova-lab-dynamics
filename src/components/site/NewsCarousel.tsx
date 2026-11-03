import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Pause,
  Play,
} from "lucide-react";
import { formatDateRange, homepageHighlights } from "@/content/events";
import { Container } from "./Page";

/** Rotating banner of upcoming events and recent news at the top of the homepage. */
export function NewsCarousel() {
  const slides = homepageHighlights();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  const onSelect = useCallback(() => {
    if (emblaApi) setIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    // Respect visitors who prefer less motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      emblaApi.plugins().autoplay?.stop();
      setPlaying(false);
    }
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const togglePlay = () => {
    const autoplay = emblaApi?.plugins().autoplay;
    if (!autoplay) return;
    if (playing) autoplay.stop();
    else autoplay.play();
    setPlaying(!playing);
  };

  if (slides.length === 0) return null;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="News and events"
      className="border-b border-border bg-navy-deep text-primary-foreground"
    >
      <Container className="py-6 md:py-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map(({ event, upcoming }, i) => {
              const photo = event.photos[0];
              return (
                <div
                  key={event.slug}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${slides.length}`}
                  className="min-w-0 shrink-0 grow-0 basis-full"
                >
                  <div className="grid items-center gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-10">
                    {photo ? (
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="aspect-[16/9] w-full rounded-md bg-white object-contain"
                      />
                    ) : (
                      <div className="flex aspect-[16/9] w-full flex-col items-center justify-center rounded-md bg-primary-foreground/10 text-center">
                        {event.date && (
                          <>
                            <CalendarDays size={32} aria-hidden className="opacity-80" />
                            <div className="mt-3 font-display text-3xl font-semibold md:text-4xl">
                              {formatDateRange(event.date, event.endDate)}
                            </div>
                          </>
                        )}
                        <div className="mt-2 text-sm uppercase tracking-wider opacity-80">
                          {event.kind}
                        </div>
                      </div>
                    )}

                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                        <span
                          className={`rounded px-2 py-1 ${
                            upcoming
                              ? "bg-primary-foreground text-navy-deep"
                              : "bg-primary-foreground/15"
                          }`}
                        >
                          {upcoming ? "Upcoming" : "News"}
                        </span>
                        <span className="opacity-80">{event.kind}</span>
                      </div>
                      <h2 className="mt-3 font-display text-2xl font-semibold leading-snug md:text-3xl">
                        {event.title}
                      </h2>
                      <ul className="mt-3 space-y-1 text-sm opacity-85">
                        {event.date && (
                          <li className="inline-flex items-center gap-2">
                            <CalendarDays size={15} aria-hidden />
                            {formatDateRange(event.date, event.endDate)}
                          </li>
                        )}
                        {event.location && (
                          <li className="flex items-center gap-2">
                            <MapPin size={15} aria-hidden />
                            {event.location}
                          </li>
                        )}
                      </ul>
                      <p className="mt-3 line-clamp-3 leading-relaxed opacity-85">
                        {event.description}
                      </p>
                      <Link
                        to="/news"
                        hash={event.slug}
                        className="mt-5 inline-flex items-center gap-2 font-semibold underline underline-offset-4"
                      >
                        {upcoming ? "Event details" : "Read more"}{" "}
                        <ArrowRight size={16} aria-hidden />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {slides.length > 1 && (
          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {slides.map(({ event }, i) => (
                <button
                  key={event.slug}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Show item ${i + 1}: ${event.title}`}
                  aria-current={i === index}
                  className={`h-2 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-primary-foreground"
                      : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/70"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={playing ? "Pause carousel" : "Play carousel"}
                className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/30 hover:bg-primary-foreground/10"
              >
                {playing ? <Pause size={15} /> : <Play size={15} />}
              </button>
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                aria-label="Previous item"
                className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/30 hover:bg-primary-foreground/10"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                aria-label="Next item"
                className="grid h-9 w-9 place-items-center rounded-full border border-primary-foreground/30 hover:bg-primary-foreground/10"
              >
                <ChevronRight size={18} />
              </button>
              <Link
                to="/news"
                className="ml-2 hidden text-sm font-semibold underline underline-offset-4 sm:inline"
              >
                All news & events
              </Link>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
