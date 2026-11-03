// Publications, sorted onto the page by WHERE THE RESEARCH WAS CARRIED OUT,
// not by publication date:
//   carriedOut: "lab"   – research done at the Medical AI Lab
//   carriedOut: "prior" – earlier work by people who are now lab members
//
// Authors are listed in the original order, exactly as published. Give an
// author a `member` slug (from people.ts) to highlight them and link their
// profile. `affiliations` holds the numbers that point into the paper's
// affiliation list.
//
// `verified: false` marks entries copied from the old site that still need
// checking against the actual paper (full author list, venue, year, DOI).

export interface Author {
  name: string;
  affiliations?: number[];
  member?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: Author[];
  /** False when the author list is incomplete ("et al."). */
  authorsComplete: boolean;
  affiliations?: string[];
  venue: string;
  year: number;
  status?: "Accepted" | "In press" | "Preprint";
  carriedOut: "lab" | "prior";
  topic: string;
  doi: string | null;
  project?: string;
  verified: boolean;
}

const rauf: Author = { name: "Rauf Ahmed Shams Malick", member: "rauf" };
const sumra: Author = { name: "Sumra Khan", member: "sumra" };

function prior(id: string, title: string, venue: string, year: number, topic: string): Publication {
  return {
    id,
    title,
    authors: [rauf],
    authorsComplete: false,
    venue,
    year,
    carriedOut: "prior",
    topic,
    doi: null,
    verified: false,
  };
}

