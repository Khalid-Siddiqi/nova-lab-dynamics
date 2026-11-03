// Team members. To add someone, copy an entry, give it a unique `slug`
// (used in the URL /team/<slug>) and put their photo in public/images/.
// Leave `contribution` as null until the person has approved a sentence;
// the site shows a marked placeholder instead.

import type { ExternalLink } from "./site";

export const personGroups = [
  "Faculty",
  "Researchers & Engineers",
  "Students",
  "Clinical Collaborators",
  "Alumni",
] as const;

export type PersonGroup = (typeof personGroups)[number];

export interface Person {
  slug: string;
  name: string;
  group: PersonGroup;
  role: string;
  affiliation: string;
  photo?: string;
  /** One sentence on what this person actually contributes to the lab's work. */
  contribution: string | null;
  bio?: string[];
  background?: string[];
  interests?: string[];
  links: ExternalLink[];
}

export const people: Person[] = [
  {
    slug: "rauf",
    name: "Dr. Rauf Ahmed Shams Malick",
    group: "Faculty",
    role: "Lab Director & Principal Investigator",
    affiliation: "Professor & Chairman, Department of Computer Science, GUTECH",
    photo: "/images/Dr_Rauf.avif",
    contribution:
      "Leads the lab, sets up its hospital partnerships, and was first author on its paper on diabetic foot ulcer detection and staging.",
    bio: [
      "Dr. Malick's approach is to understand a healthcare problem first: learn the clinical context from the people who work in it, and only then build tools that meet their needs. This approach shapes every project at the Medical AI Lab.",
      "His current research covers diabetic foot ulcer care, cancer drug response prediction, brain tumour analysis, and knowledge graphs for chronic disease.",
    ],
    background: [
      "Academic foundation at FAST-NU Karachi",
      "Previously at the Centre for Complex Systems and AI, DHA Suffa University",
      "Board of Studies member at KSBL, MAJU, and FAST-NU",
      "Research visits to IPAM (UCLA), the National Institute of Genetics (Japan), and the HEJ Research Institute of Chemistry",
      "Has supervised more than 40 MS and 2 PhD students",
    ],
    interests: [
      "Medical AI",
      "Clinical decision support",
      "Cancer drug response",
      "Bioinformatics",
      "Explainable AI",
      "Knowledge graphs",
    ],
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/insnetworksys/" }],
  },
  {
    slug: "khalid",
    name: "Khalid Khurshid Siddiqui",
    group: "Researchers & Engineers",
    role: "Research Assistant, Medical AI",
    affiliation: "Medical AI Lab, GUTECH",
    photo: "/images/Khalid_Khurshid_Siddiqui.jpg",
    contribution:
      "Co-authored the lab's diabetic foot ulcer paper and builds the annotation and deployment tools behind DFU Care.",
    bio: [
      "Khalid is an AI engineer working on diabetic foot ulcer analysis: detection, staging, and following how a wound changes over time. He builds annotation tools that let clinicians label medical images, and the pipelines that deploy models securely.",
      "He has also worked on human activity recognition and sequential task analysis using LSTM networks and MediaPipe hand pose.",
    ],
    background: ["BS Computer Science, FAST-NUCES (2025)"],
    interests: ["Medical AI", "Computer vision", "MLOps", "Explainable AI", "DFU prognosis"],
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/khalid-khurshid-siddiqui-b0b827238/",
      },
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?user=UirhEocAAAAJ&hl=en",
      },
      { label: "khalid.siddiqui@agu.edu.pk", href: "mailto:khalid.siddiqui@agu.edu.pk" },
    ],
  },
  {
    slug: "sumra",
    name: "Sumra Khan",
    group: "Faculty",
    role: "Senior Researcher",
    affiliation: "Senior Lecturer, GUTECH",
    contribution: null,
    interests: [
      "Responsible AI",
      "Explainable AI for medical imaging",
      "Natural language processing",
      "Deep learning",
      "Unsupervised learning",
    ],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/info-sumra/" },
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?user=NMaEzV0AAAAJ&hl=en",
      },
    ],
  },
];

export const getPerson = (slug: string) => people.find((p) => p.slug === slug);
