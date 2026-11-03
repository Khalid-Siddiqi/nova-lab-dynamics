// Projects & products. Each entry gets its own page at /projects/<slug>.
//
// Keep two things apart:
//   designedTo – what the tool is meant to achieve (an aim, not a result)
//   measured   – outcomes the team has actually measured, with how and where
// Fields set to null are shown on the site as clearly marked placeholders.

import type { ExternalLink } from "./site";

export const stages = ["Problem discovery", "In development", "Pilot", "In use"] as const;
export type Stage = (typeof stages)[number];

export interface Figure {
  src: string;
  alt: string;
  caption: string;
}

export interface MeasuredOutcome {
  result: string;
  how: string;
  source?: ExternalLink;
}

export interface Project {
  slug: string;
  name: string;
  /** The question from practice that started the project. */
  question: string;
  summary: string;
  stage: Stage;
  /** Set to true once the lab lead has confirmed the stage. */
  stageConfirmed: boolean;
  collaboration?: string;
  whoFacesIt: string | null;
  howHandledToday: string | null;
  whatWeAreBuilding: string | null;
  howUsersTest: string | null;
  designedTo: string[];
  measured: MeasuredOutcome[];
  /** Only set once the screenshot has been approved for publication. */
  screenshot: Figure | null;
  figures: Figure[];
  team: string[];
  publications: string[];
  demo: ExternalLink | null;
}

export const projects: Project[] = [
  {
    slug: "dfu-care",
    name: "DFU Care",
    question:
      "When a patient returns for a diabetic foot ulcer follow-up, how can the care team quickly see what has changed?",
    summary:
      "We are working with clinicians at Indus Hospital on a tool that brings a patient's wound photographs, assessments, lab results, and visit history together, so the care team can see what has changed since the last visit.",
    stage: "In development",
    stageConfirmed: false,
    collaboration: "indus",
    whoFacesIt:
      "Clinicians and care teams at Indus Hospital & Health Network who follow up patients with diabetic foot ulcers over many visits.",
    howHandledToday: null,
    whatWeAreBuilding:
      "A single follow-up view that lines up a patient's wound photographs, wound assessments, lab results, and visit history, so changes between visits are easy to see. It builds on the lab's earlier work detecting and staging ulcers from photographs.",
    howUsersTest: null,
    designedTo: [
      "Show wound photographs from successive visits side by side",
      "Bring assessments, lab results, and visit history into the same view",
      "Shorten the time it takes to see what has changed since the last visit",
    ],
    measured: [],
    screenshot: null,
    figures: [
      {
        src: "/carousoul/DFU_Classificatio.png",
        alt: "Diabetic foot ulcer images with segmented wound regions and Wagner grade labels",
        caption: "Research figure: wound segmentation and Wagner grade classification.",
      },
      {
        src: "/carousoul/DFU Prognosis.drawio.png",
        alt: "Diagram of a wound tracked across follow-up visits",
        caption: "Research figure: following a wound's progression across visits.",
      },
    ],
    team: ["rauf", "khalid"],
    publications: ["dfu-aiih-2026"],
    demo: null,
  },
  {
    slug: "brain-tumour-mri",
    name: "Brain Tumour MRI Analysis",
    question:
      "For patients with glioma, can MRI scans give neuro-oncologists a clearer, quantified picture of the tumour to help plan treatment?",
    summary:
      "With the Centre of Oncological Research in Surgery at Aga Khan University, we are building models that outline tumour regions on brain MRI and extract imaging measures that may relate to outcomes after treatment.",
    stage: "In development",
    stageConfirmed: false,
    collaboration: "aku",
    whoFacesIt:
      "Neuro-oncologists and neurosurgeons at Aga Khan University Hospital planning treatment for patients with glioma.",
    howHandledToday: null,
    whatWeAreBuilding:
      "Models that outline tumour, oedema, and necrotic tissue on structural MRI, and a pipeline that extracts imaging features (radiomics) from those regions.",
    howUsersTest: null,
    designedTo: [
      "Outline tumour, oedema, and necrotic regions on MRI automatically",
      "Give clinicians quantified imaging measures to weigh alongside their own assessment",
    ],
    measured: [],
    screenshot: null,
    figures: [
      {
        src: "/carousoul/Brain_cancer.jpeg",
        alt: "Brain MRI slices with tumour, oedema, and necrotic regions outlined",
        caption: "Research figure: segmentation of tumour, oedema, and necrotic tissue.",
      },
    ],
    team: ["rauf"],
    publications: [],
    demo: null,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