export const publications: Publication[] = [
  {
    id: "dfu-aiih-2026",
    title: "A Deep Learning Pipeline for Diabetic Foot Ulcer Detection and Stage Classification",
    authors: [
      { name: "Rauf Ahmed Shams Mallick", affiliations: [1], member: "rauf" },
      { name: "Khalid Khurshid Siddiqui", affiliations: [1], member: "khalid" },
      { name: "Muhammad Khurshid Siddiqui", affiliations: [2] },
      { name: "Abdul Basit", affiliations: [3] },
    ],
    authorsComplete: true,
    affiliations: [
      "GUTECH, Pakistan",
      "Dow University of Health Sciences (DUHS), Pakistan",
      "Indus Diabetes and Endocrinology Center (IDEC), Pakistan",
    ],
    venue:
      "Artificial Intelligence in Healthcare (AIiH 2026, Imperial College London), Lecture Notes in Computer Science, Springer",
    year: 2026,
    status: "Accepted",
    carriedOut: "lab",
    topic: "Diabetic foot ulcers",
    doi: "10.1007/978-3-032-35393-1_13",
    project: "dfu-care",
    verified: true,
  },

  // Sumra Khan: healthcare and medical imaging papers, checked against
  // arXiv, IEEE Xplore, Springer, and Elsevier listings (Nov 2026).
  {
    id: "vlm-medical-reasoning-2026",
    title:
      "Towards Responsible Multimodal Medical Reasoning via Context-Aligned Vision-Language Models",
    authors: [
      sumra,
      { name: "Sagar Chhabriya" },
      { name: "Aizan Zafar" },
      { name: "Sheeraz Arif" },
      { name: "Amgad Muneer" },
      { name: "Anas Zafar" },
      { name: "Shaina Raza" },
      { name: "Rizwan Qureshi" },
    ],
    authorsComplete: true,
    venue: "arXiv:2604.08815",
    year: 2026,
    status: "Preprint",
    carriedOut: "prior",
    topic: "Medical imaging",
    doi: "10.48550/arXiv.2604.08815",
    verified: true,
  },
  {
    id: "asd-rsfmri-2026",
    title:
      "Beyond Anatomy: Explainable ASD Classification from rs-fMRI via Functional Parcellation and Graph Attention Networks",
    authors: [
      { name: "Syeda Hareem Madani" },
      { name: "Noureen Bibi" },
      { name: "Adam Rafiq Jeraj" },
      sumra,
      { name: "Anas Zafar" },
      { name: "Rizwan Qureshi" },
    ],
    authorsComplete: true,
    venue: "arXiv:2603.02518",
    year: 2026,
    status: "Preprint",
    carriedOut: "prior",
    topic: "Medical imaging",
    doi: "10.48550/arXiv.2603.02518",
    verified: true,
  },
  {
    id: "breast-vgg-inmic-2024",
    title:
      "Comparative Study of Transfer Learning with VGG16 and VGG19 for Breast Cancer Classification",
    authors: [
      sumra,
      { name: "Fatima Tuz Zahra" },
      { name: "Amber Asif" },
      { name: "Sheeraz Arif" },
      { name: "Uzma Fatima" },
    ],
    authorsComplete: true,
    venue: "2024 26th International Multi-Topic Conference (INMIC), IEEE",
    year: 2024,
    carriedOut: "prior",
    topic: "Medical imaging",
    doi: null,
    verified: true,
  },
  {
    id: "osmi-dataset-2024",
    title:
      "Survey dataset on mental health in tech professionals from open sourcing mental health surveys (2017–2021)",
    authors: [
      { name: "Faran Rasheed" },
      sumra,
      { name: "Syed Muhammad Waqas" },
      { name: "Rizwan Ahmed Khan" },
      { name: "Sheeraz Arif" },
    ],
    authorsComplete: true,
    venue: "Data in Brief 54, 110377",
    year: 2024,
    carriedOut: "prior",
    topic: "Mental health",
    doi: "10.1016/j.dib.2024.110377",
    verified: true,
  },
  {
    id: "fuzzy-dbc-scdm-2022",
    title: "Fuzzy Density-Based Clustering for Medical Diagnosis",
    authors: [
      { name: "S. M. Waqas" },
      { name: "K. Hussain" },
      { name: "S. A. Mostafa" },
      { name: "N. M. Nawi" },
      { name: "S. Khan", member: "sumra" },
    ],
    authorsComplete: true,
    venue:
      "Recent Advances in Soft Computing and Data Mining (SCDM 2022), Lecture Notes in Networks and Systems 457, Springer, pp. 264–271",
    year: 2022,
    carriedOut: "prior",
    topic: "Medical diagnosis",
    doi: "10.1007/978-3-031-00828-3_26",
    verified: true,
  },

  prior(
    "drpo-2024",
    "DRPO: A Drug Repositioning Approach Based on Disease Module for Cancer Treatment",
    "Alexandria Engineering Journal",
    2024,
    "Cancer drug response",
  ),
  prior(
    "cancer-mf-2024",
    "Matrix Factorization-Based Drug Response Prediction in Cancer Cell Lines",
    "Computers in Biology and Medicine",
    2024,
    "Cancer drug response",
  ),
  prior(
    "cancer-ensemble-2024",
    "Ensemble Deep Learning for Antineoplastic Drug Sensitivity Prediction",
    "IEEE/ACM Transactions on Computational Biology and Bioinformatics",
    2024,
    "Cancer drug response",
  ),
  prior(
    "cancer-review-2023",
    "Deep Learning Approaches for Cancer Drug Response Prediction: A Comprehensive Review",
    "Briefings in Bioinformatics",
    2023,
    "Cancer drug response",
  ),
  prior(
    "lstm-glucose-2024",
    "LSTM-Based Blood Glucose Forecasting for Diabetes Management",
    "Journal of Biomedical Informatics",
    2024,
    "Diabetes",
  ),
  prior(
    "dbkb-2024",
    "DbKB: A Diabetes Knowledge Base for Explainable AI in Healthcare",
    "Data in Brief",
    2024,
    "Diabetes",
  ),
  prior(
    "brain-mri-2024",
    "Deep Learning-Based Brain Tumor Segmentation and Classification Using Multi-Modal MRI",
    "Neurocomputing",
    2024,
    "Medical imaging",
  ),
  prior(
    "dfu-cnn-2024",
    "Automated Detection of Diabetic Foot Ulcers Using Convolutional Neural Networks",
    "Computers in Biology and Medicine",
    2024,
    "Medical imaging",
  ),
  prior(
    "cxr-tl-2023",
    "Chest X-Ray Abnormality Detection Using Transfer Learning",
    "IEEE Access",
    2023,
    "Medical imaging",
  ),
  prior(
    "wban-2024",
    "Wireless Body Area Networks for Remote Health Monitoring: An AI Perspective",
    "IEEE Internet of Things Journal",
    2024,
    "Medical IoT",
  ),
  prior(
    "iot-cgm-2023",
    "IoT-Enabled Continuous Glucose Monitoring with Predictive Alerts",
    "Sensors (MDPI)",
    2023,
    "Medical IoT",
  ),
  prior(
    "ppi-genes-2024",
    "Disease Gene Discovery in PPI Networks Using Centrality and Community Detection",
    "BMC Bioinformatics",
    2024,
    "Bioinformatics",
  ),
  prior(
    "kg-chronic-2024",
    "Knowledge Graph Construction for Chronic Disease Research",
    "Database: The Journal of Biological Databases and Curation",
    2024,
    "Bioinformatics",
  ),
  prior(
    "neupd-2024",
    "NeuPD: A Novel Approach for Neurological Disorder Diagnosis Using Deep Learning",
    "Diagnostics (MDPI)",
    2024,
    "Bioinformatics",
  ),
  prior(
    "xai-gene-2023",
    "Explainable AI for Gene-Disease Association Prediction",
    "Frontiers in Genetics",
    2023,
    "Bioinformatics",
  ),
  prior(
    "covid-twitter-2024",
    "COVID-19 Twitter Sentiment Classification using Hybrid Deep Learning Model",
    "IEEE Access",
    2024,
    "COVID-19",
  ),
  prior(
    "covid-cxr-2023",
    "COVID-19 Detection from Chest X-Rays Using Deep Learning: A Multi-Center Study",
    "IEEE Reviews in Biomedical Engineering",
    2023,
    "COVID-19",
  ),
  prior(
    "mental-health-2024",
    "AI-Driven Mental Health Assessment Using Social Media Linguistic Analysis",
    "JMIR Mental Health",
    2024,
    "Mental health",
  ),
];

const byYearDesc = (a: Publication, b: Publication) => b.year - a.year;

export const labPublications = publications.filter((p) => p.carriedOut === "lab").sort(byYearDesc);
export const priorPublications = publications
  .filter((p) => p.carriedOut === "prior")
  .sort(byYearDesc);

export const getPublication = (id: string) => publications.find((p) => p.id === id);
