export interface NewsItem {
  date: string; // e.g. "Feb 2026"
  content: string; // supports HTML
}

// Add new news items at the top of this array
export const news: NewsItem[] = [
  {
    date: "Feb 2026",
    content: "One paper accepted to <strong>ICRA 2026</strong>!",
  },
  {
    date: "Aug 2025",
    content: "One paper accepted to <strong>CoRL 2025</strong>!",
  },
  {
    date: "Jun 2025",
    content:
      "Started as a <strong>Student Researcher at Google DeepMind</strong> for Summer/Fall 2025.",
  },
  {
    date: "Mar 2025",
    content:
      "Passed my PhD qualification exam and was promoted to <strong>PhD Candidate</strong>!",
  },
  {
    date: "Sep 2024",
    content: "One paper accepted to <strong>CoRL 2024</strong>!",
  },
  {
    date: "Aug 2023",
    content: "One paper accepted to <strong>CoRL 2023</strong>!",
  },
  {
    date: "May 2023",
    content:
      "Received the <strong>Computer Science Best Research Award</strong> from the USC Viterbi School of Engineering!",
  },
  {
    date: "Feb 2023",
    content:
      "Will join <strong>Amazon Robotics</strong> as an Applied Scientist Intern for Summer 2023.",
  },
  {
    date: "Jul 2022",
    content:
      "Our deformable object manipulation paper is accepted to <strong>RA-L</strong> and <strong>IROS 2022</strong>!",
  },
  {
    date: "May 2022",
    content: "One paper accepted to <strong>ICRA 2022 Workshop</strong>.",
  },
  {
    date: "Nov 2021",
    content: "One paper accepted to <strong>CoRL 2021</strong>!",
  },
];
