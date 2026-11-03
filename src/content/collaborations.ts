// Partnerships, told as stories: the problem the partner brought, what each
// side contributed, and what has been built or learned together.
// Fields set to null are shown on the site as clearly marked placeholders.

import type { Figure } from "./projects";

export interface Collaboration {
  slug: string;
  partner: string;
  unit: string;
  logo: string;
  since: string | null;
  problem: string | null;
  partnerContributed: string[] | null;
  labContributed: string[] | null;
  builtOrLearned: string[] | null;
  projects: string[];
  photo?: Figure;
}

export const collaborations: Collaboration[] = [
  {
    slug: "indus",
    partner: "Indus Hospital & Health Network (IHHN)",
    unit: "Indus Diabetes & Endocrinology Center (IDEC)",
    logo: "/images/indus_logo_1.png",
    since: "June 2025",
    problem:
      "Patients with diabetic foot ulcers come back for many follow-up visits. The IDEC team wanted a faster way to see how a wound has changed between visits, and to spot early the patients who need closer attention.",
    partnerContributed: [
      "Clinical expertise in assessing and staging diabetic foot ulcers",
      "Co-authorship of the lab's DFU detection and staging paper (Abdul Basit, IDEC)",
    ],
    labContributed: [
      "A deep learning pipeline for detecting ulcers and classifying their stage from photographs",
      "Annotation tools that let clinicians label wound images",
    ],
    builtOrLearned: [
      "A memorandum of understanding between GUTECH, Al-Ghazali University and IHHN",
      "A paper accepted at AIiH 2026, Imperial College London",
      "DFU Care, a follow-up tool now in development",
    ],
    projects: ["dfu-care"],
    photo: {
      src: "/carousoul/Mou_with_Indus.jfif",
      alt: "Representatives of GUTECH and Indus Hospital at the MoU signing",
      caption:
        "Signing the MoU between GUTECH, Al-Ghazali University and Indus Hospital & Health Network.",
    },
  },
  {
    slug: "aku",
    partner: "Aga Khan University Hospital (AKU)",
    unit: "Centre of Oncological Research in Surgery (COORS)",
    logo: "/images/aku_logo_2.jfif",
    since: null,
    problem:
      "Neuro-oncologists treating glioma wanted quantified measures from routine MRI that could support treatment planning and help anticipate outcomes.",
    partnerContributed: null,
    labContributed: [
      "Segmentation of tumour, oedema, and necrotic tissue on brain MRI",
      "Pipelines that extract radiomic features from structural MRI",
    ],
    builtOrLearned: null,
    projects: ["brain-tumour-mri"],
  },
];

export const getCollaboration = (slug: string) => collaborations.find((c) => c.slug === slug);
