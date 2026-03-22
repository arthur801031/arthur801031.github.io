export interface Mentee {
  name: string;
  note?: string; // e.g. "CoRL 2024 publication"
}

export interface TeachingEntry {
  course: string;
  semester: string;
}

export const mentees: Mentee[] = [
  { name: "Jason Chen", note: "CoRL 2025, ICRA 2026, Current" },
  { name: "Sicheng He (USC → PhD at UC Irvine)", note: "CoRL 2024" },
  { name: "Hanwen Fan", note: "Current" },
  { name: "QJ Tsway", note: "Current" },
];

export const reviewerRoles: string[] = [
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
