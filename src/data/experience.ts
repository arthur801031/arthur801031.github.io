export interface Experience {
  role: string;
  organization: string;
  location: string;
  period: string;
  description?: string;
  logo?: string; // optional logo path
}

export const experiences: Experience[] = [
  {
    role: "Student Researcher",
    organization: "Google DeepMind",
    location: "Mountain View, CA",
    period: "Jun 2025 – Dec 2025",
    description:
      "<a href=\"https://arxiv.org/abs/2602.00937\" target=\"_blank\" rel=\"noopener\">Developed 3D pre‑training framework for robotic manipulation.</a>",
  },
  {
    role: "PhD Researcher",
    organization: "USC Robotic Embedded Systems Laboratory (RESL)",
    location: "Los Angeles, CA",
    period: "Aug 2023 – Present",
    description:
      "See Publications for details.",
  },
  {
    role: "Applied Scientist Intern",
    organization: "Amazon Robotics",
    location: "North Reading, MA",
    period: "May 2023 – Aug 2023",
    description: "Conducted research on targeted bin picking.",
  },
  {
    role: "Research Assistant",
    organization: "USC RESL",
    location: "Los Angeles, CA",
    period: "Jan 2021 – May 2023",
    description:
      "Published three first-author papers on robot manipulation, imitation learning, and reinforcement learning.",
  },
  {
    role: "Research Assistant",
    organization: "Academia Sinica",
    location: "Taipei, Taiwan",
    period: "Jan 2019 – Dec 2020",
    description:
      "Researched computer vision topics including object detection and instance segmentation.",
  },
];
