// News & events. An event whose (end) date is today or later is listed under
// "Upcoming"; everything else (including items with no date yet) under "Past".
// For past events, `account` is a short note on what participants discussed,
// tested, or learned. Add approved photos to public/images/events/.
// Set `featured: true` to show an item in the carousel at the top of the homepage
// (upcoming events are always shown there).

import type { Figure } from "./projects";

export const eventKinds = [
  "Workshop",
  "Hospital visit",
  "Seminar",
  "Demo",
  "Talk",
  "Partnership",
  "Publication",
] as const;

export type EventKind = (typeof eventKinds)[number];

export interface LabEvent {
  slug: string;
  title: string;
  /** ISO date, e.g. "2026-12-04". Null if not yet confirmed. */
  date: string | null;
  /** Last day of a multi-day event, e.g. "2026-12-05". */
  endDate?: string;
  time?: string;
  kind: EventKind;
  location: string | null;
  speakers?: string[];
  description: string;
  account: string | null;
  photos: Figure[];
  featured?: boolean;
  project?: string;
  collaboration?: string;
}

export const events: LabEvent[] = [
  {
    slug: "medical-imaging-workshop-2026",
    title: "Medical Imaging Workshop",
    date: "2026-12-04",
    endDate: "2026-12-05",
    kind: "Workshop",
    location: "GUTECH, Al-Ghazali University, Karachi",
    description:
      "A two-day workshop on medical imaging and AI, hosted by the Medical AI Lab at GUTECH.",
    account: null,
    photos: [],
  },
  {
    slug: "cvpath-wacv-2027-paper",
    title: "Paper accepted at CVPath 2027, a WACV 2027 workshop",
    date: null,
    kind: "Publication",
    location: null,
    description:
      "A paper by our faculty member Sumra Khan has been accepted at CVPath 2027, a workshop held with the IEEE/CVF Winter Conference on Applications of Computer Vision (WACV 2027).",
    account: null,
    photos: [],
    featured: true,
  },
  {
    slug: "aiih-2026-paper",
    title: "Paper accepted at AIiH 2026, Imperial College London",
    date: null,
    kind: "Publication",
    location: null,
    description:
      "Our paper “A Deep Learning Pipeline for Diabetic Foot Ulcer Detection and Stage Classification”, written with clinicians from DUHS and the Indus Diabetes & Endocrinology Center, was accepted at the Artificial Intelligence in Healthcare conference (AIiH 2026).",
    account: null,
    photos: [
      {
        src: "/carousoul/DFU_Classificatio.png",
        alt: "Diabetic foot ulcer images with segmented wound regions and Wagner grade labels",
        caption: "Wound segmentation and Wagner grade classification from the paper.",
      },
    ],
    featured: true,
    project: "dfu-care",
  },
  {
    slug: "indus-mou",
    title: "MoU signing with Indus Hospital & Health Network",
    date: "2025-06-11",
    kind: "Partnership",
    location: null,
    description:
      "GUTECH, Al-Ghazali University and Indus Hospital & Health Network signed a memorandum of understanding to work together on AI in healthcare.",
    account: null,
    photos: [
      {
        src: "/carousoul/Mou_with_Indus.jfif",
        alt: "Representatives of GUTECH and Indus Hospital at the MoU signing",
        caption: "MoU signing between GUTECH and IHHN.",
      },
    ],
    featured: true,
    collaboration: "indus",
  },
];

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

const lastDay = (e: LabEvent) => e.endDate ?? e.date;

export function splitEvents(list: LabEvent[] = events) {
  const today = todayIso();
  const upcoming = list
    .filter((e) => e.date !== null && lastDay(e)! >= today)
    .sort((a, b) => a.date!.localeCompare(b.date!));
  // Undated items are treated as the most recent news and keep their order in the list.
  const past = list
    .filter((e) => e.date === null || lastDay(e)! < today)
    .sort((a, b) => (b.date ?? "9999").localeCompare(a.date ?? "9999"));
  return { upcoming, past };
}

/** Items for the homepage carousel: upcoming events first, then featured news. */
export function homepageHighlights() {
  const { upcoming, past } = splitEvents();
  return [
    ...upcoming.map((e) => ({ event: e, upcoming: true })),
    ...past.filter((e) => e.featured).map((e) => ({ event: e, upcoming: false })),
  ];
}

const toDate = (iso: string) => new Date(`${iso}T00:00:00`);

/** "4–5 December 2026", "30 November – 2 December 2026", or "11 June 2025". */
export function formatDateRange(date: string, endDate?: string) {
  const start = toDate(date);
  const full = (d: Date) =>
    d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  if (!endDate || endDate === date) return full(start);
  const end = toDate(endDate);
  if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
    return `${start.getDate()}–${full(end)}`;
  }
  return `${start.toLocaleDateString("en-GB", { day: "numeric", month: "long" })} – ${full(end)}`;
}
