export interface Mentee {
  name: string;
  note?: string; // e.g. "CoRL 2024 publication"
}

export interface TeachingEntry {
  course: string;
  semester: string;
}

export interface TalkEntry {
  year: string;
  items: string[];
}

export const mentees: Mentee[] = [
  { name: "Jason Chen", note: "CoRL 2025, ICRA 2026, IROS 2026, Current" },
  { name: "Sicheng He (USC → PhD at UC Irvine)", note: "CoRL 2024" },
  { name: "Hanwen Fan (USC → PhD at Iowa State University)", note: "Current" },
  { name: "QJ Tsway", note: "Current" },
];

export const reviewerRoles: string[] = [
  "NeurIPS 2026",
  "CoRL 2022–2025",
  "WAFR 2024",
  "ICRA 2025–2026",
  "IROS 2026",
];

export const teaching: TeachingEntry[] = [
  {
    course: "CSCI 572: Information Retrieval and Web Search Engines",
    semester: "Spring 2025",
  },
  {
    course: "CSCI 545: Introduction to Robotics",
    semester: "Fall 2024",
  },
];

export const talks: TalkEntry[] = [
  {
    year: "2026",
    items: [
      "ICLR Expo Talk with the Robot Vision Team from Google DeepMind: invited talk on CLAMP (Apr.)",
      "Google DeepMind: research presentation on CLAMP (Mar.)",
      "USC PhD Thesis Proposal: “3D Representations for Sample‑Efficient Robotic Bimanual Manipulation” (Feb.)",
    ],
  },
  {
    year: "2025",
    items: [
      "Google DeepMind: research presentation on D‑CODA (Jul.)",
      "USC PhD Qualifying Exam: “VoxAct‑B: Voxel‑Based Acting and Stabilizing Policy for Bimanual Manipulation” (Mar.)",
    ],
  },
];
