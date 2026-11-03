import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, MapPin, Mic } from "lucide-react";
import { Container, PageHeader, SectionHeading } from "@/components/site/Page";
import { ImagePlaceholder, Placeholder, Unconfirmed } from "@/components/site/Placeholder";
import { formatDateRange, splitEvents, type LabEvent } from "@/content/events";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Events | Medical AI Lab, GUTECH" },
      {
        name: "description",
        content:
          "Upcoming and past workshops, hospital visits, seminars, and demos at the Medical AI Lab.",
      },
    ],
  }),
  component: NewsPage,
});

function DateBlock({ date, endDate }: { date: string | null; endDate?: string }) {
  if (!date) {
    return (
      <div className="w-20 shrink-0 self-start rounded-md border border-dashed border-note-border bg-note p-2 text-center text-xs font-medium text-note-foreground">
        Date to be added
      </div>
    );
  }
  const d = new Date(`${date}T00:00:00`);
  const end = endDate ? new Date(`${endDate}T00:00:00`) : null;
  const days =
    end && end.getMonth() === d.getMonth() ? `${d.getDate()}–${end.getDate()}` : `${d.getDate()}`;
  return (
    <div className="w-20 shrink-0 self-start rounded-md bg-primary p-2 text-center text-primary-foreground">
      <div className="text-xs uppercase">{d.toLocaleString("en-GB", { month: "short" })}</div>
      <div className={`font-display font-semibold leading-none ${end ? "text-2xl" : "text-3xl"}`}>
        {days}
      </div>
      <div className="text-xs">{d.getFullYear()}</div>
    </div>
  );
}

function EventMeta({ event }: { event: LabEvent }) {
  return (
    <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
      <li className="font-semibold text-foreground">{event.kind}</li>
      {event.date && (
        <li className="inline-flex items-center gap-1.5">
          <CalendarDays size={14} aria-hidden /> {formatDateRange(event.date, event.endDate)}
        </li>
      )}
      {event.time && (
        <li className="inline-flex items-center gap-1.5">
          <CalendarDays size={14} aria-hidden /> {event.time}
        </li>
      )}
      {event.kind !== "Publication" && (
        <li className="inline-flex items-center gap-1.5">
          <MapPin size={14} aria-hidden />
          {event.location ?? <Unconfirmed>location to be added</Unconfirmed>}
        </li>
      )}
      {event.speakers && event.speakers.length > 0 && (
        <li className="inline-flex items-center gap-1.5">
          <Mic size={14} aria-hidden /> {event.speakers.join(", ")}
        </li>
      )}
    </ul>
  );
}

function NewsPage() {
  const { upcoming, past } = splitEvents();

  return (
    <>
      <PageHeader eyebrow="News & Events" title="News, workshops, and events">
        What is coming up at the lab, recent news, and what participants discussed, tested, or
        learned at past events.
      </PageHeader>

      <Container className="py-14">
        <SectionHeading>Upcoming</SectionHeading>
        {upcoming.length === 0 ? (
          <p className="mt-4 text-muted-foreground">No upcoming events are scheduled right now.</p>
        ) : (
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {upcoming.map((e) => (
              <li key={e.slug} id={e.slug} className="flex scroll-mt-28 gap-5 py-6">
                <DateBlock date={e.date} endDate={e.endDate} />
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{e.title}</h3>
                  <EventMeta event={e} />
                  <p className="mt-3 max-w-2xl leading-relaxed text-foreground/85">
                    {e.description}
                  </p>
                  {!e.speakers && (
                    <Placeholder className="mt-3 max-w-2xl">
                      Add speakers, the programme, and how to register.
                    </Placeholder>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-16">
          <SectionHeading>Recent news & past events</SectionHeading>
          <ul className="mt-6 space-y-12">
            {past.map((e) => (
              <li
                key={e.slug}
                id={e.slug}
                className="grid scroll-mt-28 gap-6 border-t border-border pt-8 lg:grid-cols-[1fr_380px]"
              >
                <div className="flex gap-5">
                  <DateBlock date={e.date} endDate={e.endDate} />
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {e.title}
                    </h3>
                    <EventMeta event={e} />
                    <p className="mt-3 leading-relaxed text-foreground/85">{e.description}</p>
                    {e.kind !== "Publication" && (
                      <>
                        <h4 className="mt-5 text-sm font-semibold text-foreground">
                          What participants discussed, tested, or learned
                        </h4>
                        {e.account ? (
                          <p className="mt-2 leading-relaxed text-foreground/85">{e.account}</p>
                        ) : (
                          <Placeholder className="mt-2">
                            Add a short account of what participants discussed, tested, or learned.
                          </Placeholder>
                        )}
                      </>
                    )}
                  </div>
                </div>
                <div className="grid gap-4">
                  {e.photos.length > 0
                    ? e.photos.map((p) => (
                        <figure key={p.src}>
                          <img
                            src={p.src}
                            alt={p.alt}
                            className="w-full rounded-md border border-border object-cover"
                          />
                          <figcaption className="mt-2 text-sm text-muted-foreground">
                            {p.caption}
                          </figcaption>
                        </figure>
                      ))
                    : e.kind !== "Publication" && (
                        <ImagePlaceholder label="Approved photos from the event" />
                      )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
}
